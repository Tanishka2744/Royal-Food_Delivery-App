const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('#cart-icon'); // You can also create a menu icon
const navBtn = document.querySelector('.nav-btn');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        navbar.classList.remove('active'); // close menu on click (mobile)
    });
});

const backToTopBtn = document.createElement('div');
backToTopBtn.id = 'back-to-top';
backToTopBtn.innerHTML = '&#8679;';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const contactForm = document.querySelector('.contact-content');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill all fields before submitting!');
        } else {
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        }
    });
}
