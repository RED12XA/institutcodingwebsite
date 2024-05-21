
let changingValueElement = document.getElementById('changeText');

let value1 = "Votre Avenir Commence ici   .";
let value2 = "inscriptions 2024-2025 OUVERTES !   .";

function changeValue() {

    if (changingValueElement.textContent === value1) {
        changingValueElement.textContent = value2;
    } else {
        changingValueElement.textContent = value1;
    }
}
changeValue();
setInterval(changeValue, 3000);

// INITIALIZE SWIPER JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });