// script.js

// Basic mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked (optional)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Check if it's the main sign up button to avoid closing menu unnecessarily if it opens a modal
        if (!link.classList.contains('btn') && navMenu.classList.contains('active')) {
             hamburger.classList.remove('active');
             navMenu.classList.remove('active');
        } else if (link.href.includes('#') && !link.classList.contains('btn') && navMenu.classList.contains('active')) {
             // Close for hash links as well, except the button
             hamburger.classList.remove('active');
             navMenu.classList.remove('active');
        }
    });
});


// Basic testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function showSlide(index) {
    if (testimonials.length === 0 || dots.length === 0) return; // Exit if no testimonials/dots
    testimonials.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active'); // Check if dot exists
    });
     if (testimonials[index]) testimonials[index].classList.add('active'); // Check if slide exists
     if (dots[index]) dots[index].classList.add('active'); // Check if dot exists
    currentSlide = index;
}

if (dots.length > 0) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.slide));
        });
    });


    let slideInterval = setInterval(() => {
        if (testimonials.length > 0) {
            let nextSlide = (currentSlide + 1) % testimonials.length;
            showSlide(nextSlide);
        }
    }, 5000); // Change slide every 5 seconds
}

// Initialize the first slide
if (testimonials.length > 0) {
    showSlide(0);
}


// Simple modal open/close (example for Sign Up)
const signUpNavButton = document.querySelector('.nav-menu .nav-link.btn'); // Target button in nav
const modal = document.getElementById('signup-modal');
const closeModalBtn = modal ? modal.querySelector('.modal-close') : null;

if (signUpNavButton && modal && closeModalBtn) {
    signUpNavButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior if it's an anchor
        modal.classList.add('active');
        // Optional: If menu is open, close it when modal opens
        if (navMenu.classList.contains('active')) {
             hamburger.classList.remove('active');
             navMenu.classList.remove('active');
        }
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal if clicking outside the content area
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Check if the click is directly on the modal background
            modal.classList.remove('active');
        }
    });

     // Close modal with the Escape key
     window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
     });
}


// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add 'scrolled' class after scrolling 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

