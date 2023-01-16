// Boton de header en pantalla inferior a 900px//
let navContent = document.getElementById('nav-content');
let dropdownNavBtn = document.getElementById('dropdown-nav-btn');
let closeBtn = document.getElementById('close-btn');    

dropdownNavBtn.onclick = function() {
        this.style.display = 'none';
        navContent.style.display = 'block';
        closeBtn.style.display = 'block';
    }

closeBtn.onclick = function() {
    this.style.display = 'none';
    navContent.style.display = 'none';
    dropdownNavBtn.style.display = 'block';
}

window.onresize = function() {
    if (window.innerWidth < 900) {
        dropdownNavBtn.style.display = 'block';
        navContent.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        navContent.style.display = 'block';
        dropdownNavBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    }
}

//Items colapsables y expandibles//
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}
//aria-expanded//
function myFunction() {
    var x = document.getElementById("p2").getAttribute("aria-expanded"); 
    if (x == "true") 
    {
    x = "false"
    } else {
    x = "true"
    }
    document.getElementById("p2").setAttribute("aria-expanded", x);
    }

//Image Animations//
let elementsArray = document.querySelectorAll(".tile");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();