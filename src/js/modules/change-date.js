function changeDate() {
  let currentDate = document.querySelector(".copy__year");

  currentDate.textContent = new Date().getFullYear();
}

export default changeDate;
