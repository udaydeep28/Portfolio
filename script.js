function runTypedAnimation() {
  var typed = new Typed("#element", {
    strings: ["Web Developer.", "Programmer.", "Web Designer."],
    typeSpeed: 90,
    showCursor: false,
  });
}
runTypedAnimation();
setInterval(runTypedAnimation, 8000);

function navMenu() {
  const menu = document.querySelector(".menu-list");
  const menuBttn = document.querySelector(".menu-bttn");
  const cancelBttn = document.querySelector(".cancel-bttn");
  menuBttn.onclick = () => {
    menu.classList.add("active");
    menuBttn.classList.add("hide");
  };
  cancelBttn.onclick = () => {
    menu.classList.remove("active");
    menuBttn.classList.remove("hide");
  };
}
navMenu();
