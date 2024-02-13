//script.js für index.html
// Erstellt von ELias Schäfer (268512) für den Kurs EIA2

document.addEventListener('DOMContentLoaded', function() {      // Stelle sicher, dass alle Elemente im DOM geladen werden
    console.log("Das Skript wird ausgeführt!");                 // Zeig mir in der Konsole ob das Skript überhaupt ausgeführt wird

    var currentlyVisibleText = null;

    // Funktion zum Ein- und AUsblenden der Infotexte beim Anklicken
    function toggleTextVisibility(textEl, cursorEl) {
        if (currentlyVisibleText !== null && currentlyVisibleText !== textEl) {
            currentlyVisibleText.setAttribute('visible', false);
        }

        if (textEl.getAttribute('visible') === 'true') {
            textEl.setAttribute('visible', false);
            cursorEl.setAttribute('visible', true);
            currentlyVisibleText = null;
        } else {
            // Wenn der Text bereits sichtbar ist, mach ihn unsichtbar
            if (currentlyVisibleText === textEl) {
                textEl.setAttribute('visible', false);
                cursorEl.setAttribute('visible', true);
                currentlyVisibleText = null;
            } else {
            // Wenn der Text nicht sichtbar ist, mache ihn sichtbar
                textEl.setAttribute('visible', true);
                cursorEl.setAttribute('visible', false);
                currentlyVisibleText = textEl;
            }
        }
    }

    // Der Korb-Text erscheint wenn der Korb angeklickt wird
    document.getElementById('korb').addEventListener('click', function() {
        var textEl = document.getElementById('textKorb');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Der Hülle-Text erscheint wenn die Hülle angeklickt wird
    document.getElementById('huelle').addEventListener('click', function() {
        var textEl = document.getElementById('textHuelle');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Der Brenner-Text erscheint wenn der Brenner angeklickt wird
    document.getElementById('brenner').addEventListener('click', function() {
        var textEl = document.getElementById('textBrenner');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Der Lastleinen-Text erscheint wenn die Lastleinen angeklickt werden
    document.getElementById('seile').addEventListener('click', function() {
        var textEl = document.getElementById('textSeile');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Der Gerüst-Text erscheint wenn das Gerüst angeklickt wird
    document.getElementById('geruest').addEventListener('click', function() {
        var textEl = document.getElementById('textGeruest');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

});

