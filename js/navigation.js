// Centralized Navigation Component
function renderNavigation(isSubpage = false) {
    const prefix = isSubpage ? '../' : '';

    return `
        <nav class="container">
            <a href="${prefix}index.html" class="logo">
                <span>Vanguard</span> Global Legal Group
            </a>
            <ul class="nav-links">
                <li><a href="${prefix}index.html#home" data-translate="home">Home</a></li>
                <li><a href="${prefix}index.html#practice-areas" data-translate="about">About Us</a></li>
                <li class="dropdown">
                    <a href="${prefix}index.html#locations" class="dropdown-toggle" data-translate="locations">Locations</a>
                    <div class="dropdown-menu">
                        <a href="${prefix}locations/frankfurt.html" data-translate="frankfurt">Frankfurt</a>
                        <a href="${prefix}locations/munich.html" data-translate="munich">Munich</a>
                        <a href="${prefix}locations/berlin.html" data-translate="berlin">Berlin</a>
                        <a href="${prefix}locations/istanbul.html" data-translate="istanbul">Istanbul</a>
                        <a href="${prefix}locations/paris.html" data-translate="paris">Paris</a>
                        <a href="${prefix}locations/london.html" data-translate="london">London</a>
                        <a href="${prefix}locations/hongkong.html" data-translate="hongkong">Hong Kong</a>
                        <a href="${prefix}locations/newyork.html" data-translate="newyork">New York</a>
                        <a href="${prefix}locations/bogota.html" data-translate="bogota">Bogotá</a>
                        <a href="${prefix}locations/barcelona.html" data-translate="barcelona">Barcelona</a>
                        <a href="${prefix}locations/mexicocity.html" data-translate="mexicocity">Mexico City</a>
                        <a href="${prefix}locations/moscow.html" data-translate="moscow">Moscow</a>
                    </div>
                </li>
                <li><a href="${prefix}index.html#contact" data-translate="contact">Contact</a></li>
                <li class="language-switcher">
                    <button class="lang-btn" data-lang="en">EN</button>
                    <button class="lang-btn" data-lang="de">DE</button>
                    <button class="lang-btn" data-lang="es">ES</button>
                </li>
            </ul>
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>
        </nav>
    `;
}

// Initialize navigation immediately
(function() {
    // Determine if this is a subpage
    const isSubpage = window.location.pathname.includes('/locations/');

    // Inject navigation as soon as possible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNav);
    } else {
        injectNav();
    }

    function injectNav() {
        const header = document.querySelector('header');
        if (header && !header.querySelector('nav')) {
            header.innerHTML = renderNavigation(isSubpage);
        }
    }
})();
