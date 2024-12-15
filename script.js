const toggleIcon = document.querySelector(".toggle__icon");
const navigationList = document.querySelector(".navigation__list");

let toggle = false;

toggleIcon.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  toggle = !toggle;
  if (toggle) {
    toggleIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    navigationList.classList.add("show");
  } else {
    toggleIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    navigationList.classList.remove("show");
  }
}
