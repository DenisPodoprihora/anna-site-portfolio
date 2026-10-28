# Anna Zhdankina — portfolio

Одностраничный сайт-портфолио UX/UI & product designer.

## Стек

Чистый HTML / CSS / JS — без сборки, npm и зависимостей.

## Структура

```
index.html              разметка
assets/css/style.css    стили
assets/js/main.js       переключение языка EN/RU
assets/fonts/           DM Sans (variable, woff2)
assets/icons/           svg-иконки и фавикон
assets/img/             фотографии проектов и портрет
content/content.json    все тексты сайта парами en/ru
```

## Тексты и языки

Все тексты вынесены в `content/content.json` в виде пар `{ "en": "...", "ru": "..." }`.

Язык выбирается в порядке: параметр `?lang=ru` → сохранённый выбор в
`localStorage` → язык браузера → английский.

## Ссылки

CV пока ведёт на `#` — ждём файл.
