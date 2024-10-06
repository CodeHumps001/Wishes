document.getElementById('celebrateBtn').addEventListener('click', function() {
    createBalloons();
});

function createBalloons() {
    const balloonsContainer = document.getElementById('balloons');
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a8', '#ffcc00'];

    for (let i = 0; i < 100; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 2 + 3 + 's';

        balloonsContainer.appendChild(balloon);

        // Remove balloon after animation ends
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}
