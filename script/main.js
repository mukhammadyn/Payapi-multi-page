var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.js-header-toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function() {
    elSiteHeader.classList.toggle('site-header--nav-open');
    document.body.classList.toggle('site-header--open');
  });
}