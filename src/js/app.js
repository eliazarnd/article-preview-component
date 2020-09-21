const $share_btn = document.querySelector(
  ".main-container-information__share-icon"
);

const $main_container = document.querySelector(".main-container");

const $share_popup_container = document.querySelector(".share-popup-container");

$share_btn.addEventListener("click", (event) => {
  console.log(event.target);

  if (
    event.target.classList.contains("main-container-information__share-icon")
  ) {
    $share_btn.classList.toggle("active");
    //const $share_popup = event.target.children[0];
    $share_popup_container.classList.toggle("share-btn--active");
  }

  console.log($share_popup_container);
});

$main_container.addEventListener("click", (event) => {
  /*  if ($share_popup_container.classList.contains("share-btn--active")) {
    $share_popup_container.classList.remove("share-btn--active");
  } */
});
