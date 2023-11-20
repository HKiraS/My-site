document.addEventListener('DOMContentLoaded', function() {
  const textoDiv = document.getElementById('texto');
  const texto = textoDiv.textContent.trim(); // Obtém o texto da div e remove espaços em branco

  // Verifica se o texto é longo o suficiente para precisar da animação
  if (texto.length > 20) { // Altere o valor 20 para o limite desejado
    textoDiv.classList.add('animar'); // Adiciona a classe 'animar' para aplicar a animação
  }
});
