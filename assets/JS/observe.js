let section = document.querySelector(".programme-global");


// it's will display on 
let TypingContentStart = document.querySelector(".programme");

section.addEventListener('mouseover', () => {
    console.log('is called')
    TypingContentStart.style.display= "flex";
});


