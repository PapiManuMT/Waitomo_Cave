console.log("😎<<--PapiScript-->>")

const head = document.querySelectorAll('head')
const bAccueil = document.getElementById("b_accueil")
const bWaitomo = document.getElementById("b_waitomo")
const bRuakuri = document.getElementById("b_ruakuri")
const bRafting = document.getElementById("b_rafting")
const bAbout = document.getElementById("b_about")

const homePageButton = document.getElementById('home_page_button');
const accueil = document.getElementById('accueil');

const selectPage = document.getElementById('select_page');
const bp1Access = document.getElementById("b_page_1_access")
const bp2Access = document.getElementById("b_page_2_access")
const bp3Access = document.getElementById("b_page_3_access")

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

const page = document.querySelectorAll(".page")

function start() {
    displayNone(selectPage)
    page.forEach((pages ) => {
        displayNone(pages)
    })
}
start()
function fButton() {
    page.forEach((pages, index) => {
        accueil.classList.remove("accueil_open")
        accueil.classList.add("accueil_close")
        pages.classList.remove("page_apparition")
        pages.classList.add("page_disparition")
        selectPage.classList.remove("select_page_apparition")
        selectPage.classList.add("select_page_disparition")
        setTimeout(displayNone, 1500, pages)
        setTimeout(displayNone, 1500, selectPage)
        setTimeout(displayNone, 1500, accueil)
    })
}

bAccueil.addEventListener('click', () => {
    fButton()
    setTimeout(accueil.classList.remove("accueil_close"))
    setTimeout(accueil.classList.add("accueil_open"))
    setTimeout(displayFlex, 1500, accueil)
})
bWaitomo.addEventListener('click', () => {
    fButton()
    setTimeout(p1.classList.remove('page_disparition'))
    setTimeout(p1.classList.add('page_apparition'))
    setTimeout(displayFlex, 1500, p1)
})

homePageButton.addEventListener('click', () => {
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.remove("select_page_disparition")
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
    p.classList.remove('page_disparition')
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