// Hamburger Bar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".france-nav-links");
const links = document.querySelectorAll(".france-nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade-nav");
    });
});

var slideIndex = 1;
showSlides(slideIndex);

// Slideshow
    // nextSlide/previousSlide controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

    // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
    // Function for dots on slideshow
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myFranceSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Countdown to Bastille Day
function countdown() {
    var countDownDate = new Date("Jul 11, 2020 00:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("bastille-day").innerHTML = days + " day(s), " + hours + " hour(s), "
            + minutes + " minute(s) and " + seconds + " second(s) ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("bastille-day").innerHTML = "COUNTDOWN EXPIRED";
        }
    }, 1000);
}