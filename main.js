console.log("😎<<--PapiScript-->>")

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

function start() {
    selectPage.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
}
start()

bAccueil.addEventListener('click', () => {
    selectPage.classList.remove("select_page_apparition")
    selectPage.classList.add("select_page_disparition")
    p1.classList.remove("page_apparition")
    p1.classList.add("page_disparition")
    p2.classList.remove("page_apparition")
    p2.classList.add("page_disparition")
    p3.classList.remove("page_apparition")
    p3.classList.add("page_disparition")
    accueil.classList.add('accueil_open')
    setTimeout(displayNone, 1500, selectPage)
    setTimeout(displayNone, 1500, p1)
    setTimeout(displayNone, 1500, p2)
    setTimeout(displayNone, 1500, p3)
    setTimeout(accueil.classList.remove("accueil_close"))
    setTimeout(accueil.classList.add("accueil_open"))
    setTimeout(displayFlex, 1500, accueil)
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