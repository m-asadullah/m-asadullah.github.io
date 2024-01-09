// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    contentOnScroll();
};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function contentOnScroll() {
    if (window.scrollY > sticky) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
}

//banner of cookies to close it
document.querySelector('.cookie-banner-close').addEventListener('click', function() {
    document.querySelector('.cookie-banner').style.display = 'none';
});
