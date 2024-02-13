function mobileNav() {
  const navBtnOpen = document.querySelector("#modalOpen");
  const navOverlay = document.getElementById("#mobileOverlay");
  const nav = document.querySelector("#mobileNav");
  const navIcon = document.querySelector(".nav-icon");
  const navItems = document.querySelectorAll(".mobile-nav__item");

  navBtnOpen.addEventListener("click", toggleMobileNav);
  navOverlay.addEventListener("click", toggleMobileNav);

  function toggleMobileNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    navIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
    if (nav.classList.contains("mobile-nav--open")) {
      for (let i = 0; i < navItems.length; i++) {
        const navItem = navItems[i];
        navItem.classList.add("_active");
      }
    }
  }
}

export default mobileNav;
