var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderExitBtn = document.querySelector('.js-header-close-btn');
var elSiteHeaderBurger = document.querySelector('.js-header-btn');


elSiteHeaderBurger.addEventListener('click',function(){
  elSiteHeader.classList.add('site-header--modal-open')
});

elSiteHeaderExitBtn.addEventListener('click', function(){
  elSiteHeader.classList.remove('site-header--modal-open')
});
