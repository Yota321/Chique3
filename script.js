document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav');
    const lightBulbIcon = document.querySelector('.light-bulb-icon');
    const ttsButtons = document.querySelectorAll('.tts-button');
    const chiqueHeader = document.querySelector('#chique-header');
    const backToTopButton = document.querySelector('#back-to-top');
    const modal = document.querySelector('#image-modal');
    const modalImage = document.querySelector('#modal-image');
    const modalInfo = document.querySelector('#image-info');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentImageIndex = 0;

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Light bulb icon for dark mode toggle
    lightBulbIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        lightBulbIcon.classList.toggle('on');
        lightBulbIcon.classList.toggle('off');
    });

    // Text-to-speech functionality
    ttsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const text = e.target.parentElement.textContent;
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        });
    });

    // Scroll to top when clicking "Chique"
    chiqueHeader.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show back-to-top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Back to top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal functionality
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = item.src;
            modalInfo.textContent = item.dataset.info;
            currentImageIndex = index;
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : galleryItems.length - 1;
        updateModalImage();
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < galleryItems.length - 1) ? currentImageIndex + 1 : 0;
        updateModalImage();
    });

    function updateModalImage() {
        modalImage.src = galleryItems[currentImageIndex].src;
        modalInfo.textContent = galleryItems[currentImageIndex].dataset.info;
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
