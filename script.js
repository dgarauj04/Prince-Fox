document.addEventListener('DOMContentLoaded', function() {
      const nightSky = document.getElementById('nightSky');
      
      const starSymbols = ['★', '✦'];
      
      function createStars(count) {
        for (let i = 0; i < count; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          
          const randomSymbol = starSymbols[Math.floor(Math.random() * starSymbols.length)];
          star.textContent = randomSymbol;
          
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          star.style.left = `${posX}vw`;
          star.style.top = `${posY}vh`;
          
          const size = (0.5 + Math.random() * 3).toFixed(2);
          star.style.fontSize = `${size}vmin`;
          
          const hue = 45 + Math.random() * 15;
          const saturation = 70 + Math.random() * 30;
          const lightness = 50 + Math.random() * 20;
          star.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          
          const duration = (3 + Math.random() * 5).toFixed(2);
          const delay = Math.random() * 4;
          star.style.animation = `blink ${duration}s ${delay}s infinite ease-in-out`;
          
          if (Math.random() > 0.7) {
            star.style.animation += `, twinkle ${(3 + Math.random() * 4).toFixed(2)}s infinite alternate`;
          }
          
          nightSky.appendChild(star);
        }
      }
      
      createStars(50);
      
      setInterval(() => {
        const stars = document.querySelectorAll('.star');
        if (stars.length > 150) {
          const starsToRemove = Math.floor(Math.random() * 10) + 5;
          for (let i = 0; i < starsToRemove && stars.length > 100; i++) {
            const randomIndex = Math.floor(Math.random() * stars.length);
            stars[randomIndex].remove();
          }
        }
        
        const starsToAdd = Math.floor(Math.random() * 8) + 3;
        createStars(starsToAdd);
      }, 3000);
    });
