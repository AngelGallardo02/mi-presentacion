// Interactive neon effects and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Add interactive hover effects to cards
    const card = document.querySelector('.card');
    const profileImg = document.querySelector('.profile-img img');
    
    // Mouse move effect for card glow
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
    
    // Typing effect for subtitle
    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            subtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    // Random color changes for neon elements
    const neonElements = document.querySelectorAll('.neon-text, .neon-link');
    const colors = ['#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#9d00ff', '#ff6600'];
    
    setInterval(() => {
        const randomElement = neonElements[Math.floor(Math.random() * neonElements.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        randomElement.style.color = randomColor;
        randomElement.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;
        
        setTimeout(() => {
            randomElement.style.color = '';
            randomElement.style.textShadow = '';
        }, 2000);
    }, 3000);
    
    // Click effect for social links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add CSS animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Parallax effect for particles
    const particles = document.querySelectorAll('.particle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        particles.forEach((particle, index) => {
            const speed = 0.5 + (index * 0.1);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add glow pulse animation to profile image
    setInterval(() => {
        profileImg.style.boxShadow = `
            0 0 30px rgba(0, 255, 255, 1),
            0 0 60px rgba(0, 255, 255, 0.8),
            0 0 90px rgba(0, 255, 255, 0.6)
        `;
        
        setTimeout(() => {
            profileImg.style.boxShadow = `
                0 0 20px rgba(0, 255, 255, 0.8),
                0 0 40px rgba(0, 255, 255, 0.4)
            `;
        }, 1000);
    }, 4000);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            // Ctrl+Enter to cycle through neon themes
            const themes = [
                { primary: '#ff00ff', secondary: '#00ffff' },
                { primary: '#00ff00', secondary: '#ffff00' },
                { primary: '#9d00ff', secondary: '#ff6600' },
                { primary: '#00ffff', secondary: '#ff00ff' }
            ];
            
            const currentTheme = themes[Math.floor(Math.random() * themes.length)];
            document.documentElement.style.setProperty('--neon-pink', currentTheme.primary);
            document.documentElement.style.setProperty('--neon-blue', currentTheme.secondary);
        }
    });
    
    // Add loading animation
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 1s ease-in';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
    
    // Easter egg: Konami code for special effect
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            // Activate rainbow mode
            document.body.style.animation = 'rainbow 2s linear infinite';
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
});
