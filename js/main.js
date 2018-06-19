'use strict';

console.log('hi');

// function openDropdown() {
//     var elDropdown = document.querySelector('.journal-dropdown');
//     elDropdown.classList.toggle('journal-dropdown-open');
// }


function openModal() {
    console.log('hiii');
    var elModal = document.querySelector('.modal-container');
    elModal.classList.toggle('modal-container-open');
    var elModalContinue = document.querySelector('.modal-continue');
    elModalContinue.classList.toggle('open-modal-continue');
}

function closeModal() {
    var elModal = document.querySelector('.modal-container');
    elModal.classList.remove('modal-container-open');
    var elModalContinue = document.querySelector('.modal-continue');
    elModalContinue.classList.remove('open-modal-continue');
}

function onSubmit() {
    closeModal();
}

function toggleMenu() {
    // $('nav ul').toggle('.open');
    var elMenu = document.querySelector('nav ul');
    elMenu.classList.toggle('open');
    var elBtnToggleMenu= document.querySelector('.btn-toggle-menu');
    elBtnToggleMenu.classList.toggle('hidden');
    var elScreen = document.querySelector('.screen');
    elScreen.classList.toggle('screen-open');


    // option2 - insteade of screen doing '☰' & 'X': 
    // var txt = (elBtnToggleMenu.innerText === 'X') ? '☰' : 'X';
    // elBtnToggleMenu.innerText = txt;
    // elBtnToggleMenu.classList.toggle('btn-toggle-menu-open');

}