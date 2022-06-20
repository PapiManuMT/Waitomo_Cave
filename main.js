console.log("😎<<--PapiScript-->>")

let homePageButton = document.getElementById('home_page_button');
let accueil = document.getElementById('accueil');
let header = document.getElementById('header');
let selectPage = document.getElementById('select_page');
let bp1Access = document.getElementById("b_page_1_access")
let bp2Access = document.getElementById("b_page_2_access")
let bp3Access = document.getElementById("b_page_3_access")
let page1 = document.getElementById('page_1')

function start() {
    selectPage.style.display="none";
    page1.style.display="none";
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

bp1Access.addEventListener( 'click', () => {
    selectPage.classList.remove("select_page_apparition")
    selectPage.classList.add("select_page_disparition")
    page1.classList.add("page_apparition")
    setTimeout(displayNone, 1500, selectPage)
    setTimeout(displayFlex, 1500, page1)


})

function displayNone(appletName) {
    appletName.style.display='none';
}
function displayFlex(appletName) {
    appletName.style.display="flex";
}