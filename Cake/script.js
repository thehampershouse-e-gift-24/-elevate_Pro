// Particle Background Animation
const particles = document.getElementById('particles');
for (let i = 0; i < 150; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.setProperty('--hue', Math.random()); // Color variation
    particle.style.setProperty('--scale', Math.random() * 0.6 + 0.5); // Size variation
    particles.appendChild(particle);
}

// Show cake on "START" button click
document.getElementById('start').addEventListener('click', () => {
    document.getElementById('cake-holder').style.opacity = '1';
});
