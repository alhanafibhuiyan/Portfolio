// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (navList.classList.contains('active')) {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        }
        
        // Update active class
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dropdown Functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        
        // Close other open dropdowns
        dropdowns.forEach(otherDropdown => {
            if(otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if(!e.target.matches('.dropdown-btn')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Testimonials Slider
const track = document.querySelector('.testimonials-track');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
const slideCount = document.querySelectorAll('.testimonial-card').length;

function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        goToSlide(slideIndex);
    });
});

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
}, 5000);

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission
//const form = document.getElementById('contact-form');
//form.addEventListener('submit', function(e) {
  //e.preventDefault();
    //alert('Thank you for your message! I will get back to you soon.');
    //form.reset();
//});

// Contact 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxpWJ1NtEtohOoe9pk5CkVApNC44_Cp-XoFLsyENxrJ2_52UYO8K-MrrmX3cvIgTk-4dg/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you for your message! I will get back to you soon." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})

// Blog Filter Functionality
const blogFilterBtns = document.querySelectorAll('.blog-filter .filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

blogFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active button
        blogFilterBtns.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter blogs
        blogCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});