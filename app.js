// ── APP.JS ── FortiCook Study App ──────────────────────────────

// ── PAGE ROUTING ──────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  if (name === 'learn' && !learnInited) initLearn();
  if (name === 'qcm' && !qcmInited) initQCM();
  if (name === 'flash' && !flashInited) initFlash();
  if (name === 'exam') initExamSelection();
  if (name === 'exo' && !exoInited) initExo();
  window.scrollTo(0, 0);
}

// ── LEARN ────────────────────────────────────────────────────
let learnInited = false;
let currentChId = 1;

function initLearn() {
  learnInited = true;
  buildSidebar();
  renderChapter(1);
}

function buildSidebar() {
  const container = document.getElementById('sidebar-chapters');
  container.innerHTML = Object.values(CHAPTERS).map(ch => `
    <div class="sidebar-item ${ch.id === currentChId ? 'active' : ''}"
         id="sidebar-ch${ch.id}" onclick="renderChapter(${ch.id})">
      <span class="ch-num">${String(ch.id).padStart(2,'0')}</span>
      <span>${ch.icon} ${ch.title}</span>
    </div>
  `).join('');
}

function renderChapter(id) {
  currentChId = id;
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const sideEl = document.getElementById('sidebar-ch' + id);
  if (sideEl) { sideEl.classList.add('active'); sideEl.scrollIntoView({ block: 'nearest' }); }

  const ch = CHAPTERS['ch' + id];
  if (!ch) return;
  const chIds = Object.values(CHAPTERS).map(c => c.id);
  const idx = chIds.indexOf(id);
  const prevId = idx > 0 ? chIds[idx - 1] : null;
  const nextId = idx < chIds.length - 1 ? chIds[idx + 1] : null;

  const html = `
    <div class="ch-header">
      <div class="ch-icon">${ch.icon}</div>
      <div>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray);letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">Chapitre ${ch.id}</div>
        <h2>${ch.title.replace(/(\w+)/, '<span>$1</span>')}</h2>
        <div class="ch-subtitle">${ch.subtitle}</div>
      </div>
    </div>
    ${(ch.content || []).map(s => `
      <div class="ch-section">
        <h3>${s.section}</h3>
        <ul>${s.points.map(p => `<li>${highlight(p)}</li>`).join('')}</ul>
      </div>
    `).join('')}
    <div class="ch-nav">
      <button onclick="renderChapter(${prevId})" ${!prevId ? 'disabled' : ''}>← Chapitre ${prevId || ''}</button>
      <span style="font-family:var(--font-mono);font-size:12px;color:var(--gray);align-self:center">${id} / ${chIds.length}</span>
      <button onclick="renderChapter(${nextId})" ${!nextId ? 'disabled' : ''}>Chapitre ${nextId || ''} →</button>
    </div>
  `;
  const content = document.getElementById('learn-content');
  content.innerHTML = html;
  content.scrollTop = 0;
  window.scrollTo(0, 0);
}

function highlight(text) {
  // Highlight text between ** **
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code style="font-family:var(--font-mono);background:var(--bg4);padding:1px 5px;border-radius:3px;font-size:13px;color:var(--red)">$1</code>');
}

// ── QCM ──────────────────────────────────────────────────────
let qcmInited = false;
let activeQcmFilter = 'all';
let qcmState = {}; // { qId: { selected: [], checked: false } }

function initQCM() {
  qcmInited = true;
  buildQcmFilters();
  renderQCM('all');
}

function buildQcmFilters() {
  const container = document.getElementById('qcm-filters');
  const btns = [{ id: 'all', label: 'Tous les chapitres' }];
  Object.values(CHAPTERS).forEach(ch => btns.push({ id: 'ch' + ch.id, label: `Ch.${ch.id} ${ch.icon}` }));
  container.innerHTML = btns.map(b =>
    `<button class="filter-btn ${b.id === 'all' ? 'active' : ''}" id="qf-${b.id}" onclick="renderQCM('${b.id}')">${b.label}</button>`
  ).join('');
}

function renderQCM(filter) {
  activeQcmFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('qf-' + filter);
  if (btn) btn.classList.add('active');

  let questions;
  if (filter === 'all') {
    questions = getAllQCM();
  } else {
    const chKey = filter; // 'ch1', 'ch2'...
    const ch = CHAPTERS[chKey];
    questions = ch ? (ch.qcm || []).map(q => ({ ...q, chapterId: ch.id, chapterTitle: ch.title })) : [];
  }

  document.getElementById('qcm-count').textContent = `${questions.length} questions`;

  const container = document.getElementById('qcm-container');
  container.innerHTML = questions.map((q, i) => renderQcmCard(q, i)).join('');
}

function renderQcmCard(q, i) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const isMulti = q.correct.length > 1;
  return `
    <div class="qcm-card" id="qcard-${q.id}">
      <div class="qcm-card-head">
        <span class="qcm-card-tag">Ch.${q.chapterId} — ${q.chapterTitle}</span>
        <span class="qcm-card-num">#${i + 1} ${isMulti ? '• plusieurs réponses' : ''}</span>
      </div>
      <div class="qcm-card-body">
        <div class="qcm-question">${q.question}</div>
        <div class="qcm-options" id="opts-${q.id}">
          ${q.options.map((opt, oi) => `
            <div class="qcm-option" id="opt-${q.id}-${oi}" onclick="toggleOption('${q.id}', ${oi}, ${isMulti})">
              <span class="option-letter">${letters[oi]}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <button class="qcm-check-btn" id="check-${q.id}" onclick="checkQcm('${q.id}', ${JSON.stringify(q.correct).replace(/"/g, "'")}, '${q.id}')">
          Vérifier
        </button>
        <div class="qcm-explanation" id="exp-${q.id}">${q.explanation || ''}</div>
      </div>
    </div>
  `;
}

function toggleOption(qId, oi, isMulti) {
  const state = qcmState[qId] || { selected: [], checked: false };
  if (state.checked) return;

  if (!isMulti) {
    state.selected = [oi];
    document.querySelectorAll(`#opts-${qId} .qcm-option`).forEach(el => el.classList.remove('selected'));
  } else {
    const idx = state.selected.indexOf(oi);
    if (idx === -1) state.selected.push(oi);
    else state.selected.splice(idx, 1);
  }
  qcmState[qId] = state;

  document.querySelectorAll(`#opts-${qId} .qcm-option`).forEach((el, i) => {
    el.classList.toggle('selected', state.selected.includes(i));
  });
  document.getElementById('check-' + qId).disabled = state.selected.length === 0;
}

function checkQcm(qId, correct, expId) {
  const state = qcmState[qId];
  if (!state || state.selected.length === 0) return;
  state.checked = true;

  const numOpts = document.querySelectorAll(`#opts-${qId} .qcm-option`).length;
  for (let i = 0; i < numOpts; i++) {
    const el = document.getElementById(`opt-${qId}-${i}`);
    const isSelected = state.selected.includes(i);
    const isCorrect = correct.includes(i);
    el.classList.add('disabled');
    el.style.cursor = 'default';
    el.removeAttribute('onclick');
    if (isSelected && isCorrect) el.classList.add('correct');
    else if (isSelected && !isCorrect) el.classList.add('wrong');
    else if (!isSelected && isCorrect) el.classList.add('correct-ans');
  }

  const isGood = JSON.stringify(state.selected.sort()) === JSON.stringify([...correct].sort());
  const expEl = document.getElementById('exp-' + expId);
  expEl.classList.add('show');
  if (!isGood) expEl.classList.add('wrong-exp');
  document.getElementById('check-' + qId).disabled = true;
}

// ── FLASHCARDS ───────────────────────────────────────────────
let flashInited = false;
let flashFilter = 'all';
let flashCards = [];

function initFlash() {
  flashInited = true;
  flashCards = getAllFlashcards();
  buildFlashFilters();
  renderFlash('all');
}

function buildFlashFilters() {
  const container = document.getElementById('flash-filters');
  const btns = [{ id: 'all', label: 'Toutes' }];
  Object.values(CHAPTERS).forEach(ch => btns.push({ id: 'ch' + ch.id, label: `Ch.${ch.id} ${ch.icon}` }));
  container.innerHTML = btns.map(b =>
    `<button class="filter-btn ${b.id === 'all' ? 'active' : ''}" id="ff-${b.id}" onclick="renderFlash('${b.id}')">${b.label}</button>`
  ).join('');
}

function renderFlash(filter) {
  flashFilter = filter;
  document.querySelectorAll('#flash-filters .filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ff-' + filter);
  if (btn) btn.classList.add('active');

  let cards;
  if (filter === 'all') {
    cards = flashCards;
  } else {
    const ch = CHAPTERS[filter];
    cards = ch ? (ch.flashcards || []).map(f => ({ ...f, chapterId: ch.id, chapterTitle: ch.title })) : [];
  }

  const grid = document.getElementById('flash-grid');
  grid.innerHTML = cards.map(f => `
    <div class="flash-card-wrap" onclick="this.classList.toggle('flipped')">
      <div class="flash-card">
        <div class="flash-front">
          <span class="flash-chapter-tag">Ch.${f.chapterId}</span>
          <div class="flash-label">❓ Question</div>
          <div class="flash-text">${f.question}</div>
          <div class="flash-hint">👆 Clique pour retourner</div>
        </div>
        <div class="flash-back">
          <span class="flash-chapter-tag">Ch.${f.chapterId}</span>
          <div class="flash-label">✅ Réponse</div>
          <div class="flash-text">${f.answer}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function shuffleFlash() {
  flashCards = shuffleArray(getAllFlashcards());
  renderFlash(flashFilter);
}

// ── EXAM ─────────────────────────────────────────────────────
let examState = null;

function initExamSelection() {
  const chBtns = document.getElementById('exam-ch-btns');
  if (!chBtns) return;
  chBtns.innerHTML = Object.values(CHAPTERS).map(ch => `
    <button class="filter-btn" onclick="showExamChOptions(${ch.id})">${ch.icon} Ch.${ch.id}</button>
  `).join('');

  document.getElementById('exam-selection').style.display = 'block';
  document.getElementById('exam-runner').style.display = 'none';
}

function showExamChOptions(chId) {
  const ch = CHAPTERS['ch' + chId];
  if (!ch) return;
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:200;';
  modal.innerHTML = `
    <div style="background:var(--bg2);border:1px solid var(--red);border-radius:8px;padding:32px;max-width:400px;width:90%;text-align:center;">
      <div style="font-size:32px;margin-bottom:8px;">${ch.icon}</div>
      <h3 style="font-family:var(--font-head);font-size:22px;font-weight:800;text-transform:uppercase;margin-bottom:8px;">Ch.${ch.id} — ${ch.title}</h3>
      <p style="color:var(--gray);font-size:14px;margin-bottom:24px;">Choisis le mode d'examen pour ce chapitre</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="exam-mode-btn" style="flex:1;min-width:120px;" onclick="document.body.removeChild(this.closest('[style*=fixed]'));startExam('qcm','ch${chId}')">
          <div class="mode-icon">🎯</div><div class="mode-name">QCM</div>
          <div class="mode-desc">${(ch.qcm || []).length} questions</div>
        </button>
        <button class="exam-mode-btn" style="flex:1;min-width:120px;" onclick="document.body.removeChild(this.closest('[style*=fixed]'));startExam('flash','ch${chId}')">
          <div class="mode-icon">⚡</div><div class="mode-name">Flashcards</div>
          <div class="mode-desc">${(ch.flashcards || []).length} cartes</div>
        </button>
      </div>
      <button onclick="document.body.removeChild(this.parentElement.parentElement)" style="margin-top:16px;background:none;border:1px solid var(--border);color:var(--gray);padding:8px 16px;border-radius:4px;cursor:pointer;font-family:var(--font-head);text-transform:uppercase;letter-spacing:1px;font-size:12px;">Annuler</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function startExam(mode, scope) {
  let questions;
  if (mode === 'qcm') {
    questions = scope === 'all' ? getAllQCM() :
      (CHAPTERS[scope]?.qcm || []).map(q => ({ ...q, chapterId: CHAPTERS[scope].id, chapterTitle: CHAPTERS[scope].title }));
    questions = shuffleArray(questions).map(q => ({ ...q, options: shuffleOptions(q) }));
  } else {
    questions = scope === 'all' ? getAllFlashcards() :
      (CHAPTERS[scope]?.flashcards || []).map(f => ({ ...f, chapterId: CHAPTERS[scope].id, chapterTitle: CHAPTERS[scope].title }));
    questions = shuffleArray(questions);
  }

  if (!questions.length) { alert('Aucune question disponible pour ce filtre.'); return; }

  examState = { mode, questions, current: 0, correct: 0, wrong: 0, selected: [], fcRevealed: false };

  document.getElementById('exam-selection').style.display = 'none';
  document.getElementById('exam-runner').style.display = 'block';
  renderExamQuestion();
}

function shuffleOptions(q) {
  // Shuffle options but track correct indices
  const indices = q.options.map((_, i) => i);
  const shuffled = shuffleArray(indices);
  return {
    ...q,
    options: shuffled.map(i => q.options[i]),
    correct: q.correct.map(c => shuffled.indexOf(c))
  };
}

function renderExamQuestion() {
  const { mode, questions, current, correct, wrong } = examState;
  const total = questions.length;
  const q = questions[current];
  const progress = (current / total) * 100;

  if (mode === 'qcm') {
    renderExamQCM(q, current, total, correct, wrong, progress);
  } else {
    renderExamFlash(q, current, total, correct, wrong, progress);
  }
}

function renderExamQCM(q, current, total, correct, wrong, progress) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const isMulti = q.correct.length > 1;
  const runner = document.getElementById('exam-runner');
  runner.innerHTML = `
    <div class="exam-progress-bar-wrap"><div class="exam-progress-bar" style="width:${progress}%"></div></div>
    <div class="exam-active">
      <div class="exam-header">
        <span class="exam-counter">Question ${current + 1} / ${total}</span>
        <div class="exam-score-live">
          <span class="score-correct">✓ ${correct}</span>
          <span class="score-wrong">✗ ${wrong}</span>
        </div>
      </div>
      <div class="exam-body">
        <div class="exam-chapter-label">Ch.${q.chapterId} — ${q.chapterTitle} ${isMulti ? '• plusieurs réponses' : ''}</div>
        <div class="exam-question">${q.question}</div>
        <div class="qcm-options" id="exam-opts">
          ${q.options.map((opt, oi) => `
            <div class="qcm-option" id="eopt-${oi}" onclick="examToggleOpt(${oi}, ${isMulti})">
              <span class="option-letter">${letters[oi]}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <button class="qcm-check-btn" id="exam-check-btn" onclick="examCheck()" disabled style="margin-top:20px;">
          Valider
        </button>
        <div id="exam-exp" class="qcm-explanation"></div>
        <button class="exam-next-btn" id="exam-next-btn" onclick="examNext()" style="display:none;margin-top:12px;">
          ${current + 1 < total ? 'Question Suivante →' : '🏆 Voir les Résultats'}
        </button>
      </div>
    </div>
  `;
  examState.selected = [];
  examState.checked = false;
}

function examToggleOpt(oi, isMulti) {
  if (examState.checked) return;
  if (!isMulti) {
    examState.selected = [oi];
    document.querySelectorAll('#exam-opts .qcm-option').forEach(el => el.classList.remove('selected'));
  } else {
    const idx = examState.selected.indexOf(oi);
    if (idx === -1) examState.selected.push(oi);
    else examState.selected.splice(idx, 1);
  }
  document.getElementById(`eopt-${oi}`).classList.toggle('selected', examState.selected.includes(oi));
  document.getElementById('exam-check-btn').disabled = examState.selected.length === 0;
}

function examCheck() {
  if (examState.checked || examState.selected.length === 0) return;
  examState.checked = true;

  const q = examState.questions[examState.current];
  const correct = q.correct;
  const numOpts = q.options.length;
  for (let i = 0; i < numOpts; i++) {
    const el = document.getElementById(`eopt-${i}`);
    if (!el) continue;
    el.removeAttribute('onclick');
    const isSelected = examState.selected.includes(i);
    const isCorrect = correct.includes(i);
    if (isSelected && isCorrect) el.classList.add('correct');
    else if (isSelected && !isCorrect) el.classList.add('wrong');
    else if (!isSelected && isCorrect) el.classList.add('correct-ans');
  }

  const isGood = JSON.stringify(examState.selected.sort()) === JSON.stringify([...correct].sort());
  if (isGood) examState.correct++;
  else examState.wrong++;

  const expEl = document.getElementById('exam-exp');
  if (expEl && q.explanation) {
    expEl.textContent = q.explanation;
    expEl.classList.add('show');
    if (!isGood) expEl.classList.add('wrong-exp');
  }
  document.getElementById('exam-check-btn').disabled = true;
  document.getElementById('exam-next-btn').style.display = 'block';
}

function renderExamFlash(q, current, total, correct, wrong, progress) {
  const runner = document.getElementById('exam-runner');
  runner.innerHTML = `
    <div class="exam-progress-bar-wrap"><div class="exam-progress-bar" style="width:${progress}%"></div></div>
    <div class="exam-active">
      <div class="exam-header">
        <span class="exam-counter">Carte ${current + 1} / ${total}</span>
        <div class="exam-score-live">
          <span class="score-correct">✓ ${correct}</span>
          <span class="score-wrong">✗ ${wrong}</span>
        </div>
      </div>
      <div class="exam-body">
        <div class="exam-chapter-label">Ch.${q.chapterId} — ${q.chapterTitle}</div>
        <div class="exam-fc-card" id="exam-fc-card" onclick="revealFc()">
          <div class="exam-fc-q">${q.question}</div>
          <div class="exam-fc-a">${q.answer}</div>
          <div class="exam-fc-hint">👆 Clique pour révéler la réponse</div>
        </div>
        <div id="exam-fc-btns" style="display:none;">
          <p style="text-align:center;color:var(--gray);font-size:14px;margin-bottom:12px;">Est-ce que tu connaissais la réponse ?</p>
          <div class="exam-fc-btns">
            <button class="btn-knew" onclick="examFcAnswer(true)">✓ Je savais</button>
            <button class="btn-didnt" onclick="examFcAnswer(false)">✗ Je ne savais pas</button>
          </div>
        </div>
      </div>
    </div>
  `;
  examState.fcRevealed = false;
}

function revealFc() {
  if (examState.fcRevealed) return;
  examState.fcRevealed = true;
  const card = document.getElementById('exam-fc-card');
  card.classList.add('revealed');
  card.removeAttribute('onclick');
  document.getElementById('exam-fc-btns').style.display = 'block';
}

function examFcAnswer(knew) {
  if (knew) examState.correct++;
  else examState.wrong++;
  examNext();
}

function examNext() {
  examState.current++;
  if (examState.current >= examState.questions.length) {
    showExamResults();
  } else {
    renderExamQuestion();
  }
}

function showExamResults() {
  const { correct, wrong, questions, mode } = examState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const pass = pct >= 60;

  document.getElementById('exam-runner').innerHTML = `
    <div class="exam-results">
      <div style="font-size:48px;margin-bottom:8px;">${pass ? '🏆' : '💀'}</div>
      <h2 style="font-family:var(--font-head);font-size:28px;font-weight:800;text-transform:uppercase;margin-bottom:4px;">
        ${pass ? 'GG tu t\'en sors !' : "Forticook'd !"}
      </h2>
      <div class="result-score-big ${pass ? 'pass' : 'fail'}">${pct}%</div>
      <div class="result-grade">${getGrade(pct)}</div>
      <div class="result-details">
        <div class="result-stat">
          <div class="num" style="color:var(--green)">${correct}</div>
          <div class="lbl">Correctes</div>
        </div>
        <div class="result-stat">
          <div class="num" style="color:var(--red)">${wrong}</div>
          <div class="lbl">Incorrectes</div>
        </div>
        <div class="result-stat">
          <div class="num">${total}</div>
          <div class="lbl">Total</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="restart-btn" onclick="initExamSelection()">← Choisir un autre mode</button>
        <button class="restart-btn" style="background:var(--bg3);border:1px solid var(--border);"
          onclick="startExam('${mode}','all')">🔄 Recommencer</button>
      </div>
    </div>
  `;
}

function getGrade(pct) {
  if (pct >= 90) return '🔥 Légende absolue';
  if (pct >= 80) return '💪 Très bien, t\'es chaud';
  if (pct >= 60) return '✅ Reçu — continue à bosser';
  if (pct >= 40) return '⚠️ Encore un peu d\'effort';
  return '💀 Révise vite le cours';
}

// ── EXERCICES ─────────────────────────────────────────────────
let exoInited = false;
let exoFilter = 'all';

function initExo() {
  exoInited = true;
  buildExoFilters();
  renderExo('all');
}

function buildExoFilters() {
  const container = document.getElementById('exo-filters');
  const btns = [{ id: 'all', label: 'Tous' }];
  Object.values(CHAPTERS).forEach(ch => {
    if (ch.exercises && ch.exercises.length > 0) {
      btns.push({ id: 'ch' + ch.id, label: `Ch.${ch.id} ${ch.icon}` });
    }
  });
  container.innerHTML = btns.map(b =>
    `<button class="filter-btn ${b.id === 'all' ? 'active' : ''}" id="ef-${b.id}" onclick="renderExo('${b.id}')">${b.label}</button>`
  ).join('');
}

function renderExo(filter) {
  exoFilter = filter;
  document.querySelectorAll('#exo-filters .filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ef-' + filter);
  if (btn) btn.classList.add('active');

  let exercises;
  if (filter === 'all') {
    exercises = getAllExercises();
  } else {
    const ch = CHAPTERS[filter];
    exercises = ch ? (ch.exercises || []).map(e => ({ ...e, chapterId: ch.id, chapterTitle: ch.title })) : [];
  }

  document.getElementById('exo-count').textContent = `${exercises.length} exercices`;

  const container = document.getElementById('exo-container');
  container.innerHTML = exercises.map((e, i) => {
    if (e.type === 'qcm') {
      return renderExoQcm(e, i);
    } else {
      return renderExoOpen(e, i);
    }
  }).join('');
}

function renderExoQcm(e, i) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  return `
    <div class="exo-card" id="exo-${e.id}">
      <div class="exo-card-head">
        <span class="exo-tag">🧪 EXERCICE QCM • Ch.${e.chapterId}</span>
        <span class="qcm-card-num">#${i+1}</span>
      </div>
      <div class="exo-body">
        <div class="exo-question">${e.question}</div>
        <div class="qcm-options" id="exo-opts-${e.id}">
          ${e.options.map((opt, oi) => `
            <div class="qcm-option" id="exo-opt-${e.id}-${oi}" onclick="exoToggle('${e.id}', ${oi})">
              <span class="option-letter">${letters[oi]}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <button class="qcm-check-btn" id="exo-check-${e.id}" onclick="exoCheck('${e.id}', ${JSON.stringify(e.correct)})" disabled style="margin-top:12px;">Vérifier</button>
        <div class="qcm-explanation" id="exo-exp-${e.id}">${e.explanation || ''}</div>
      </div>
    </div>
  `;
}

function renderExoOpen(e, i) {
  return `
    <div class="exo-card">
      <div class="exo-card-head">
        <span class="exo-tag">🧪 EXERCICE RÉFLEXION • Ch.${e.chapterId}</span>
        <span class="qcm-card-num">#${i+1}</span>
      </div>
      <div class="exo-body">
        <div class="exo-question">${e.question}</div>
        <button class="exo-reveal-btn" onclick="this.style.display='none';document.getElementById('exo-ans-${e.id}').classList.add('show')">
          💡 Voir la réponse modèle
        </button>
        <div class="exo-answer" id="exo-ans-${e.id}">${e.answer}</div>
      </div>
    </div>
  `;
}

let exoStates = {};
function exoToggle(eId, oi) {
  const state = exoStates[eId] || { selected: [], checked: false };
  if (state.checked) return;
  const idx = state.selected.indexOf(oi);
  if (idx === -1) state.selected = [oi];
  else state.selected = [];
  exoStates[eId] = state;
  document.querySelectorAll(`#exo-opts-${eId} .qcm-option`).forEach((el, i) => {
    el.classList.toggle('selected', state.selected.includes(i));
  });
  document.getElementById(`exo-check-${eId}`).disabled = state.selected.length === 0;
}

function exoCheck(eId, correct) {
  const state = exoStates[eId];
  if (!state || state.selected.length === 0) return;
  state.checked = true;
  const numOpts = document.querySelectorAll(`#exo-opts-${eId} .qcm-option`).length;
  for (let i = 0; i < numOpts; i++) {
    const el = document.getElementById(`exo-opt-${eId}-${i}`);
    el.removeAttribute('onclick'); el.classList.add('disabled');
    const isSelected = state.selected.includes(i);
    const isCorrect = correct.includes(i);
    if (isSelected && isCorrect) el.classList.add('correct');
    else if (isSelected && !isCorrect) el.classList.add('wrong');
    else if (!isSelected && isCorrect) el.classList.add('correct-ans');
  }
  const isGood = JSON.stringify(state.selected.sort()) === JSON.stringify([...correct].sort());
  const expEl = document.getElementById(`exo-exp-${eId}`);
  expEl.classList.add('show');
  if (!isGood) expEl.classList.add('wrong-exp');
  document.getElementById(`exo-check-${eId}`).disabled = true;
}

// ── UTILS ──────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── INIT ───────────────────────────────────────────────────────
// Expose to global
window.showPage = showPage;
window.renderChapter = renderChapter;
window.renderQCM = renderQCM;
window.toggleOption = toggleOption;
window.checkQcm = checkQcm;
window.renderFlash = renderFlash;
window.shuffleFlash = shuffleFlash;
window.startExam = startExam;
window.examToggleOpt = examToggleOpt;
window.examCheck = examCheck;
window.examNext = examNext;
window.revealFc = revealFc;
window.examFcAnswer = examFcAnswer;
window.initExamSelection = initExamSelection;
window.showExamChOptions = showExamChOptions;
window.renderExo = renderExo;
window.exoToggle = exoToggle;
window.exoCheck = exoCheck;
