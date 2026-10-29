# Медиа, шрифты и лицензии

**Дата проверки:** 30.10.2026
**Правило:** если происхождение файла не подтверждено, он либо не используется, либо помечен здесь как «требует подтверждения владельцем».

---

## 1. Космос NASA

Все три изображения скачаны с NASA Image and Video Library, затем **творчески переработаны**: gradient-map в палитру сайта, кадрирование, сжатие в WebP. Это не официальные изображения NASA в исходном виде.

| Файл на сайте | Источник | Автор / credit | Что сделано |
|---|---|---|---|
| `assets/img/sky-desktop.webp` (1920×1200) | [Carina Nebula / Cosmic Cliffs, `carina_nebula`](https://images.nasa.gov/details/carina_nebula) · `carina_nebula~large.jpg` | NASA, ESA, CSA, STScI | gradient-map emerald/gold, кадрирование, WebP q86 |
| `assets/img/sky-mobile.webp` (900×1200) | тот же файл | NASA, ESA, CSA, STScI | кроп 3:4, q80 |
| `assets/media/eye-iris.webp` (900×900) | [Helix Nebula, `PIA15658`](https://images.nasa.gov/details/PIA15658) · `PIA15658~large.jpg` | NASA/JPL-Caltech | кроп центра, gradient-map mint/gold, затемнение краёв, WebP q88 |
| `assets/media/aurora-band.webp` (1200×525) | [Aurora, `iss039e018322`](https://images.nasa.gov/details/iss039e018322) · `iss039e018322~large.jpg` | NASA/JSC, фото Koichi Wakata (ISS Expedition 39) | кроп полосы сияния, WebP q82 |

**Лицензия NASA:** материалы NASA в основном не защищены авторским правом в США; NASA Media Usage Guidelines разрешают использование с credit и без намёка на endorsement. Мы указываем credit и источник. Для повторного использования проверьте актуальные [NASA Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).

**Обработка:** исходники лежат в `_refs/nasa/` только локально и в деплой не входят. Цвет изменён, поэтому сайт не выдаёт их за оригинальные снимки NASA.

---

## 2. Видео и кадры из проектов

| Файл | Что это | Происхождение | Статус |
|---|---|---|---|
| `assets/video/chrome-loop.mp4` (206 КБ) | хром-петля для X в hero | видео владельца проекта, по его словам | **со слов владельца**; независимо не подтверждено |
| `assets/media/chrome-loop-poster.webp` | постер хрома | кадр из того же видео | то же |
| `assets/media/chrome-still.webp` | фон для AI/Motion art | кадр из видео владельца | то же |
| `assets/media/catalog-shot.webp` | скриншот каталога эмодзи | публичный сайт `emoji-tapx.netlify.app` | публичный проект владельца |
| `assets/media/flow-ui.webp` | UI Google Flow | из видео владельца на YouTube | публичное видео, права на UI — у Google |
| `assets/media/linkcut-green.webp`, `linkcut-note.webp` | кадры LinkCut | из публичного видео `youtu.be/68YLI1g1_6U` | публичное видео владельца |
| `assets/media/globe-preview.webp` | скриншот `/globe/` | сделано для этого сайта | собственный скриншот |

Hero-видео удалено в v2: мобильный бюджет и отсутствие подтверждённых прав. Осталась только короткая chrome-петля, и только на desktop.

**Если видео не принадлежат владельцу:** заменить на Pixabay/Pexels с прямой ссылкой на страницу источника или удалить. До публикации это нужно подтвердить.

---

## 3. TGS-стикеры

- Пак: **UtyaDuck** — https://t.me/addstickers/UtyaDuck
- 13 уникальных `.tgs` + 13 WebP-кадров; 23 места использования.
- Соответствие файлов и алиасов — `assets/stickers/manifest.json` и `reports/stickers-map.md`.
- Рисунки принадлежат авторам пака. Публичное использование в портфолио **не подтверждено лицензией**; владелец проекта сообщил, что стикеры можно использовать. Перед коммерческой публикацией — получить разрешение или заменить на собственные.
- Lottie-библиотека: `js/vendor/lottie_light.min.js`, лицензия MIT, текст — `js/vendor/LICENSE-lottie-web.md`.

---

## 4. Шрифты

| Файл | Шрифт | Лицензия | Размер |
|---|---|---|---|
| `assets/fonts/golos-text-var.woff2` | Golos Text, variable 400–900 | SIL OFL 1.1 | 54 248 Б |
| `assets/fonts/inter-var.woff2` | Inter, variable 400–600 (opsz pinned) | SIL OFL 1.1 | 57 340 Б |
| `assets/fonts/jetbrains-mono-var.woff2` | JetBrains Mono 400 (static instance) | SIL OFL 1.1 | 23 312 Б |
| `assets/fonts/OFL-*.txt` | тексты лицензий | — | — |

Шрифты self-hosted, без Google Fonts/CDN. Сабсет: Latin + Cyrillic + пунктуация; `pyftsubset`; `font-display: swap`. Georgia/Times New Roman — только fallback для курсивных акцентов, если Golos/Inter не загрузились.

---

## 5. Orbit Globe

- Компонент: **Originkit Globe**, скачан через Originkit CLI в `globe-src/src/components/originkit/ui/globe.tsx`. Использование регулируется условиями Originkit и доступом владельца; исходник приложен для воспроизводимости.
- Данные суши: **Natural Earth 110m** (`globe/public/land.json`, 237 КБ), public domain — https://www.naturalearthdata.com/
- Стек: React, Three.js, d3-geo, Vite, Tailwind. Лицензии — в `globe-src/package-lock.json` и пакетах; все permissive (MIT/ISC/BSD), кроме явно указанных.
- Внешняя загрузка `raw.githubusercontent.com` заменена на локальный `land.json`; внешних запросов нет.
- API-ключ Originkit в исходниках **не хранится**.

---

## 6. Иконки, шрифты интерфейса, прочее

- SVG-иконки (Telegram, YouTube, TikTok, mail, grid, user, arrows, close, play, copy) — нарисованы для проекта, без внешних наборов.
- Шум/grain — inline SVG data URI, сгенерирован.
- OG-изображение `assets/img/og-image.jpg` — собственная композиция из NASA Carina + Helix + стикера; credit NASA в футере сайта.
- Никаких шрифтов, скриптов, стилей и картинок с CDN/CodePen/внешних доменов на основном сайте нет.

---

## 7. Что требует подтверждения владельцем

1. Права на TGS-пак UtyaDuck для публичного портфолио.
2. Права на исходные видео (chrome-loop, LinkCut, Flow, каталог).
3. Домен `tapx-ai.netlify.app` — заменить на реальный.
4. Разрешение на упоминание Google Flow / Telegram / других сервисов — сейчас только фактические ссылки, без логотипов-партнёрств.
5. Если сайт станет коммерческим — проверить условия Originkit и NASA для конкретного использования.


