home_page_button = document.getElementById('home_page_button');
accueil = document.getElementById('accueil');
header = document.getElementById('header');

home_page_button.addEventListener('click', () => {
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    header.classList.remove('header_apparition');
    header.classList.add('header_disparition');
})