/* ============================================================
   i18n — подстановка текстов из content/content.json
   Разметка хранит английский текст как fallback и ключ в data-i18n.
   ============================================================ */
(function () {
  'use strict';

  var DEFAULT_LANG = 'en';

  /** Достать значение по пути вида "projects.items.0.title" */
  function pick(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc == null ? undefined : acc[key];
    }, obj);
  }

  /**
   * Язык страницы. По умолчанию всегда английский.
   *
   * Язык браузера сознательно НЕ учитываем: русская версия ещё не вычитана
   * и выглядит сырой, поэтому ориентироваться на него нельзя. Единственный
   * способ показать русскую — явный параметр index.html?lang=ru.
   *
   * Запоминание выбора вернём вместе с настоящим переключателем языка.
   */
  function detectLang(available) {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) { /* ignore */ }
    if (q && available.indexOf(q) !== -1) return q;

    return DEFAULT_LANG;
  }

  /**
   * Листья в content.json имеют вид { en: "...", ru: "..." }.
   * pick() возвращает такой объект целиком, поэтому его нужно
   * развернуть в строку нужного языка.
   */
  function localize(node, lang) {
    if (node && typeof node === 'object' && !Array.isArray(node)) return node[lang];
    return node;
  }

  /** Применить словарь к разметке */
  function apply(dict, lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = localize(pick(dict, el.getAttribute('data-i18n')), lang);
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('img[data-i18n-alt]').forEach(function (img) {
      var value = localize(pick(dict, img.getAttribute('data-i18n-alt')), lang);
      if (typeof value === 'string') img.alt = value;
    });

    document.documentElement.lang = lang;
  }

  fetch('content/content.json')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      var dict = data.content || data;
      var langs = (dict._meta && dict._meta.langs) || [DEFAULT_LANG];
      var lang = detectLang(langs);

      apply(dict, lang);
    })
    .catch(function (err) {
      // Разметка уже содержит английский текст — страница остаётся рабочей.
      console.warn('[i18n] не удалось загрузить content.json:', err.message);
    });
})();
