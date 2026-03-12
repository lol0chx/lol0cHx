// ─── Page Navigation ────────────────────────────────────────────────────────

function loadHome() {
    templateBuilder.build('home', {}, 'main');
}

function showProjects() {
    templateBuilder.build('projects', {}, 'main');
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGallery() {
    templateBuilder.build('gallery', {}, 'main');
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPhotography() { showGallery(); }
function showPortfolio()    { showProjects(); }
function showPrints()       { showGallery(); }

function showAbout() {
    templateBuilder.build('about', {}, 'main');
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showContact() {
    templateBuilder.build('contact', {}, 'main');
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Contact Form ────────────────────────────────────────────────────────────

function handleContactSubmit() {
    const name    = document.getElementById('contact-name')?.value.trim();
    const email   = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show success (wire to a backend endpoint when ready)
    const successEl = document.getElementById('contact-success');
    if (successEl) {
        successEl.style.display = 'block';
        document.getElementById('contact-name').value    = '';
        document.getElementById('contact-email').value   = '';
        document.getElementById('contact-subject').value = '';
        document.getElementById('contact-message').value = '';
    }
}

// ─── Gallery Filter ──────────────────────────────────────────────────────────

function filterGallery(category, btn) {
    document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('#gallery-grid .gallery-item').forEach(item => {
        const match = category === 'all' || item.dataset.category === category;
        item.classList.toggle('hidden', !match);
    });
}

// ─── Mobile Nav ──────────────────────────────────────────────────────────────

function toggleMobileNav() {
    const links = document.querySelector('.nav-links');
    const btn   = document.getElementById('nav-hamburger');
    if (!links || !btn) return;
    links.classList.toggle('mobile-open');
    btn.classList.toggle('active');
}

function closeMobileNav() {
    document.querySelector('.nav-links')?.classList.remove('mobile-open');
    document.getElementById('nav-hamburger')?.classList.remove('active');
}

// ─── Footer initializer ──────────────────────────────────────────────────────

function initializeFooter() {
    templateBuilder.build('footer', {}, 'footer-placeholder');
}

// ─── Boot ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    templateBuilder.build('header', {}, 'header-user');
    initializeFooter();
    loadHome();
});
