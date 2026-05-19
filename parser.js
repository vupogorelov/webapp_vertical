'use strict';

// ── Tokeniser ─────────────────────────────────────────────────────────────────
// Converts markdown text into a flat list of typed tokens.
// Rules (checked in order, first match wins):
//   ### text  → h3  (subtitle)
//   ## text   → h2  (card item)
//   # text    → h1  (section tab)
//   **text**  → group (group label, must be only content on the line)
//   [tracks]  → action:tracks
//   ---       → hr  (unnamed group break)
//   (blank)   → flush current paragraph
//   anything  → accumulated into current paragraph buffer

function parseMarkdown(text) {
  const lines = text.split('\n');
  const tokens = [];
  let buf = [];

  function flushBuf() {
    const s = buf.join(' ').trim();
    if (s) tokens.push({ type: 'p', text: s });
    buf = [];
  }

  for (const raw of lines) {
    const t = raw.trim();

    if (t === '') {
      flushBuf();
    } else if (t.startsWith('### ')) {
      flushBuf();
      tokens.push({ type: 'h3', text: t.slice(4).trim() });
    } else if (t.startsWith('## ')) {
      flushBuf();
      tokens.push({ type: 'h2', text: t.slice(3).trim() });
    } else if (t.startsWith('# ')) {
      flushBuf();
      tokens.push({ type: 'h1', text: t.slice(2).trim() });
    } else if (/^\*\*[^*]+\*\*$/.test(t)) {
      flushBuf();
      tokens.push({ type: 'group', text: t.slice(2, -2).trim() });
    } else if (t === '[tracks]') {
      flushBuf();
      tokens.push({ type: 'action', value: 'tracks' });
    } else if (t === '---') {
      flushBuf();
      tokens.push({ type: 'hr' });
    } else {
      buf.push(t);
    }
  }
  flushBuf();
  return tokens;
}

// ── Structure builder ─────────────────────────────────────────────────────────
// Converts a token list into { siteMap, content, sectionOrder }.
// siteMap  — same shape as the old SITE_MAP constant
// content  — same shape as the old CONTENT constant
// sectionOrder — array of section IDs in document order

function buildData(tokens) {
  // Map H1 heading text → stable section IDs used by the router
  const SECTION_IDS = {
    'Главная':   'home',
    'Обучение':  'learning',
    'Интенсивы': 'intensives',
    'Спринты':   'sprints',
    'Проекты':   'projects',
  };

  const siteMap = {};
  const content = {};
  const sectionOrder = [];

  let sid        = null;  // current section id
  let iid        = null;  // current item id
  let iPara      = [];    // current item's accumulated paragraphs
  let waitSub    = false; // expecting an h3 subtitle for the current item
  let counter    = 0;

  const uid = () => 'md-' + (++counter);
  const sec = () => siteMap[sid];
  const lastGroup = () => { const s = sec(); return s && s.groups.length ? s.groups[s.groups.length - 1] : null; };

  function ensureGroup() {
    if (sec() && !lastGroup()) sec().groups.push({ items: [] });
  }

  function flushItem() {
    if (iid && iPara.length) content[iid] = [...iPara];
    iPara = [];
  }

  for (const tok of tokens) {

    if (tok.type === 'h1') {
      flushItem();
      sid = SECTION_IDS[tok.text] || tok.text.toLowerCase().replace(/\s+/g, '-');
      sectionOrder.push(sid);
      siteMap[sid] = { title: tok.text, groups: [] };
      iid = null;
      waitSub = false;

    } else if (tok.type === 'group') {
      flushItem();
      if (sec()) sec().groups.push({ title: tok.text, items: [] });
      iid = null;
      waitSub = false;

    } else if (tok.type === 'hr') {
      flushItem();
      if (sec()) sec().groups.push({ items: [] });
      iid = null;
      waitSub = false;

    } else if (tok.type === 'h2') {
      flushItem();
      ensureGroup();
      iid = uid();
      lastGroup().items.push({ id: iid, title: tok.text });
      waitSub = true;

    } else if (tok.type === 'h3') {
      if (waitSub && lastGroup()) {
        const items = lastGroup().items;
        if (items.length) items[items.length - 1].subtitle = tok.text;
      }
      waitSub = false;

    } else if (tok.type === 'action') {
      if (lastGroup()) {
        const items = lastGroup().items;
        if (items.length) items[items.length - 1].action = tok.value;
      }
      waitSub = false;

    } else if (tok.type === 'p') {
      waitSub = false;
      if (iid) iPara.push(tok.text);
    }
  }

  flushItem();
  return { siteMap, content, sectionOrder };
}
