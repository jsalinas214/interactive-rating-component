const rating = document.querySelector('.rating');
const thankYou = document.querySelector('.thank-you');
const btns = document.querySelectorAll('.btn');
const btnBack = document.querySelector('#back');
const btnSubmit = document.querySelector('#submit');
const res = document.querySelector('#response');

btns.forEach((rate) => {
   rate.addEventListener('click', () => {
      res.innerHTML = rate.value;
   })
})

btnSubmit.addEventListener('click', () => {
   thankYou.classList.remove('hidden');
   rating.style.position = 'absolute';
   rating.style.opacity = 0;
   rating.style.zIndex = -1;
})

btnBack.addEventListener('click', () => {
   thankYou.classList.add('hidden');
   rating.style.position = 'relative';
   rating.style.opacity = 1;
   rating.style.zIndex = 1;
});