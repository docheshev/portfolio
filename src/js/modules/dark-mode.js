function dark() {
  const darkModeBtn = document.querySelector(".dark-mode-btn");

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkModeBtn.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  }

  if (localStorage.getItem("darkMode") === "dark") {
    darkModeBtn.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  } else if (localStorage.getItem("darkMode") === "light") {
    darkModeBtn.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (evt) => {
      const colorScheme = evt.matches ? "dark" : "light";

      if (colorScheme === "dark") {
        darkModeBtn.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        darkModeBtn.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
      }
    });

  darkModeBtn.addEventListener("click", function () {
    darkModeBtn.classList.toggle("dark-mode-btn--active");
    const onDarkTheme = document.body.classList.toggle("dark");

    if (onDarkTheme) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
  });
}

export default dark;
