function flipImg() {
  const aboutImg = document.querySelector(".about__img");
  const about = document.querySelector(".about");
  const projects = document.querySelector(".projects");
  const nav = document.querySelector(".nav");

  let isClickable = true;
  if (aboutImg) {
    aboutImg.addEventListener("click", function () {
      if (!isClickable) return;

      isClickable = false;
      aboutImg.classList.add("about__img--flip");

      setTimeout(function () {
        isClickable = true;
        aboutImg.classList.remove("about__img--flip");
      }, 1000);
    });

    aboutImg.addEventListener("mousedown", function () {
      about.addEventListener("mousemove", moveImg);
    });
    aboutImg.addEventListener("mouseup", function () {
      about.removeEventListener("mousemove", moveImg);
    });

    about.addEventListener("mouseup", function () {
      removeRotateImg();
    });
    projects.addEventListener("mouseover", function () {
      removeRotateImg();
    });
    nav.addEventListener("mouseover", function () {
      removeRotateImg();
    });

    function moveImg(e) {
      let moveX = Math.round(e.clientX - aboutImg.getBoundingClientRect().x);
      aboutImg.style.transform = `rotateY(${moveX}deg)`;
    }

    function removeRotateImg() {
      about.removeEventListener("mousemove", moveImg);
      aboutImg.style.transform = `rotateY(0deg)`;
    }
  }
  if (window) {
    window.onload = function () {
      setTimeout(() => {
        aboutImg.classList.remove("about__img--rotate");
      }, 2000);
    };

    window.addEventListener("scroll", rotateImgScrolling);
    function rotateImgScrolling() {
      let scrolled = this.scrollY;
      aboutImg.style.transform = `rotateY(${scrolled}deg)`;
    }
  }
}

export default flipImg;
