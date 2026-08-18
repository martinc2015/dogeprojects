// Configuración de los proyectos Doge
// Modifica fácilmente las 'url' con los enlaces definitivos de tus apps publicadas

const projects = [
  {
    id: "astronomiadoge",
    title: "AstronomíaDoge",
    category: "Ciencia / Exploración",
    description: "Explora el cosmos, galaxias, nebulosas y el sistema solar guiado por Doge hacia las estrellas y la luna (To the Moon 🚀).",
    url: "https://astronomiadoge.netlify.app/",
    tags: ["Astronomía", "Espacio", "Ciencia", "To The Moon"],
    icon: "🪐",
    badge: "Destacado",
    themeColor: "#8b5cf6", // Violeta cósmico
    backgroundImage: "espacio_bg.jpg",
    stats: {
      label: "Destino",
      value: "To The Moon 🌕"
    }
  },
  {
    id: "snakedoge",
    title: "SnakeDoge",
    category: "Arcade / Juego",
    description: "El clásico juego de la serpiente reinventado al estilo Doge. Come monedas Doge, supera tus récords y diviértete con animaciones y efectos.",
    url: "https://snakedoge.netlify.app/",
    tags: ["Juego", "Arcade", "Canvas", "Doge"],
    icon: "🎮",
    badge: "Popular",
    themeColor: "#f59e0b", // Ámbar / Dorado Doge
    backgroundImage: "snake_bg.jpg",
    stats: {
      label: "Modo",
      value: "Retro Arcade"
    }
  },
  {
    id: "chatdoge",
    title: "ChatDoge",
    category: "IA / Asistente",
    description: "Un asistente conversacional inteligente con el carisma único de Doge. Respuestas divertidas, útiles y listas para ayudarte con cualquier duda.",
    url: "https://dogechat.netlify.app/",
    tags: ["Chat", "IA", "Conversacional", "Doge"],
    icon: "💬",
    badge: "Nuevo",
    themeColor: "#3b82f6", // Azul moderno
    backgroundImage: "chat_bg.jpg",
    stats: {
      label: "Tecnología",
      value: "Chat Inteligente"
    }
  },
  {
    id: "proxmundial",
    title: "Próx Mundial",
    category: "Deportes / Eventos",
    description: "Consulta el fixture, horarios, cuentas regresivas y la información del próximo partido del Mundial de Fútbol.",
    url: "https://proxpartido.somee.com/",
    tags: ["Fútbol", "Mundial", "Fixture", "Partidos"],
    icon: "⚽",
    badge: "En Vivo",
    themeColor: "#10b981", // Verde esmeralda deportivo
    backgroundImage: "futbol_bg.jpg",
    stats: {
      label: "Evento",
      value: "Mundial 🏆"
    }
  },
  {
    id: "sonbot",
    title: "Son Bot",
    category: "Bot / Utilidad",
    description: "Un nuevo bot interactivo para expandir el ecosistema Doge. ¡Explora sus funcionalidades!",
    url: "https://martinc2015.github.io/iachatdoge/",
    tags: ["Bot", "IA", "Herramientas"],
    icon: "🤖",
    badge: "Nuevo",
    themeColor: "#ec4899", // Rosa vibrante
    backgroundImage: "",
    stats: {
      label: "Estado",
      value: "Beta ⚡"
    }
  }
];

// Función para renderizar los proyectos en el DOM
function renderProjects(items = projects) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  items.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project-card ${project.backgroundImage ? 'has-bg-image' : ''}`;
    card.style.setProperty("--theme-color", project.themeColor);
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      ${project.backgroundImage ? `<div class="card-image-bg" style="background-image: url('${project.backgroundImage}');"></div>` : ""}
      <div class="card-glow"></div>
      <div class="card-header">
        <div class="card-icon-wrapper">
          <span class="card-icon">${project.icon}</span>
        </div>
        ${project.badge ? `<span class="card-badge">${project.badge}</span>` : ""}
      </div>

      <div class="card-body">
        <span class="card-category">${project.category}</span>
        <h2 class="card-title">${project.title}</h2>
        <p class="card-description">${project.description}</p>
        
        <div class="card-tags">
          ${project.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
        </div>
      </div>

      <div class="card-footer">
        <div class="card-stat">
          <span class="stat-label">${project.stats.label}</span>
          <span class="stat-value">${project.stats.value}</span>
        </div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="launch-button" id="btn-${project.id}">
          <span>Abrir Proyecto</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    // Abrir proyecto al hacer clic en toda la card (excepto si se hace clic explícito en enlaces internos)
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".launch-button")) {
        window.open(project.url, "_blank", "noopener,noreferrer");
      }
    });

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
