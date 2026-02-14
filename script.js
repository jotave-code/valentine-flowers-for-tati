function revealMessage() {
    const bouquetWrapper = document.getElementById('bouquetWrapper');
    const messageText = document.getElementById('messageText');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const button = document.querySelector('.reveal-btn');
    const titleText = document.getElementById('titleText');
    
    // Hide the title
    titleText.style.opacity = '0';
    titleText.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        titleText.style.display = 'none';
    }, 500);
    
    // Show the bouquet first
    bouquetWrapper.classList.add('show');
    
    // Show the message after a short delay
    setTimeout(() => {
        messageText.classList.add('show');
    }, 500);
    
    // Show the hidden message after another delay
    setTimeout(() => {
        hiddenMessage.classList.add('show');
    }, 1500);
    
    // Hide the button
    button.style.display = 'none';
    
    // Add some sparkle effect
    createHearts();
}

function createHearts() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '🫶';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
        heart.style.opacity = '0';
        heart.style.transition = 'all 2s ease-out';
        heart.style.pointerEvents = 'none';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-10%';
            heart.style.opacity = '1';
        }, i * 100);
        
        setTimeout(() => {
            heart.remove();
        }, 2000 + i * 100);
    }
}
