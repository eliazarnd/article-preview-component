const mobileBreakPoint = 375;

const $share_btn = document.querySelector(
  ".main-container-information__share-icon"
);

const $share_btn_mobile = document.getElementById("btn-mobile");

const $main_container = document.querySelector(".main-container");

const $share_popup_container = document.querySelector(".share-popup-container");

$share_btn.addEventListener("click", (event) => {
  console.log(event.target);
  const windowWidth = window.innerWidth;
  if (
    event.target.classList.contains("main-container-information__share-icon")
  ) {
    $share_btn.classList.toggle("active");
    //const $share_popup = event.target.children[0];

    if(windowWidth <= mobileBreakPoint){
      $share_popup_container.classList.toggle("active");  
    }
    else{
      $share_popup_container.classList.toggle("share-btn--active");
    }
  }

  console.log($share_popup_container);
});



$share_btn_mobile.addEventListener("click", (event) =>{
  console.log("Click potente");
  event.stopPropagation();
  $share_popup_container.classList.remove("active"); 
  $share_btn.classList.remove("active");

})

$main_container.addEventListener("click", (event) => {
  /*  if ($share_popup_container.classList.contains("share-btn--active")) {
    $share_popup_container.classList.remove("share-btn--active");
  } */
});
