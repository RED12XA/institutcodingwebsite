

let subContent = document.querySelector(".sub-content");
let menuItem = document.querySelector(".menu-item-diplome-ma");
let ulSubDropassistantMaster = document.querySelector(".sub-drop-assistant-webmaster")
let ContainerTechnicien = document.querySelector('.Techniciennivbac');
let focus = document.querySelector('.focus');

// global sec zindex fix problem dropdownmenu hideen 
let Fixdropdownmenu = document.querySelector(".global-sec1");

menuItem.addEventListener('mouseover', () => {
    subContent.style.display = 'block';
    Fixdropdownmenu.style.zIndex= "-1";
});
subContent.addEventListener('mouseout', () => {
    subContent.style.display = 'none';
    Fixdropdownmenu.style.zIndex= "1";
});

ulSubDropassistantMaster.style.display = "none";

ContainerTechnicien.addEventListener('mouseover', () => {
    ulSubDropassistantMaster.style.display = "block";
});

ContainerTechnicien.addEventListener('mouseout', () => {
    ulSubDropassistantMaster.style.display = "none";
});

ulSubDropassistantMaster.addEventListener('mouseout', () =>{
    ulSubDropassistantMaster.style.display = "none";
});


let subDropTsbac = document.querySelector('.sub-drop-tsbac2');
let containerTsbac = document.querySelector('.container-ts-bac2');
subDropTsbac.style.display = "none";



containerTsbac.addEventListener('mouseover', () => {
    subDropTsbac.style.display = "block";
});

containerTsbac.addEventListener('mouseout', () => {
    subDropTsbac.style.display = "none";
});

containerTsbac.addEventListener('mouseout', () =>{
    subDropTsbac.style.display = "none";
});


// FIX HEADER