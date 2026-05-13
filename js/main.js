// ============================================
// ぼうず'n coffee - Main Script (v2)
// ============================================

(function () {
  'use strict';

  // ----- Preloader -----
  function initLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) return;
    const hide = () => {
      loader.classList.add('is-hidden');
      document.body.classList.add('is-loaded');
    };
    if (document.readyState === 'complete') {
      setTimeout(hide, 1700);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 1500));
    }
  }

  // ----- Custom cursor -----
  function initCursor() {
    if (window.matchMedia('(hover: none)').matches) return;
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let cx = x, cy = y;
    document.addEventListener('mousemove', e => {
      x = e.clientX; y = e.clientY;
      cursor.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();
    const hoverables = 'a, button, .gallery-item, .ig-tile, .sig-card, .space-card, .menu-card';
    document.body.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) cursor.classList.add('is-hover');
    });
    document.body.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) cursor.classList.remove('is-hover');
    });
  }

  // ----- Render: Signature cards -----
  function renderSignature() {
    const grid = document.getElementById('signatureGrid');
    if (!grid || typeof signatureItems === 'undefined') return;
    grid.innerHTML = signatureItems.map((it, i) => `
      <article class="sig-card reveal" data-delay="${i + 1}">
        <div class="sig-card-media reveal-image">
          <img src="${it.image}" alt="${it.name}" loading="lazy" />
          <span class="sig-card-tag">${it.tag}</span>
          <span class="sig-card-no">No. 0${i + 1}</span>
        </div>
        <span class="sig-card-en">${it.nameEn}</span>
        <h3 class="sig-card-name">${it.name}</h3>
        <p class="sig-card-desc">${it.description}</p>
        <div class="sig-card-foot">
          <span>${it.price}</span>
          <span>— ${it.tag}</span>
        </div>
      </article>
    `).join('');
  }

  // ----- Render: Menu list (two-column) -----
  function renderMenu() {
    const drinkEl = document.getElementById('menuDrinks');
    const sweetsEl = document.getElementById('menuSweets');
    const rowHtml = (it) => `
      <li class="menu-row ${it.featured ? 'is-featured' : ''}">
        <div>
          <span class="menu-row-name">${it.name}</span>
          ${it.note ? `<span class="menu-row-note">/ ${it.note}</span>` : ''}
          <span class="menu-row-en">${it.nameEn}</span>
        </div>
        <span class="menu-row-price">${it.price}</span>
      </li>
    `;
    if (drinkEl && typeof drinkMenu !== 'undefined') {
      drinkEl.innerHTML = drinkMenu.map(rowHtml).join('');
    }
    if (sweetsEl && typeof sweetsMenu !== 'undefined') {
      sweetsEl.innerHTML = sweetsMenu.map(rowHtml).join('');
    }
  }

  // ----- Render: Space -----
  function renderSpace() {
    const grid = document.getElementById('spaceGrid');
    if (!grid || typeof spaceItems === 'undefined') return;
    grid.innerHTML = spaceItems.map((it, i) => `
      <figure class="space-card s-${i + 1} reveal reveal-image" data-delay="${i + 1}">
        <div class="space-card-media">
          <img src="${it.image}" alt="${it.title}" loading="lazy" />
        </div>
        <figcaption class="space-card-body">
          <span class="space-card-no">${it.no}</span>
          <h3 class="space-card-title">${it.title}<small>${it.titleEn}</small></h3>
          <p class="space-card-text">${it.text}</p>
        </figcaption>
      </figure>
    `).join('');
  }

  // ----- Render: Gallery -----
  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid || typeof galleryImages === 'undefined') return;
    grid.innerHTML = galleryImages.map((g, i) => `
      <a class="gallery-item reveal reveal-image" href="${g.src}" target="_blank" rel="noopener" data-delay="${(i % 4) + 1}" aria-label="${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" />
      </a>
    `).join('');
  }

  // ----- Render: Instagram tiles -----
  function renderInstagram() {
    const grid = document.getElementById('igGrid');
    if (!grid || typeof igTiles === 'undefined' || typeof shopInfo === 'undefined') return;
    grid.innerHTML = igTiles.map((src, i) => `
      <a class="ig-tile reveal reveal-image" href="${shopInfo.instagram}" target="_blank" rel="noopener" data-delay="${(i % 4) + 1}" aria-label="Instagram投稿を見る">
        <img src="${src}" alt="Instagram投稿" loading="lazy" />
        <svg class="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      </a>
    `).join('');
  }

  // ----- Fill shop info placeholders -----
  function renderShopInfo() {
    if (typeof shopInfo === 'undefined') return;
    const map = {
      'shopName': shopInfo.name,
      'shopNameEn': shopInfo.nameEn,
      'shopAddress': shopInfo.address,
      'shopTel': shopInfo.tel,
      'shopHours': shopInfo.hours,
      'shopHoursDetail': shopInfo.hoursDetail,
      'shopReservation': shopInfo.reservation,
      'shopStation': shopInfo.nearestStation,
      'shopParking': shopInfo.parking,
      'shopPayment': shopInfo.payment,
      'shopSmoking': shopInfo.smoking,
      'shopSeats': shopInfo.seats,
      'shopHandle': shopInfo.instagramHandle,
    };
    Object.entries(map).forEach(([id, val]) => {
      document.querySelectorAll(`[data-shop="${id}"]`).forEach(el => {
        el.textContent = val;
      });
    });
    document.querySelectorAll('[data-href="instagram"]').forEach(a => a.href = shopInfo.instagram);
    document.querySelectorAll('[data-href="map"]').forEach(a => a.href = shopInfo.mapUrl);
    document.querySelectorAll('[data-href="tel"]').forEach(a => a.href = 'tel:' + shopInfo.tel.replace(/-/g, ''));
    const mapFrame = document.getElementById('mapEmbed');
    if (mapFrame) mapFrame.src = shopInfo.mapEmbed;
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  // ----- Header scroll state -----
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 60) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----- Hamburger -----
  function initNav() {
    const btn = document.querySelector('.hamburger');
    const list = document.querySelector('.nav-list');
    if (!btn || !list) return;
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-open');
      list.classList.toggle('is-open');
      document.body.style.overflow = list.classList.contains('is-open') ? 'hidden' : '';
    });
    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.classList.remove('is-open');
        list.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Reveal on scroll -----
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .split, .reveal-image');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach(e => io.observe(e));
  }

  // ----- Hero parallax (subtle) -----
  function initHeroParallax() {
    const hero = document.querySelector('.hero-media img');
    if (!hero) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          hero.style.setProperty('transform', `scale(${1.02 + y * 0.00015}) translateY(${y * 0.07}px)`);
        }
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Init -----
  document.addEventListener('DOMContentLoaded', () => {
    renderShopInfo();
    renderSignature();
    renderMenu();
    renderSpace();
    renderGallery();
    renderInstagram();
    initHeader();
    initNav();
    initHeroParallax();
    initCursor();
    requestAnimationFrame(initReveal);
    initLoader();
  });
})();
