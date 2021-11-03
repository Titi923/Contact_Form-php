const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const card__flipping = document.querySelectorAll(".card__flipping");
card__flipping.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("card__flipping-flipped");
  })
);