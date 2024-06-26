
// Espera o iframe de loading ser carregado
window.addEventListener('load', function() {
    var loadingFrame = document.getElementById('loading-frame');
    var mainContent = document.getElementById('main-content');
    
        // Aguarda a mensagem de carregamento da página de loading
        loadingFrame.addEventListener('load', function() {
            // Define um tempo de espera antes de mostrar o conteúdo principal
            setTimeout(function() {
                // Esconde a página de loading após a transição
                loadingFrame.classList.add('hidden');
                mainContent.style.display = 'block'; // Mostra o conteúdo principal
            }, 500); // Tempo de espera ajustável
        });
    });