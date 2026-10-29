# Архитектура TapX AI — Cosmic Digital Lab

**Версия:** 2.0 · 30.10.2026
**Статус:** готово к публикации на Netlify; Chromium/Firefox/WebKit проверены через Playwright, реальные iPhone/Android/Telegram in-app — нет.

---

## 1. Принцип

Основной сайт — **статический**: HTML, CSS, нативный JS, без сборки и фреймворков. Это даёт нулевой build-риск, простой деплой перетаскиванием папки и маленький первый экран.

Orbital Globe — **отдельный React-остров** на `/globe/`. Он собирается Vite в статический бандл и не попадает в бандл портфолио. Причина: Three.js + d3-geo + React стоят ~656 КБ JS; держать их на главной означало бы нарушить мобильный бюджет.

```
index.html
  ├─ css/styles.css
  ├─ js/data/site.js         конфиг ссылок/видео/категорий
  ├─ js/data/projects.js     8 проектов (данные)
  ├─ js/app.js               рендер и поведение
  ├─ js/starfield.js         canvas-звёзды (desktop only)
  ├─ js/tilt.js              наклон карточек
  └─ js/stickers.js          TGS → Lottie
globe/
  └─ React + Three.js build (отдельный маршрут)
```

---

## 2. Поток главной страницы

1. HTML отдаёт hero, секции, диалог кейса и `<noscript>`-список.
2. CSS рисует небо, aurora, стекло, карточки, адаптив.
3. `site.js` и `projects.js` — обычные данные, без запросов.
4. `app.js` (defer) строит 8 карточек из `PROJECTS`, вешает фильтры, кейсы, меню, орб, часы, reveal, hash-навигацию.
5. `starfield.js` включается только на desktop (`min-width: 761px`) и только при разрешённом движении.
6. `tilt.js` — только на устройствах с hover и без reduced motion.
7. `stickers.js` показывает WebP-кадры сразу, Lottie грузит **после первого взаимодействия** и только в зоне видимости.

Порядок скриптов: данные → декор → поведение. Все внешние ресурсы — свои.

---

## 3. Данные проекта

`js/data/projects.js` — массив объектов:

```js
{
  id, title, slug, category, status, statusNote, statusConfirmed,
  order, updated, linkChecked,
  summary, task, features[], planned[], tech[],
  links[], demoUrl, gallery[], media{}, art, layout, theme
}
```

Статусы: `live`, `in-dev`, `experiment`, `planned`. `planned` не показывается как сделанное. `linkChecked` выводится только если есть `demoUrl` или `links`.

`LAYOUTS` в `app.js` задаёт, какие карточки широкие/высокие/третьи. 8 проектов: 2 + 3 + 3, с auto-flow dense, чтобы не было дыр.

---

## 4. Стикеры (TGS)

`.tgs` — gzip-Lottie. `js/stickers.js`:

1. `prepare()` создаёт `<img class="tgs-still">` (WebP) + `<span class="tgs-live">`.
2. До активации Lottie-библиотека не грузится; на экране WebP.
3. Первый `scroll` / `pointerdown` / `touchstart` / `keydown` вызывает `activate()`.
4. IntersectionObserver грузит `.tgs` только для видимых, максимум 2 параллельных запроса.
5. `DecompressionStream('gzip')` распаковывает, `lottie.loadAnimation({renderer:'svg'})`.
6. `MAX_PLAYING = 4` (mobile 3): одновременно играют только видимые, остальные — статичный кадр.
7. При reduced motion / saveData / отсутствии `DecompressionStream` остаётся WebP.
8. При ошибке — `data-tgs-failed="1"`, повторно не грузим.

**Прозрачность:** Lottie SVG без фона; `mix-blend-mode` к стикерам не применяется. Проверено в Chromium/Firefox/WebKit (Playwright), см. `reports/screens/tgs-*`.

---

## 5. Небо и «живость»

- `<picture>` отдаёт `sky-mobile.webp` до 760 px и `sky-desktop.webp` выше.
- CSS Aurora — три радиальных blob'а; на mobile остаётся один и без blur-фильтра.
- Canvas-звёзды на mobile отключены (звёзды уже в WebP), чтобы убрать длинную задачу и батарею.
- Grain и часть backdrop-filter на mobile отключены; анимации тикера/орбит/beam — статичны.
- Reduced motion: aurora, небо, орбиты, тикер, видео и Lottie остановлены.

---

## 6. Кейс проекта

Один `<dialog id="case-dialog">`; контент заполняется из данных. Открытие: `openCase(id, trigger)` → заполнить заголовок/статус/даты/задачу/фичи/план/теги/кнопки/следующий кейс → `showModal()`.

- Full-bleed обложка 21:9 (mobile 4:3), заголовок поверх с градиентом.
- Даты: «Обновлено …» и «Ссылка проверена …».
- Следующий кейс с мини-обложкой.
- Галерея — только реальные изображения из `media`.
- `#case-id` в hash открывает кейс; закрытие возвращает hash на `#projects`.
- Ссылки `demoUrl`/`links` проверяются `safeHttp()`; относительный `/globe/` разрешён, `javascript:`/`data:` — нет.

---

## 7. Доступность

- Skip-link, landmark-роли, `aria-current`, `aria-expanded` у меню, focus trap нативно у `<dialog>`.
- Все тексты ≥12 px; основной 14–17 px; заголовки clamp.
- Контраст: светлый текст на тёмном; на ярком небе под заголовками — градиент/подложка.
- `prefers-reduced-motion` уважается в CSS и JS.
- Иконки `aria-hidden`, у ссылок есть подписи.
- Без JS: hero, контакты, `<noscript>`-список, 404.

---

## 8. Производительность (mobile)

Бюджет: первый экран ≤600 КБ, Lottie 0 до взаимодействия, видео 0, шрифты ≤3, JS ≤180 КБ, LCP ≤2.5 с, CLS ≤0.1, TBT ≤200 мс.

Факт (Lighthouse 390×844, Slow 4G, CPU x4):
- total **554 KiB**, 0 media, 3 fonts, 0 Lottie
- LCP **1.4 s**, TBT **180 ms**, CLS **0.0004**, Performance **0.97**
- JS первого экрана ~24 КБ (без Lottie)
- TGS: 3 одновременных на mobile + одна aurora = 4 анимации

Ключевые решения: без hero-видео, без starfield на mobile, ленивые WebP вместо CSS-фонов для глаза/aurora/портрета, Inter 400–600 (57 КБ), `fetchpriority=high` на небе, `font-display:swap`.

---

## 9. Безопасность

- CSP в `_headers`: `default-src 'self'`, `script-src 'self'` + SHA-256 для JSON-LD, `object-src 'none'`, `frame-ancestors 'none'`.
- Никаких inline-скриптов, кроме JSON-LD с хешем; inline-стилей нет.
- Внешних CDN/шрифтов/скриптов нет.
- `target="_blank"` — `rel="noopener noreferrer"`.
- Нет форм и приёма пользовательских данных.
- `netlify.toml` не дублирует заголовки; единственный источник — `_headers`.
- API-ключ Originkit не хранится в файлах; компонент скачан один раз, внешняя загрузка данных заменена на локальную.

---

## 10. Деплой

- Netlify: publish `.`, build command пустая; `_headers` и `404.html` подхватываются.
- `globe/` — статический билд; `globe-src/` в деплое не нужен, но оставлен для воспроизводимости.
- Не коммитить `globe-src/node_modules`, `.tmp`, `.originkit`.
- При смене домена обновить canonical/OG/JSON-LD/robots/sitemap.
