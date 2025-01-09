document.getElementById('lang-en').addEventListener('click', function() {
    changeLanguage('en');
});

document.getElementById('lang-ro').addEventListener('click', function() {
    changeLanguage('ro');
});

function changeLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    saveLanguage(lang);
}

function saveLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

function getLanguage() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    changeLanguage(lang);
});
