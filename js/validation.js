
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    // Validação do nome
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Por favor, insira um nome válido.');
        return;
    }
    
    // Validação do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Validação do telefone
    var phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }
    
    // Se todas as validações passarem, submete o formulário (ou qualquer outra ação desejada)
    alert('Formulário enviado com sucesso!');
    // Aqui você pode enviar o formulário via AJAX ou similar, se desejar.
});
