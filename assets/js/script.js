function createMagic() {
    // Play magic sound
    document.getElementById('magicSound').play();
    
    // Create fireworks
    const container = document.querySelector('.fireworks');
    for(let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        container.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }
    
    // Reveal secret message after fireworks
    setTimeout(() => {
        document.getElementById('loveMessage').classList.remove('hidden');
    }, 1500);
}

function openHeart() {
    // Play heartbeat sound
    document.getElementById('heartbeatSound').play();
    
    // Show heart animation
    document.getElementById('heartAnimation').classList.remove('hidden');
    
    // Create floating hearts
    const container = document.querySelector('.hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Hide buttons after interaction
    document.querySelector('.button-group').classList.add('hidden');
}