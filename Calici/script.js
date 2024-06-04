document.addEventListener("DOMContentLoaded", function() {
    const champagnes = document.querySelectorAll('.champagne');

    champagnes.forEach(function(champagne) {
        const numBubbles = 40;  // Numero di bollicine
        const glass = champagne.closest('.champagne-glass');

        for (let i = 0; i < numBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = `${Math.random() * (glass.offsetWidth - 10)}px`; // Posizionamento casuale all'interno del bicchiere
            bubble.style.animationDuration = `${Math.random() * 2 + 3}s`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            champagne.appendChild(bubble);
        }
    });
});


