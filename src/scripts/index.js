window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".cards")[0];

  const card1 = cards.children[0];
  const card2 = cards.children[1];
  const card3 = cards.children[2];

  const introOffsetY =
    window.scrollY +
    card1.getBoundingClientRect().top +
    card1.getBoundingClientRect().height;

  const windowBottom = window.scrollY + window.innerHeight;

  if (introOffsetY <= windowBottom) {
    showCard(card1);
    setTimeout(() => showCard(card2), 400);
    setTimeout(() => showCard(card3), 800);
  }
});

function showCard(el) {
  el.style.opacity = "1";
}
