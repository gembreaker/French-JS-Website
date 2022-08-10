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

// Check answers to quiz
function checkAnswers() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Paris" || question1 == "paris"){
        correct++;
    }
    if (question2 == "Arc de triomphe") {
        correct++;
    }
    if (question3 == "Bonjour") {
        correct++;
    }

    var messages = ["Awesome job! Well done.", "Eh. That's okay... I guess.", "You failed!"];
    var pictures = ["Images/You-Killed-It.gif", "Images/meh.gif", "Images/Shaking-head.gif"]

    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}

// Expands text to view more about the history of France
function findoutmore() {
    moreinfo = document.getElementById("moretext");
    moreinfo.innerHTML = "In 700-500BC the Celtic Gauls arrive in France. In 58-50BC Roman Emperor Julius Caesar defeats the Gauls and France becomes part of the Roman Empire until 476AD. France was ruled by kings for many centuries until the storming of the Bastille during the French Revolution in 1789. Then Napoleon became Emperor of the French Republic until he was sent to exile.";
}

// Changes the colour of the text
function changecolor(thecolor) {
    thetext = document.getElementById("mytext");
    thetext.style.color = thecolor
}

// Change the font style
function changestyle(thefont) {
    thetext = document.getElementById("mytext");
    thetext.style.fontFamily = thefont
}

// Changes the image when user hovers over it
    // Image one
var img1 = new Image()
img1.src = "Images/Eiffel-Tower.jpg"

    // Image two
var img2 = new Image()
img2.src = "Images/French-Flag.png"

    // Changing images function
function changeimage(firstimage, secondimage) {
    firstimage.src = secondimage.src
}

// Styles the title of the home page
function changetitlestyle(textchanged) {
    textchanged.style.color = '#050e52'
    textchanged.style.border = 'solid'
    textchanged.style.fontFamily = 'algerian';
}

// Type text
    // Arrays for different messages typed out
const texts = ['Learn facts about France', 'Learn French National Holidays', 'Quiz yourself on France'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

    // Function for the typing text
(function typing() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.type-writing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(typing, 400);
})();