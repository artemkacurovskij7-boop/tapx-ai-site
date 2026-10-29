/* ==========================================================================
   TapX AI — настройки сайта.
   Здесь меняются видео, контакты, категории и подписи статусов.
   Проекты лежат отдельно: js/data/projects.js
   ========================================================================== */
window.TAPX_SITE = {
  name: "TapX AI",
  lab: "Cosmic Digital Lab",
  year: 2026,

  /* Официальные ссылки. Других аккаунтов у проекта нет. */
  links: {
    telegram: "https://t.me/TapX_AI",
    support: "https://t.me/TapX_AI_support",
    youtube: "https://www.youtube.com/@TapX_A",
    tiktok: "https://www.tiktok.com/@tap_x_ai"
  },

  /* Жидкий хром для знака X. Короткий квадратный луп, грузится после первого экрана. */
  chrome: {
    sources: [
      { src: "assets/video/chrome-loop.mp4", type: "video/mp4" }
    ],
    poster: "assets/media/chrome-loop-poster.webp"
  },

  contacts: [
    {
      id: "support",
      label: "Написать в Telegram",
      handle: "@TapX_AI_support",
      url: "https://t.me/TapX_AI_support",
      hint: "Идея, проект или вопрос — отвечаю лично.",
      icon: "mail",
      primary: true
    },
    {
      id: "channel",
      label: "Канал TapX AI",
      handle: "@TapX_AI",
      url: "https://t.me/TapX_AI",
      hint: "Процесс, новые проекты и разборы.",
      icon: "telegram"
    },
    {
      id: "youtube",
      label: "YouTube",
      handle: "@TapX_A",
      url: "https://www.youtube.com/@TapX_A",
      hint: "Видео о том, как проекты собираются.",
      icon: "youtube"
    },
    {
      id: "tiktok",
      label: "TikTok",
      handle: "@tap_x_ai",
      url: "https://www.tiktok.com/@tap_x_ai",
      hint: "Короткие ролики и эксперименты.",
      icon: "tiktok"
    }
  ],

  categories: {
    "ai-agents": "AI-агенты",
    "telegram-bot": "Telegram-боты",
    "websites": "Сайты",
    "miniapps": "Mini Apps",
    "experiments": "Эксперименты"
  },

  statuses: {
    live: { ru: "Работает", en: "LIVE", tone: "live" },
    "in-development": { ru: "В разработке", en: "IN DEV", tone: "dev" },
    experiment: { ru: "Эксперимент", en: "EXPERIMENT", tone: "exp" },
    concept: { ru: "Концепция", en: "CONCEPT", tone: "concept" }
  }
};
