<div align="center">
  <img width="auto" height="500px" src="https://github.com/DenisBakh/fightGame/blob/master/fightGame.png">
  <h1>fightGame</h1>
  <p>
    fightGame - демо версия браузерной игры, разработанная с использованием Gulp 4.
  </p>
  <p>Автор разработки приложения: Бахматов Денис</p>
</div>

## Project Features:

* По нажатию на кнопку “Атака” на блок зомби должен накладываться CSS-модификатор (или CSS-класс), который должен запускать анимацию атаки зомби (CSS3-анимацию). Анимация атаки
  зомби состоит из двух кадров и шлейфов, подробности в PSD-макете. Продолжительность анимации 0.6 секунды. После проигрывания анимации с блока зомби должен убираться CSS-модификатор анимации атаки.
* По нажатию на кнопку “Способность” на блок зомби должен накладываться CSS-модификатор (или CSS-класс), который должен запускать анимацию превращения зомби в красного зомби.
  Продолжительность анимации должна составлять 1 секунду. Подробности по раскадровке в PSD-макете. После проигрывания анимации превращения, изображение зомби должно оставаться
  красным с помощью другого CSS-модификатора. И если после этого нажать на кнопку “Атака”, то анимация атаки должна проигрываться уже с изображением красного зомби. Зомби должен перестать быть красным только после повторного нажатия на кнопку “Способность”.
* Дополнительно! Ассасин получает урон от зомби. Значение урона варьируется от базового значения в 20 в диапазоне от 85% до 115% (псевдорандомно с округлением до целого). У зомби имеется шанс 33% нанести критический урон в дополнительном размере 50% (когда на зомби активирована “Способность”, шанс на критический урон равен 100%). При получении урона над ассасином всплывает количество полученного урона, хп-бары уменьшаются соответственно. Когда количество жизней у ассасина становится 0, ассасин погибает и исчезает с поля боя.

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
