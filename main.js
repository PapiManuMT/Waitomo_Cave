 console.log("😎<<--PapiScript-->>")

 let noscript = document.getElementById("linkcss")

const background = document.getElementById('background')
const content = document.getElementById('content')

// const head = document.querySelectorAll('head')
const header = document.getElementById('header')
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
const bp3Access = document.getElementById("b_page_3_access");

const checkbox = document.getElementById("navi-toggle")
const l1 = document.getElementById("l1");
 const l2 = document.getElementById("l2");
 const l3 = document.getElementById("l3");
 const l4 = document.getElementById("l4");
 const l5 = document.getElementById("l5");

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
}
noscripts()
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
    bgChangerOff(background)
    blurOff(content)
})
bWaitomo.addEventListener('click', () => {
    fButton()
    classList(p1)
    setTimeout(displayFlex, 1500, p1)
    bgChangerOn(background)
    blurOn(content)
})
bRuakuri.addEventListener('click', () => {
    fButton()
    classList(p2)
    setTimeout(displayFlex, 1500, p2)
    bgChangerOn(background)
    blurOn(content)
})
bRafting.addEventListener('click', () => {
    fButton()
    classList(p3)
    setTimeout(displayFlex, 1500, p3)
    bgChangerOn(background)
    blurOn(content)
})
bAbout.addEventListener('click', () => {
    fButton()
    classList(footer)
    setTimeout(displayFlex, 1500, footer)
    bgChangerOn(background)
    blurOn(content)

})

 l1.addEventListener('click', () => {
     fButton()
     accueil.classList.remove("accueil_close")
     accueil.classList.add("accueil_open")
     setTimeout(displayFlex, 1500, accueil)
     bgChangerOff(background)
     blurOff(content)
     checkbox.checked = false
 })
 l2.addEventListener('click', () => {
     fButton()
     classList(p1)
     setTimeout(displayFlex, 1500, p1)
     bgChangerOn(background)
     blurOn(content)
     checkbox.checked = false
 })
 l3.addEventListener('click', () => {
     fButton()
     classList(p2)
     setTimeout(displayFlex, 1500, p2)
     bgChangerOn(background)
     blurOn(content)
     checkbox.checked = false
 })
 l4.addEventListener('click', () => {
     fButton()
     classList(p3)
     setTimeout(displayFlex, 1500, p3)
     bgChangerOn(background)
     blurOn(content)
     checkbox.checked = false
 })
 l5.addEventListener('click', () => {
     fButton()
     classList(footer)
     setTimeout(displayFlex, 1500, footer)
     bgChangerOn(background)
     blurOn(content)
     checkbox.checked = false

 })

homePageButton.addEventListener('click', () => {
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    selectPage.classList.remove("select_page_disparition")
    selectPage.classList.add('select_page_apparition');
    setTimeout(displayNone, 1500, accueil)
    setTimeout(displayFlex, 1500, selectPage)
    bgChangerOn(background)
    blurOn(content)
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
function bgChangerOn(appletName) {
    appletName.classList.remove("bg_changer_off")
    appletName.classList.add('bg_changer_on')
}
function bgChangerOff(appletName) {
    appletName.classList.remove('bg_changer_on')
    appletName.classList.add('bg_changer_off')
}
function blurOn(appletName) {
    appletName.classList.remove('blur_off')
    appletName.classList.add('blur_on')
}
function blurOff(appletName) {
    appletName.classList.remove('blur_on')
    appletName.classList.add('blur_off')
}

// Alternative a la balise noscript de html qui ne fonctionne pas avec les extensions noscript
function noscripts() {
    noscript.setAttribute("href", "style.css")
}