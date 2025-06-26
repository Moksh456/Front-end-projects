// Animated typing effect for the role
const roleElement = document.querySelector('.role');
if (roleElement) {
  const text = roleElement.textContent;
  roleElement.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      roleElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }
  type();
}

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project card hover effect (ripple)
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #2d2d36 0%, #23232b 100%)`;
  });
  card.addEventListener('mouseleave', function() {
    card.style.background = '';
  });
});
