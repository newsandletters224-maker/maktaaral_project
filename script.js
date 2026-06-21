document.addEventListener('DOMContentLoaded', ()=>{
  // Язык
  const btnRu=document.getElementById('btn-ru');
  const btnKz=document.getElementById('btn-kz');
  const setLang=(lang)=>{
    document.documentElement.setAttribute('data-lang', lang==='kz' ? 'kz' : 'ru');
    localStorage.setItem('site-lang', lang);
    btnRu.classList.toggle('active', lang==='ru');
    btnKz.classList.toggle('active', lang==='kz');
  };
  const savedLang=localStorage.getItem('site-lang')||'kz'; setLang(savedLang);
  if(btnRu) btnRu.addEventListener('click', ()=>setLang('ru'));
  if(btnKz) btnKz.addEventListener('click', ()=>setLang('kz'));

  // Мобильное меню
  const navToggle=document.querySelector('.nav-toggle');
  const navList=document.getElementById('nav-list');
  if(navToggle && navList){
    navToggle.addEventListener('click', ()=>{
      const open = navList.style.display!=='block';
      navList.style.display = open ? 'block' : 'none';
      navToggle.setAttribute('aria-expanded', open?'true':'false');
    });
  }

  // Расписание: переключение дней
  const dayBtns=document.querySelectorAll('.day-btn');
  const panels=document.querySelectorAll('.day-panel');
  dayBtns.forEach(btn=>btn.addEventListener('click', ()=>{
    dayBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const d=btn.dataset.day;
    panels.forEach(p=> p.classList.toggle('hidden', p.dataset.dayPanel!==d));
  }));

  // Модальное окно для фото
  const modal=document.getElementById('photoModal');
  const modalImg=document.getElementById('modalImage');
  const closeBtn=document.querySelector('.close-modal');
  const galleryItems=document.querySelectorAll('.gallery-item img');
  
  galleryItems.forEach(img=>img.addEventListener('click', ()=>{
    modal.classList.add('active');
    modalImg.src=img.src;
    modalImg.alt=img.alt;
  }));
  
  closeBtn.addEventListener('click', ()=>modal.classList.remove('active'));
  modal.addEventListener('click', (e)=>{
    if(e.target===modal) modal.classList.remove('active');
  });
});
