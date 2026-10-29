# Отчёт: что сделано и проверено

**Дата:** 30.10.2026  
**Версия:** v2 — emerald/gold, живой фон, новый глаз, Orbital Globe, 8 проектов.

---

## 1. Что изменилось после первой версии

- Полная смена палитры: сине-фиолетовый → **emerald/teal + gold + coral**.
- Новый фон: реальная **туманность Carina NASA** в новой палитре + CSS Aurora; Canvas-звёзды только на desktop.
- Новый «глаз» в контактах: **туманность Helix NASA** внутри стеклянной сферы; зрачок следит за курсором.
- 8-й проект — **Orbital Globe**: React + Three.js + Originkit, отдельная страница `/globe/`.
- Полноэкранный кейс: обложка 21:9, заголовок поверх, даты обновления/проверки, мини-обложка следующего кейса.
- Даты `updated`/`linkChecked` у всех проектов; вывод на карточке и в кейсе.
- 3 variable/subset WOFF2 вместо 6 статических; суммарно **135 КБ**.
- Hero-видео удалено; осталась только chrome-петля для X на desktop.
- Lottie полностью отложен до первого взаимодействия; TGS max 3 на mobile / 4 на desktop.
- Mobile: 1 aurora вместо 3, без blur-фильтра, без starfield, без beam/blink-анимаций, горизонтальные фильтры, крупные подписи.
- Все тексты ≥12 px; 404; JSON-LD + CSP hash; `object-src 'none'`.
- OG-изображение переснято под новую палитру.

---

## 2. Lighthouse mobile (финальный прогон)

**390×844, Slow 4G, CPU x4, Chrome headless**  
Файлы: `reports/lighthouse-mobile.report.json`, `.report.html`.

| Метрика | Результат | Бюджет |
|---|---:|---:|
| Performance | **1.00** | — |
| Accessibility | **1.00** | — |
| Best Practices | **1.00** | — |
| SEO | **1.00** | — |
| FCP | **1.1 s** | — |
| LCP | **1.1 s** | ≤2.5 s |
| TBT | **90 ms** | ≤200 ms |
| CLS | **0** | ≤0.1 |
| Speed Index | **1.9 s** | — |
| Total transfer | **553 KiB** | первый экран ≤600 КБ |
| Requests | 23 | — |
| Fonts | **3** | ≤3 |
| Media | **0** | без видео на mobile |
| Third-party | **0** | 0 |

Ресурсы: image 344 КБ, font 137 КБ, JS 24 КБ, CSS 19 КБ, HTML 9 КБ, прочее 34 КБ. Lottie на первом экране — **0 КБ**.

---

## 3. Доступность

- **axe-core** WCAG 2.0/2.1 A/AA: **0 violations** в трёх прогонах (desktop, desktop + открытый кейс, mobile). Passes: 26 / 17 / 27.
- `incomplete`: `color-contrast` (автотест не может проверить текст на анимированном/градиентном фоне) и `aria-prohibited-attr`; вручную проверены ключевые пары: hero, карточки, кейс, контакты.
- Все интерактивные элементы имеют видимый фокус, `aria-pressed`, `aria-expanded`, подписи.
- `<dialog>` с нативным focus trap; Escape закрывает.
- Все тексты ≥12 px (проверено DOM-скриптом: 0 нарушений на 1440 и 390).
- Reduced motion: Lottie/видео/тикер/орбиты/наклон остановлены.

---

## 4. HTML, CSP, ссылки

- `html-validate` для `index.html` и `404.html`: **exit 0, 0 ошибок** (`reports/html-validate.txt`).
- CSP: `default-src 'self'`; `script-src 'self'` + SHA-256 для JSON-LD; `style-src 'self'`; `object-src 'none'`; `frame-ancestors 'none'`.
- Основной сайт и `/globe/` открыты локальным сервером с реальной CSP: **0 нарушений** в консоли.
- Внешних CDN/шрифтов/скриптов нет.
- 14 внешних ссылок проверены `curl -L`: **все 200** (`reports/external-links.txt`).
- Заголовки: `reports/headers.txt`.

---

## 5. E2E и устройства

`reports/e2e.json`: **28/28 passed**.

Проверено:
- 8 карточек, счётчик 08;
- фильтр Telegram-боты → только Telegram; сброс → 8;
- кейс из карточки, даты, ссылка на бота; Escape;
- deep link `#case-orbital-globe`, CTA `globe/`, следующий кейс;
- mobile: горизонтальные фильтры, dock, 0 горизонтального скролла;
- reduced motion: класс, нет Lottie, тикер static, нет видео;
- без JS: hero, контакты, noscript-список, 404;
- min font 12: 0 нарушений.

Ширины: 1440 / 1280 / 1024 / 768 / 390 / 360 — визуально и по `scrollWidth`; 390 и 768 без переполнения.  
Скриншоты: `reports/screens/` (home/projects 390/768/1280, case 1280/390, about, contact, globe, 404).

**Не проверено:** реальный iPhone Safari, реальный Android, Telegram in-app browser, VoiceOver/NVDA, Lighthouse на проде. Playwright WebKit — не замена реальному iPhone.

---

## 6. Стикеры

- 13 уникальных TGS, 23 вставки; mapping — `reports/stickers-map.md`, `assets/stickers/manifest.json`.
- Chromium, Firefox, WebKit (Playwright): Lottie SVG live, `.tgs-still` opacity 0, прозрачность без чёрного квадрата. Скриншоты: `reports/screens/tgs-*`.
- Lottie 0 до взаимодействия; после скролла к проектам загрузился `lottie_light.min.js` и 1 видимый TGS (`reports/lottie-after-scroll.json`).
- Максимум: 3 на mobile, 4 на desktop.
- Fallback WebP при reduced motion / saveData / отсутствии `DecompressionStream`.

---

## 7. Globe

- `/globe/`: React/Three.js, 656 КБ JS (gzip 179 КБ) + 237 КБ `land.json`; вынесен из главного бандла.
- CSP: 0 ошибок; внешний fetch заменён на локальный `land.json`.
- Desktop и mobile (390) отрисовываются; на mobile scale 6.4, глобус вписан.
- API-ключ Originkit в файлах отсутствует.

---

## 8. D1–D12

- **D1:** mapping-файл + таблица; алиасы с реальными файлами пака.
- **D2:** везде `lottie_light.min.js`, лицензия рядом.
- **D3:** видео помечено «со слов владельца»; hero-видео удалено.
- **D4:** LinkCut подтверждён публичным постом/видео; статус остаётся in-dev.
- **D5:** `netlify.toml` — только `[build]`; заголовки только в `_headers`.
- **D6:** Lottie отложен; 0 на первом экране.
- **D7:** 12px floor; проверено.
- **D8:** Georgia/Times fallback + DejaVu/Liberation; скриншоты `georgia-fallback-*`.
- **D9/D10:** MEDIA/CREDITS с прямыми ссылками NASA, лицензиями, credit.
- **D11:** один `REPORT.md`; `reports/` — сырые доказательства, не отчёты.
- **D12:** внешних ресурсов с CodePen/CDN нет.

---

## 9. Ограничения и риски

1. Реальный iPhone/Android/Telegram in-app не проверены.
2. Права на TGS-пак и видео — на подтверждении владельца.
3. Статусы ботов не тестировались в диалоге.
4. Домен-заглушка; canonical/OG/JSON-LD нужно обновить при смене.
5. `color-contrast` axe incomplete на градиентах; ручная проверка не заменяет SC 1.4.3 формально.
6. Globe — тяжёлый эксперимент; на слабом мобильном может быть 3D-lag.
7. CSP hash нужно пересчитывать при изменении JSON-LD.
8. Нет реального Netlify-деплоя; заголовки проверены локальным сервером и `_headers`.

---

## 10. Итог

Сайт визуально переработан, стал заметно живее и мобильнее; бюджеты выполнены с запасом по LCP/TBT/CLS и общему весу. Основной риск — неподтверждённые права на сторонние стикеры/видео и отсутствие реальных устройств.

