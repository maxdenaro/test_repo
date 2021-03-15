---
title: "CSS Magic #1. Красивый hover-эффект"
date: "2019-04-10"
descr: "
Этот красивый hover-эффект я сам где-то нашел и он мне весьма понравился. Теперь же хочу научить ему Вас. В целом, все несложно и работает через псевдоэлемент и **overflow.**"
description: "CSS Magic #1, делаем красивый ховер-эффект"
cover: "img/cover.jpg"
cat: HTML/CSS
---

## HTML

``` html
<div class="main__menu">
  <div class="container">
    <nav>
      <ul>
        <li><a href="#"><span data-text="HTML/CSS"></span>HTML</a></li>
        <li><a href="#"><span data-text="JavaScript"></span>JavaScript</a></li>
        <li><a href="#"><span data-text="CSS"></span>CSS</a></li>
        <li><a href="#"><span data-text="React"></span>React</a></li>
        <li><a href="#"><span data-text="Angular"></span>Angular</a></li>
      </ul>
    </nav>
  </div>
</div>
```

Собственно, простой html-код. Единственное что важно - у span внутри ссылки есть дата-атрибут data-text. Он должен совпадать с текстом внутри самой ссылки.

<div class="note">
  <p>
    <strong>Примечание:</strong> Возможен баг при наведении, с которым я сам когда-то столкнулся на другом сайте. Может неверно отрабатывать ховер, если у вас есть слова с пробелом в этих ссылках. В таком случае внутри дата-атрибута должно быть "текст&nbspтекст". Т.е. вместо пробела ставим символ nbsp. И не забудьте точку с запятой)
  </p>
</div>

## CSS

``` css
a {
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-size: vh(80);
  color: $color-white;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.6s;

  span {
    position: absolute;
    left: 0;
    display: block;
    overflow: hidden;
    width: 0;
    height: 100%;
    font-size: vh(80);
    background-color: #111517;
    backface-visibility: hidden;
    transition: width .3s;

    &::before {
      content: attr(data-text);
      position: absolute;
      right: 0;
      display: block;
      width: 100%;
      color: $color-red;
      backface-visibility: hidden;
    }
  }

  &:hover {
    span {
      width: 100%;
      transition: width 0.3s;
    }
  }
}
```

Я пожалуй опущу тут остальные стили, только самые нужные покажу. Остальное увидите в конце статьи в codepen. Что тут собственно важно, так это `overflow: hidden` у ссылки и работа псевдоэлемента у `span`. Обратите внимание, в качестве контента указываем `content: attr(data-text)`, это как раз таки "вызов" данных прямо из дата-атрибута. Ну и работает все по довольно простой логике - ширина span меняется с нуля до 100% плавно, благодаря `transition`. Вот собственно и все) И собственно сам codepen:

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Magic #1. Hover effect" src="//codepen.io/MaxGraph/embed/zXKerg/?height=265&amp;theme-id=0&amp;default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href='https://codepen.io/MaxGraph/pen/zXKerg/'>CSS Magic #1. Hover effect</a> by Maksim (<a href='https://codepen.io/MaxGraph'>@MaxGraph</a>) on <a href='https://codepen.io'>CodePen</a>. </iframe>

Надеюсь, Вам был полезен данный прием, и Вы сумеете его использовать где-нибудь на Ваших проектах. Это был первый выпуск CSS Magic, дальше будет только интереснее)
