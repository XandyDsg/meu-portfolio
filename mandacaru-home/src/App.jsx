
import { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";

/* =====================================================
   MANDACARU — DADOS DO ESTÚDIO
===================================================== */

const DATA = {
  studio: {
    name: "mandacaru",
    tagline: "Design feito de muitos pedaços.",
    description:
      "Somos um pequeno estúdio independente de design que transforma ideias, histórias e problemas em identidades, experiências e produtos digitais.",
  },

  services: [
    {
      number: "01",
      title: "Identidade Visual",
      description:
        "Desenvolvimento de Identidades únicas co-criadas entre os designers e o solicitante.",
    },
    {
      number: "02",
      title: "Landing Pages",
      description:
        "Interfaces, sites e produtos digitais pensados para pessoas.",
    },
    {
      number: "03",
      title: "UX/UI",
      description:
        "Pesquisa, estratégia e UX para transformar problemas em experiências melhores.",
    },
    {
      number: "04",
      title: "Comunicação",
      description:
        "Peças e sistemas visuais para fazer marcas conversarem com seu público.",
    },
  ],

  projects: [
    {
      id: 1,
      category: "Digital",
      featured: true,
      title: "Certin",
      subtitle: "Aplicativo de Gestão Acadêmica",
      thumb: "certinthumb.png",
      full: "certinthumb.png",
      description:
        "Construção de identidade visual, interface e prototipação de telas para um aplicativo de gestão acadêmica.",
      link: "https://front-end-certin-app.vercel.app",
    },
    {
      id: 2,
      category: "Identidade",
      title: "Pitéu",
      subtitle: "Identidade Visual",
      thumb: "piteuplaceholder.png",
      full: "piteuplaceholder.png",
      description:
        "Identidade visual para uma loja de roupas nordestina, conectando referências do passado à energia das novas gerações.",
      link: "https://www.behance.net/gallery/244643015/Pitu-Identidade-Visual-de-Roupas",
    },
    {
      id: 3,
      category: "Identidade",
      title: "Cérebro Caótico",
      subtitle: "Identidade Visual",
      thumb: "portfolioplaceholder.png",
      full: "portfolioplaceholder.png",
      description:
        "Projeto experimental de identidade visual desenvolvido a partir da ideia de um processo criativo caótico.",
      link: "https://www.behance.net/gallery/244644697/Capa-Poster-Identidade-Visual-de-portfolio",
    },
    {
      id: 4,
      category: "Identidade",
      title: "Dadudim",
      subtitle: "Doceria Artesanal",
      thumb: "dadudimthumb.png",
      full: "dadudimthumb.png",
      description:
        "Construção de identidade visual para uma doceria artesanal, incluindo dois mascotes ilustrados.",
      link: "https://www.behance.net/gallery/251349109/DADUDIM-DOCERIA?platform=direct",
    },
    {
      id: 5,
      category: "Identidade",
      title: "Edjackson",
      subtitle: "Psicólogo",
      thumb: "edjacksonthumb.png",
      full: "edjacksonthumb.png",
      description:
        "Identidade visual desenvolvida para um psicólogo, buscando transmitir confiança, acolhimento e profissionalismo.",
      link: "https://www.behance.net/gallery/251767961/Edjackson-Lima-Psicologo-Branding",
    },
    {
      id: 6,
      category: "Identidade",
      title: "Clika",
      subtitle: "Empresa de Fotografia",
      thumb: "clikathumb.png",
      full: "clikathumb.png",
      description:
        "Identidade visual para uma empresa de fotografia, explorando profissionalismo, criatividade e expressão visual.",
      link: "https://www.behance.net/gallery/252167207/Clika-identidade-Visual",
    },
    {
      id: 7,
      category: "Digital",
      title: "Busque",
      subtitle: "Rota Universitária",
      thumb: "busquethumb.png",
      full: "busquethumb.png",
      description:
        "Identidade visual para um aplicativo de rota universitária.",
      link: "https://www.behance.net/gallery/252191787/BUSQUE-Rota-Universitaria",
    },
    {
      id: 8,
      category: "Identidade",
      title: "Clínica Casulo",
      subtitle: "Espaço de Desenvolvimento",
      thumb: "casulothumb.png",
      full: "casulothumb.png",
      description:
        "Identidade visual para uma clínica de psicologia ocupacional para diferentes públicos e faixas etárias.",
      link: "https://www.behance.net/gallery/254801075/Clinica-Casulo-Psicologia-Ocupacional",
    },
  ],

  contact: {
    email: "Mandacaru.corp@gmail.com",
    instagram: "https://www.instagram.com/manda_dsg",
    behance: "https://www.behance.net/alexandferreir155",
  },
};


/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function Inicio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const categories = useMemo(() => {
    return ["Todos", ...new Set(DATA.projects.map((project) => project.category))];
  }, []);

  const visibleProjects = useMemo(() => {
    if (filter === "Todos") {
      return DATA.projects;
    }

    return DATA.projects.filter(
      (project) => project.category === filter
    );
  }, [filter]);

  return (
    <div className="mandacaru">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            mandacaru<span>.</span>
          </a>

          <nav>
            <a href="#about">Sobre</a>
            <a href="#services">O que fazemos</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>

          <a
            href={DATA.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="nav-instagram"
          >
            Instagram ↗
          </a>

        </div>
      </header>


      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              Estúdio independente de design
            </p>

            <h1>
              Design feito
              <br />
              de <em>muitos pedaços.</em>
            </h1>

            <div className="hero-bottom">

              <p className="hero-description">
                O Mandacaru é um pequeno estúdio que conecta
                estratégia, design e tecnologia para transformar
                ideias em coisas que existem.
              </p>

              <a href="#projects" className="hero-link">
                Ver projetos <span>↓</span>
              </a>

            </div>

          </div>

          <div className="hero-symbol" aria-hidden="true">
            <span>✳</span>
          </div>

        </section>


        {/* =================================================
            MANIFESTO
        ================================================= */}

        <section id="about" className="manifesto">

          <div className="section-label">
            <span>01</span>
            <span>Sobre o Mandacaru</span>
          </div>

          <div className="manifesto-content">

            <h2>
              A gente acredita que
              <strong> boas ideias não nascem prontas.</strong>
            </h2>

            <p>
              Elas são feitas de referências, conversas, pesquisas,
              erros, descobertas e, principalmente, de pessoas.
            </p>

            <p>
              O Mandacaru nasce desse encontro. Um estúdio pequeno,
              próximo e curioso, criado para desenvolver projetos
              que tenham significado — da primeira ideia até a
              experiência final.
            </p>

          </div>

        </section>


        {/* =================================================
            SERVIÇOS
        ================================================= */}

        <section id="services" className="services">

          <div className="section-label">
            <span>02</span>
            <span>O que fazemos</span>
          </div>

          <div className="services-header">
            <h2>
              Pensamos.
              <br />
              Criamos.
              <br />
              <em>Construímos.</em>
            </h2>
          </div>

          <div className="services-list">

            {DATA.services.map((service) => (

              <article
                className="service"
                key={service.number}
              >

                <span className="service-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <span className="service-arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            PROJETOS
        ================================================= */}

        <section id="projects" className="projects">

          <div className="section-label">
            <span>03</span>
            <span>Projetos selecionados</span>
          </div>

          <div className="projects-header">

            <h2>
              Algumas coisas
              <br />
              que já <em>fizemos.</em>
            </h2>

            <div className="filters">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    filter === category
                      ? "filter active"
                      : "filter"
                  }
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          <div className="projects-grid">

            {visibleProjects.map((project, index) => (

              <article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >

                <div className="project-image">

                  {project.featured && (
                    <span className="project-tag">
                      Projeto em destaque
                    </span>
                  )}

                  <img
                    src={project.thumb}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="project-view">
                    Ver projeto ↗
                  </div>

                </div>

                <div className="project-info">

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>

                  <span>
                    {project.category}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            PROCESSO
        ================================================= */}

        <section className="process">

          <div className="section-label">
            <span>04</span>
            <span>Nosso jeito de fazer</span>
          </div>

          <div className="process-content">

            <h2>
              Não existe fórmula.
              <br />
              Existe <em>processo.</em>
            </h2>

            <div className="process-steps">

              <div>
                <span>01</span>
                <h3>Entender</h3>
                <p>
                  Antes de criar, a gente pesquisa,
                  pergunta e tenta entender o problema.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Explorar</h3>
                <p>
                  Transformamos informações em conceitos,
                  possibilidades e caminhos visuais.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Construir</h3>
                <p>
                  Desenvolvemos a solução, testamos,
                  refinamos e colocamos para funcionar.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Entregar</h3>
                <p>
                  O projeto sai do arquivo e encontra
                  as pessoas para quem foi criado.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            CTA / CONTATO
        ================================================= */}

        <section id="contact" className="contact">

          <div className="contact-label">
            <span>05</span>
            <span>Vamos conversar?</span>
          </div>

          <div className="contact-content">

            <p className="eyebrow">
              Tem uma ideia?
            </p>

            <h2>
              Vamos fazer
              <br />
              <em>acontecer.</em>
            </h2>

            <a
              href={`mailto:${DATA.contact.email}`}
              className="contact-email"
            >
              {DATA.contact.email}
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-top">

          <a href="#home" className="footer-logo">
            mandacaru<span>.</span>
          </a>

          <p>
            Design, estratégia e tecnologia
            <br />
            feitos de muitos pedaços.
          </p>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Mandacaru
          </span>

          <div className="footer-links">

            <a
              href={DATA.contact.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href={DATA.contact.behance}
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>

            <a
              href={`mailto:${DATA.contact.email}`}
            >
              Email
            </a>

          </div>

        </div>

      </footer>


      {/* =================================================
          MODAL DO PROJETO
      ================================================= */}

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
   MODAL
===================================================== */

function ProjectModal({ project, onClose }) {

  const closeRef = useRef(null);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKey = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    document.addEventListener(
      "keydown",
      handleKey
    );

    return () => {

      document.body.style.overflow = "auto";

      document.removeEventListener(
        "keydown",
        handleKey
      );

    };

  }, [onClose]);


  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar projeto"
        >
          ×
        </button>

        <img
          src={project.full}
          alt={project.title}
        />

        <div className="modal-content">

          <span>
            {project.category}
          </span>

          <h2>
            {project.title}
          </h2>

          <p>
            {project.description}
          </p>

          {project.link && (

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="modal-link"
            >
              Ver projeto completo ↗
            </a>

          )}

        </div>

      </div>

    </div>

  );
}


/* =====================================================
   SCROLL TO TOP
===================================================== */

function ScrollToTopButton() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggle = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      toggle
    );

    return () => {
      window.removeEventListener(
        "scroll",
        toggle
      );
    };

  }, []);


  if (!visible) {
    return null;
  }


  return (

    <button
      className="scroll-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Voltar ao topo"
    >
      ↑
    </button>

  );

}
