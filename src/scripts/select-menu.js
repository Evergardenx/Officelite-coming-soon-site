const selectMenu = document.querySelector(".select-menu");
const selectMenuHeader = document.querySelector(".select-menu__header-title");
const selectMenuItem = document.querySelectorAll(".select-menu__item");

for (let i = 0; i < selectMenuItem.length; i++) {
  const item = selectMenuItem[i];

  item.addEventListener("click", () => {
    removeAllSelects();

    item.classList.add("select-menu__item--active");
    selectMenuHeader.innerHTML = item.innerHTML;
    selectMenu.removeAttribute("open");
  });
}

function removeAllSelects() {
  for (let i = 0; i < selectMenuItem.length; i++) {
    const item = selectMenuItem[i];
    item.classList.remove("select-menu__item--active");
  }
}