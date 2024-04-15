document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('start').classList.add('ascuns');
    document.getElementById('formular').classList.remove('ascuns');
});

document.getElementById('formularDetalii').addEventListener('submit', function(event) {
    event.preventDefault(); // Pentru a preveni trimiterea formularului
    // Aici puteti adauga cod pentru a trimite datele catre server sau pentru a le procesa in alt mod
    document.getElementById('formular').classList.add('ascuns');
    document.getElementById('confirmare').classList.remove('ascuns');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Aici putem adăuga logica pentru navigarea între secțiuni folosind link-urile din meniu
            var targetSectionId = link.getAttribute('href').substring(1);
            document.getElementById(targetSectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});


document.getElementById('formularDetalii').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aici putem adăuga cod pentru a trimite datele către server sau pentru a le procesa în alt mod

    // Vom afișa mesajul de confirmare
    document.getElementById('confirmare').classList.remove('ascuns');

    // Vom reseta formularul
    document.getElementById('formularDetalii').reset();
});


document.getElementById('formularDetalii').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aici putem adăuga cod pentru a trimite datele către server sau pentru a le procesa în alt mod

    // Afișăm popup-ul
    document.getElementById('popup').classList.remove('ascuns');

    // Resetați formularul (dacă doriți)
    // document.getElementById('formularDetalii').reset();
});

// Ascundeți popup-ul când faceți clic în afara conținutului acestuia
document.addEventListener('click', function(event) {
    if (!event.target.closest('#popup')) {
        document.getElementById('popup').classList.add('ascuns');
    }
});

// Afișați popup-ul de contact când faceți clic pe link-ul "Contact"
document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popupContact').classList.remove('ascuns');
});

// Ascundeți popup-ul de contact când faceți clic în afara conținutului acestuia sau pe link-ul "Contact"
document.addEventListener('click', function(event) {
    if (!event.target.closest('#popupContact') && !event.target.closest('nav ul li a[href="#contact"]')) {
        document.getElementById('popupContact').classList.add('ascuns');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('acasaLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


