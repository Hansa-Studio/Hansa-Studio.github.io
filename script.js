const cursorGlow = document.querySelector(".cursor-glow"); // Track mouse movements and update glow position

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.pageX}px`;

  cursorGlow.style.top = `${e.pageY}px`;

  cursorGlow.style.opacity = 1; // Make the glow visible when mouse moves
}); // Optional: Fade out glow after mouse stops moving

let timeout;

document.addEventListener("mousemove", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    cursorGlow.style.opacity = 0; // Hide glow after inactivity
  }, 3000); // 3 seconds of inactivity
});
