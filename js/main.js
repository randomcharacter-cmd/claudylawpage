// Language translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        locations: "Locations",
        about: "About Us",
        contact: "Contact",

        // Homepage
        hero_title: "Vanguard Global Legal Group",
        hero_subtitle: "Excellence in International Legal Services",
        hero_description: "With offices spanning across four continents, we provide comprehensive legal solutions to clients worldwide.",
        our_locations: "Our Global Presence",
        location_desc: "Strategic offices in major financial centers",

        // Location names
        frankfurt: "Frankfurt",
        munich: "Munich",
        istanbul: "Istanbul",
        paris: "Paris",
        london: "London",
        hongkong: "Hong Kong",
        newyork: "New York",
        bogota: "Bogotá",
        moscow: "Moscow",

        // Location page
        our_team: "Our Legal Team",
        specialization: "Specialization",
        contact_office: "Contact This Office",

        // Specializations
        spec_criminal: "Criminal Law",
        spec_corporate: "Corporate Law",
        spec_tax: "Tax Law",
        spec_ip: "Intellectual Property",
        spec_family: "Family Law",
        spec_real_estate: "Real Estate Law",
        spec_labor: "Labor & Employment Law",
        spec_banking: "Banking & Finance",
        spec_merger: "Mergers & Acquisitions",
        spec_litigation: "Commercial Litigation",
        spec_international: "International Law",
        spec_compliance: "Compliance & Regulatory",
    },
    de: {
        // Navigation
        home: "Startseite",
        locations: "Standorte",
        about: "Über uns",
        contact: "Kontakt",

        // Homepage
        hero_title: "Vanguard Global Legal Group",
        hero_subtitle: "Exzellenz in internationalen Rechtsdienstleistungen",
        hero_description: "Mit Büros auf vier Kontinenten bieten wir unseren Mandanten weltweit umfassende Rechtslösungen.",
        our_locations: "Unsere weltweite Präsenz",
        location_desc: "Strategische Büros in wichtigen Finanzzentren",

        // Location names
        frankfurt: "Frankfurt",
        munich: "München",
        istanbul: "Istanbul",
        paris: "Paris",
        london: "London",
        hongkong: "Hongkong",
        newyork: "New York",
        bogota: "Bogotá",
        moscow: "Moskau",

        // Location page
        our_team: "Unser Rechtsteam",
        specialization: "Spezialisierung",
        contact_office: "Kontaktieren Sie dieses Büro",

        // Specializations
        spec_criminal: "Strafrecht",
        spec_corporate: "Gesellschaftsrecht",
        spec_tax: "Steuerrecht",
        spec_ip: "Geistiges Eigentum",
        spec_family: "Familienrecht",
        spec_real_estate: "Immobilienrecht",
        spec_labor: "Arbeitsrecht",
        spec_banking: "Bank- und Finanzrecht",
        spec_merger: "Fusionen & Übernahmen",
        spec_litigation: "Prozessführung",
        spec_international: "Internationales Recht",
        spec_compliance: "Compliance & Regulierung",
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);

    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });
});

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}
