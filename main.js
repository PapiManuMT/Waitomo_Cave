homePageButton = document.getElementById('home_page_button');
accueil = document.getElementById('accueil');
header = document.getElementById('header');
selectPage = document.getElementById('select_page');

homePageButton.addEventListener('click', () => {
    header.classList.remove('header_apparition');
    header.classList.add('header_disparition');
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.add('select_page_apparition');
    setTimeout(displayNone, 1500, accueil)
})

function displayNone(appletName) {
    appletName.classList.add("display_none")
}

