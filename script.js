document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.text-button');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            modalText.textContent = this.getAttribute('data-text');
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
