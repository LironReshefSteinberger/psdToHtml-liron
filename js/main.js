'use strict';

console.log('hi');

// function openDropdown() {
//     var elDropdown = document.querySelector('.journal-dropdown');
//     elDropdown.classList.toggle('journal-dropdown-open');
// }


function openModal() {
    console.log('hiii');
    var elModal = document.querySelector('.modal-continue');
    elModal.classList.toggle('open-modal');
    var elScreen = document.querySelector('.screen');
    elScreen.classList.toggle('screen-open');
    // closeModal();
    // if (elScreen.document.querySelector !== ".screen-open") closeModal();
}

function closeModal() {
    var elModal = document.querySelector('.modal-continue');
    elModal.classList.remove('open-modal');
    var elScreen = document.querySelector('.screen');
    elScreen.classList.remove('screen-open');
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