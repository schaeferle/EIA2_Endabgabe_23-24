//coole änderung juhu

document.addEventListener('DOMContentLoaded', function() {
    console.log("Das Skript wird ausgeführt!");

    var currentlyVisibleText = null;

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

    // Korb Text
    document.getElementById('korb').addEventListener('click', function() {
        var textEl = document.getElementById('textKorb');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Hülle Text
    document.getElementById('huelle').addEventListener('click', function() {
        var textEl = document.getElementById('textHuelle');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Brenner Text
    document.getElementById('brenner').addEventListener('click', function() {
        var textEl = document.getElementById('textBrenner');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Seile Text
    document.getElementById('seile').addEventListener('click', function() {
        var textEl = document.getElementById('textSeile');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

    // Gerüst Text
    document.getElementById('geruest').addEventListener('click', function() {
        var textEl = document.getElementById('textGeruest');
        var cursorEl = document.getElementById('cursor');
        toggleTextVisibility(textEl, cursorEl);
    });

});

