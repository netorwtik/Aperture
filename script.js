var modal = document.getElementById("myModal");
var link = document.getElementById("toggleModalLink");

link.onclick = function(event) {
    event.preventDefault();
    modal.classList.add("visible");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("visible");
    }
}

const header = document.getElementById('header');
const images = [
    'image/IMAGE.png',
    'image/mount.png',
    'image/leaves.png',
    'image/snow.png'
];
let currentIndex = 0;

function changeBackground() {
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 10000);