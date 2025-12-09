document.addEventListener("mousemove", (event) => {
  const eyes = document.querySelectorAll(".eye .eyeball");

  eyes.forEach((eyeball) => {
    const rect = eyeball.parentElement.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientX - eyeX, event.clientY - eyeY);
    const x = Math.sin(angle) * 30;
    const y = Math.cos(angle) * 30;

    eyeball.style.transform = `translate(${x}px, ${y}px)`;
  });
});
