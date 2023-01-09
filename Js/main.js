/* Assign target elements to variables */
let navContent = document.getElementById('nav-content');
let dropdownNavBtn = document.getElementById('dropdown-nav-btn');
let closeBtn = document.getElementById('close-btn');    
    /* listen to click events on dropdown-nav-btn and 
        toggle target elements appropriately 
    */
dropdownNavBtn.onclick = function() {
        this.style.display = 'none';
        navContent.style.display = 'block';
        closeBtn.style.display = 'block';
    }
    /* listen to click events on close-btn and 
        toggle target elements appropriately 
    */
closeBtn.onclick = function() {
    this.style.display = 'none';
    navContent.style.display = 'none';
    dropdownNavBtn.style.display = 'block';
}
/* listen to window resize event and toggle elements appriately */
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