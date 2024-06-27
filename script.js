document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalInfo = document.getElementById('image-info');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const backToTop = document.getElementById('back-to-top');

    let currentIndex = 0;

    // Toggle navigation menu
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });

    // Open modal with image and info
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = item.src;
            modalInfo.textContent = item.getAttribute('data-info');
            currentIndex = index;
        });
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Navigate to previous image
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        modalImage.src = galleryItems[currentIndex].src;
        modalInfo.textContent = galleryItems[currentIndex].getAttribute('data-info');
    });

    // Navigate to next image
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = galleryItems[currentIndex].src;
        modalInfo.textContent = galleryItems[currentIndex].getAttribute('data-info');
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Show back to top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
