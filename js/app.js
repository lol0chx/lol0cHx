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
async function handleContactSubmit() {
    const name    = document.getElementById('contact-name')?.value.trim();
    const email   = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value;
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const btn = document.querySelector('.form-submit-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: '305ad274-c750-48d3-b085-a56b50522362',
                name,
                email,
                subject: subject || 'Contact Form',
                message
            })
        });
        const data = await res.json();
        if (data.success) {
            const success = document.getElementById('contact-success');
            if (success) success.style.display = 'flex';
            document.getElementById('contact-name').value    = '';
            document.getElementById('contact-email').value   = '';
            document.getElementById('contact-message').value = '';
            if (document.getElementById('contact-subject')) document.getElementById('contact-subject').value = '';
        } else {
            alert('Something went wrong. Please try again.');
        }
    } catch {
        alert('Failed to send. Check your connection and try again.');
    } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; }
    }
}
