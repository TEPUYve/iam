/* ============================================================
   iam.tepuy.site — main.js
   Features: i18n ES/EN, SVG animations, ScrollSpy,
             Scroll Reveal, Nav toggle, Navbar scroll state
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────────
   1. TRANSLATIONS (i18n)
───────────────────────────────────────────── */
const translations = {
  es: {
    'nav.about': 'Sobre Mí',
    'nav.systems': 'Sistemas',
    'nav.project': 'Proyecto',
    'nav.brands': 'Marcas',
    'nav.contact': 'Contacto',

    'hero.tag': 'Fundador · Ingeniero · Creador',
    'hero.h1a': 'Todo es un sistema.',
    'hero.h1b': 'Yo los hago funcionar.',
    'hero.sub': 'Ingeniero en Informática · MSc. Redes de Computadoras · Fundador de TEPUY. Diagnostico y construyo sistemas — desde arquitecturas cloud hasta redes MikroTik y pistas de esgrima.',
    'hero.cta1': '📅 Agendar Cita',
    'hero.cta2': '💬 WhatsApp',
    'hero.svg-engineer': 'INGENIERO',
    'hero.svg-fencing': 'ESGRIMA',

    'about.label': 'Sobre Mí',
    'about.role': 'Fundador & CEO · TEPUY',
    'about.bio': 'Soy un <strong>Ingeniero en Informática</strong> con Maestría en Redes de Computadoras (UCLA) y certificaciones en <strong>AWS</strong>. Fundé <strong>TEPUY</strong> para llevar infraestructura tecnológica robusta a empresas y emprendedores. Mi enfoque es sistémico: cada problema — tecnológico o deportivo — tiene una lógica interna que hay que <em>diagnosticar, entender y hacer funcionar</em>.',
    'about.bio2': 'Apasionado por la <strong>Inteligencia Artificial</strong> y el apoyo tecnológico al <strong>Club de Esgrima Cabudare</strong> donde acompaño el desarrollo de mi hija.',
    'about.edu1.title': 'Ing. en Informática',
    'about.edu1.sub': 'UCLA · Barquisimeto, Venezuela',
    'about.edu2.title': 'MSc. Redes de Computadoras',
    'about.edu2.sub': 'UCLA · Posgrado en Telecomunicaciones',
    'about.edu3.title': 'AWS Certified',
    'about.edu3.sub': 'Amazon Web Services',

    'systems.label': 'Sistemas',
    'systems.heading': 'Sistemas que <span class="cyan">Diagnostico</span>',
    'sys1.title': 'Cloud & Infraestructura',
    'sys1.desc': 'Diseño y administración de arquitecturas cloud en AWS. Servidores, virtualización, contenedores Docker, backup y disaster recovery. Tu infraestructura siempre activa.',
    'sys2.title': 'Ciberseguridad & Redes',
    'sys2.desc': 'Diseño de redes seguras, firewalls, VPNs y gestión de infraestructura MikroTik y Cisco. Protejo la conectividad y los datos de tu organización.',
    'sys3.title': 'Inteligencia Artificial',
    'sys3.desc': 'Apasionado por la IA aplicada: automatización de procesos, LLMs, prompt engineering y soluciones inteligentes para negocios. La IA es la nueva electricidad.',
    'sys4.title': 'Esgrima & Club',
    'sys4.desc': 'Responsable tecnológico del Club de Esgrima Cabudare. Web, comunicaciones, registros digitales — y papá orgulloso de una esgrimista que compite y gana.',

    'project.label': 'Proyecto Destacado',
    'project.heading': 'Club de Esgrima <span class="bronze">Cabudare</span>',
    'project.role': 'Rol · Dirección Tecnológica',
    'project.title': 'Tecnología al servicio del deporte',
    'project.desc': 'Lidero la infraestructura tecnológica del Club de Esgrima Cabudare: sitio web, comunicaciones digitales, gestión de registros y presencia online. Un proyecto donde la pasión de padre se une con la experiencia del ingeniero — apoyando a nuestra comunidad de esgrimistas en Lara, Venezuela.',
    'project.cta': 'Ref. Ver Sitio del Club',
    'project.cta2': '🌐 TEPUY IT',
    'project.svg-title': 'CLUB ESGRIMA CABUDARE',

    'brands.label': 'Mis Marcas',
    'brands.heading': 'Dos marcas. <span class="cyan">Un mismo sistema.</span>',
    'brand1.tagline': 'Infraestructura · Cloud · Ciberseguridad',
    'brand1.desc': 'Empresa de tecnología especializada en infraestructura cloud, redes empresariales, ciberseguridad y consultoría tecnológica. Llevamos soluciones robustas a negocios de todos los tamaños en Venezuela y la región.',
    'brand2.tagline': 'Tienda Virtual · Artículos Nuevos y con Historia',
    'brand2.desc': 'Artículos nuevos y con historia: calidad que te acompaña y un pasado que inspira. Encuentra lo que buscas con el valor que merece. Una tienda virtual donde cada pieza tiene su propia historia y su propio valor.',

    'contact.label': 'Contacto',
    'contact.heading': '¿Hablamos de <span class="cyan">tu sistema</span>?',
    'contact.sub': 'Agenda una cita o contáctame directamente. Estoy a un mensaje de distancia.',
    'contact.wa': 'Escribir mensaje',
    'contact.calendar.label': 'Agenda',
    'contact.calendar': 'Agendar una cita',

    'footer.copy': '© 2025 José M. Figueredo A. · iam.tepuy.site',
  },

  en: {
    'nav.about': 'About',
    'nav.systems': 'Systems',
    'nav.project': 'Project',
    'nav.brands': 'Brands',
    'nav.contact': 'Contact',

    'hero.tag': 'Founder · Engineer · Builder',
    'hero.h1a': 'Everything is a system.',
    'hero.h1b': 'I make them work.',
    'hero.sub': 'Informatics Engineer · MSc. Computer Networks · Founder of TEPUY. I diagnose and build systems — from cloud architectures to MikroTik networks and fencing pistes.',
    'hero.cta1': '📅 Schedule a Call',
    'hero.cta2': '💬 WhatsApp',
    'hero.svg-engineer': 'ENGINEER',
    'hero.svg-fencing': 'FENCING',

    'about.label': 'About Me',
    'about.role': 'Founder & CEO · TEPUY',
    'about.bio': 'I am an <strong>Informatics Engineer</strong> with a Master\'s in Computer Networks (UCLA) and <strong>AWS</strong> certifications. I founded <strong>TEPUY</strong> to deliver robust tech infrastructure to businesses and entrepreneurs. My approach is systemic: every problem — technological or athletic — has an internal logic that must be <em>diagnosed, understood and made to work</em>.',
    'about.bio2': 'Passionate about <strong>Artificial Intelligence</strong> and providing tech support to the <strong>Club de Esgrima Cabudare</strong> where I support my daughter\'s development.',
    'about.edu1.title': 'Informatics Engineer',
    'about.edu1.sub': 'UCLA · Barquisimeto, Venezuela',
    'about.edu2.title': 'MSc. Computer Networks',
    'about.edu2.sub': 'UCLA · Postgraduate Telecommunications',
    'about.edu3.title': 'AWS Certified',
    'about.edu3.sub': 'Amazon Web Services',

    'systems.label': 'Systems',
    'systems.heading': 'Systems I <span class="cyan">Diagnose</span>',
    'sys1.title': 'Cloud & Infrastructure',
    'sys1.desc': 'Design and management of cloud architectures on AWS. Servers, virtualization, Docker containers, backup and disaster recovery. Your infrastructure always online.',
    'sys2.title': 'Cybersecurity & Networks',
    'sys2.desc': 'Secure network design, firewalls, VPNs and MikroTik & Cisco infrastructure management. I protect your organization\'s connectivity and data.',
    'sys3.title': 'Artificial Intelligence',
    'sys3.desc': 'Passionate about applied AI: process automation, LLMs, prompt engineering and intelligent business solutions. AI is the new electricity.',
    'sys4.title': 'Fencing & Club',
    'sys4.desc': 'Tech director at Club de Esgrima Cabudare. Website, digital communications, records management — and proud dad of a competitive fencer.',

    'project.label': 'Featured Project',
    'project.heading': 'Cabudare Fencing <span class="bronze">Club</span>',
    'project.role': 'Role · Technology Director',
    'project.title': 'Technology at the service of sport',
    'project.desc': 'I lead the technology infrastructure at Club de Esgrima Cabudare: website, digital communications, records management and online presence. A project where a father\'s passion merges with an engineer\'s expertise — supporting our fencing community in Lara, Venezuela.',
    'project.cta': '🤺 Visit Club Site',
    'project.cta2': '🌐 TEPUY IT',
    'project.svg-title': 'CABUDARE FENCING CLUB',

    'brands.label': 'My Brands',
    'brands.heading': 'Two brands. <span class="cyan">One system.</span>',
    'brand1.tagline': 'Infrastructure · Cloud · Cybersecurity',
    'brand1.desc': 'Technology company specializing in cloud infrastructure, enterprise networks, cybersecurity and tech consulting. We deliver robust solutions to businesses of all sizes in Venezuela and the region.',
    'brand2.tagline': 'Virtual Store · New & Vintage Items',
    'brand2.desc': 'New and vintage items: quality that accompanies you and a past that inspires. Find what you are looking for at the right value. A virtual store where every piece has its own story and its own worth.',

    'contact.label': 'Contact',
    'contact.heading': 'Let\'s talk about <span class="cyan">your system</span>?',
    'contact.sub': 'Schedule a meeting or reach out directly. I\'m just one message away.',
    'contact.wa': 'Send a message',
    'contact.calendar.label': 'Schedule',
    'contact.calendar': 'Book an appointment',

    'footer.copy': '© 2025 José M. Figueredo A. · iam.tepuy.site',
  }
};

/* ─────────────────────────────────────────────
   2. LANGUAGE MANAGEMENT
───────────────────────────────────────────── */
let currentLang = 'es';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update toggle UI
  document.getElementById('langES').classList.toggle('active', lang === 'es');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');

  currentLang = lang;

  // Save preference
  try { localStorage.setItem('iam-lang', lang); } catch (e) { }
}

function toggleLang() {
  applyTranslations(currentLang === 'es' ? 'en' : 'es');
}

function initLang() {
  try {
    const saved = localStorage.getItem('iam-lang');
    if (saved && translations[saved]) {
      applyTranslations(saved);
      return;
    }
  } catch (e) { }

  // Default ES
  applyTranslations('es');
}

/* ─────────────────────────────────────────────
   3. SVG LINE DRAW ANIMATION
───────────────────────────────────────────── */
function animateDiagramLines() {
  const lines = document.querySelectorAll('.diagram-line');
  const nodes = document.querySelectorAll('.satellite-node');

  lines.forEach((line, i) => {
    const delay = 300 + i * 200;
    const duration = 600;

    setTimeout(() => {
      line.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      line.style.strokeDashoffset = '0';
    }, delay);
  });

  // Fade in satellite nodes after lines draw
  nodes.forEach((node, i) => {
    node.style.opacity = '0';
    node.style.transform = 'scale(0.6)';
    node.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

    setTimeout(() => {
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';

      // Add floating animation after pop-in
      setTimeout(() => {
        node.classList.add('loaded');
      }, 500);
    }, 500 + i * 200);
  });

  // Fade in central node immediately with a pulse
  const centralNode = document.querySelector('.central-node');
  if (centralNode) {
    centralNode.style.opacity = '0';
    centralNode.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      centralNode.style.opacity = '1';
    }, 100);
  }
}

/* ─────────────────────────────────────────────
   4. SCROLL REVEAL — IntersectionObserver
───────────────────────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────
   5. NAVBAR SCROLL STATE + SCROLLSPY
───────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   6. MOBILE NAV TOGGLE
───────────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('navDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close on link click
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !drawer.contains(e.target)) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ─────────────────────────────────────────────
   7. LANG TOGGLE EVENTS
───────────────────────────────────────────── */
function initLangToggle() {
  const langToggle = document.getElementById('langToggle');
  const langES = document.getElementById('langES');
  const langEN = document.getElementById('langEN');

  // FIX: use stopPropagation on child buttons to prevent double-fire
  // when clicking a specific language option, apply directly and stop
  // the event from bubbling to the parent toggle (which would toggle again)
  langES.addEventListener('click', (e) => {
    e.stopPropagation();
    applyTranslations('es');
  });

  langEN.addEventListener('click', (e) => {
    e.stopPropagation();
    applyTranslations('en');
  });

  // Clicking the container background (not on a specific pill) toggles
  langToggle.addEventListener('click', toggleLang);

  // Keyboard accessibility
  langToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleLang();
    }
    if (e.key === 'ArrowLeft') { e.preventDefault(); applyTranslations('es'); }
    if (e.key === 'ArrowRight') { e.preventDefault(); applyTranslations('en'); }
  });
}

/* ─────────────────────────────────────────────
   8. SYSTEM CARD HOVER — subtle coordinate display
───────────────────────────────────────────── */
function initSystemCards() {
  document.querySelectorAll('.system-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

/* ─────────────────────────────────────────────
   9. SMOOTH ANCHOR SCROLL
───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─────────────────────────────────────────────
   10. INIT — DOMContentLoaded
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Language
  initLang();
  initLangToggle();

  // Navigation
  initNavbar();
  initMobileNav();
  initSmoothScroll();

  // Animations
  initScrollReveal();
  initSystemCards();

  // Hero diagram — slight delay for page render
  setTimeout(animateDiagramLines, 300);

  console.log('%c IAM · TEPUY ', 'background:#0A1628; color:#7DD3FC; font-family:monospace; font-size:14px; padding:4px 8px; border:1px solid #7DD3FC');
  console.log('%c José M. Figueredo A. — Engineer & Founder ', 'background:#0A1628; color:#C08552; font-family:monospace; font-size:11px; padding:2px 8px');
  console.log('%c tepuy.site ', 'color:#9FB3C8; font-family:monospace; font-size:10px');
});
