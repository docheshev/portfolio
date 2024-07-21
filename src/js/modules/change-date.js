function changeDate() {
  const currentDate = document.querySelector(".copy__year");

  currentDate.textContent = new Date().getFullYear();
}

export default changeDate;
