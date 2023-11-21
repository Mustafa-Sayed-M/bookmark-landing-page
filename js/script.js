// ## Get Elements:
// # Header:
const menu = document.querySelector('header nav .links')
// --------------------------
// # Features:
const listItems = document.querySelectorAll('.features .list ul li');
const listSlides = document.querySelectorAll('.features .slides .slide');
// --------------------------
// ## Functions:
// # Function to toggle menu
function toggleMenu() {
    menu.classList.toggle('active');
}
// # Function to add active class when user click on this element
function addActiveClass(ele) {
    removeActiveClassFromItems(listItems)
    ele.classList.add('active');
}
// # Function to remove active class from all items
function removeActiveClassFromItems(arr) {
    arr.forEach(item => {
        item.classList.remove('active');
    })
}
// # Function to change slide
function changeSlide(item) {
    const targetIndex = item.dataset.index;
    removeActiveClassFromItems(listSlides);
    listSlides[targetIndex].classList.add('active');
}