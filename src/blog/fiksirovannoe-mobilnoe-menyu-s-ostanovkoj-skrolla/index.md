---
title: "Фиксированное мобильное меню с остановкой скролла"
date: "2019-05-23"
descr: "Привет! Сегодня у&nbsp;нас лайтовенькая, но&nbsp;довольно важная статья. Покажу скрипт, который будет тормозить скролл сайта при открытии мобильного меню (и&nbsp;на&nbsp;iPhone тоже), ну&nbsp;а&nbsp;при закрытии&nbsp;&mdash; возобновлять. Все мы&nbsp;знаем, как непросто на&nbsp;iPhone скролл отключить, но&nbsp;тут максимально простая и&nbsp;рабочая фича. Поехали!"
cover: "img/cover.jpg"
cat: JS
---

Итак, все делаем через `position: fixed` и&nbsp;простой скриптец. И&nbsp;да, конечно&nbsp;же, эта фича сработает только для мобильного меню (полноэкранного), ибо иначе будет некрасиво. HTML тут не&nbsp;супер важен, посмотрите на&nbsp;примере

## CSS

``` css
.is-menu-open {
  position: fixed;
  overflow: hidden;
}
```

`is-menu-open` &mdash; класс, который будет добавляться когда меню открыто.

## JS

``` js
const burger = document.querySelector(&rsquo;.burger&rsquo;);
const menuLinks = document.querySelectorAll(&rsquo;.mobile-menu a&rsquo;);
const mobileMenu = document.querySelector(&rsquo;.mobile-menu&rsquo;);

burger.addEventListener(&rsquo;click&rsquo;, (e) =&gt; {
  e.preventDefault();

  let pagePos = window.scrollY;
  document.body.classList.add(&rsquo;is-menu-open&rsquo;);
  document.setAttribute(&rsquo;data-scroll&rsquo;, pagePos);

  mobileMenu.style.display = &rsquo;block&rsquo;;
});

menuLinks.forEach(el =&gt; {
  el.addEventListener(&rsquo;click&rsquo;, (e) =&gt; {
    e.preventDefault();

    let pos = parseInt(document.body.getAttribute(&rsquo;data-scroll&rsquo;));

    mobileMenu.style.display = &rsquo;none&rsquo;;

    document.body.classList.remove(&rsquo;is-menu-open&rsquo;);
    document.setAttribute(&rsquo;data-scroll&rsquo;, &rsquo;&rsquo;);

    window.scrollTo(0, pos);
  });
});
```

Собственно, по&nbsp;бургеру открываем меню (стандартные вещи) и&nbsp;сохраняем в&nbsp;переменную `pagePos` текущую позицию скролла. Затем, уже по&nbsp;закрытию меню мы&nbsp;скроллим сайт на&nbsp;эту&nbsp;же позицию, убирая класс, содержащий `position: fixed`. И, поскольку меню у&nbsp;нас с&nbsp;фоном (и&nbsp;выше)&nbsp;&mdash; внешне ничего не&nbsp;видно, но&nbsp;скролл сохраняется.

Вот такая вот мелочь, но&nbsp;довольно полезная мелочь. Надеюсь, кому-то помогло)
