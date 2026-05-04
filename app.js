'use strict';

// ── Seeded PRNG (mulberry32) ──────────────────────────────────────────────────

function mkRng(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function strHash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

// ── Thumbnail canvas ──────────────────────────────────────────────────────────

function makeThumbnail(track, size) {
  const CELL = 8;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const rng = mkRng(strHash(track.id));
  const pal = track.palette;
  for (let y = 0; y < size; y += CELL) {
    for (let x = 0; x < size; x += CELL) {
      ctx.fillStyle = pal[Math.floor(rng() * pal.length)];
      ctx.fillRect(x, y, CELL, CELL);
    }
  }
  return canvas;
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const ICONS = {
  back: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  chevron: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  clock: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  book: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  python: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2C9.2 2 7.5 3.2 7.5 5V7H12V7.5H5C3.1 7.5 2 9 2 11.5 2 14 3.1 15.5 5 15.5H6.5V13C6.5 11 7.8 9.5 10 9.5H14C15.9 9.5 17 8.4 17 6.5V5C17 3.2 15.2 2 12 2ZM10.5 5.5C10.5 5 10.8 4.5 11.5 4.5 12.2 4.5 12.5 5 12.5 5.5 12.5 6 12.2 6.5 11.5 6.5 10.8 6.5 10.5 6 10.5 5.5Z" fill="rgba(255,255,255,0.9)"/><path d="M12 22C14.8 22 16.5 20.8 16.5 19V17H12V16.5H19C20.9 16.5 22 15 22 12.5 22 10 20.9 8.5 19 8.5H17.5V11C17.5 13 16.2 14.5 14 14.5H10C8.1 14.5 7 15.6 7 17.5V19C7 20.8 8.8 22 12 22ZM13.5 18.5C13.5 19 13.2 19.5 12.5 19.5 11.8 19.5 11.5 19 11.5 18.5 11.5 18 11.8 17.5 12.5 17.5 13.2 17.5 13.5 18 13.5 18.5Z" fill="rgba(255,255,255,0.7)"/></svg>`,
  brain: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z"/></svg>`,
  sql: `<text>SQL</text>`,
  r: `<text>R</text>`,
  chart: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
};

function getIconOverlay(iconKey) {
  if (iconKey === 'sql' || iconKey === 'r') {
    const label = iconKey === 'sql' ? 'SQL' : 'R';
    const size = iconKey === 'sql' ? '13px' : '20px';
    return `<span style="font-family:inherit;font-weight:800;font-size:${size};color:rgba(255,255,255,0.9);letter-spacing:0.04em;text-shadow:0 1px 3px rgba(0,0,0,0.3)">${label}</span>`;
  }
  return ICONS[iconKey] || '';
}

// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  view: 'tracks',       // 'tracks' | 'track'
  activeTrack: null,
  filter: 'Главное',
  search: '',
  expandedCourse: null,
  descExpanded: false,
};

// ── App shell ─────────────────────────────────────────────────────────────────

const $app = document.getElementById('app');

function render() {
  if (state.view === 'tracks') renderTracksView(true);
  else renderTrackView();
}

// ── Tracks list view ──────────────────────────────────────────────────────────

function renderTracksView(animate, swipeDir) {
  const filtered = TRACKS.filter(t => {
    const matchTag = state.filter === 'Главное' || t.tag === state.filter;
    const q = state.search.toLowerCase();
    const matchSearch = !q || t.title.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q);
    return matchTag && matchSearch;
  });

  const filterBtns = TAG_FILTERS.map(f =>
    `<button class="filter-btn${state.filter === f ? ' active' : ''}" data-filter="${f}">${f}</button>`
  ).join('');

  const cards = filtered.length
    ? filtered.map(t => `
        <div class="track-card" data-track="${t.id}">
          <div class="track-thumb" id="thumb-list-${t.id}">
            <div class="track-icon-overlay">${getIconOverlay(t.icon)}</div>
          </div>
          <div class="track-title">${t.title}</div>
        </div>`).join('')
    : `<div class="no-results">No tracks found</div>`;

  $app.innerHTML = `
    <div class="app-shell">
      <div class="view active${animate ? ' fade-enter' : ''}">
        <header class="header">
          <div class="header-spacer"></div>
          <h1 class="header-title">Tracks</h1>
          <div class="header-spacer"></div>
        </header>
        <div class="search-wrap">
          <div class="search-box">
            <span class="search-icon">${ICONS.search}</span>
            <input class="search-input" type="search" placeholder="Search" value="${escHtml(state.search)}" id="search-input" autocomplete="off" spellcheck="false">
          </div>
        </div>
        <div class="filter-wrap">${filterBtns}</div>
        <div class="tracks-list">${cards}</div>
      </div>
    </div>`;

  // Paint thumbnails
  filtered.forEach(t => {
    const wrap = document.getElementById(`thumb-list-${t.id}`);
    if (wrap) {
      const canvas = makeThumbnail(t, 200);
      wrap.insertBefore(canvas, wrap.firstChild);
    }
  });

  // Slide-in animation after filter swipe
  if (swipeDir) {
    const list = document.querySelector('.tracks-list');
    if (list) list.classList.add(swipeDir === 'left' ? 'slide-from-right' : 'slide-from-left');
  }

  // Events
  document.getElementById('search-input').addEventListener('input', e => {
    state.search = e.target.value;
    renderTracksView(false);
    requestAnimationFrame(() => {
      const inp = document.getElementById('search-input');
      if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
    });
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      renderTracksView(false);
    });
  });

  document.querySelectorAll('.track-card').forEach(card => {
    card.addEventListener('click', () => {
      state.activeTrack = TRACKS.find(t => t.id === card.dataset.track);
      state.expandedCourse = null;
      state.descExpanded = false;
      state.view = 'track';
      render();
    });
  });
}

// ── Track detail view ─────────────────────────────────────────────────────────

function renderTrackView() {
  const track = state.activeTrack;

  const courses = track.courses.map((c, i) => {
    const expanded = state.expandedCourse === i;
    return `
      <div class="course-card${expanded ? ' expanded' : ''}" data-idx="${i}">
        <div class="course-header">
          <div class="course-num">${c.id}</div>
          <div class="course-name">${c.title}</div>
          <span class="chevron">${ICONS.chevron}</span>
        </div>
        <div class="course-body">
          <div class="course-body-inner">
            <div class="course-body-content">
              <div class="course-duration">
                <span class="icon">${ICONS.clock}</span>
                ${c.duration}
              </div>
              <p class="course-desc">${c.description}</p>
              <button class="btn-start">Start Learning</button>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  const descClass = state.descExpanded ? '' : ' clamped';

  $app.innerHTML = `
    <div class="app-shell">
      <div class="view active fade-enter">
        <header class="header">
          <button class="btn-back" id="btn-back">${ICONS.back}</button>
          <h1 class="header-title">Track</h1>
          <div class="header-spacer"></div>
        </header>
        <div class="track-detail">
          <div class="track-hero">
            <div class="track-hero-thumb" id="thumb-hero">
              <div class="track-icon-overlay">${getIconOverlay(track.icon)}</div>
            </div>
            <div class="track-hero-info">
              <div class="track-hero-title">${track.title}</div>
              <div class="track-meta">
                <span class="icon">${ICONS.book}</span>
                ${track.courseCount} courses
              </div>
            </div>
          </div>
          <div class="track-description-wrap">
            <p class="track-description${descClass}" id="track-desc">${track.description}</p>
            <button class="read-more-btn" id="read-more-btn">${state.descExpanded ? 'Show Less' : 'Read More'}</button>
          </div>
          <div class="courses-list">${courses}</div>
        </div>
        <div class="bottom-cta">
          <button class="btn-track-start">Start Track</button>
        </div>
      </div>
    </div>`;

  // Hero thumbnail
  const heroWrap = document.getElementById('thumb-hero');
  const heroCanvas = makeThumbnail(track, 320);
  heroWrap.insertBefore(heroCanvas, heroWrap.firstChild);

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => {
    state.view = 'tracks';
    render();
  });

  // Read more
  document.getElementById('read-more-btn').addEventListener('click', () => {
    state.descExpanded = !state.descExpanded;
    document.getElementById('track-desc').classList.toggle('clamped', !state.descExpanded);
    document.getElementById('read-more-btn').textContent = state.descExpanded ? 'Show Less' : 'Read More';
  });

  // Course accordion
  document.querySelectorAll('.course-card').forEach(card => {
    card.querySelector('.course-header').addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx, 10);
      state.expandedCourse = state.expandedCourse === idx ? null : idx;
      document.querySelectorAll('.course-card').forEach((c, i) => {
        c.classList.toggle('expanded', i === state.expandedCourse);
      });
    });
  });

  // Start learning buttons
  document.querySelectorAll('.btn-start').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showToast('Starting course...');
    });
  });

  // Start track button
  document.querySelector('.btn-track-start').addEventListener('click', () => {
    showToast('Starting track: ' + track.title);
  });
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function showToast(msg) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '90px', left: '50%', transform: 'translateX(-50%)',
    background: 'rgba(17,24,39,0.9)', color: '#fff', padding: '10px 20px',
    borderRadius: '999px', fontSize: '14px', fontWeight: '500',
    zIndex: '100', whiteSpace: 'nowrap', maxWidth: '90vw',
    textOverflow: 'ellipsis', overflow: 'hidden',
    animation: 'fadeIn 0.2s ease',
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

// ── Swipe navigation ─────────────────────────────────────────────────────────

function setupSwipe() {
  let x0 = null, y0 = null, axis = null, busy = false;

  document.addEventListener('touchstart', e => {
    if (busy) return;
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
    axis = null;
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (x0 === null || busy) return;
    const dx = e.touches[0].clientX - x0;
    const dy = e.touches[0].clientY - y0;

    // Determine axis once we have 12px of movement
    if (axis === null && Math.hypot(dx, dy) > 12) {
      axis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
    }
    if (axis !== 'h') return;
    e.preventDefault(); // block scroll while tracking horizontal drag

    if (state.view === 'tracks') {
      const list = document.querySelector('.tracks-list');
      if (list) {
        list.style.transition = 'none';
        list.style.transform = `translateX(${dx * 0.35}px)`;
        list.style.opacity = String(Math.max(0.25, 1 - Math.abs(dx) / 260));
      }
    }
  }, { passive: false });

  document.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    x0 = null;

    if (axis !== 'h') return;

    if (state.view === 'tracks') {
      const idx = TAG_FILTERS.indexOf(state.filter);
      const canNext = dx < -50 && idx < TAG_FILTERS.length - 1;
      const canPrev = dx > 50 && idx > 0;
      const list = document.querySelector('.tracks-list');

      if (canNext || canPrev) {
        // Snap current list out, then slide new one in
        busy = true;
        if (list) {
          list.style.transition = 'transform 0.16s ease-in, opacity 0.16s ease-in';
          list.style.transform = `translateX(${dx < 0 ? '-110%' : '110%'})`;
          list.style.opacity = '0';
        }
        setTimeout(() => {
          state.filter = TAG_FILTERS[canNext ? idx + 1 : idx - 1];
          renderTracksView(false, canNext ? 'left' : 'right');
          scrollActiveFilter();
          busy = false;
        }, 160);
      } else {
        // Snap back
        if (list) {
          list.style.transition = 'transform 0.22s ease, opacity 0.22s ease';
          list.style.transform = '';
          list.style.opacity = '';
        }
      }

    } else if (state.view === 'track' && dx > 60) {
      state.view = 'tracks';
      render();
    }
  }, { passive: true });
}

function scrollActiveFilter() {
  const btn = document.querySelector('.filter-btn.active');
  if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ── Utils ─────────────────────────────────────────────────────────────────────

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Init ──────────────────────────────────────────────────────────────────────

setupSwipe();
render();
