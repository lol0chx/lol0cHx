/* ── app.js — no framework, no Axios, no Mustache ── */

// Mobile nav
function toggleMobileNav() {
    const links = document.getElementById('nav-links');
    const btn   = document.getElementById('nav-hamburger');
    links.classList.toggle('mobile-open');
    btn.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(a =>
        a.addEventListener('click', () => {
            document.getElementById('nav-links')?.classList.remove('mobile-open');
            document.getElementById('nav-hamburger')?.classList.remove('active');
        })
    );

    // Highlight current page in nav
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('nav-active');
    });
});

// Gallery filter
function filterGallery(category, btn) {
    document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.gallery-item').forEach(item => {
        const show = category === 'all' || item.dataset.category === category;
        item.classList.toggle('hidden', !show);
    });
}

// Contact form
function handleContactSubmit() {
    const name    = document.getElementById('contact-name')?.value.trim();
    const email   = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const success = document.getElementById('contact-success');
    if (success) success.style.display = 'flex';
    document.getElementById('contact-name').value    = '';
    document.getElementById('contact-email').value   = '';
    document.getElementById('contact-message').value = '';
    const subject = document.getElementById('contact-subject');
    if (subject) subject.value = '';
}
