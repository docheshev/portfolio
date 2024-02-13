function loader() {
  const loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    if (loader) {
      setTimeout(() => {
        loader.classList.add("loader--hidden");
        document.body.classList.remove("no-scroll");
      }, 500);
      setTimeout(() => {
        loader.parentElement.removeChild(loader);
      }, 1000);
    }
  });
}

export default loader;
