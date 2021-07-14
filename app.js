const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');

const showModal = () => {
    modalOverlay.classList.add('active');
    modal.classList.add('active');
}
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});