const cardOption = document.querySelector(".card-rating");
const btnRating = document.querySelectorAll(".rating-btn");
const submit = document.querySelector(".submit");
const cardSelected = document.querySelector(".card-selected");
const optionSelected = document.querySelector(".option");
let rating;

const animation = () => {
  anime({
    targets: ".card",
    opacity: [0, 1],
    translateX: [-7000, 0],
    easing: "easeOutExpo",
  });
};

btnRating.forEach((e) => {
  e.addEventListener("click", () => {
    rating = e.value;
  });
});

submit.addEventListener("click", () => {
  cardSelected.classList.remove("inactive");
  cardOption.classList.add("inactive");
  optionSelected.innerHTML = rating;
  animation();
});

animation();
