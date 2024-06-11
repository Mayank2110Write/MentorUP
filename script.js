// Smooth Scrolling for Navigation Links

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    const offset = targetSection.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
});
