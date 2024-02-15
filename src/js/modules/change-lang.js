function change() {
  const changeLang = document.querySelector(".change-lang");
  const langAttr = document.querySelector("html");
  const ruBtn = document.querySelector("#ru");
  const enBtn = document.querySelector("#en");
  const locale = localStorage.getItem("locale");
  const projectsSectionCover = document.querySelectorAll(
    ".projects-list__link"
  );
  const ruLang = require("./ru-lang.json");
  const enLang = require("./en-lang.json");

  let language = window.navigator.language;
  let languageFistTwo = language.substring(0, 2);

  if (languageFistTwo == "ru") {
    locationRuLang();
  } else {
    locationOtherLang();
  }

  let lang;

  function locationRuLang() {
    localStorage.setItem("locale", "ru");
    langAttr.setAttribute("lang", "ru");
    changeRuLang();
    lang = ruLang.ru;
    if (locale == "en") {
      lang = enLang.en;
      localStorage.setItem("locale", "en");
      langAttr.setAttribute("lang", "en");
      changeOtherLang();
    }
  }
  function locationOtherLang() {
    localStorage.setItem("locale", "en");
    langAttr.setAttribute("lang", "en");
    changeOtherLang();
    lang = enLang.en;
    if (locale == "ru") {
      lang = ruLang.ru;
      localStorage.setItem("locale", "ru");
      langAttr.setAttribute("lang", "ru");
      changeRuLang();
    }
  }
  function changeRuLang() {
    localStorage.setItem("locale", "ru");
    changeLang.classList.remove("change-lang--active");
    projectsSectionCover.forEach((el) => {
      el.classList.add("projects-list__link");
      el.classList.remove("projects-list__link-lang");
    });
  }
  function changeOtherLang() {
    localStorage.setItem("locale", "en");
    changeLang.classList.add("change-lang--active");
    projectsSectionCover.forEach((el) => {
      el.classList.remove("projects-list__link");
      el.classList.add("projects-list__link-lang");
    });
  }

  enBtn.addEventListener("click", function () {
    changeLang.classList.add("change-lang--active");
    if (enBtn) {
      localStorage.setItem("locale", "en");
      langAttr.setAttribute("lang", "en");
    }
    location.reload();
  });
  ruBtn.addEventListener("click", function () {
    changeLang.classList.remove("change-lang--active");
    if (ruBtn) {
      localStorage.setItem("locale", "ru");
      langAttr.setAttribute("lang", "ru");
    }
    location.reload();
  });

  const ntmy = document.querySelector(".lang-ntmy");
  const person = document.querySelector(".lang-person");
  const profession = document.querySelector(".lang-profession");
  const text = document.querySelector(".lang-text");
  const myLocation = document.querySelector(".lang-location");
  const myCurrentLocation = document.querySelector(".lang-current-location");
  const email = document.querySelector(".lang-email");
  if ((ntmy, person, profession, text)) {
    ntmy.textContent = lang.hello;
    person.textContent = lang.person;
    profession.textContent = lang.profession;
    text.textContent = lang.text;
  }
  if ((myLocation, myCurrentLocation, email)) {
    myLocation.textContent = lang.mylocation;
    myCurrentLocation.textContent = lang.mycurrentLocation;
    email.textContent = lang.email;
  }
  const pageTitle = document.querySelectorAll("title");
  for (let i = 0; i < pageTitle.length; i++) {
    const el = pageTitle[i];
    el.textContent = lang.title.portfolio;
  }
  const mainPageTitle = document.querySelectorAll(".lang-main-page");
  for (let i = 0; i < mainPageTitle.length; i++) {
    const el = mainPageTitle[i];
    el.textContent = lang.main;
  }
  const projectsTitle = document.querySelectorAll(".lang-projects");
  for (let i = 0; i < projectsTitle.length; i++) {
    const el = projectsTitle[i];
    el.textContent = lang.title.projects;
  }
  const converterTitle = document.querySelectorAll(".lang-converter");
  for (let i = 0; i < converterTitle.length; i++) {
    const el = converterTitle[i];
    el.textContent = lang.converter;
  }
  const quizTitle = document.querySelectorAll(".lang-quiz");
  for (let i = 0; i < quizTitle.length; i++) {
    const el = quizTitle[i];
    el.textContent = lang.quiz;
  }
  const goToWebsite = document.querySelectorAll(".lang-website");
  for (let i = 0; i < goToWebsite.length; i++) {
    const el = goToWebsite[i];
    el.textContent = lang.website;
  }
  const tableLayout = document.querySelectorAll(".lang-layout");
  for (let i = 0; i < tableLayout.length; i++) {
    const el = tableLayout[i];
    el.textContent = lang.table.layout;
  }
  const tableOptim = document.querySelectorAll(".lang-optim");
  for (let i = 0; i < tableOptim.length; i++) {
    const el = tableOptim[i];
    el.textContent = lang.table.optim;
  }
  const tableAdapt = document.querySelectorAll(".lang-adapt");
  for (let i = 0; i < tableAdapt.length; i++) {
    const el = tableAdapt[i];
    el.textContent = lang.table.adapt;
  }
  const tableMethod = document.querySelectorAll(".lang-method");
  for (let i = 0; i < tableMethod.length; i++) {
    const el = tableMethod[i];
    el.textContent = lang.table.method;
  }
  const tableBem = document.querySelectorAll(".lang-bem");
  for (let i = 0; i < tableBem.length; i++) {
    const el = tableBem[i];
    el.textContent = lang.table.bem;
  }
  const tableMinHtml = document.querySelectorAll(".lang-min-html");
  for (let i = 0; i < tableMinHtml.length; i++) {
    const el = tableMinHtml[i];
    el.textContent = lang.table.minHtml;
  }
  const tableMinCss = document.querySelectorAll(".lang-min-css");
  for (let i = 0; i < tableMinCss.length; i++) {
    const el = tableMinCss[i];
    el.textContent = lang.table.minCss;
  }
  const tableMinJs = document.querySelectorAll(".lang-min-js");
  for (let i = 0; i < tableMinJs.length; i++) {
    const el = tableMinJs[i];
    el.textContent = lang.table.minJs;
  }
  const tableYes = document.querySelectorAll(".lang-yes");
  for (let i = 0; i < tableYes.length; i++) {
    const el = tableYes[i];
    el.textContent = lang.table.yes;
  }
  const tableNo = document.querySelectorAll(".lang-no");
  for (let i = 0; i < tableNo.length; i++) {
    const el = tableNo[i];
    el.textContent = lang.table.no;
  }
  const skills = document.querySelectorAll(".lang-skills");
  for (let i = 0; i < skills.length; i++) {
    const el = skills[i];
    el.textContent = lang.title.skills;
  }
  const pageSkillsTitle = document.querySelector(".lang-skills-title");
  const pageSkillsSubtitle = document.querySelector(".lang-skills-subtitle");
  if ((pageSkillsTitle, pageSkillsSubtitle)) {
    pageSkillsTitle.textContent = lang.pageSkillsTitle;
    pageSkillsSubtitle.textContent = lang.pageSkillsSubtitle;
  }
  const descrSkills = document.querySelectorAll(".lang-descr-skills");
  for (let i = 0; i < descrSkills.length; i++) {
    descrSkills[0].textContent = lang.descrSkills.parag1;
    descrSkills[1].textContent = lang.descrSkills.parag2;
    descrSkills[2].textContent = lang.descrSkills.parag3;
    descrSkills[3].textContent = lang.descrSkills.parag4;
    descrSkills[4].textContent = lang.descrSkills.parag5;
    descrSkills[5].textContent = lang.descrSkills.parag6;
    descrSkills[6].textContent = lang.descrSkills.parag7;
  }
  const contacts = document.querySelectorAll(".lang-contacts");
  for (let i = 0; i < contacts.length; i++) {
    const el = contacts[i];
    el.textContent = lang.title.contacts;
  }
  const phoneNumber = document.querySelector(".lang-phone");
  const emailAdress = document.querySelector(".lang-email-adress");
  if ((phoneNumber, emailAdress)) {
    phoneNumber.textContent = lang.phone;
    emailAdress.textContent = lang.emailAdress;
    emailAdress.href = `mailto:${lang.emailAdress}`;
  }
}

export default change;
