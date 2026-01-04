// Seleciona o botão de tema e o corpo da página
const b = document.getElementById('btnT');
const bd = document.body;

// Alterna a classe 'l' no body ao clicar
b.addEventListener('click', () => {
  bd.classList.toggle('l');
  //b.textContent define o texto dentro do botão selecionado
  b.textContent = bd.classList.contains('l') ? 'Dark mode' : 'Light mode';
});