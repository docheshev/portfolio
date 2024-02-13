import loader from "./modules/loader.js";
loader();
import animations from "./modules/animations.js";
animations();
import flipImg from "./modules/flipImg.js";
flipImg();
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
import dark from "./modules/dark-mode.js";
dark();
import change from "./modules/change-lang.js";
change();
import changeDate from "./modules/change-date.js";
changeDate();
import progressbars from "./modules/progressbars.js";
progressbars();

window.onscroll = () => {
  history.pushState("", "", window.location.pathname);
};
