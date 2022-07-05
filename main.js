console.log("😎<<--PapiScript-->>")

const background = document.getElementById('background')

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

const footer = document.getElementById('footer')
const footerBackground= document.getElementById('footer_background')

function start() {
    displayNone(selectPage)
    page.forEach((pages ) => {
        displayNone(pages)
    })
    displayNone(footer)
    classList_footer(footerBackground)
    backdropFilterDel()
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
        footer.classList.add('page_disparition')
        footer.classList.remove("page_apparition")
        setTimeout(displayNone, 1500, pages)
        setTimeout(displayNone, 1500, selectPage)
        setTimeout(displayNone, 1500, accueil)
        setTimeout(displayNone, 1500, footer)
    })
}

bAccueil.addEventListener('click', () => {
    fButton()
    accueil.classList.remove("accueil_close")
    accueil.classList.add("accueil_open")
    setTimeout(displayFlex, 1500, accueil)
    backdropFilterDel()
})
bWaitomo.addEventListener('click', () => {
    fButton()
    classList(p1)
    setTimeout(displayFlex, 1500, p1)
})
bRuakuri.addEventListener('click', () => {
    fButton()
    classList(p2)
    setTimeout(displayFlex, 1500, p2)
})
bRafting.addEventListener('click', () => {
    fButton()
    classList(p3)
    setTimeout(displayFlex, 1500, p3)
})
bAbout.addEventListener('click', () => {
    fButton()
    classList(footer)
    setTimeout(displayFlex, 1500, footer)
    backdropFilterAdd()

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
function classList(appletName) {
    appletName.classList.remove('page_disparition')
    appletName.classList.add('page_apparition')
}
function classList_footer(appletName) {
    appletName.classList.remove("header_disparition")
    appletName.classList.add("header_apparition")
}
function backdropFilterAdd() {
    background.classList.remove("backdrop_filter_disparition")
    background.classList.add('backdrop_filter_apparition')
}
function backdropFilterDel() {
    background.classList.remove('background_filter_apparition')
    background.classList.add('background_filter_disparition')
}