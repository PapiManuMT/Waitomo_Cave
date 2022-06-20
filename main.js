console.log("😎<<--PapiScript-->>")

let homePageButton = document.getElementById('home_page_button');
let accueil = document.getElementById('accueil');
let header = document.getElementById('header');
let selectPage = document.getElementById('select_page');

function start() {
    selectPage.style.display="none";
}
start()

homePageButton.addEventListener('click', () => {
    // header.classList.remove('header_apparition');
    // header.classList.add('header_disparition');
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.add('select_page_apparition');
    setTimeout(displayNone, 1500, accueil)
    setTimeout(displayFlex, 1500, selectPage)
    // setTimeout(displayNone, 1500, header)
})

function displayNone(appletName) {
    appletName.style.display='none';
}
function displayFlex(appletName) {
    appletName.style.display="flex";
}