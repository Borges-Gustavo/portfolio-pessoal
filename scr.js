// ========== TEMA ==========
const b = document.getElementById('btnT');
const bd = document.body;

// Alterna a classe 'l' no body ao clicar
b.addEventListener('click', () => {
  bd.classList.toggle('l');
  // Atualiza o texto mantendo o ícone
  if (bd.classList.contains('l')) {
    b.innerHTML = '<i class="fas fa-moon"></i> Dark mode';
  } else {
    b.innerHTML = '<i class="fas fa-sun"></i> Light mode';
  }
});

// ========== NAVEGAÇÃO DOS PROJETOS ==========
const projectsPrev = document.getElementById('projectsPrev');
const projectsNext = document.getElementById('projectsNext');
let currentProjectPage = 0;

function updateProjectsDisplay() {
  const cards = projectsGrid.querySelectorAll('.project-card');
  const cardsPerPage = getCardsPerPage();
  const maxPage = Math.ceil(cards.length / cardsPerPage) - 1;
  
  // Desabilita botão anterior se for primeira página
  projectsPrev.disabled = currentProjectPage === 0;
  
  // Desabilita botão próximo se for última página
  projectsNext.disabled = currentProjectPage === maxPage;
}

function getCardsPerPage() {
  // Mostra 3 cards por página
  return 3;
}

function scrollProjects(direction) {
  const cardWidth = 310; // Largura do card + gap
  const scrollAmount = cardWidth * 3; // Sempre 3 projetos por movimento
  
  if (direction === 'next') {
    projectsGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    currentProjectPage++;
  } else {
    projectsGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    currentProjectPage--;
  }
  
  updateProjectsDisplay();
}

projectsNext.addEventListener('click', () => scrollProjects('next'));
projectsPrev.addEventListener('click', () => scrollProjects('prev'));

// Atualiza estado dos botões ao carregar
updateProjectsDisplay();

// Atualiza ao redimensionar a janela
window.addEventListener('resize', () => {
  currentProjectPage = 0;
  updateProjectsDisplay();
});