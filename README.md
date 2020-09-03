<div align="center">
  <img width="auto" height="500px" src="https://github.com/DenisBakh/fightGame/blob/master/fightGame.png">
  <h1>productCard</h1>
  <p>
    fightGame - демо версия браузерной игры, разработанная с использованием Gulp 4.
  </p>
  <p>Автор разработки приложения: Бахматов Денис</p>
</div>

## Project Links:

* <a href="https://denisbakh.github.io/fightGame/dist/index.html" target="_blank">`Главная страница`</a> - https://denisbakh.github.io/fightGame/dist/


## Project install:

``` bash
# Download repository:
git clone https://github.com/DenisBakh/fightGame fightGame

# Go to the app:
cd fightGame

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8002/:
gulp

# Build project:
gulp build
```

## Project Structure:

* `dist/` - собранное приложение
* `src/pages` - страницы сайта
* `src/components` - блоки, переменные, миксины, для дальнейших импортов на страницы
* `src/components/static` - дополнительные статичные файлы для сайта, такие как favicon
* `src/components/blocks` - компоненты приложения
* `src/components/_common` - обнулятор CSS, переменные, общие миксины, и т.п.
* `gulpfile.js` - настройки `Gulp`
