document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".site-container");(document.body.classList.contains("main-page")||document.body.classList.contains("about-page"))&&new Promise(t=>{new TimelineMax({onStart(){e.classList.remove("is-hidden"),e.classList.remove("is-outer")},onComplete:t}).from(".site-container",.7,{autoAlpha:0,clearProps:"all"}).from(".header",.5,{autoAlpha:0,y:-50,clearProps:"all"}).from(".hero__text",.5,{autoAlpha:0,y:50,clearProps:"all"}).from(".contacts",.5,{autoAlpha:0,y:50,clearProps:"all"},"-=0.3")}),document.body.classList.contains("work-page")&&new Promise(t=>{new TimelineMax({onStart(){e.classList.remove("is-hidden"),e.classList.remove("is-outer")},onComplete:t}).from(".site-container",.7,{autoAlpha:0,clearProps:"all"}).from(".header",.5,{autoAlpha:0,y:-50,clearProps:"all"}).from(".work-hero__title",.5,{autoAlpha:0,y:50,clearProps:"all"}).from(".work-hero__link",.5,{autoAlpha:0,y:50,clearProps:"all"}).from(".work-hero__image",.5,{autoAlpha:0,y:50,clearProps:"all"},"-=0.3")}),document.body.classList.contains("consult-page")&&new Promise(t=>{new TimelineMax({onStart(){e.classList.remove("is-hidden"),e.classList.remove("is-outer")},onComplete:t}).from(".site-container",.7,{autoAlpha:0,clearProps:"all"}).from(".header",.5,{autoAlpha:0,y:-50,clearProps:"all"}).from(".hero__text",.5,{autoAlpha:0,y:50,clearProps:"all"}).from(".hero__image",.5,{autoAlpha:0,y:50,clearProps:"all"},"-=0.5").from(".contacts",.5,{autoAlpha:0,y:50,clearProps:"all"},"-=0.3").from(".themes",.5,{autoAlpha:0,y:50,clearProps:"all"})})});let options={year:"numeric",month:"long",day:"numeric",timezone:"UTC"};if(document.body.classList.contains("main-page")&&fetch("/assets/feed.xml").then(e=>e.text()).then(e=>(new window.DOMParser).parseFromString(e,"text/xml")).then(e=>{let t=e.querySelectorAll("entry"),o="",a=document.querySelectorAll(".blog__item");for(let e=0;e<a.length;e++)0!==e&&a[e].remove();t.forEach((e,t)=>{if(t<2){let a=Date.parse(e.querySelector("updated").textContent),l=new Date(a).toLocaleString("ru",options);o+=`\n            <li class="blog__item">\n              <article class="blog-post">\n                <a href="${e.querySelector("id").textContent}" target="_blank" class="blog-post__link">\n                  <div class="blog-post__image">\n                    <svg>\n                      <use xlink:href="/assets/img/sprite.svg#blog-${t+1}"></use>\n                    </svg>\n                  </div>\n                  <span class="blog-post__time">${l.substring(0,l.length-3)}</span>\n                  <h3 class="blog-post__title">\n                    ${e.querySelector("title").textContent}\n                  </h3>\n                </a>\n              </article>\n            </li>\n          `}}),document.querySelector(".blog__list").insertAdjacentHTML("beforeend",o)}),document.body.classList.contains("main-page")){let e="UCxJyCit95jsb-JLE3kXnq1Q";fetch("https://api.rss2json.com/v1/api.json?rss_url="+encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=")+e).then(e=>e.json()).then(e=>{let t=document.querySelectorAll(".blog__item");for(let e=0;e<t.length;e++)0==e&&t[e].remove();let o="";e.items.forEach((e,t)=>{if(t<1){let t=Date.parse(e.pubDate),a=new Date(t).toLocaleString("ru",options);o+=`\n            <li class="blog__item">\n              <article class="youtube-video">\n                <a href="${e.link}" target="_blank" class="youtube-video__link">\n                  <svg>\n                    <use xlink:href="/assets/img/sprite.svg#blog-3"></use>\n                  </svg>\n                  <div class="youtube-video__text">\n                    <span class="youtube-video__time">${a}</span>\n                    <h3 class="youtube-video__title">\n                      ${e.title}\n                    </h3>\n                  </div>\n                </a>\n              </article>\n            </li>\n          `}}),document.querySelector(".blog__list").insertAdjacentHTML("afterbegin",o)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".nav");e.addEventListener("click",()=>{e.classList.contains("burger--active")?(e.classList.remove("burger--active"),t.classList.remove("nav--active"),(()=>{let e=parseInt(document.body.dataset.position,10);document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")})()):(e.classList.add("burger--active"),t.classList.add("nav--active"),(()=>{let e=window.scrollY;document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"})())})}),document.addEventListener("DOMContentLoaded",()=>{if(window.innerWidth>=1025){const o=document.querySelector(".mouse"),a=o.querySelector(".mouse__inner"),l=document.querySelectorAll("a"),s=document.querySelectorAll("button");function e(){a.style.transform="scale(1.4)"}function t(){a.style.transform=null}document.addEventListener("mousemove",(function(e){if(e.clientX<5||e.clientY<5||e.clientY>window.innerHeight-5||e.clientX>window.innerWidth-5)o.style.opacity="0";else{o.style.opacity="1";const t=e.clientX,a=e.clientY;o.style.transform=`translate(${t-10}px, ${a-10}px)`}})),l.forEach(t=>t.addEventListener("mouseover",e)),l.forEach(e=>e.addEventListener("mouseleave",t)),s.forEach(t=>t.addEventListener("mouseover",e)),s.forEach(e=>e.addEventListener("mouseleave",t))}}),document.addEventListener("DOMContentLoaded",()=>{const e=document.documentElement,t=document.querySelector(".theme-switch"),o=t.querySelectorAll(".theme-switch__icon"),a=document.querySelector(".consult-hero"),l=a?a.querySelectorAll(".hero__image img"):null,s=document.querySelector(".main-page .hero"),n=document.querySelector(".about-hero");null===localStorage.getItem("theme")&&localStorage.setItem("theme","dark");const r=r=>{(e=>{o&&(o.forEach(e=>e.classList.remove("theme-switch__icon--active")),"light"===e&&t.querySelector(".dark").classList.add("theme-switch__icon--active"),"dark"===e&&t.querySelector(".light").classList.add("theme-switch__icon--active"))})(r),(e=>{s&&("light"===e&&(s.style.backgroundImage="url('/assets/img/light-bg.png')"),"dark"===e&&(s.style.backgroundImage="url('/assets/img/dark-bg.png')"))})(r),(e=>{n&&("light"===e&&(n.style.backgroundImage="none"),"dark"===e&&(n.style.backgroundImage="url('/assets/img/about-dark.png')"))})(r),(e=>{l&&(l.forEach(e=>e.classList.remove("hero__image-active")),"light"===e&&a.querySelector(".light").classList.add("hero__image-active"),"dark"===e&&a.querySelector(".dark").classList.add("hero__image-active"))})(r),"light"===localStorage.getItem("theme")&&(e.style.setProperty("--scheme","light"),document.documentElement.classList.add("light-theme"),localStorage.setItem("theme","light")),"dark"===localStorage.getItem("theme")&&(e.style.setProperty("--scheme","dark"),document.documentElement.classList.remove("light-theme"),localStorage.setItem("theme","dark"))};r(localStorage.getItem("theme")),t.addEventListener("click",()=>{let e=localStorage.getItem("theme");"dark"===e?(localStorage.setItem("theme","light"),r("light")):"light"===e&&(localStorage.setItem("theme","dark"),r("dark"))})});