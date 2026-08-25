import { useState, useEffect, useMemo, useRef } from "react";
import "./inicio.css";

/* =====================================================
    🔹 DADOS EDITÁVEIS — EDITE SOMENTE AQUI
===================================================== */

const DATA = {
  hero: {
     title: "Portfólio - Alexandre Ferreira",
     subtitle: "Somos todos pequenos pedaços de várias pessoas.",
     mencao: "Austin Kleon - Roube como um Artista"
},

  about: {
     name: "Alexandre Ferreira de Oliveira",
   bio: "Sou graduando de Design Digital pela Universidade Federal do Ceará, onde desenvolvi capacidades de atuar para álem das áreas de desenvolvimento gráfico, como o desenvolvimento de projetos visuais também para o mundo digital. Tenho experiência no desenvolvimento de UI, práticas de pesquisa e desenvolvimento de atividades em UX, além de desenvolver plataformas e projetos Web/mobile usando JavaScript + banco de dados. Sou apaixonado por design, tecnologia e inovação, e estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.",
     education: [
        "Ensino Técnico em Informática — 2018 - 2021",
        "Graduação em Design Digital — Cursando o 8º semestre"
     ],
     // Saudação rotativa e inclusiva — mantida como estava, é intencional (não é sobra de template)
     navbarname: ["Seja bem-vindo!", "Seja bem-vinda!", "Seja bem-vinde!"]
  },

  socials: [
     { name: "LinkedIn", url: "https://www.linkedin.com/in/alexandreferreiradesigner" },
     { name: "Instagram", url: "https://www.instagram.com/manda_dsg" },
     { name: "GitHub", url: "https://github.com/XandyDsg" },
     { name: "Behance", url: "https://www.behance.net/alexandferreir155" }
  ],

  tools: [
     { id: "ps", name: "Photoshop" },
     { id: "ai", name: "Illustrator" },
     { id: "figma", name: "Figma" },
     { id: "cd", name: "CorelDraw" },
     { id: "miro", name: "Miro" },
     { id: "blender", name: "Blender" },
     { id: "web", name: "Vite (javascript, HTML/CSS)" },
  ],

  areas: [
     { id: "ui", name: "interface do Usuário" },
     { id: "branding", name: "Branding" },
     { id: "pesquisa", name: "Pesquisa de Usuário" },
     { id: "social", name: "Social Media" },
     { id: "Product", name: "Desenvolvimento de Produtos" },
     { id: "Frontend", name: "Frontend / Desenvolvimento Web" },
  ],

  // NOTA: toolsUsed de cada projeto abaixo foi corrigido para usar os IDs de `tools`
  // (ex.: "cd" em vez de "CorelDraw") — o modal busca por ID, então antes o match
  // sempre falhava e só "funcionava" por acidente porque o fallback exibe o próprio
  // texto que veio em toolsUsed. Com IDs corretos, o lookup passa a funcionar de verdade.
  projects: [
     {
        id: 1,
        category: "UI Design",
        featured: true, // 🔸 fixa este projeto sempre no topo do grid, mesmo fora de ordenação A-Z
        title: "Certin - Aplicativo de Gestão Acadêmica",
        thumb: "certinthumb.png",
        full: "certinthumb.png",
        description: "Construção de identidade visual, interface e prototipação de telas para um aplicativo de gestão acadêmica.",
        toolsUsed: ["cd", "ai", "figma", "web"],
        link: "https://front-end-certin-app.vercel.app"
     },
     {
        id: 2,
        category: "Identidade Visual",
        title: "Pitéu - Identidade Visual para loja de roupas",
        thumb: "piteuplaceholder.png",
        full: "piteuplaceholder.png",
        description: "Identidade Visual para uma loja de Roupas Nordestina, com o foco em transmitir a energia e a vibe das gerações passadas para o futuro.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/244643015/Pitu-Identidade-Visual-de-Roupas"
     },
     {
        id: 3,
        category: "Identidade Visual",
        title: "Processo Criativo de um cérebro Caótico - Identidade Visual",
        thumb: "portfolioplaceholder.png",
        full: "portfolioplaceholder.png",
        description: "Identidade Visual para uma loja de Roupas Nordestina, com o foco em transmitir a energia e a vibe das gerações passadas para o futuro.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/244644697/Capa-Poster-Identidade-Visual-de-portfolio"
     },
     {
        id: 4,
        category: "Identidade Visual",
        title: "Dadudim - Doceria Artesanal",
        thumb: "dadudimthumb.png",
        full: "dadudimthumb.png",
        description: "Construção de identidade visual, com dois mascotes ilustrados.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/251349109/DADUDIM-DOCERIA?platform=direct"
     },
     {
        id: 5,
        category: "Identidade Visual",
        title: "Edjackson - Psicólogo",
        thumb: "edjacksonthumb.png",
        full: "edjacksonthumb.png",
        description: "Identidade visual para um psicólogo, com o objetivo de transmitir confiança e profissionalismo.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/251767961/Edjackson-Lima-Psicologo-Branding"
     },
     {
        id: 6,
        category: "Identidade Visual",
        title: "Clika - Identidade Visual para uma empresa de fotografia",
        thumb: "clikathumb.png",
        full: "clikathumb.png",
        description: "Identidade visual para uma empresa de fotografia, com o objetivo de transmitir profissionalismo e criatividade.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/252167207/Clika-identidade-Visual"
     },
     {
        id: 7,
        category: "Identidade Visual",
        title: "Busque - Identidade Visual para um aplicativo de rota universitária",
        thumb: "busquethumb.png",
        full: "busquethumb.png",
        description: "Identidade visual para um aplicativo de rota universitária, com o objetivo de transmitir profissionalismo e criatividade.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/252191787/BUSQUE-Rota-Universitaria"
     },
       {
        id: 8,
        category: "Identidade Visual",
        title: "Clinica Casulo - Espaço de Desenvolvimento",
        thumb: "casulothumb.png",
        full: "casulothumb.png",
        description: "Identidade visual para uma clinica de psicologia ocupacional para todas as idades.",
        toolsUsed: ["cd", "ai", "ps"],
        link: "https://www.behance.net/gallery/254801075/Clinica-Casulo-Psicologia-Ocupacional"
     },

  ],

  contact: {
     email: "Alexandreodesigner01@gmail.com",
     phone: "+55 88 9 9617-7960",
     location: "Quixadá - Ceará, Brasil."
  }
};

/* =====================================================
    🔹 COMPONENTE PRINCIPAL
===================================================== */

export default function Inicio() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortAlphabetical, setSortAlphabetical] = useState(false);

  // ROTATE NAVBAR GREETING
  const [greetIndex, setGreetIndex] = useState(0);
  useEffect(() => {
     const names = DATA.about?.navbarname ?? [];
     if (!names.length) return;
     const id = setInterval(() => {
        setGreetIndex(i => (i + 1) % names.length);
     }, 3000); // troca a cada 3s
     return () => clearInterval(id);
  }, []);

  const categories = useMemo(() => {
     return ["Todos", ...new Set(DATA.projects.map(p => p.category))];
  }, []);

  const visibleProjects = useMemo(() => {
     const filtered = filter === "Todos"
        ? DATA.projects
        : DATA.projects.filter(p => p.category === filter);

     if (sortAlphabetical) {
        return [...filtered].sort((a, b) => {
           const aFirst = (a.title?.charAt(0) ?? "").toLowerCase();
           const bFirst = (b.title?.charAt(0) ?? "").toLowerCase();
           const compareFirst = aFirst.localeCompare(bFirst, "pt", { sensitivity: "base" });
           return compareFirst !== 0
              ? compareFirst
              : a.title.localeCompare(b.title, "pt", { sensitivity: "base" });
        });
     }

     // Sem ordenação alfabética ativa: projetos com `featured: true` sempre na frente,
     // preservando a ordem relativa original dentro de cada grupo.
     return [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [filter, sortAlphabetical]);

  return (
     <div className="portfolio">

        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-content">
             <h3 className="greeting">
                {DATA.about?.navbarname?.[greetIndex] ?? "Seja bem-vindo!"}
             </h3>
             <nav>
                <a href="#home">Início</a>
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
             </nav>
          </div>
        </header>

        <main>

          {/* HERO */}
          <section id="home" className="section hero">
             <h1>{DATA.hero.title}</h1>
             <p>{DATA.hero.subtitle}</p>
             <h3>{DATA.hero.mencao}</h3>
          </section>

        {/* SOBRE */}
        <section id="about" className="section">
            <div className="about grid">
                <div className="photo-wrap">
                    <img 
                        src="fotoperfil.png"
                        alt="Alexandre Ferreira"
                        className="about grid"
                    />
                </div>

                <div className="about-content">
                    <h2>Sobre</h2>
                    <p>{DATA.about.bio}</p>

                    <h3>Formação</h3>
                    {DATA.about.education.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}

                    <h3>Ferramentas</h3>
                    <div className="tools">
                        {DATA.tools.map(tool => (
                            <span key={tool.id} className="tool-badge">
                                {tool.name}
                            </span>
                        ))}
                    </div>

                    <h3>Redes Sociais</h3>
                    <div className="tools">
                        {DATA.socials.map(s => (
                            <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* PROJETOS */}
          <section id="projects" className="section">
             <h2>Projetos</h2>

             <div
                className="filters-row"
                style={{
                   display: "flex",
                   justifyContent: "space-between",
                   alignItems: "center",
                   gap: "1rem",
                   flexWrap: "wrap"
                }}
             >
                <div className="filters">
                   {categories.map(cat => (
                     <button
                        key={cat}
                        className={filter === cat ? "active" : ""}
                        onClick={() => setFilter(cat)}
                     >
                        {cat}
                     </button>
                   ))}
                </div>

                <div className="sort-actions">
                   <button
                      className={sortAlphabetical ? "active" : ""}
                      onClick={() => setSortAlphabetical(prev => !prev)}
                   >
                      <span aria-hidden="true" className="sort-icon">⇄</span>
                      {sortAlphabetical ? "Remover ordenação" : "Ordenar A-Z"}
                   </button>
                </div>
             </div>

             <div className="grid">
                {visibleProjects.map(project => (
                  <div
                     key={project.id}
                     className="card"
                     onClick={() => setSelectedProject(project)}
                     style={project.featured ? { position: "relative" } : undefined}
                  >
                     {project.featured && (
                        <span
                           className="featured-badge"
                           style={{
                              position: "absolute",
                              top: "0.5rem",
                              left: "0.5rem",
                              background: "#111",
                              color: "#fff",
                              fontSize: "0.7rem",
                              padding: "0.2rem 0.6rem",
                              borderRadius: "999px",
                              zIndex: 1
                           }}
                        >
                           Destaque
                        </span>
                     )}
                     <img src={project.thumb} alt={project.title} loading="lazy" />
                     <h4>{project.title}</h4>
                     <span>{project.category}</span>
                  </div>
                ))}
             </div>
          </section>

          {/* CONTATO */}
          <section id="contact" className="section">
             <h2>Entre em Contato!</h2>
             <p>Email:  {DATA.contact.email}</p>
             <p>Contato:  {DATA.contact.phone}</p>
             <p>{DATA.contact.location}</p>
          </section>

         
        </main>

        {/* FOOTER */}
        <footer>
          © {new Date().getFullYear()} Todos os direitos de imagem reservados. Desenvolvido por Alexandre Ferreira.
        </footer>

        {/* MODAL */}
        {selectedProject && (
          <ProjectModal
             project={selectedProject}
             onClose={() => setSelectedProject(null)}
          />
        )}

        <ScrollToTopButton />
     </div>
  );
}

/* =====================================================
    🔹 MODAL
===================================================== */

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
     document.body.style.overflow = "hidden";
     closeRef.current?.focus();

     const handleKey = e => e.key === "Escape" && onClose();
     document.addEventListener("keydown", handleKey);

     return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", handleKey);
     };
  }, [onClose]);

  return (
     <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={e => e.stopPropagation()}
        >
          <button ref={closeRef} className="close" onClick={onClose}>
             ×
          </button>

          <img src={project.full} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
              {Array.isArray(project.toolsUsed) && project.toolsUsed.map(toolId => {
                  const tool = DATA.tools.find(t => t.id === toolId);
                  return (
                      <h3 key={toolId} className="tool-badge">
                         {tool ? tool.name : toolId}
                      </h3>
                  );
              })}
          {project.link && (
             <a href={project.link} target="_blank" rel="noreferrer">
                Ver projeto
             </a>
          )}
        </div>
     </div>
  );
}

/* =====================================================
    🔹 BOTÃO SCROLL TOP
===================================================== */

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
     const toggle = () => setVisible(window.scrollY > 300);
     window.addEventListener("scroll", toggle);
     return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
     <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
     >
        ↑
     </button>
  );
}