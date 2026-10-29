# TapX AI — Cosmic Digital Lab (v2)
**Репозиторий:** [artemkacurovskij7-boop/tapx-ai-site](https://github.com/artemkacurovskij7-boop/tapx-ai-site) · **Live preview:** [GitHub Pages](https://artemkacurovskij7-boop.github.io/tapx-ai-site/)


Личный сайт-портфолио Артёма: Telegram-боты, AI-ассистенты, сайты, Mini Apps и эксперименты.
Основной сайт — статический (HTML/CSS/JS), без сборки. Рядом лежит отдельный React-эксперимент **Orbital Globe** на Three.js.

**Палитра v2:** глубокий зелёно-чёрный, мята, золото, коралл. Фон — реальная туманность NASA Carina, перекрашенная в эту палитру + живая Aurora-анимация. Глаз в контактах — туманность Helix NASA внутри стеклянной сферы.

---

## Быстрый старт

```bash
cd tapx-site
python -m http.server 8000
# http://localhost:8000
```

Открывайте через локальный сервер, а не `file://`: TGS-стикеры используют `fetch` + `DecompressionStream`, а Orbit Globe — модульный JS и `fetch('land.json')`.

---

## Структура

```
tapx-site/
├── index.html                 основная страница (8 проектов, кейсы, about, контакты)
├── 404.html                   стилизованная 404
├── css/styles.css             дизайн-система, адаптив, 12px floor, reduced motion
├── css/404.css
├── js/
│   ├── data/site.js           ссылки, chrome-видео, категории, статусы
│   ├── data/projects.js       8 проектов, даты обновления/проверки
│   ├── app.js                 карточки, фильтры, кейсы, навигация
│   ├── starfield.js           звёзды на Canvas 2D (только desktop)
│   ├── tilt.js                3D-наклон карточек
│   ├── stickers.js            TGS → Lottie, deferred activation, максимум 4
│   └── vendor/lottie_light.min.js + лицензия
├── globe/                     собранный Orbit Globe (React/Three.js)
├── globe-src/                 исходник Globe (Vite + React + TS + Tailwind)
├── assets/
│   ├── fonts/                 3 variable WOFF2: Golos Text, Inter, JetBrains Mono
│   ├── img/                   небо, favicon, OG, иконки
│   ├── media/                 реальные кадры, eye-iris, aurora
│   ├── stickers/              13 .tgs + .webp + manifest.json
│   └── video/chrome-loop.mp4   хром для X (206 КБ)
├── reports/                   Lighthouse, axe, HTML, e2e, стикеры, скриншоты
├── netlify.toml               только [build] publish="."
├── _headers                   единственный источник заголовков + CSP
├── site.webmanifest, robots.txt, sitemap.xml
├── README.md, ARCHITECTURE.md, CONCEPT.md, MEDIA.md, CREDITS.md, REPORT.md
```

---

## Проекты

1. AI-секретарь — Telegram, live.
2. LinkCut — Telegram, in development (публичный пост и видео).
3. Emoji Bot Converter — эксперимент.
4. Каталог премиум-эмодзи — сайт, live.
5. Бот модерации — in development, только план.
6. YouTube-превью через Google Flow — эксперимент.
7. Motion-графика кодом — эксперимент.
8. Orbital Globe — WebGL-эксперимент, отдельная страница `globe/`.

Все статусы честные. Даты `updated` / `linkChecked` лежат в `projects.js` и выводятся на карточке и в кейсе.

### Добавить проект

Откройте `js/data/projects.js`, скопируйте объект, заполните поля. Схема — в комментарии в начале файла. Раскладка карточки задаётся в `LAYOUTS` в `js/app.js` (`is-wide` 7, `is-tall` 5, `is-third` 4, `is-half` 6). Новый `art`-тип добавляется в `ART` и CSS `.art-…`.

### Orbital Globe

```bash
cd globe-src
npm install
npm run build      # собирает в ../globe
npm run dev        # локальная разработка
```

Компонент: `globe-src/src/components/originkit/ui/globe.tsx` (Originkit, добавлен через CLI). В нём изменена только строка загрузки суши: внешний GitHub URL заменён на локальный `land.json` (Natural Earth 110m, public domain). `globe/` — готовый статический билд; React/Three не грузятся на основном сайте.

---

## TGS-стикеры

В `assets/stickers/` 13 стикеров пака **UtyaDuck**: `.tgs` (gzip-Lottie) + `.webp` fallback. Соответствие «файл пака → эмодзи → имя на сайте → где используется» — в `reports/stickers-map.md` и `assets/stickers/manifest.json`.

- Lottie-библиотека **не грузится на первом экране**: активируется после первого скролла/касания/клавиши.
- На mobile одновременно играют максимум **3** стикера, на desktop — 4.
- При reduced motion, отсутствии `DecompressionStream` или saveData остаётся статичный WebP.
- Права на рисунки — у авторов пака, см. `MEDIA.md`.

---

## Фон, шрифты, видео

- **Фон:** `sky-desktop.webp` / `sky-mobile.webp` — Carina Nebula (NASA/ESA/CSA/STScI), gradient-map в emerald/gold; сверху CSS Aurora (1 blob на mobile, 3 на desktop) и Canvas-звёзды только на desktop.
- **Глаз:** `assets/media/eye-iris.webp` — Helix Nebula (NASA/JPL-Caltech), gradient-map; стеклянная сфера, зрачок следит за курсором.
- **Шрифты:** Golos Text (54 КБ), Inter 400–600 (57 КБ), JetBrains Mono (23 КБ) — variable/subset WOFF2, SIL OFL. Общий вес 134 КБ, ровно 3 файла.
- **Видео:** только `chrome-loop.mp4` (206 КБ) для X, и только на desktop. Hero-видео удалено ради мобильного бюджета.

---

## Деплой на Netlify

1. Загрузите содержимое папки в Netlify (**Deploy manually**) или в GitHub-репозиторий и импортируйте.
2. Build command — пустая, publish directory — `.`.
3. `_headers` применяется автоматически. `netlify.toml` содержит только `[build]`.
4. Проверьте заголовки после первого деплоя (`reports/headers.txt` — локальный снимок).
5. Замените `https://tapx-ai.netlify.app/` в `index.html`, `robots.txt`, `sitemap.xml`, если имя другое.

---

## Проверки (актуальные)

- **Lighthouse mobile** (390×844, Slow 4G, CPU x4): Performance **1.00**, LCP **1.1 s**, TBT **90 ms**, CLS **0**, total **553 KiB**, 3 font files, 0 медиа, Lottie 0 на первом экране.
- **axe-core WCAG 2.0/2.1 A/AA:** 0 нарушений.
- **HTML:** `html-validate` — 0 ошибок.
- **CSP:** основной сайт и `globe/` проверены локальным сервером с реальными заголовками; нарушений нет.
- **Ширины:** 1440 / 1280 / 1024 / 768 / 390 / 360 — без горизонтального скролла.
- **TGS:** Chromium, Firefox, WebKit (Playwright) — прозрачность и Lottie-рендер; fallback WebP.
- **reduced motion:** видео/Lottie/наклон/марки остановлены; статичные кадры.
- **без JS:** hero, контакты, noscript-список, 404 читаются.
- **внешние ссылки:** Telegram, support, YouTube, TikTok, каталог, видео — HTTP 200 (29.10.2026).

**Не проверено:** реальный iPhone/Safari, реальный Android, Telegram in-app browser, экранный диктор, Lighthouse на проде. WebKit Playwright — не то же самое, что iPhone Safari. Реальные устройства требуют отдельного прогона.

---

## Ограничения

- Нет backend/форм/БД — осознанно.
- Статусы ботов не тестировались в диалоге.
- Права на TGS-пак и исходные видео подтверждает владелец.
- Домен `tapx-ai.netlify.app` — заглушка.
- Orbit Globe — тяжёлый WebGL-эксперимент (656 КБ JS, gzip 179 КБ + land 237 КБ); он специально вынесен из основного сайта.

---

## Контакты

- Telegram: https://t.me/TapX_AI
- Личные: https://t.me/TapX_AI_support
- YouTube: https://www.youtube.com/@TapX_A
- TikTok: https://www.tiktok.com/@tap_x_ai





