function navScroll() {
  // Clear url hash page & add smooth scroll
  const navLinks = document.querySelectorAll(".nav-link");
  for (const link of navLinks) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);

      const topOffset = 50;
      const elementPos = scrollTarget.getBoundingClientRect().top;
      const offsetPos = elementPos - topOffset;

      window.scrollBy({
        top: offsetPos,
        behavior: "smooth",
      });
    });
  }
}
export default navScroll;
