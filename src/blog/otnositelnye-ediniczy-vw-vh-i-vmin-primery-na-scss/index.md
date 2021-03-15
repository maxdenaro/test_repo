---
title: "Относительные единицы vw, vh и vmin. Примеры на scss"
date: "2019-04-04"
descr: "Относительные единицы - это единицы, которые зависят от какого-либо исходного размера. Их основное отличие от абсолютных как раз в этом, ведь абсолютные - это по сути просто фиксированные единицы, типа px. А практику с этими единицами можете посмотреть в видео выше."
description: "Что такое vw, vh, vmin - рассказываю на примере."
cover: "img/cover.jpg"
cat: HTML/CSS
video: "https://www.youtube.com/embed/JHI0Lxse7PQ"
---

## vw

vw - это один из видов относительных единиц, и он определяется как 1/100 viewport. Или, проще говоря, этот вид зависит от ширины экрана. 100vw - это ширина всего экрана.

<iframe style="width: 100%;" title="vw simple example" src="//codepen.io/MaxGraph/embed/vMGKeB/?height=265&amp;theme-id=0&amp;default-tab=css,result" height="265" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span> See the Pen <a href="https://codepen.io/MaxGraph/pen/vMGKeB/">vw simple example</a> by Maksim (<a href="https://codepen.io/MaxGraph">@MaxGraph</a>) on <a href="https://codepen.io">CodePen</a>. </iframe>

В данном примере мы видим, что мы задали 23vw для каждого из блоков, что почти что четверть от экрана. Если убрать padding и выставить 25vw - то собственно 4 блока займут всю ширину экрана. Кстати, тут как раз есть интересная фича о том, как делать квадратные блоки (как любят в сайтах-портфолио).

<img src="img/ex-1.png" alt="Пример блоков на vw">

## vh

Суть vh аналогична vw, но только расчет идет на высоту устройства.

<iframe style="width: 100%;" title="vh simple example" src="//codepen.io/MaxGraph/embed/axNmwb/?height=265&amp;theme-id=0&amp;default-tab=css,result" height="265" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen">See the Pen <a href="https://codepen.io/MaxGraph/pen/axNmwb/">vh simple example</a> by Maksim (<a href="https://codepen.io/MaxGraph">@MaxGraph</a>) on <a href="https://codepen.io">CodePen</a>. </iframe>

Как пример использования такого метода - это если нужно сделать первый блок (или все) сайта под устройство. Далее рассмотрим еще в примере с scss-функциями.

## vmin

1vmin равен 1% от минимального значения ширины или высоты области просмотра. Данные единицы измерения удобнее всего использовать конечно же в мобилке, т.к. vw и vh будут выдавать слишком мелкие значения. Далее на примерах рассмотрим еще.


## SCSS-функции

Теперь самое интересное в этой статье - это использование функций. Кстати, их можно написать и на sass, не проблема.

``` scss
@function vw($value, $size: 1920) {
  @return $value / $size \* 100vw;
}
```

Собственно, функция. Эта функция отвечает за vw. Мы видим переменную `$size`, значение которой **1920**. Это - ширина макета. Предположим, вам дали макет на верстку шириной 1440 - вписываете сюда 1440. И если в макете размер шрифта, к примеру, 10 пикселей - собственно ставим `font-size: vw(10);` Таким образом, на 1440 (установленном `$size`) будет размер шрифта 10, а больше/меньше - будет больше или меньше соответственно. Это крайне удобно в плане адаптива под разные десктопы - от 1025 до 1920, или еще выше.

<iframe style="width: 100%;" title="ROaGjV" src="//codepen.io/MaxGraph/embed/ROaGjV/?height=265&amp;theme-id=0&amp;default-tab=html,result" height="265" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen">See the Pen <a href="https://codepen.io/MaxGraph/pen/ROaGjV/">ROaGjV</a> by Maksim (<a href="https://codepen.io/MaxGraph">@MaxGraph</a>) on <a href="https://codepen.io">CodePen</a>. </iframe>

Собственно, с vh-функцией, суть та же. Но область применения поуже.

``` scss
@function vh($value, $base: 768) {
  @return $value / $base \* 100vh;
}
```

Здесь суть та же, но чуть-чуть другая функция. А использование - по ситуации, если сайт сделан по дизайну так, что обязательно зависит от высоты - используем vh. Важно, при разработке сайта естественно нужно выставлять в браузере высоту, которую задали в функции, чтобы `vh(10)` выглядели как 10px.

Ну и последнее - это vmin. Его использовать стоит, как я уже говорил, для мобильных устройств.

``` scss
@function vmin($value, $base: 375) {
  @return $value / $base \* 100vmin;
}
```

По сути, суть функции абсолютно та же. Если мобильный макет 375 - выставляете 375 и используете `vmin(10)`, к примеру.

Собственно, это самая важная информация по данным единицам + использование в контексте scss-препроцессора. Я не так давно начал использовать данные функции, но скажу однозначно - с ними _**гораздо**_ приятнее верстать. Если делаешь все правильно - имеешь прекрасный адаптив на любой ширине устройства.

Надеюсь, вам было полезно. Спасибо!
