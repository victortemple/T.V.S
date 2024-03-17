const opnBtn = document.querySelector('.opnBtn');
const clsBtn = document.querySelector('.clsBtn');
const nav = document.querySelector('.navMq');

opnBtn.addEventListener('click', function(){
    nav.style.display = 'flex';
    opnBtn.style.display = 'none';
    clsBtn.style.display = 'block';
})

clsBtn.addEventListener('click', function(){
    nav.style.display = 'none';
    opnBtn.style.display = 'block';
    clsBtn.style.display = 'none';
})