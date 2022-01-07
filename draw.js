function Back() {
    window.location = "art.html";
}
function caricature() {
    window.location = "caricature.html";
}
function persective() {
    window.location = "per.html";
}
function photo() {
    window.location = "photo.html";
}
function ske(){
    window.location = "ske.html";
}
function back(){
    window.location = "draw.html";
}
const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
