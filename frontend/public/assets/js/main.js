/**
 * Big Wheels Car Rentals - Main JavaScript
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Close mobile menu when clicking a link
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    // Smooth scroll for anchor links
    function handleSmoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        }
    }

    // Initialize intersection observer for fade-in animations
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe feature cards and testimonial cards
        document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Handle all anchor links with smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', () => {
        handleScroll(); // Check initial scroll position
        initScrollAnimations();
    });

    // Handle page visibility for animations
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            handleScroll();
        }
    });

})();
