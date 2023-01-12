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