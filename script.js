document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const backToTopButton = document.getElementById('back-to-top');
    const commentInput = document.getElementById('comment-input');
    const submitCommentButton = document.getElementById('submit-comment');
    const commentsSection = document.getElementById('comments-section');
    const subscriptionForm = document.getElementById('subscription-form');
    const contactForm = document.getElementById('contact-form');
    
    // Toggle menu visibility
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Scroll to top functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Comments section
    submitCommentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('p');
            commentElement.textContent = commentText;
            commentsSection.appendChild(commentElement);
            commentInput.value = '';
        }
    });

    // Newsletter subscription form
    subscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email-input').value.trim();
        if (email) {
            alert(`Thank you for subscribing with email: ${email}`);
            document.getElementById('email-input').value = '';
        }
    });

    // Contact form
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name-input').value.trim();
        const email = document.getElementById('contact-email-input').value.trim();
        const message = document.getElementById('message-input').value.trim();
        if (name && email && message) {
            alert(`Thank you for contacting us, ${name}!`);
            document.getElementById('name-input').value = '';
            document.getElementById('contact-email-input').value = '';
            document.getElementById('message-input').value = '';
        }
    });

    // Text-to-Speech
    document.querySelectorAll('.article p').forEach(paragraph => {
        paragraph.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance(paragraph.textContent);
            speechSynthesis.speak(utterance);
        });
    });
});
