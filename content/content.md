# Тексты сайта — EN / RU

Источник: `design/screens/desktop/main.png` (1440×7889)
Машиночитаемая версия: `content.json`

**Статус перевода:** EN — дословно из макета. RU — черновой перевод, нужна вычитка носителем.

**Соглашения:**
- Названия брендов и продуктов (Kroshka Kartoshka, EJS, Nova, Husher, Menorah, Eclipse, Stroytek, Dribbble, Telegram, LinkedIn) не переводятся.
- Отраслевые термины (FinTech, iGaming, B2C, UX/UI, FoodTech, AI) оставлены латиницей — так принято в русскоязычных резюме и кейсах.
- EN-текст использует прямые кавычки только в апострофах (`developer's`); в RU — «ёлочки».

---

## Header

| Ключ | EN | RU |
|---|---|---|
| `header.name` | Anna Zhdankina | Анна Жданкина |
| `header.role` | UX/UI & product designer | UX/UI и продуктовый дизайнер |
| `header.cta_primary` | Contact me | Связаться |
| `header.cta_secondary` | Download CV | Скачать CV |

> ⚠️ В макете написано **«Downland CV»** — опечатка. В вёрстке стоит «Download CV». Если в Figma поправят — ключ не меняется.

---

## Hero

| Ключ | EN | RU |
|---|---|---|
| `hero.badge` | Hi! I'm Anna 👋 | Привет! Я Анна 👋 |
| `hero.title_line1` | UX/UI & product designer | UX/UI и продуктовый дизайнер |
| `hero.title_line2` | with 4 years in design | с 4 годами опыта в дизайне |
| `hero.subtitle` | Designed enterprise and B2B products across FinTech, iGaming, and AI. Built 20+ digital products | Проектировала корпоративные и B2B-продукты в FinTech, iGaming и AI. Выпустила более 20 цифровых продуктов |
| `hero.card_1` | UX strategy | UX-стратегия |
| `hero.card_2` | Design apps & web | Дизайн приложений и веба |
| `hero.card_3_title` | 20+ products | 20+ продуктов |
| `hero.card_3_subtitle` | From idea to launch | От идеи до запуска |

> H1 разбит на две строки: вторая — оранжевая (`#f87029`). Разбивка задана вручную, при переводе на RU строки могут стать длиннее — вёрстка выдержит, но перенос придётся проверить глазами.

---

## Projects — заголовок секции

| Ключ | EN | RU |
|---|---|---|
| `projects.title` | Projects | Проекты |
| `projects.subtitle` | A selection of my most interesting projects across web, app design, and complex digital platforms and systems | Избранные проекты: веб, мобильные приложения и сложные цифровые платформы |
| `projects.overview_label` | Product overview | О продукте |
| `projects.results_label` | The results | Результаты |
| `projects.cta` | View project | Смотреть проект |

---

## Проект 01 — Kroshka kartoshka app

| Ключ | EN | RU |
|---|---|---|
| `type` | MOBILE APP | Мобильное приложение |
| `title` | Kroshka kartoshka app | Приложение «Крошка Картошка» |
| `tags` | FoodTech · B2C · Product design | FoodTech · B2C · Продуктовый дизайн |
| `overview` | Redesign of the Kroshka Kartoshka food delivery app, combining UX research, improved architecture, and intuitive ordering flows | Редизайн приложения доставки еды «Крошка Картошка»: UX-исследование, переработанная архитектура и интуитивный сценарий заказа |

**The results / Результаты:**

- EN: Introduced a new food delivery experience within the app
  RU: Внедрён новый опыт доставки еды внутри приложения
- EN: Simplified the path from menu browsing to order completion
  RU: Сокращён путь от просмотра меню до оформления заказа
- EN: Increased order conversion by 16% through improved UX and streamlined checkout
  RU: Конверсия в заказ выросла на 16% за счёт улучшенного UX и упрощённого оформления

---

## Проект 02 — EJS developer website

| Ключ | EN | RU |
|---|---|---|
| `type` | WEB & ADAPTIVE | Веб и адаптив |
| `title` | EJS developer website | Сайт застройщика EJS |
| `tags` | Real estate · UX optimization · Product growth | Недвижимость · UX-оптимизация · Рост продукта |
| `overview` | Rebuilt the real estate developer's website, from UX research and prototyping to a new visual system and intuitive property search | Переработали сайт застройщика: от UX-исследования и прототипирования до новой визуальной системы и удобного поиска квартир |

**The results / Результаты:**

- EN: Built a scalable design system to improve UI consistency and streamline product development
  RU: Собрана масштабируемая дизайн-система для единообразия интерфейса и ускорения разработки
- EN: Optimized user journeys based on research and analytics
  RU: Оптимизированы пользовательские сценарии на основе исследований и аналитики
- EN: Increased search engagement by 26% through improved usability
  RU: Вовлечённость в поиск выросла на 26% за счёт улучшенной юзабилити

---

## Проект 03 — Nova banking app

| Ключ | EN | RU |
|---|---|---|
| `type` | MOBILE APP | Мобильное приложение |
| `title` | Nova banking app | Банковское приложение Nova |
| `tags` | FinTech · B2C/B2B · Financial management | FinTech · B2C/B2B · Управление финансами |
| `overview` | The fintech mobile banking app for international markets, offering fiat and crypto exchange, payments, and financial management | Финтех-приложение для международных рынков: фиатный и криптообмен, платежи и управление финансами |

**The results / Результаты:**

- EN: Designed key features for currency exchange, payments, and financial management
  RU: Спроектированы ключевые функции: обмен валют, платежи и управление финансами
- EN: Structured complex financial flows into intuitive user journeys
  RU: Сложные финансовые сценарии структурированы в понятные пользовательские пути
- EN: Integrated fiat and crypto services into one app
  RU: Фиатные и криптосервисы объединены в одном приложении
- EN: Design system development for consistent, scalable UI
  RU: Разработана дизайн-система для последовательного и масштабируемого интерфейса

> **Уникально для этого проекта:** вместо кнопки «View project» стоит текст `coming_soon` — «Coming soon» / «Скоро». Кнопки нет.

---

## Проект 04 — Husher platform

| Ключ | EN | RU |
|---|---|---|
| `type` | WEB PLATFORM | Веб-платформа |
| `title` | Husher platform | Платформа Husher |
| `tags` | Crypto exchange · FinTech · UX optimization | Криптообмен · FinTech · UX-оптимизация |
| `overview` | A crypto exchange product bringing together asset conversion, transaction management, and essential financial tools | Продукт для криптообмена: конвертация активов, управление транзакциями и базовые финансовые инструменты |

**The results / Результаты:**

- EN: Expanded exchange capabilities with multi-exchange functionality
  RU: Расширены возможности обмена за счёт мультивалютного функционала
- EN: Introduced new account management features
  RU: Добавлены функции управления аккаунтом
- EN: Designed the referral system to attract new users
  RU: Спроектирована реферальная система для привлечения новых пользователей
- EN: Increased exchange activity by 18% after the redesign
  RU: Активность обмена выросла на 18% после редизайна

---

## Проект 05 — Menorah app

| Ключ | EN | RU |
|---|---|---|
| `type` | APP DESIGN | Дизайн приложения |
| `title` | Menorah app | Приложение Menorah |
| `tags` | Social Tech · AI · Gamification | Соцтех · AI · Геймификация |
| `overview` | Designed an AI-powered community platform combining gamification, identity verification, community chats, and AI tools | AI-платформа для сообществ: геймификация, верификация личности, чаты и AI-инструменты |

**The results / Результаты:**

- EN: Structured complex user journeys across core features
  RU: Структурированы сложные пользовательские сценарии по ключевым функциям
- EN: Designed gamified progression and verification flows
  RU: Спроектированы геймифицированная прогрессия и сценарии верификации
- EN: 500+ screens designed and 8 core user flows
  RU: Спроектировано 500+ экранов и 8 ключевых пользовательских сценариев
- EN: Aligned UX solutions with business requirements through direct client collaboration
  RU: UX-решения согласованы с бизнес-требованиями в ходе прямой работы с клиентом

---

## Проект 06 — Eclipse platform

| Ключ | EN | RU |
|---|---|---|
| `type` | WEB PLATFORM | Веб-платформа |
| `title` | Eclipse platform | Платформа Eclipse |
| `tags` | iGaming platform · B2C · Workflow design | iGaming-платформа · B2C · Проектирование процессов |
| `overview` | An integrated casino platform combining gaming experiences, player accounts, rewards, and personalized features in one ecosystem | Интегрированная казино-платформа: игровой опыт, аккаунты игроков, награды и персонализация в единой экосистеме |

**The results / Результаты:**

- EN: Developed end-to-end UX/UI solutions across the platform's core features
  RU: Разработаны end-to-end UX/UI решения для ключевых функций платформы
- EN: Optimized the deposit journey through UX research, analysis, and industry best practices
  RU: Оптимизирован сценарий депозита на основе UX-исследований, аналитики и отраслевых практик
- EN: Designed 60+ screens for desktop and mobile versions
  RU: Спроектировано 60+ экранов для десктопа и мобильных устройств

---

## Проект 07 — Stroytek website

| Ключ | EN | RU |
|---|---|---|
| `type` | WEB & ADAPTIVE | Веб и адаптив |
| `title` | Stroytek website | Сайт Stroytek |
| `tags` | Real estate · B2C · Data-driven UX | Недвижимость · B2C · UX на основе данных |
| `overview` | Delivered an end-to-end website redesign, combining data-driven UX decisions, advanced apartment search, and new functionality | Комплексный редизайн сайта: решения на основе данных, продвинутый поиск квартир и новый функционал |

**The results / Результаты:**

- EN: Improved apartment discovery with advanced filtering by key property parameters
  RU: Улучшен подбор квартир за счёт продвинутой фильтрации по ключевым параметрам
- EN: Streamlined the journey from apartment search to inquiry submission
  RU: Упрощён путь от поиска квартиры до отправки заявки
- EN: Increased website traffic by 30% after the launch
  RU: Трафик сайта вырос на 30% после запуска
- EN: Generated 22% more inquiries post-redesign
  RU: Количество заявок выросло на 22% после редизайна

---

## Explorations

| Ключ | EN | RU |
|---|---|---|
| `explorations.title` | Explorations | Эксперименты |
| `explorations.subtitle` | A curated collection of concepts, visual studies, and independent design experiments created outside of commercial projects | Подборка концептов, визуальных исследований и независимых дизайн-экспериментов вне коммерческих проектов |
| `explorations.cta` | View Dribbble | Смотреть на Dribbble |

**Подписи к картинкам (alt) — только для доступности, на экране не видны:**

| ID | EN | RU |
|---|---|---|
| e1 | Crypto wallet app concept | Концепт крипто-кошелька |
| e2 | Movy Bank landing page concept | Концепт лендинга Movy Bank |
| e3 | SmartFin finance dashboard concept | Концепт финансового дашборда SmartFin |
| e4 | Fitness tracking dashboard concept | Концепт дашборда фитнес-трекинга |
| e5 | NeuroFin AI finance landing concept | Концепт лендинга NeuroFin |
| e6 | Aeroluxe private jet booking concept | Концепт бронирования частных рейсов Aeroluxe |

> У карточек Explorations нет видимого текста — только картинки.

---

## Contact

| Ключ | EN | RU |
|---|---|---|
| `contact.title` | Telegram | Telegram |
| `contact.handle` | @ladestin | @ladestin |
| `contact.subtitle` | Open to new collaborations | Открыта к новым проектам |
| `contact.links[cv]` | CV | CV |
| `contact.links[linkedin]` | LinkedIn | LinkedIn |
| `contact.links[mail]` | Email | Email |

> Ссылки (`href`) пока `#` — нужны реальные адреса: файл CV, профиль LinkedIn, почта.

---

## Что нужно от тебя

1. **Вычитка RU-перевода** — сейчас это черновик.
2. **Реальные ссылки**: CV (файл), LinkedIn (URL), Email (адрес), Telegram (`@ladestin` — подтвердить), Dribbble (URL для кнопки).
3. **Решение по терминам**: оставляем `FinTech` / `iGaming` / `B2C` латиницей или переводим? Сейчас оставлены латиницей.
4. **Обращение к Анне**: в RU я использовал женский род («Проектировала», «Выпустила»). Подтвердить, что это верно.
