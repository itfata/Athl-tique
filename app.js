const nav = document.querySelector('.nav nav');
const menu = document.querySelector('.menu-toggle');
const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('[data-route]')];

function showRoute(route) {
  const id = route || location.hash.replace('#', '') || 'home';
  const exists = pages.some(page => page.id === id);
  const selected = exists ? id : 'home';
  pages.forEach(page => page.classList.toggle('is-active', page.id === selected));
  links.forEach(link => link.classList.toggle('active', link.dataset.route === selected));
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'auto' });
}

window.addEventListener('hashchange', () => showRoute());
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelector('.trial-form').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = 'Merci. Notre conciergerie vous répondra sous peu.';
  event.currentTarget.reset();
});
showRoute();
