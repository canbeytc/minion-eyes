document.addEventListener("mousemove", (event) => {
  const eyes = document.querySelectorAll(".eye .eyeball");

  eyes.forEach((eyeball) => {
    const rect = eyeball.parentElement.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
    const radius = 30;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    eyeball.style.transform = `translate(${x}px, ${y}px)`;
  });
});
