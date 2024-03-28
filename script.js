let ul = document.querySelector('ul');

document.querySelector('#menu-btn').onclick = () => {
  ul.classList.toggle('active');
};


var displayDrop = document.getElementById("displyDrop")
var dropDown = document.getElementById("dropDown")
var closeDrop = document.getElementById("closeDrop")
closeDrop.addEventListener("click", function () {
  dropDown.style.display = "none"
})
//Only targeted 8 buttons for model display
var allBtn = document.querySelectorAll("button")
var arry = Array.from(allBtn)

for (var i = 0; i <= 8; i++) {
  arry[i].addEventListener("click", function () {
    dropDown.style.display = "flex"
  })
} 