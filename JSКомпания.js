document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            } else {
                entry.target.style.animationPlayState = "paused";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(30, 30, 30, 0.8)";
        } else {
            header.style.backgroundColor = "#1e1e1e";
        }
    });
});