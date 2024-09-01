const closeBtns = document.querySelectorAll(".modallClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
  });
});
const modallBtn = document.querySelectorAll(".modallBtn");
const modallItems = document.querySelectorAll(".modall");
modallBtn.forEach((e) => {
  onTabClick(modallBtn, modallItems, e);
});
function onTabClick(modallBtns, modallItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      modallBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      modallItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentTab.classList.add("active");
    }
  });

}
