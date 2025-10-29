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
function openInfo(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeInfo(id) {
  document.getElementById(id).style.display = 'none';
}

// Close popup if user clicks outside
window.onclick = function(event) {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
}
function toggleInfo(item) {
  // collapse others if you want only one open
  document.querySelectorAll('.timeline-item').forEach(i => {
    if (i !== item) i.classList.remove('active');
  });
  
  // toggle the clicked one
  item.classList.toggle('active');
}


