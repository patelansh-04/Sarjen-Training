// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("details");
var btn1 = document.getElementById("details1");
var btn2 = document.getElementById("details2");
var btn3 = document.getElementById("details3");
var btn4 = document.getElementById("details4");
var btn5 = document.getElementById("details5");
var btn6 = document.getElementById("details6");
var btn7 = document.getElementById("details7");
var btn8 = document.getElementById("details8");
var btn9 = document.getElementById("details9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
    modal.style.display = "block";
}

btn5.onclick = function() {
    modal.style.display = "block";
}

btn6.onclick = function() {
    modal.style.display = "block";
}

btn7.onclick = function() {
    modal.style.display = "block";
}

btn8.onclick = function() {
    modal.style.display = "block";
}

btn9.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}