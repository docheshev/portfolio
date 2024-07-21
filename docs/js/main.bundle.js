!function(){"use strict";var e,t,o,n,l,r,a,i={682:function(e){e.exports=JSON.parse('{"en":{"hello":"Hi, my name is ","person":"Dmitry!","profession":"I\'m a junior front-end developer","text":"with passion for learning and creating.","title":{"portfolio":"Portfolio","projects":"Projects","skills":"Skills","contacts":"Contacts"},"main":"Main","converter":"Currency Сonverter","quiz":"Quiz","table":{"layout":"Layout","optim":"Optimization","adapt":"adaptive","method":"Methodology","bem":"BEM","minHtml":"Minification HTML","minCss":"Minification CSS","minJs":"Minification JS","yes":"yes","no":"no"},"website":"Go to the site","pageSkillsTitle":"Skills","pageSkillsSubtitle":" & a little about myself","descrSkills":{"parag1":"I\'m a beginner frontend developer who is looking for an opportunity to gain experience on real projects in the field of frontend development.","parag2":"I\'ve skills in layout using HTML and CSS. I typeset semantically, adaptively (use media queries). I also actively apply modern CSS3 features such as flex, grid, animation, transition, transform, filters, gradients. I possess the skills of modular layout using the methodology of BEM-naming and preprocessors such as SCSS. In addition, I\'m familiar with the mobile-first methodology. To build projects I use Gulp.","parag3":"I\'ve experience with basic optimization principles, such as adapting graphics for retina-displays and minifying source files.","parag4":"I have the skills to work with Figma at a level sufficient for the frontend developer.","parag5":"Currently I am actively studying JavaScript and I am focusing on studying its native format. In the future I plan to master basic JavaScript frameworks such as React, Vue, Angular, as well as to master TypeScript.","parag6":"I\'ve basic skills with Git version control skills. In the process of working, I teach myself to use the command line interface.","parag7":"I\'m ready to apply all my skills in real projects and learn by doing. I\'d appreciate the opportunity to join your team and contribute to your projects."},"mylocation":"Location","mycurrentLocation":"Russia","phone":"Phone number","email":"Email","emailAdress":"docheshev.dev@gmail.com"}}')},785:function(e){e.exports=JSON.parse('{"ru":{"hello":"Привет, меня зовут ","person":"Дмитрий!","profession":"Я junior front-end developer","text":"со страстью к обучению и творчеству.","title":{"portfolio":"Портфолио","projects":"Проекты","skills":"Навыки","contacts":"Контакты"},"main":"Главная","converter":"Конвертер валют","quiz":"Викторина","table":{"layout":"Верстка","optim":"Оптимизация","adapt":"адаптивная","method":"Методология","bem":"БЭМ","minHtml":"Минификация HTML","minCss":"Минификация CSS","minJs":"Минификация JS","yes":"да","no":"нет"},"website":"Перейти на сайт","pageSkillsTitle":"Навыки","pageSkillsSubtitle":" и немного о себе","descrSkills":{"parag1":"Я начинающий веб-разработчик, который ищет возможность получить опыт работы над реальными проектами в области frontend разработки.","parag2":"У меня есть навыки верстки с использованием HTML и CSS. Верстаю семантично, адаптивно (использую media queries). Я также активно применяю современные возможности CSS3, такие как flex, grid, animation, transition, transform, filters, gradients. Обладаю навыками модульной верстки с использованием методологии БЭМ-нейминга и препроцессоров, таких как SCSS. Кроме того, я знаком с методологией mobile-first. Для сборки проектов я использую Gulp.","parag3":"Я имею опыт работы с основными принципами оптимизации, такими как адаптация графики для retina-дисплеев и минификация исходных файлов.","parag4":"Обладаю навыками работы с Figma на уровне, достаточном для верстальщика.","parag5":"В настоящее время я активно изучаю JavaScript и делаю основной упор на изучение его нативного формата. В будущем я планирую освоить основные фреймворки JavaScript, такие как React, Vue, Angular, а также освоить TypeScript.","parag6":"У меня есть базовые навыки работы с системой контроля версий Git. В процессе работы приучаю себя к использованию интерфейса командной строки.","parag7":"Я готов применить все свои навыки в реальных проектах и учиться на практике. Буду благодарен за возможность присоединиться к вашей команде и внести свой вклад в ваши проекты."},"mylocation":"Расположение","mycurrentLocation":"Россия","phone":"Номер телефона","email":"Почта","emailAdress":"docheshev.dev@yandex.ru"}}')}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return i[e](o,o.exports,c),o.exports}e=function(){const e=document.querySelectorAll("._anim");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const n=e[t],l=n.offsetHeight,r=o(n).top,a=4;let i=window.innerHeight-l/a;l>window.innerHeight&&(i=window.innerHeight-window.innerHeight/a),window.scrollY>r-i&&window.scrollY<r+l&&n.classList.add("_active")}}function o(e){const t=e.getBoundingClientRect(),o=window.scrollX||document.documentElement.scrollLeft,n=window.scrollY||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",t),window.addEventListener("resize",t),setTimeout((()=>{t()}),300)}},t=function(){const e=document.querySelector(".about__img"),t=document.querySelector(".about"),o=document.querySelector(".projects"),n=document.querySelector(".nav");let l=!0;if(e){function r(t){let o=Math.round(t.clientX-e.getBoundingClientRect().x);e.style.transform=`rotateY(${o}deg)`}function a(){t.removeEventListener("mousemove",r),e.style.transform="rotateY(0deg)"}e.addEventListener("click",(function(){l&&(l=!1,e.classList.add("about__img--flip"),setTimeout((function(){l=!0,e.classList.remove("about__img--flip")}),1e3))})),e.addEventListener("mousedown",(function(){t.addEventListener("mousemove",r)})),e.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",r)})),t.addEventListener("mouseup",(function(){a()})),o.addEventListener("mouseover",(function(){a()})),n.addEventListener("mouseover",(function(){a()}))}if(window){function i(){let t=this.scrollY;e.style.transform=`rotateY(${t}deg)`}window.onload=function(){setTimeout((()=>{e.classList.remove("about__img--rotate")}),2e3)},window.addEventListener("scroll",i)}},o=function(){const e=document.querySelector("#modalOpen"),t=document.getElementById("#mobileOverlay"),o=document.querySelector("#mobileNav"),n=document.querySelector(".nav-icon"),l=document.querySelectorAll(".mobile-nav__item");function r(){if(t.classList.toggle("mobile-nav-overlay--open"),o.classList.toggle("mobile-nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll"),o.classList.contains("mobile-nav--open"))for(let e=0;e<l.length;e++)l[e].classList.add("_active")}e.addEventListener("click",r),t.addEventListener("click",r)},n=function(){const e=document.querySelector(".dark-mode-btn");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(e.classList.add("dark-mode-btn--active"),document.body.classList.add("dark")),"dark"===localStorage.getItem("darkMode")?(e.classList.add("dark-mode-btn--active"),document.body.classList.add("dark")):"light"===localStorage.getItem("darkMode")&&(e.classList.remove("dark-mode-btn--active"),document.body.classList.remove("dark")),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{"dark"==(t.matches?"dark":"light")?(e.classList.add("dark-mode-btn--active"),document.body.classList.add("dark"),localStorage.setItem("darkMode","dark")):(e.classList.remove("dark-mode-btn--active"),document.body.classList.remove("dark"),localStorage.setItem("darkMode","light"))})),e.addEventListener("click",(function(){e.classList.toggle("dark-mode-btn--active"),document.body.classList.toggle("dark")?localStorage.setItem("darkMode","dark"):localStorage.setItem("darkMode","light")}))},l=function(){const e=document.querySelector(".change-lang"),t=document.querySelector("html"),o=document.querySelector("#ru"),n=document.querySelector("#en"),l=localStorage.getItem("locale"),r=document.querySelectorAll(".projects-list__link"),a=c(785),i=c(682);let s;function d(){localStorage.setItem("locale","ru"),e.classList.remove("change-lang--active"),r.forEach((e=>{e.classList.add("projects-list__link"),e.classList.remove("projects-list__link-lang")}))}function u(){localStorage.setItem("locale","en"),e.classList.add("change-lang--active"),r.forEach((e=>{e.classList.remove("projects-list__link"),e.classList.add("projects-list__link-lang")}))}"ru"==window.navigator.language.substring(0,2)?(localStorage.setItem("locale","ru"),t.setAttribute("lang","ru"),d(),s=a.ru,"en"==l&&(s=i.en,localStorage.setItem("locale","en"),t.setAttribute("lang","en"),u())):(localStorage.setItem("locale","en"),t.setAttribute("lang","en"),u(),s=i.en,"ru"==l&&(s=a.ru,localStorage.setItem("locale","ru"),t.setAttribute("lang","ru"),d())),n.addEventListener("click",(function(){e.classList.add("change-lang--active"),n&&(localStorage.setItem("locale","en"),t.setAttribute("lang","en")),location.reload()})),o.addEventListener("click",(function(){e.classList.remove("change-lang--active"),o&&(localStorage.setItem("locale","ru"),t.setAttribute("lang","ru")),location.reload()}));const m=document.querySelector(".lang-ntmy"),g=document.querySelector(".lang-person"),p=document.querySelector(".lang-profession"),f=document.querySelector(".lang-text"),y=document.querySelector(".lang-location"),S=document.querySelector(".lang-current-location"),h=document.querySelector(".lang-email");f&&(m.textContent=s.hello,g.textContent=s.person,p.textContent=s.profession,f.textContent=s.text),h&&(y.textContent=s.mylocation,S.textContent=s.mycurrentLocation,h.textContent=s.email);const v=document.querySelectorAll("title");for(let e=0;e<v.length;e++)v[e].textContent=s.title.portfolio;const b=document.querySelectorAll(".lang-main-page");for(let e=0;e<b.length;e++)b[e].textContent=s.main;const k=document.querySelectorAll(".lang-projects");for(let e=0;e<k.length;e++)k[e].textContent=s.title.projects;const w=document.querySelectorAll(".lang-converter");for(let e=0;e<w.length;e++)w[e].textContent=s.converter;const L=document.querySelectorAll(".lang-quiz");for(let e=0;e<L.length;e++)L[e].textContent=s.quiz;const q=document.querySelectorAll(".lang-website");for(let e=0;e<q.length;e++)q[e].textContent=s.website;const x=document.querySelectorAll(".lang-layout");for(let e=0;e<x.length;e++)x[e].textContent=s.table.layout;const C=document.querySelectorAll(".lang-optim");for(let e=0;e<C.length;e++)C[e].textContent=s.table.optim;const I=document.querySelectorAll(".lang-adapt");for(let e=0;e<I.length;e++)I[e].textContent=s.table.adapt;const _=document.querySelectorAll(".lang-method");for(let e=0;e<_.length;e++)_[e].textContent=s.table.method;const E=document.querySelectorAll(".lang-bem");for(let e=0;e<E.length;e++)E[e].textContent=s.table.bem;const A=document.querySelectorAll(".lang-min-html");for(let e=0;e<A.length;e++)A[e].textContent=s.table.minHtml;const M=document.querySelectorAll(".lang-min-css");for(let e=0;e<M.length;e++)M[e].textContent=s.table.minCss;const j=document.querySelectorAll(".lang-min-js");for(let e=0;e<j.length;e++)j[e].textContent=s.table.minJs;const T=document.querySelectorAll(".lang-yes");for(let e=0;e<T.length;e++)T[e].textContent=s.table.yes;const H=document.querySelectorAll(".lang-no");for(let e=0;e<H.length;e++)H[e].textContent=s.table.no;const B=document.querySelectorAll(".lang-skills");for(let e=0;e<B.length;e++)B[e].textContent=s.title.skills;const Y=document.querySelector(".lang-skills-title"),J=document.querySelector(".lang-skills-subtitle");J&&(Y.textContent=s.pageSkillsTitle,J.textContent=s.pageSkillsSubtitle);const z=document.querySelectorAll(".lang-descr-skills");for(let e=0;e<z.length;e++)z[0].textContent=s.descrSkills.parag1,z[1].textContent=s.descrSkills.parag2,z[2].textContent=s.descrSkills.parag3,z[3].textContent=s.descrSkills.parag4,z[4].textContent=s.descrSkills.parag5,z[5].textContent=s.descrSkills.parag6,z[6].textContent=s.descrSkills.parag7;const R=document.querySelectorAll(".lang-contacts");for(let e=0;e<R.length;e++)R[e].textContent=s.title.contacts;const $=document.querySelector(".lang-phone"),G=document.querySelector(".lang-email-adress");G&&($.textContent=s.phone,G.textContent=s.emailAdress,G.href=`mailto:${s.emailAdress}`)},r=function(){document.querySelector(".copy__year").textContent=(new Date).getFullYear()},a=function(){let e=document.querySelector(".progressbar__circle-html"),t=document.querySelector(".progressbar__circle-css"),o=document.querySelector(".progressbar__circle-js"),n=document.querySelector(".progressbar__circle-git"),l=document.querySelector(".progressbar__circle-gulp"),r=document.getElementById("html"),a=document.getElementById("css"),i=document.getElementById("js"),s=document.getElementById("git"),c=document.getElementById("gulp");function d(e,t,o,n,l){if(o){let r=+o.dataset.max;o.textContent=`${t}%`,t==r&&clearInterval(e),n.style.background=`conic-gradient(${l} ${3.6*t}deg, var(--progressbar-line) 0deg)`}}function u(){let n=0,l=setInterval((()=>{n++,d(l,n,r,e,"#f06529")}),30),s=0,c=setInterval((()=>{s++,d(c,s,a,t,"#264de4")}),30),u=0,m=setInterval((()=>{u++,d(m,u,i,o,"#f0db4f")}),30)}function m(){let e=0,t=setInterval((()=>{e++,d(t,e,s,n,"#f34f29")}),30),o=0,r=setInterval((()=>{o++,d(r,o,c,l,"#cf4647")}),30)}setTimeout((()=>{u(),m()}),800),window.addEventListener("scroll",(function e(){const t=document.querySelector(".skills-content__progressbars-front");if(t&&g.matches){let o=t.offsetHeight,n=1.1,l=window.innerHeight-o*n,r=t.getBoundingClientRect().top;window.scrollY>r-l&&window.scrollY<r+o&&(this.removeEventListener("scroll",e),setTimeout((()=>{u()}),900))}})),window.addEventListener("scroll",(function e(){const t=document.querySelector(".skills-content__item-workflow");if(t&&g.matches){let o=t.offsetHeight,n=1.1,l=window.innerHeight-o*n,r=t.getBoundingClientRect().top;window.scrollY>r-l&&window.scrollY<r+o&&(this.removeEventListener("scroll",e),setTimeout((()=>{m()}),900))}}));let g=window.matchMedia("(max-width: 929px)")},function(){const e=document.querySelector(".loader");window.addEventListener("load",(()=>{e&&(setTimeout((()=>{e.classList.add("loader--hidden"),document.body.classList.remove("no-scroll")}),500),setTimeout((()=>{e.parentElement.removeChild(e)}),1e3))}))}(),e(),t(),o(),n(),l(),r(),a()}();