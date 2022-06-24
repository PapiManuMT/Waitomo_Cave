console.log("😎<<--PapiScript-->>")


const homePageButton = document.getElementById('home_page_button');
const accueil = document.getElementById('accueil');
const header = document.getElementById('header');
const selectPage = document.getElementById('select_page');
const bp1Access = document.getElementById("b_page_1_access")
const bp2Access = document.getElementById("b_page_2_access")
const bp3Access = document.getElementById("b_page_3_access")
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

function start() {
    selectPage.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
}
start()


homePageButton.addEventListener('click', () => {
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.add('select_page_apparition');
    setTimeout(displayNone, 1500, accueil)
    setTimeout(displayFlex, 1500, selectPage)
})
bp1Access.addEventListener( 'click', () => {
    event(p1)
})
bp2Access.addEventListener( 'click', () => {
    event(p2)
})
bp3Access.addEventListener( 'click', () => {
    event(p3)
})

function event(p) {
    selectPage.classList.remove("select_page_apparition")
    selectPage.classList.add("select_page_disparition")
    p.classList.add("page_apparition")
    setTimeout(displayNone, 1500, selectPage)
    setTimeout(displayFlex, 1500, p)
}
function displayNone(appletName) {
    appletName.style.display='none';
}
function displayFlex(appletName) {
    appletName.style.display="flex";
}