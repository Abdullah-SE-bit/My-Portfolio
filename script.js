/* ═══════════════════════════════════════════════════════════
   Portfolio — Main Script
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initNav();
  initScrollReveal();
  initGalleries();
  initTilt();
  initHeroParallax();
  initStarfield();
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

    const descriptionHTML = Array.isArray(p.bullets) && p.bullets.length > 0
      ? `<ul class="project-desc">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
      : p.description
        ? `<p class="project-desc">${p.description}</p>`
        : '';

    return `
      <article class="project-card reveal" style="transition-delay: ${idx * 0.1}s">
        ${mediaHTML}
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-subtitle">${p.subtitle}</p>
          ${descriptionHTML}
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

/* ── 3D tilt interaction (CSS variable driven) ─────────── */
function initTilt() {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsHover) return;

  const targets = document.querySelectorAll(
    '.project-card, .skill-card, .connect-card, .concept-badge'
  );

  targets.forEach(card => {
    let rect = null;
    let frameId = null;

    const updateTilt = (event) => {
      if (!rect) rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const pctX = (x / rect.width) - 0.5;
      const pctY = (y / rect.height) - 0.5;
      const tiltX = (-pctY * 8).toFixed(2);
      const tiltY = (pctX * 8).toFixed(2);

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
      });
    };

    const resetTilt = () => {
      if (frameId) cancelAnimationFrame(frameId);
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      rect = null;
    };

    card.addEventListener('mousemove', updateTilt);
    card.addEventListener('mouseleave', resetTilt);
    card.addEventListener('blur', resetTilt);
  });
}

/* ── Hero parallax tilt ────────────────────────────────── */
function initHeroParallax() {
  const hero = document.getElementById('hero');
  const heroInner = hero ? hero.querySelector('.hero-inner') : null;
  if (!hero || !heroInner) return;

  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsHover || reduceMotion) return;

  let rect = null;
  let frameId = null;

  const updateTilt = (event) => {
    if (!rect) rect = hero.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const pctX = (x / rect.width) - 0.5;
    const pctY = (y / rect.height) - 0.5;
    const tiltX = (-pctY * 6).toFixed(2);
    const tiltY = (pctX * 6).toFixed(2);

    if (frameId) cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => {
      heroInner.style.setProperty('--hero-tilt-x', `${tiltX}deg`);
      heroInner.style.setProperty('--hero-tilt-y', `${tiltY}deg`);
    });
  };

  const resetTilt = () => {
    if (frameId) cancelAnimationFrame(frameId);
    heroInner.style.setProperty('--hero-tilt-x', '0deg');
    heroInner.style.setProperty('--hero-tilt-y', '0deg');
    rect = null;
  };

  hero.addEventListener('mousemove', updateTilt);
  hero.addEventListener('mouseleave', resetTilt);
}

/* ── Starfield background ──────────────────────────────── */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const palette = [
    [0, 212, 255],
    [124, 58, 237],
    [236, 72, 153],
    [255, 255, 255],
  ];

  let width = 0;
  let height = 0;
  let depth = 0;
  let stars = [];

  const createStar = () => {
    const color = palette[Math.floor(Math.random() * palette.length)];
    return {
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * depth + 1,
      color,
    };
  };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    depth = Math.max(width, height);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(1200, Math.floor((width * height) / 7000));
    stars = Array.from({ length: count }, createStar);
  };

  const drawStatic = () => {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      const x = (star.x / star.z) * depth + width / 2;
      const y = (star.y / star.z) * depth + height / 2;
      const size = Math.max(1, 2 * (1 - star.z / depth));
      const alpha = 0.35;
      ctx.fillStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${alpha})`;
      ctx.fillRect(x, y, size, size);
    });
  };

  const animate = () => {
    const speed = Math.max(1, depth / 1200);
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    for (let i = 0; i < stars.length; i += 1) {
      const star = stars[i];
      const prevZ = star.z;
      star.z -= speed;

      if (star.z <= 1) {
        stars[i] = createStar();
        continue;
      }

      const x = (star.x / star.z) * depth + width / 2;
      const y = (star.y / star.z) * depth + height / 2;
      const prevX = (star.x / prevZ) * depth + width / 2;
      const prevY = (star.y / prevZ) * depth + height / 2;
      const alpha = Math.min(1, 0.2 + (1 - star.z / depth) * 1.6);

      ctx.strokeStyle = `rgba(${star.color[0]}, ${star.color[1]}, ${star.color[2]}, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  };

  resize();

  if (reduceMotion) {
    drawStatic();
  } else {
    animate();
  }

  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) drawStatic();
  }, { passive: true });
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
