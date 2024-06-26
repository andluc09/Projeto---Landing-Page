
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').parentElement.addEventListener('click', function(e) {
        if (e.target === this) {
            location.reload();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var serviceBlocks = document.querySelectorAll('.services .service');
    var maxHeight = 0;

    // Encontra a maior altura
    serviceBlocks.forEach(function(block) {
        var blockHeight = block.offsetHeight;
        if (blockHeight > maxHeight) {
            maxHeight = blockHeight;
        }
    });

    // Define a altura de todos os blocos para a maior altura
    serviceBlocks.forEach(function(block) {
        block.style.height = maxHeight + 'px';
    });
});

// Seleciona todos os elementos .service dentro do contêiner .services
const services = document.querySelectorAll('.services .service');

// Função para encontrar o tamanho máximo dos títulos <h3>
function findMaxTitleHeight() {
    let maxHeight = 0;

    services.forEach(service => {
        const title = service.querySelector('h3');
        if (title) {
            const titleHeight = title.offsetHeight; // Altura do título
            maxHeight = Math.max(maxHeight, titleHeight); // Encontra a altura máxima
        }
    });

    return maxHeight;
}

// Função para aplicar o tamanho máximo encontrado a todos os títulos <h3>
function setEqualTitleHeight() {
    const maxHeight = findMaxTitleHeight();

    services.forEach(service => {
        const title = service.querySelector('h3');
        if (title) {
            title.style.height = maxHeight + 'px'; // Define a mesma altura para todos os títulos
        }
    });
}

// Chama a função para ajustar os tamanhos dos títulos quando a página carrega
window.addEventListener('load', setEqualTitleHeight);

// Chama a função novamente se a janela for redimensionada (opcional)
window.addEventListener('resize', setEqualTitleHeight);
