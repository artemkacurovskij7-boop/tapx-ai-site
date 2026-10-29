# Матрица устройств и фич

**Дата:** 30.10.2026. Реальные устройства не использовались — это эмуляция/десктопные браузеры. Не выдавать за физические прогоны.

| Устройство / среда | Как проверено | Результат | Ограничение |
|---|---|---|---|
| Android Chrome (эмуляция 390×844) | Playwright Chromium, Lighthouse mobile | LCP 1.2 s, TBT 110 ms, CLS 0, 554 KiB; no overflow | не физический Android |
| iPhone Safari (эмуляция WebKit) | Playwright WebKit 27.2, 390×844 | TGS Lottie live, прозрачность ок; вёрстка без overflow | не iPhone Safari, движки отличаются |
| Firefox desktop | Playwright Firefox | TGS Lottie live, прозрачность ок | нет мобильного Firefox |
| Chrome desktop 1440/1280/1024 | Playwright + скриншоты | вёрстка ок, кейс full-bleed, фильтры, меню | — |
| Chrome 768 (планшет) | Playwright | сетка 2×2, без overflow | — |
| Chrome 360 | Playwright | без overflow, dock, фильтры | — |
| Telegram in-app browser | не проверялся | — | нужен реальный Telegram |
| Без JS | Chromium `javaScriptEnabled:false` | hero, контакты, noscript-список, 404 | нет интерактива |
| Reduced motion | Chromium `reducedMotion:'reduce'` | нет Lottie/видео, тикер static | — |
| Save-Data / 2G | код-путь stickers.js | Lottie не грузится, WebP | не эмулировалось отдельно |
| CSP | локальный сервер с реальной CSP | 0 нарушений на `/` и `/globe/` | не Netlify-деплой |
| TGS Chromium | Playwright | Lottie SVG, still opacity 0 | — |
| TGS Firefox | Playwright | Lottie SVG, still opacity 0 | — |
| TGS WebKit | Playwright | Lottie SVG, still opacity 0 | — |
| VoiceOver / NVDA | не проверялось | — | axe ≠ скринридер |
| Реальный Netlify | не деплоилось | — | заголовки проверены локально |

## Фичи

| Фича | Desktop | Mobile | Fallback |
|---|---|---|---|
| Chrome-видео X | да, 206 КБ | нет | статичный X + градиент |
| Canvas-звёзды | да | нет | звёзды в WebP |
| Aurora | 3 blob | 1 blob без blur | reduced motion — стоп |
| TGS Lottie | до 4 | до 3 | WebP |
| 3D-наклон карточек | hover | нет | статично |
| Кейс | full-bleed | full-bleed 4:3 | — |
| Orbit Globe | `/globe/` | `/globe/`, scale 6.4 | noscript-ссылка |
| JSON-LD | да | да | — |
| 404 | да | да | — |
