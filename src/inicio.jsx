import { useState, useEffect, useMemo, useRef } from "react";
import "./inicio.css";

/* =====================================================
    🔹 DADOS EDITÁVEIS — EDITE SOMENTE AQUI
===================================================== */

const DATA = {
  hero: {
     title: "Portfólio 2026 - Alexandre Ferreira",
     subtitle: "Acredito no Design como algo além do produto. Acredito no Design como atitude.",
     mencao: "Alice Rawsthorn - Design como Atitude"
},

  about: {
     name: "Alexandre Ferreira",
     bio: "Sou graduando de Design Digital pela Universidade Federal do Ceará, onde desenvolvi capacidades de atuar para álem das áreas de desenvolvimento gráfico, como o desenvolvimento de projetos visuais também para o mundo digital. Acredito no papel social do Designer e busco atuar em diferentes frentes desde projetos de impactos ambientais até a construção de projetos para o combate de desigualdades sociais.",
     education: [
        "Ensino Técnico em Informática — 2018 - 2021",
        "Graduação em Design Digital — Cursando o 7º semestre"
     ],
     navbarname: ["Seja bem-vindo!", "Seja bem-vinda!", "Seja bem-vinde!"]
  },

  socials: [
     { name: "LinkedIn", url: "https://www.linkedin.com/in/alexandreferreiradesigner" },
     { name: "Instagram", url: "https://www.instagram.com/manda_dsg" },
     { name: "GitHub", url: "https://github.com/XandyDsg" }
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

  projects: [
     {
        id: 1,
        category: "UI Design",
        title: "Certin - Aplicativo de Gestão Acadêmica",
        thumb: "certinthumb.png",
        full: "certinthumb.png",
        description: "Construção de identidade visual, interface e prototipação de telas para um aplicativo de gestão acadêmica.",
        toolsUsed: ["CorelDraw", "Ilustrator", "Figma", "Vite"],
        link: "https://front-end-certin-app.vercel.app"
     },
     {
        id: 2,
        category: "Identidade Visual",
        title: "Pitéu - Identidade Visual para loja de roupas",
        thumb: "piteuplaceholder.png",
        full: "piteuplaceholder.png",
        description: "Identidade Visual para uma loja de Roupas Nordestina, com o foco em transmitir a energia e a vibe das gerações passadas para o futuro.",
        toolsUsed: ["CorelDraw", "Ilustrator", "Photoshop"],
        link: "https://www.behance.net/gallery/244643015/Pitu-Identidade-Visual-de-Roupas"
     },
      {
        id: 3,
        category: "Identidade Visual",
        title: "Processo Criativo de um cérebro Caótico - Identidade Visual",
        thumb: "portfolioplaceholder.png",
        full: "portfolioplaceholder.png",
        description: "Identidade Visual para uma loja de Roupas Nordestina, com o foco em transmitir a energia e a vibe das gerações passadas para o futuro.",
        toolsUsed: ["CorelDraw", "Ilustrator", "Photoshop"],
        link: "https://www.behance.net/gallery/244644697/Capa-Poster-Identidade-Visual-de-portfolio"
     }
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
     if (filter === "Todos") return DATA.projects;
     return DATA.projects.filter(p => p.category === filter);
  }, [filter]);

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

             <div className="grid">
                {visibleProjects.map(project => (
                  <div
                     key={project.id}
                     className="card"
                     onClick={() => setSelectedProject(project)}
                  >
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
