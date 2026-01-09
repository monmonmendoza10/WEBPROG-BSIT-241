/*!
* Start Bootstrap - Freelancer v7.0.7
* https://startbootstrap.com/theme/freelancer
* Licensed under MIT
*/

window.addEventListener('DOMContentLoaded', () => {

    // Navbar shrink function
    const navbarShrink = () => {
        const navbar = document.querySelector('#mainNav');
        if (!navbar) return;

        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    };

    // Run on page load
    navbarShrink();

    // Run when scrolling
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap ScrollSpy
    const mainNav = document.querySelector('#mainNav');
    if (mainNav && typeof bootstrap !== 'undefined') {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar on item click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
