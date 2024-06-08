var open = false;

  function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if ( !open ) {
    mobileNav.animate(
      [{ top: "0" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
    open = true;
  } else {
    mobileNav.animate(
      [{ top: "calc(-100vh + 150px)" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
    open = false;
    }
  }
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
  const mainContent = document.querySelector(".mainContent");
  mainContent.style.display = "block";
});