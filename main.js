function Art() {
    window.location = "art.html";
}
function draw() {
    window.location = "draw.html";
}
function paint() {
    window.location = "paint.html";
}
function addart() {
    window.location = "addart.html";
}
function Back(){
    window.location = "courses.html";
}
function dance() {
    window.location = "dance.html";
}
function course(){
    window.location = "courses.html";
}
function homepage(){
    loginpass = document.getElementById("lopinps").value;
    loginuser = document.getElementById("loginun").value;
    if(loginpass = ""){
        swal.fire("Provided Data is Incorrect");
    }
    else{
        window.location = "courses.html";
    }
}