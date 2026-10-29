/* ==========================================================================
   Проекты TapX AI.
   Единственный файл, который нужно править, чтобы добавить или обновить работу.

   Поля:
   id             — короткий латинский slug (используется в адресе #case-…)
   title          — название
   titleAlt       — вторая строка названия на обложке (необязательно)
   category       — ключ из site.categories
   status         — live | in-development | experiment | concept
   statusConfirmed— true, если статус подтверждён; false добавит «уточняется»
   statusNote     — пояснение к статусу
   order          — порядок, меньше = выше
   summary        — короткое описание для карточки
   task           — задача и идея для кейса
   features       — только то, что подтверждено
   plannedFeatures— план, выводится отдельным блоком «В планах»
   tech           — только известные технологии
   demoUrl        — ссылка на работающий продукт, если есть
   links          — внешние ссылки (видео, посты)
   media.cover    — честный визуал для кейса (скриншот или кадр)
   media.gallery  — дополнительные материалы
   sticker        — имя TGS-стикера из assets/stickers
   art            — тип обложки карточки: ai | linkcut | emoji | catalog | moderation | youtube | motion
   theme          — цветовой акцент: cyan | violet | amber | light | red | chrome | blue
   ========================================================================== */
window.TAPX_PROJECTS = [
  {
    id: "ai-secretary",
    title: "AI-секретарь",
    titleAlt: "TapX AI SECRETAR",
    category: "ai-agents",
    status: "live",
    statusConfirmed: true,
    statusNote: "Публичная страница бота открывается. Сценарии и лимиты могут меняться — проверяйте в Telegram.",
    order: 1,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "ИИ-помощник в Telegram: общается, слушает голосовые и настраивается под тебя.",
    task: "Бесплатный ИИ-секретарь, которого можно настроить под себя: как он общается, что отвечает и как помогает. Внутри — генерация персонального конфига и гайд, который помогает подключить всё с нуля.",
    features: [
      "Общение в Telegram",
      "Обработка голосовых сообщений",
      "Настройка стиля и поведения",
      "Генерация персонального конфига",
      "Гайд по подключению внутри бота"
    ],
    plannedFeatures: [],
    tech: ["Telegram Bot API", "AI-модели через API"],
    demoUrl: "https://t.me/TapXAI_secretar_robot",
    ctaLabel: "Открыть бота",
    links: [
      { label: "Видео о создании", url: "https://youtu.be/ywI_V-R87kw" }
    ],
    media: {
      cover: "assets/media/bot-page.webp",
      alt: "Публичная страница бота TapX AI SECRETAR в Telegram",
      gallery: [
        { type: "image", src: "assets/media/bot-page.webp", alt: "Страница TapX AI SECRETAR в Telegram" }
      ]
    },
    sticker: "typing",
    art: "ai",
    theme: "cyan"
  },
  {
    id: "linkcut",
    title: "LinkCut",
    titleAlt: "Read less",
    category: "telegram-bot",
    status: "in-development",
    statusConfirmed: true,
    statusNote: "Бот собран и протестирован в видео. Публичной ссылки на запуск в канале пока нет.",
    order: 2,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Telegram-бот, который вытаскивает главное из длинной статьи — без чтения всего текста.",
    task: "Открываешь длинную статью, а читать её целиком не хочется. LinkCut должен быстро выделить главное и отдать короткую выжимку прямо в Telegram.",
    features: [
      "Принимает ссылку на статью",
      "Выделяет главное из текста",
      "Отвечает в Telegram"
    ],
    plannedFeatures: [
      "Публичная ссылка на бота",
      "Настройка длины выжимки"
    ],
    tech: ["Telegram Bot API", "DeepSeek"],
    demoUrl: "",
    ctaLabel: "",
    links: [
      { label: "Видео: как собирал", url: "https://youtu.be/68YLI1g1_6U" }
    ],
    media: {
      cover: "assets/media/linkcut-phone.webp",
      alt: "Кадр из видео: интерфейс LinkCut в Telegram",
      gallery: [
        { type: "image", src: "assets/media/linkcut-phone.webp", alt: "Кадр из видео с интерфейсом LinkCut" }
      ]
    },
    sticker: "racing",
    art: "linkcut",
    theme: "violet"
  },
  {
    id: "emoji-bot-converter",
    title: "Emoji Bot Converter",
    titleAlt: "Sticker lab",
    category: "telegram-bot",
    status: "experiment",
    statusConfirmed: true,
    statusNote: "Полная демонстрация опубликована на YouTube. Текущую доступность бота я не проверял.",
    order: 3,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Система Telegram-ботов для стикеров и эмодзи: визуал, настройки и генерация контента.",
    task: "Превратить идею в продукт: боты, которые работают со стикерами и премиум-эмодзи, настраивают визуал и генерируют контент. На проект ушёл примерно месяц работы.",
    features: [
      "Работа со стикерами и эмодзи",
      "Настройка визуала",
      "Генерация контента"
    ],
    plannedFeatures: [],
    tech: ["Telegram Bot API", "AI-генерация"],
    demoUrl: "",
    ctaLabel: "",
    links: [
      { label: "Полная демонстрация", url: "https://youtu.be/UKnZAEJQAOk" }
    ],
    media: {
      cover: "assets/media/emoji-bot-phone.webp",
      alt: "Кадр из видео: интерфейс бота «Студия премиум-эмодзи» в Telegram",
      gallery: [
        { type: "image", src: "assets/media/emoji-bot-phone.webp", alt: "Интерфейс бота «Студия премиум-эмодзи» в Telegram" }
      ]
    },
    sticker: "sparkle",
    art: "emoji",
    theme: "amber"
  },
  {
    id: "premium-emoji-catalog",
    title: "Каталог премиум-эмодзи",
    titleAlt: "503 icons",
    category: "websites",
    status: "live",
    statusConfirmed: true,
    statusNote: "Страница открывается, каталог работает. Количество эмодзи и категорий видно на сайте.",
    order: 4,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Каталог премиум-эмодзи с готовыми ID для сообщений и кнопок Telegram-ботов.",
    task: "Собрать сотни эмодзи с готовыми ID в одном месте, чтобы быстрее оформлять интерфейсы ботов. Внутри — поиск, категории и копирование ID или готового тега tg-emoji.",
    features: [
      "503 эмодзи",
      "19 категорий",
      "2 пака",
      "Поиск по названию, категории и ID",
      "Копирование ID и тега tg-emoji",
      "Светлая и тёмная темы"
    ],
    plannedFeatures: [],
    tech: ["Веб-каталог", "Netlify"],
    demoUrl: "https://emoji-tapx.netlify.app/",
    ctaLabel: "Открыть каталог",
    links: [],
    media: {
      cover: "assets/media/catalog-shot.webp",
      alt: "Скриншот каталога премиум-эмодзи TapX",
      gallery: [
        { type: "image", src: "assets/media/catalog-shot.webp", alt: "Каталог премиум-эмодзи: главная страница" }
      ]
    },
    sticker: "thumb",
    art: "catalog",
    theme: "light"
  },
  {
    id: "moderation-bot",
    title: "Бот модерации",
    titleAlt: "Community guard",
    category: "telegram-bot",
    status: "in-development",
    statusConfirmed: true,
    statusNote: "Проект в разработке. Ниже — план, а не готовый набор функций.",
    order: 5,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Проект бота модерации: правила, защита группы и журнал действий.",
    task: "Собрать бота, который помогает модерировать Telegram-сообщества: правила задаются заранее, а спорные случаи могут проверяться с помощью ИИ. Сначала — режим наблюдения, потом действия.",
    features: [],
    plannedFeatures: [
      "Настройки защиты группы",
      "Фильтры и правила модерации",
      "Журнал действий",
      "Управление участниками",
      "Объяснение причин удаления сообщений",
      "Режим наблюдения для настройки правил",
      "ИИ для спорных случаев"
    ],
    tech: ["Telegram Bot API", "AI (план)"],
    demoUrl: "",
    ctaLabel: "",
    links: [],
    media: {
      cover: "",
      alt: "",
      gallery: []
    },
    sticker: "unacceptable",
    art: "moderation",
    theme: "red"
  },
  {
    id: "youtube-thumbnails",
    title: "YouTube-превью",
    titleAlt: "Google Flow",
    category: "experiments",
    status: "experiment",
    statusConfirmed: true,
    statusNote: "Эксперимент. Результат и процесс показаны в видео.",
    order: 6,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Превью для YouTube через Google Flow — без дизайнера и дорогих программ.",
    task: "Проверить, можно ли получать качественные превью для YouTube с помощью Google Flow, если нет дизайнера и дорогих программ. В видео — весь процесс.",
    features: [
      "Пошаговый разбор в видео",
      "Результат, собранный в Google Flow"
    ],
    plannedFeatures: [],
    tech: ["Google Flow"],
    demoUrl: "",
    ctaLabel: "",
    links: [
      { label: "Видео на YouTube", url: "https://youtu.be/txivVJDIskU" }
    ],
    media: {
      cover: "assets/media/flow-ui.webp",
      alt: "Кадр из видео: сравнение фото и AI-результата в Google Flow",
      gallery: [
        { type: "image", src: "assets/media/flow-ui.webp", alt: "Google Flow: обычное фото и AI-результат" }
      ]
    },
    sticker: "chef",
    art: "youtube",
    theme: "blue"
  },
  {
    id: "motion-by-code",
    title: "Motion-графика кодом",
    titleAlt: "10 words",
    category: "experiments",
    status: "experiment",
    statusConfirmed: true,
    statusNote: "Эксперимент. Результат опубликован в Telegram-канале.",
    order: 7,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Анимация, собранная кодом по короткому текстовому промпту — без платных программ.",
    task: "Проверить, насколько далеко можно уйти в motion-графике без дорогих программ, если описать задачу текстом примерно в десять слов.",
    features: [
      "Анимация по промпту примерно в 10 слов",
      "Без платных программ"
    ],
    plannedFeatures: [],
    tech: ["Код", "AI"],
    demoUrl: "",
    ctaLabel: "",
    links: [
      { label: "Пост с результатом", url: "https://t.me/TapX_AI/24" }
    ],
    media: {
      cover: "",
      alt: "",
      gallery: []
    },
    sticker: "shock",
    art: "motion",
    theme: "chrome"
  },
  {
    id: "orbital-globe",
    title: "Orbital Globe",
    titleAlt: "Three.js",
    category: "experiments",
    status: "experiment",
    statusConfirmed: true,
    statusNote: "WebGL-эксперимент. Вынесен на отдельную страницу, чтобы не утяжелять основное портфолио.",
    order: 8,
    updated: "2026-10-29",
    linkChecked: "2026-10-29",
    summary: "Интерактивный 3D-глобус: точки суши, координатная сетка и орбитальное вращение.",
    task: "Проверить, как интерактивный WebGL-объект вписывается в статический сайт: Three.js, d3-geo и данные суши. Глобус открывается отдельной страницей и не грузится вместе с портфолио.",
    features: [
      "Точки суши и координатная сетка",
      "Автоматическое вращение и перетаскивание",
      "Остановка вращения при наведении",
      "Статичный режим при reduced motion"
    ],
    plannedFeatures: [],
    tech: ["Three.js", "d3-geo", "React", "Vite"],
    demoUrl: "globe/",
    ctaLabel: "Открыть глобус",
    links: [],
    media: {
      cover: "assets/media/globe-preview.webp",
      alt: "Скриншот интерактивного глобуса TapX AI",
      gallery: [
        { type: "image", src: "assets/media/globe-preview.webp", alt: "Orbital Globe: интерактивный 3D-глобус на Three.js" }
      ]
    },
    sticker: "cool",
    art: "globe",
    theme: "mint"
  }
];

