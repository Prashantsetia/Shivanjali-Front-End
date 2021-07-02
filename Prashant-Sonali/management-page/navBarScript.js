var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


const slider = document.getElementById('slider');

function scrollright() {
    console.log("right")

    slider.scrollLeft += 380;
}

function scrollleft() {
    console.log("left")

    slider.scrollLeft -= 380;
}