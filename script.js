/* ═══════════════════════════════════════════════════════════
   Portfolio — Main Script
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initNav();
  initScrollReveal();
  initGalleries();
});

/* ── Render Projects from projects.js ──────────────────── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((p, idx) => {
    // Media area
    let mediaHTML = '';
    if (p.video) {
      mediaHTML = `
        <div class="project-media has-image">
          <video src="${p.video}" muted loop playsinline
                 onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;"></video>
        </div>`;
    } else if (p.images && p.images.length > 0) {
      const dots = p.images.length > 1
        ? `<div class="gallery-nav">${p.images.map((_, i) =>
            `<button class="gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Image ${i + 1}"></button>`
          ).join('')}</div>` : '';
      mediaHTML = `
        <div class="project-media has-image" data-gallery="${idx}">
          <img src="${p.images[0]}" alt="${p.title} screenshot" loading="lazy">
          ${dots}
        </div>`;
    } else {
      // Placeholder with project initials
      const initials = p.title.split(' ').map(w => w[0]).join('').slice(0, 3);
      mediaHTML = `
        <div class="project-media">
          <span class="project-media-placeholder">${initials}</span>
        </div>`;
    }

    // Tech-stack chips
    const stackHTML = p.techStack.map(t => {
      const iconEl = t.icon
        ? `<i class="${t.icon}"></i>`
        : '';
      return `<span class="stack-chip">${iconEl} ${t.name}</span>`;
    }).join('');

    // Highlight tags
    const highlightsHTML = (p.highlights || []).map(h =>
      `<span class="highlight-tag">${h}</span>`
    ).join('');

    // Links
    let linksHTML = '';
    if (p.github) linksHTML += `<a href="${p.github}" target="_blank" rel="noopener" class="project-link"><i class="fa-brands fa-github"></i> Code</a>`;
    if (p.live)   linksHTML += `<a href="${p.live}" target="_blank" rel="noopener" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`;

    return `
      <article class="project-card reveal" style="transition-delay: ${idx * 0.1}s">
        ${mediaHTML}
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-subtitle">${p.subtitle}</p>
          <p class="project-desc">${p.description}</p>
          <div class="project-stack">${stackHTML}</div>
          <div class="project-highlights">${highlightsHTML}</div>
          <div class="project-links">${linksHTML}</div>
        </div>
      </article>`;
  }).join('');
}

/* ── Image Gallery (per card) ──────────────────────────── */
function initGalleries() {
  document.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.idx, 10);
      const media = dot.closest('.project-media');
      const cardIdx = parseInt(media.dataset.gallery, 10);
      const project = PROJECTS[cardIdx];
      if (!project) return;

      media.querySelector('img').src = project.images[idx];
      media.querySelectorAll('.gallery-dot').forEach((d, i) =>
        d.classList.toggle('active', i === idx)
      );
    });
  });
}

/* ── Navigation ────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // scroll class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // hamburger
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    navItems.forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }
}

/* active link tracking */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

/* ── Scroll Reveal ─────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
