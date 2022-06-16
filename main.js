homePageButton = document.getElementById('home_page_button');
accueil = document.getElementById('accueil');
header = document.getElementById('header');
selectPage = document.getElementById('select_page');

function start() {
    selectPage.style.display="none";
}
start()

homePageButton.addEventListener('click', () => {
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.add('select_page_apparition');
    setTimeout(displayNone, 1500, accueil)
    setTimeout(displayFlex, 1500, selectPage)
})

function displayNone(appletName) {
    appletName.classList.add("display_none")
}
function displayFlex(appletName) {
    appletName.style.display="flex";
}