document.body.addEventListener("mouseover", () => {
  const meep = document.getElementById("meep");
  meep.play();
});
document.body.addEventListener("mouseleave", () => {
  const meep = document.getElementById("meep");
  meep.pause();
});
