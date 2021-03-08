function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const dimmer = document.querySelector(".dimmer");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        dimmer.classList.toggle("show");
        //document.getElementsByClassName('dimmer')[0].style.backgroundColor = 'white';
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

const TypeWriter = function(textElement, words) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isFinished = false;
}

// Type Method
TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if(this.isFinished) {
        // Finished outputting
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // Insert txt into element
    this.textElement.innerHTML = `<h4 class="txt">${this.txt}</h4>`;

    //
    setTimeout(() => this.type(), 300)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector(".text-type");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    new TypeWriter(txtElement, words);
}

navSlide();
