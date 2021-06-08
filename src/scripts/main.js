// elements
const button = document.querySelector('button');
const modal = document.getElementById('modal');
const modalBg = document.getElementById('modal-bg');
const closeBtn = document.getElementById('close');

function init() {
    addListeners();
}

function addListeners() {
    button.addEventListener('click', showVideo);
    modalBg.addEventListener('click', killVideo);
    closeBtn.addEventListener('click', killVideo);
}

function toggleModal(event) {
    modal.classList.toggle('closed');
    modalBg.classList.toggle('closed');
}

function showVideo(event) {
    toggleModal();
    playVideo();
}

function killVideo(event) {
    stopVideo();
    toggleModal();
}

init();