const menu = document.querySelector('.mobile-menu'); 
const openBtn = document.getElementById('burger-btn'); 
const closeBtn = document.getElementById('mobile-menu-close'); 

// Функція для відкриття меню
openBtn.addEventListener('click', () => { 
  menu.classList.add('is-open'); 
  document.body.style.overflow = 'hidden'; // Забороняємо скрол під час відкритого меню
}); 

// Функція для закриття меню
closeBtn.addEventListener('click', () => { 
  menu.classList.remove('is-open'); 
  document.body.style.overflow = ''; // Відновлюємо скрол
}); 

// Закриття при кліку поза меню
document.addEventListener('click', (e) => { 
  if (!menu.contains(e.target) && !openBtn.contains(e.target)) { 
    menu.classList.remove('is-open'); 
    document.body.style.overflow = ''; 
  } 
});