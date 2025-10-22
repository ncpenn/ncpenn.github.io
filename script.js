 document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

     document.querySelectorAll('.faq-item').forEach(link => {
        link.addEventListener('click', function(e) {
            const child = e.currentTarget.querySelector('.faq-answer');
            child.classList.toggle('active');
        });
    });
});