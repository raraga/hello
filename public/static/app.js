document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contact-form');
    const worksSection = document.getElementById('works');
    const projectGrid = worksSection.querySelector('.project-grid');
    const projects = [1,2,3,4,5,6,7,8,9,10];

    projects.forEach((_, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'project-thumbnail';
        thumbnail.dataset.index = index;
        projectGrid.appendChild(thumbnail);
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert('Message sent!');
            contactForm.reset();
        });
    }
});
