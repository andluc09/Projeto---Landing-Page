
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) { // Mostra o botão após rolar 300px
        scrollToTopButton.style.display = 'block';
        scrollToTopButton.style.opacity = '1';
    } else {
        scrollToTopButton.style.opacity = '0';
        setTimeout(function() {
            scrollToTopButton.style.display = 'none';
        }, 300); // Esconde o botão após a transição
    }
});
