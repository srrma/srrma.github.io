// Smooth Scrolling to Sections
function scrollToSection(targetSectionId) {
  const targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error("Section with ID '" + targetSectionId + "' not found.");
  }
}

// 3D Hover Effect on Featured Works
document.querySelectorAll('.perspective').forEach((item) => {
  const img = item.querySelector('img');

  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((centerX - x) / centerX) * 20;

    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.transform = `scale(1.1) rotateX(${rotateX / 2}deg) rotateY(${rotateY / 2}deg)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
});