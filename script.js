'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


//NOTE: We created an event listener on whole document, and used 'keydown' event to listen for any key that will be pressed, then when it's pressed, the function() will execute, and JavaScript automatically creates an Object containing information about the keydown event which includes the key pressed.
//NOTE: We can use that Object's properties to make operations as usual by passing it as an Argument in the event handler's function.
//NOTE: We used classList.contains('') to check if a class is present, and do operations afterwards.
//NOTE: We used !modal to invert the boolean.
//NOTE: We called closeModal(); to avoid repeating code.


