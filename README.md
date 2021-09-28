# Первичная установка node_modules
`npm i`

# Запуск development сервера
`npm run dev` - сервер запускается на http://localhost:1234/

Что такое [localhost](https://webkyrs.info/page/chto-takoe-lokalnyi-khost)(клац)

# Примкер того, как открыть нужную страницу сайта
http://localhost:1234/index.html  
http://localhost:1234/another.html
# Структура проекта

```
dist - скомпилированный код
node_modules - папка с node модулями проекта
src - исходный код проект
  / assets - ассеты проекта
  / components - pug компоненты
  / layouts - pug шаблоны страниц
  / scripts - файлы js скриптов
  index.pug - индексный файл 
  another.pug - another страница сайта 
```

# Используемые препроцессоры
- [Pug.js](https://pugjs.org/api/getting-started.html)(клац) - препроцессор для html
- [Scss](https://sass-lang.com/documentation)(клац) - препроцессор для css