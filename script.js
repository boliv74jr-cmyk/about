const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const arrow = document.getElementById('arrow');

// Open menu → hide ☰ button
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  menuBtn.style.display = 'none';
});

// Close menu → show ☰ button again
arrow.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  setTimeout(() => {
    menuBtn.style.display = 'flex';
  }, 300); // wait until animation ends
});
