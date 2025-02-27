// Smooth scrolling for internal links (if you add a menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for skills section
document.addEventListener("DOMContentLoaded", function () {
    let skills = document.querySelector(".skills-container");
    skills.style.opacity = 0;
    skills.style.transform = "translateY(20px)";

    setTimeout(() => {
        skills.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        skills.style.opacity = 1;
        skills.style.transform = "translateY(0)";
    }, 500);
});

// Dynamic WhatsApp button behavior (adjust for mobile users)
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
    whatsappBtn.href = "https://wa.me/+256784116809"; // Mobile-friendly WhatsApp link
}
