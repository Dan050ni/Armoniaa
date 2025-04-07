// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  
  // Fade-in effect
  const fadeInElements = document.querySelectorAll('section, h2');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeInElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
  