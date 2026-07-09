// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(13, 13, 26, 1)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(13, 13, 26, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

const skillBars = document.querySelectorAll('.progress-fill');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(bar => observer.observe(bar));


const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const progressFills = document.querySelectorAll(".progress-fill");

    const showSkills = () => {
        progressFills.forEach((fill) => {
            const targetWidth = fill.getAttribute("data-progress");
            fill.style.width = targetWidth;
        });
    };

    // Threshold ko 0.1 kar diya hai taake section ka 10% hissa bhi screen par aaye toh foran chal jaye
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                showSkills();
                // observer.unobserve(skillsSection); // Is line ko hum hata rahe hain taake animation har baar chale!
            }
        });
    }, { threshold: 0.1 }); 

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});