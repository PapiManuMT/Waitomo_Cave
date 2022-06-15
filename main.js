home_page_button = document.getElementById('home_page_button');
accueil = document.getElementById('accueil');
header = document.getElementById('header');
select_page = document.getElementById('select_page');

home_page_button.addEventListener('click', () => {
    header.classList.remove('header_apparition');
    header.classList.add('header_disparition');
    accueil.classList.remove('accueil_open');
    accueil.classList.add('accueil_close')
    select_page.classList.add('select_page_apparition');
})