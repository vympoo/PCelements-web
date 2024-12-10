document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth' // Обеспечиваем плавный скролл
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Если прокручено больше 50 пикселей
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});