document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    };
});

function showPage(pageName) {
    clearPages();
    var current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

function clearPages() {
    var pages = document.querySelectorAll("main > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage('page1');

document.querySelectorAll("main ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    };
});

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-mode');
  page.classList.toggle('dark-mode');
};