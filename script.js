
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (email === '') {
        isValid = false;
        alert('Please enter your email.');
    } else if (!isValidEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (subject === '') {
        isValid = false;
        alert('Please enter a subject.');
    }

    if (message === '') {
        isValid = false;
        alert('Please enter your message.');
    }

    if (!isValid) {
        e.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

fadeInElements.forEach(element => {
    observer.observe(element);
    element.classList.add('fade-in');
});

<script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
