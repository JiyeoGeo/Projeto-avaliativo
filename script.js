// 1. Seleciona todos os botões do acordeão
const botoes = document.querySelectorAll('.accordion-header');

// 2. Adiciona o evento de clique em cada um deles
botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    
    // Seleciona o conteúdo logo após o botão clicado
    const conteudo = this.nextElementSibling;
    
    // Alterna a classe "active" no conteúdo (se tiver, remove; se não tiver, adiciona)
    conteudo.classList.toggle('active');
    
    // Opcional: Alterna uma classe no próprio botão para você mudar a setinha (▼ para ▲)
    this.classList.toggle('header-active');
  });
});