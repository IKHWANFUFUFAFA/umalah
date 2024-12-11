var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
var slideIndex = 0;
var totalSlides = document.getElementsByClassName("mySlides").length;

function showSlides(n) {
    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }
    document.querySelector('.slides').style.transform = "translateX(" + (-slideIndex * 100) + "%)";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

showSlides(slideIndex);
