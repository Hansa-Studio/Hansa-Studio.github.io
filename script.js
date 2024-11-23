// Create the glowing cursor element
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

let timeout;

  clearTimeout(timeout);

// Update the position of the glow on mouse move
document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.pageX}px`;
  glow.style.top = `${e.pageY}px`;
  glow.style.opacity = 1; // Fade in when the cursor moves

  
  timeout = setTimeout(() => {
    glow.style.opacity = 0; // Hide glow after inactivity
  }, 1000); // 1 seconds of inactivity
});

// Handle fade-out when the mouse leaves the window
document.addEventListener('mouseout', () => {
  glow.style.opacity = 0; // Fade out smoothly
});
