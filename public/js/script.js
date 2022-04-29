const currentUrl = window.location.pathname;

if (currentUrl === '/') {
    document.querySelector('#menu-home').className = 'nav-link text-white active';
} else if (currentUrl === '/noticias') {
    document.querySelector('#menu-noticias').className = 'nav-link text-white active';
} else if (currentUrl === '/admin') {
   document.querySelector('#menu-admin').className = 'nav-link text-white active';
}