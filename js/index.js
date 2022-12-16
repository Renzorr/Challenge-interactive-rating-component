const cardOption = document.querySelector(".card-rating");
const btnRating = document.querySelectorAll(".rating-btn");
const submit = document.querySelector(".submit");
const cardSelected = document.querySelector(".card-selected");
const optionSelected = document.querySelector(".option");
let rating;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const animation = () => {
  anime({
    targets: ".card",
    opacity: [0, 1],
    translateX: [-7000, 0],
    easing: "easeOutExpo",
  });
};

const validateOption = () => {
  if (rating === undefined) {
    Toast.fire({
      icon: "error",
      title: "Select an option",
    });
  } else {
    cardSelected.classList.remove("inactive");
    cardOption.classList.add("inactive");
    optionSelected.innerHTML = rating;
    animation();
  }
};

btnRating.forEach((e) => {
  e.addEventListener("click", () => {
    rating = e.value;
  });
});

submit.addEventListener("click", validateOption);

animation();
