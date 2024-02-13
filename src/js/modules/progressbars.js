function progressbars() {
  let circleProgressHtml = document.querySelector(".progressbar__circle-html"),
    circleProgressCss = document.querySelector(".progressbar__circle-css"),
    circleProgressJs = document.querySelector(".progressbar__circle-js"),
    circleProgressGit = document.querySelector(".progressbar__circle-git"),
    circleProgressGulp = document.querySelector(".progressbar__circle-gulp");

  let progressValueHtml = document.getElementById("html"),
    progressValueCss = document.getElementById("css"),
    progressValueJs = document.getElementById("js"),
    progressValueGit = document.getElementById("git"),
    progressValueGulp = document.getElementById("gulp");

  let speed = 30;

  function progressbar(
    interval,
    progressStartValue,
    progressValue,
    circleProgress,
    colorProgress
  ) {
    if (progressValue) {
      let progressEndValue = +progressValue.dataset.max;

      progressValue.textContent = `${progressStartValue}%`;

      if (progressStartValue == progressEndValue) {
        clearInterval(interval);
      }

      circleProgress.style.background = `conic-gradient(${colorProgress} ${
        progressStartValue * 3.6
      }deg, var(--progressbar-line) 0deg)`;
    }
  }

  function progressbarFront() {
    let progressStartValueHtml = 0;
    let progressHtml = setInterval(() => {
      progressStartValueHtml++;

      progressbar(
        progressHtml,
        progressStartValueHtml,
        progressValueHtml,
        circleProgressHtml,
        "#f06529"
      );
    }, speed);

    let progressStartValueCss = 0;
    let progressCss = setInterval(() => {
      progressStartValueCss++;

      progressbar(
        progressCss,
        progressStartValueCss,
        progressValueCss,
        circleProgressCss,
        "#264de4"
      );
    }, speed);

    let progressStartValueJs = 0;
    let progressJs = setInterval(() => {
      progressStartValueJs++;

      progressbar(
        progressJs,
        progressStartValueJs,
        progressValueJs,
        circleProgressJs,
        "#f0db4f"
      );
    }, speed);
  }
  function progressbarWorkflow() {
    let progressStartValueGit = 0;
    let progressGit = setInterval(() => {
      progressStartValueGit++;

      progressbar(
        progressGit,
        progressStartValueGit,
        progressValueGit,
        circleProgressGit,
        "#f34f29"
      );
    }, speed);

    let progressStartValueGulp = 0;
    let progressGulp = setInterval(() => {
      progressStartValueGulp++;

      progressbar(
        progressGulp,
        progressStartValueGulp,
        progressValueGulp,
        circleProgressGulp,
        "#cf4647"
      );
    }, speed);
  }

  setTimeout(() => {
    progressbarFront();
    progressbarWorkflow();
  }, 800);

  window.addEventListener("scroll", onScrollFront);
  window.addEventListener("scroll", onScrollWorkflow);

  let mediaQueryTablet = window.matchMedia("(max-width: 929px)");

  function onScrollFront() {
    const skillsFront = document.querySelector(
      ".skills-content__progressbars-front"
    );
    if (skillsFront) {
      if (mediaQueryTablet.matches) {
        let skillsFrontHeight = skillsFront.offsetHeight;
        let animStart = 1.1;
        let skillsFrontPoint =
          window.innerHeight - skillsFrontHeight * animStart;
        let skillsFrontOffset = skillsFront.getBoundingClientRect().top;

        if (
          window.scrollY > skillsFrontOffset - skillsFrontPoint &&
          window.scrollY < skillsFrontOffset + skillsFrontHeight
        ) {
          this.removeEventListener("scroll", onScrollFront);
          setTimeout(() => {
            progressbarFront();
          }, 900);
        }
      }
    }
  }
  function onScrollWorkflow() {
    const skillsWorkflow = document.querySelector(
      ".skills-content__item-workflow"
    );

    if (skillsWorkflow) {
      if (mediaQueryTablet.matches) {
        let skillsWorkflowHeight = skillsWorkflow.offsetHeight;
        let animStart = 1.1;
        let skillsWorkflowPoint =
          window.innerHeight - skillsWorkflowHeight * animStart;
        let skillsWorkflowOffset = skillsWorkflow.getBoundingClientRect().top;

        if (
          window.scrollY > skillsWorkflowOffset - skillsWorkflowPoint &&
          window.scrollY < skillsWorkflowOffset + skillsWorkflowHeight
        ) {
          this.removeEventListener("scroll", onScrollWorkflow);

          setTimeout(() => {
            progressbarWorkflow();
          }, 900);
        }
      }
    }
  }
}
export default progressbars;
