// ── TRANSLATIONS ──
const LANG = {
  en: {
    badge:'✈ Ground Staff · FMG Co., Ltd. · Japan',
    heroTitle:'Ground Staff & IT Support Specialist',
    heroLoc:'Currently at FMG Co., Ltd. · Japan (via Unisky Co., Ltd.)',
    scrollHint:'SCROLL',
    aboutLabel:'// WHO I AM', aboutTitle:'About Me',
    aboutText:`I'm <span>Putra Fauzan</span>, currently working as a <span>Ground Staff</span> at an airport in Japan, handling check-in procedures and boarding guidance. I'm committed to delivering fast, courteous service so every passenger feels confident and well taken care of.<br><br>Alongside my aviation role, I'm also involved in <span>IT support</span> — handling system issues, hardware/software maintenance, and managing airline-specific software to keep operations running smoothly. My strength lies in combining solid <span>communication skills</span>, adaptability, and a growing passion for <span>technology & AI</span> to add value wherever I work.`,
    stat1Lbl:'Ground Staff', stat2Lbl:'Based in Japan', stat3Lbl:'Tech & Vibe Coder',
    expLabel:'// FLIGHT LOG', expTitle:'Experience',
    exp1Year:'MAR 2025 — PRESENT', exp1Role:'Ground Staff',
    exp1Company:'✈ FMG Co., Ltd. (via Unisky Co., Ltd.) · Japan',
    exp1Desc:'· Check-in counter: boarding procedures & baggage acceptance.<br>· Boarding gate: passenger guidance & escort.<br>· Handling flight inquiries, delay/change announcements.<br>· Supporting passengers with children or special needs.<br>· IT support: PC maintenance, troubleshooting, airline-native software management.<br>· Designed kanban boards to visualize workflows and boost team efficiency.<br>· Actively using AI tools (Claude Code, GitHub, Openclaw) for continuous learning.',
    exp2Year:'APR 2023 — APR 2024', exp2Role:'Caddie',
    exp2Company:'⛳ Katano Country Club · Japan',
    exp2Desc:'· Supported guests throughout golf rounds with course guidance & club recommendations.<br>· Managed play pace and provided distance/condition advice.<br>· Built strong communication skills engaging with diverse clients daily.',
    exp3Year:'APR 2019 — JUL 2019', exp3Role:'IT Support Intern',
    exp3Company:'💻 PT. Garsel Fashion Shoes · Indonesia',
    exp3Desc:'· Managed all company PCs (hardware & software).<br>· Diagnosed and resolved internet connectivity issues across the office.',
    skillsLabel:'// CAPABILITIES', skillsTitle:'Skills',
    skill1:'Ground Operations', skill2:'Passenger Services', skill3:'Microsoft 365',
    skill4:'Graphic Design', skill5:'AI & Vibe Coding', skill6:'GitHub',
    skill7:'PC Maintenance', skill8:'Japanese (日本語)',
    certLabel:'// CREDENTIALS', certTitle:'Certifications',
    cert1Name:'JLPT N2 — Japanese Language Proficiency', cert1Detail:'Issued · July 2023',
    cert2Name:'TOEFL — Listening & Reading Test', cert2Detail:'Score: 497 pts · July 2024',
    contactLabel:'// REACH ME', contactTitle:'Contact',
    portfolioLabel:'// MOMENTS & WORK', portfolioTitle:'Portfolio', addPhoto:'ADD PHOTO',
    footerRole:'Aviation & IT Professional · Japan',
    footerCopy:'© 2026 · Crafted with passion for the skies',
    ticker:['✈ GROUND STAFF','// FMG Co., Ltd. · JAPAN','✈ PUTRA FAUZAN','// AVIATION & IT PROFESSIONAL','✈ JLPT N2','// TOEFL 497pts'],
    navAbout:'About Me', navExp:'Experience', navSkills:'Skills',
    navCert:'Certifications', navContact:'Contact', navPortfolio:'Portfolio',
  },
  id: {
    badge:'✈ Staf Darat · FMG Co., Ltd. · Jepang',
    heroTitle:'Staf Darat & Spesialis Dukungan IT',
    heroLoc:'Saat ini di FMG Co., Ltd. · Jepang (via Unisky Co., Ltd.)',
    scrollHint:'GULIR',
    aboutLabel:'// TENTANG SAYA', aboutTitle:'Tentang Saya',
    aboutText:`Saya <span>Putra Fauzan</span>, saat ini bekerja sebagai <span>Staf Darat</span> di bandara Jepang, menangani prosedur check-in dan panduan boarding. Saya berkomitmen memberikan pelayanan cepat dan ramah agar setiap penumpang merasa nyaman dan terlayani dengan baik.<br><br>Selain peran penerbangan, saya juga terlibat dalam <span>dukungan IT</span> — menangani masalah sistem, perawatan hardware/software, dan mengelola perangkat lunak khusus maskapai. Kekuatan saya terletak pada <span>kemampuan komunikasi</span>, adaptabilitas, dan minat yang terus berkembang pada <span>teknologi & AI</span>.`,
    stat1Lbl:'Staf Darat', stat2Lbl:'Berbasis di Jepang', stat3Lbl:'Tech & Vibe Coder',
    expLabel:'// RIWAYAT KERJA', expTitle:'Pengalaman',
    exp1Year:'MAR 2025 — SEKARANG', exp1Role:'Staf Darat',
    exp1Company:'✈ FMG Co., Ltd. (via Unisky Co., Ltd.) · Jepang',
    exp1Desc:'· Counter check-in: prosedur boarding & penerimaan bagasi.<br>· Gerbang keberangkatan: panduan & pendampingan penumpang.<br>· Menangani pertanyaan, pengumuman keterlambatan/perubahan penerbangan.<br>· Mendukung penumpang dengan anak-anak atau kebutuhan khusus.<br>· Dukungan IT: perawatan PC, troubleshooting, pengelolaan software maskapai.<br>· Merancang kanban board untuk visualisasi alur kerja dan efisiensi tim.<br>· Aktif menggunakan tools AI (Claude Code, GitHub, Openclaw).',
    exp2Year:'APR 2023 — APR 2024', exp2Role:'Caddie',
    exp2Company:'⛳ Katano Country Club · Jepang',
    exp2Desc:'· Mendampingi tamu selama golf dengan panduan lapangan & rekomendasi stik.<br>· Mengelola kecepatan permainan dan memberikan saran jarak/kondisi lapangan.<br>· Membangun keterampilan komunikasi dengan berbagai klien setiap hari.',
    exp3Year:'APR 2019 — JUL 2019', exp3Role:'IT Support (Magang)',
    exp3Company:'💻 PT. Garsel Fashion Shoes · Indonesia',
    exp3Desc:'· Mengelola semua PC perusahaan (hardware & software).<br>· Mendiagnosis dan menyelesaikan masalah koneksi internet di seluruh kantor.',
    skillsLabel:'// KEMAMPUAN', skillsTitle:'Keahlian',
    skill1:'Operasi Darat', skill2:'Layanan Penumpang', skill3:'Microsoft 365',
    skill4:'Desain Grafis', skill5:'AI & Vibe Coding', skill6:'GitHub',
    skill7:'Perawatan PC', skill8:'Bahasa Jepang (日本語)',
    certLabel:'// SERTIFIKASI', certTitle:'Sertifikasi',
    cert1Name:'JLPT N2 — Kemampuan Bahasa Jepang', cert1Detail:'Diterbitkan · Juli 2023',
    cert2Name:'TOEFL — Tes Mendengarkan & Membaca', cert2Detail:'Skor: 497 poin · Juli 2024',
    contactLabel:'// HUBUNGI SAYA', contactTitle:'Kontak',
    portfolioLabel:'// MOMEN & KARYA', portfolioTitle:'Portofolio', addPhoto:'TAMBAH FOTO',
    footerRole:'Profesional Penerbangan & IT · Jepang',
    footerCopy:'© 2026 · Dibuat dengan semangat untuk langit',
    ticker:['✈ STAF DARAT','// FMG Co., Ltd. · JEPANG','✈ PUTRA FAUZAN','// PROFESIONAL PENERBANGAN & IT','✈ JLPT N2','// TOEFL 497poin'],
    navAbout:'Tentang Saya', navExp:'Pengalaman', navSkills:'Keahlian',
    navCert:'Sertifikasi', navContact:'Kontak', navPortfolio:'Portofolio',
  },
  ja: {
    badge:'✈ グランドスタッフ · 株式会社FMG · 日本',
    heroTitle:'グランドスタッフ & ITサポートスペシャリスト',
    heroLoc:'現在勤務：株式会社FMG（ユニスカイ株式会社経由）· 日本',
    scrollHint:'スクロール',
    aboutLabel:'// 私について', aboutTitle:'プロフィール',
    aboutText:`私、<span>プトラ・ファウザン</span>は現在日本の空港で<span>グランドスタッフ</span>として勤務し、チェックイン手続きや搭乗案内を担当しています。すべてのお客様に迅速かつ丁寧なサービスを提供することに努めています。<br><br>航空業務に加え、<span>ITサポート</span>にも携わっており、システムトラブル対応、ハードウェア・ソフトウェアのメンテナンス、航空会社専用ソフトウェアの管理を行っています。<span>コミュニケーション力</span>と柔軟な対応力、そして<span>テクノロジー・AI</span>への強い関心を活かし、貢献しています。`,
    stat1Lbl:'グランドスタッフ', stat2Lbl:'日本在住', stat3Lbl:'テック & バイブコーダー',
    expLabel:'// 職務経歴', expTitle:'職務経歴',
    exp1Year:'2025年3月 — 現在', exp1Role:'グランドスタッフ',
    exp1Company:'✈ 株式会社FMG（ユニスカイ株式会社経由）· 日本',
    exp1Desc:'· チェックインカウンター：搭乗手続きおよび手荷物の受付対応。<br>· 搭乗ゲート：搭乗案内およびお客様の誘導。<br>· フライト情報・遅延変更時のお客様への案内対応。<br>· お子様連れ・サポートが必要なお客様へのサポート対応。<br>· ITサポート：PCメンテナンス、トラブル対応、航空会社ソフトウェア管理。<br>· チーム内カンバン作成・デザインにより業務効率化に貢献。<br>· AIツール（Claude Code、GitHub、Openclaw）を積極的に活用。',
    exp2Year:'2023年4月 — 2024年4月', exp2Role:'キャディー',
    exp2Company:'⛳ 交野カントリークラブ · 日本',
    exp2Desc:'· お客様のゴルフプレーのサポートおよびコース案内。<br>· プレー進行管理および距離・コース状況のアドバイス提供。<br>· 多様なお客様との円滑なコミュニケーションによる満足度向上。',
    exp3Year:'2019年4月 — 2019年7月', exp3Role:'ITサポート（インターン）',
    exp3Company:'💻 PT. Garsel Fashion Shoes · インドネシア',
    exp3Desc:'· 全社員のPC管理（ハードウェアおよびソフトウェア）。<br>· インターネット接続に関するトラブルシューティング。',
    skillsLabel:'// スキル', skillsTitle:'スキル',
    skill1:'グランドオペレーション', skill2:'旅客サービス', skill3:'Microsoft 365',
    skill4:'グラフィックデザイン', skill5:'AI & バイブコーディング', skill6:'GitHub',
    skill7:'PCメンテナンス', skill8:'日本語 (JLPT N2)',
    certLabel:'// 資格', certTitle:'資格',
    cert1Name:'JLPT N2 — 日本語能力試験', cert1Detail:'取得 · 2023年7月',
    cert2Name:'TOEFL — リスニング & リーディングテスト', cert2Detail:'スコア：497点 · 2024年7月',
    contactLabel:'// お問い合わせ', contactTitle:'お問い合わせ',
    portfolioLabel:'// 作品・実績', portfolioTitle:'ポートフォリオ', addPhoto:'写真を追加',
    footerRole:'航空 & IT プロフェッショナル · 日本',
    footerCopy:'© 2026 · 空への情熱を込めて制作',
    ticker:['✈ グランドスタッフ','// 株式会社FMG · 日本','✈ プトラ・ファウザン','// 航空 & IT プロフェッショナル','✈ JLPT N2','// TOEFL 497点'],
    navAbout:'プロフィール', navExp:'職務経歴', navSkills:'スキル',
    navCert:'資格', navContact:'お問い合わせ', navPortfolio:'ポートフォリオ',
  },
};

const langMeta = { en:{flag:'🇬🇧',code:'EN'}, id:{flag:'🇮🇩',code:'ID'}, ja:{flag:'🇯🇵',code:'JP'} };
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = LANG[lang];
  document.documentElement.lang = lang;
  document.getElementById('lang-flag').textContent = langMeta[lang].flag;
  document.getElementById('lang-code').textContent  = langMeta[lang].code;
  document.querySelectorAll('.lang-opt').forEach(o => o.classList.toggle('active', o.dataset.lang === lang));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n]; if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml]; if (v !== undefined) el.innerHTML = v;
  });
  // rebuild ticker (doubled for seamless loop)
  const items = [...t.ticker, ...t.ticker];
  document.getElementById('ticker').innerHTML = items.map(s => `<span>${s}</span>`).join('');
}

// Lang switcher UI
const langBtn      = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
langBtn.addEventListener('click', e => {
  e.stopPropagation();
  langDropdown.classList.toggle('hidden');
  langBtn.classList.toggle('open');
});
document.addEventListener('click', () => { langDropdown.classList.add('hidden'); langBtn.classList.remove('open'); });
document.querySelectorAll('.lang-opt').forEach(opt => {
  opt.addEventListener('click', e => {
    e.stopPropagation();
    applyLang(opt.dataset.lang);
    langDropdown.classList.add('hidden');
    langBtn.classList.remove('open');
  });
});

// ── STARFIELD ──
(function(){
  const sf = document.getElementById('starfield');
  for (let i = 0; i < 130; i++) {
    const s = document.createElement('div'); s.className = 'star';
    const sz = Math.random() * 2.5 + .4;
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${(Math.random()*4+1.5).toFixed(1)}s;animation-delay:${(Math.random()*5).toFixed(1)}s;opacity:${(Math.random()*.6+.1).toFixed(2)};`;
    sf.appendChild(s);
  }
})();

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── 3D TILT ──
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - .5;
    const y = (e.clientY - r.top)  / r.height - .5;
    card.style.transform = `perspective(600px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── CAROUSEL + LIGHTBOX ──
(function () {
  const wrap    = document.querySelector('.carousel-track-wrap');
  const track   = document.getElementById('carTrack');
  const dots    = [...document.querySelectorAll('.car-dot')];
  const overlay = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');

  /* ── Clone all cards at both ends for seamless infinite loop ── */
  const real = [...track.querySelectorAll('.porto-card')];
  const N    = real.length;
  real.forEach(c => track.appendChild(c.cloneNode(true)));           // append N clones
  [...real].reverse().forEach(c => track.insertBefore(c.cloneNode(true), track.firstChild)); // prepend N clones
  // Final layout: [clone N..1] [real 0..N-1] [clone 0..N-1]
  // Real cards live at indices N … 2N-1

  let cur     = N;   // current absolute index (start = first real card)
  let realIdx = 0;
  let busy    = false;

  function cw() { return track.children[0].getBoundingClientRect().width; }
  function ww() { return wrap.getBoundingClientRect().width; }
  const GAP = 24;

  function moveTo(idx, animate) {
    const step   = cw() + GAP;
    const offset = idx * step - (ww() - cw()) / 2;   // center active card
    track.style.transition = animate ? 'transform .52s cubic-bezier(.4,0,.2,1)' : 'none';
    track.style.transform  = `translateX(${-offset}px)`;
    cur     = idx;
    realIdx = ((idx - N) % N + N) % N;
    dots.forEach((d, i) => d.classList.toggle('active', i === realIdx));
  }

  /* Init — no animation on first paint */
  moveTo(N, false);
  requestAnimationFrame(() => requestAnimationFrame(() => {}));

  track.addEventListener('transitionend', () => {
    if (cur < N || cur >= 2 * N)
      moveTo(N + ((cur - N) % N + N) % N, false); // snap back into real zone
    busy = false;
  });

  function next() { if (!busy) { busy = true; moveTo(cur + 1, true); } }
  function prev() { if (!busy) { busy = true; moveTo(cur - 1, true); } }

  document.getElementById('nextBtn').addEventListener('click', next);
  document.getElementById('prevBtn').addEventListener('click', prev);
  dots.forEach(d => d.addEventListener('click', () => {
    if (!busy) { busy = true; moveTo(N + +d.dataset.idx, true); }
  }));
  setInterval(next, 3800);

  /* Touch swipe */
  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  });

  window.addEventListener('resize', () => moveTo(cur, false));

  /* ── Lightbox — event delegation works on clones too ── */
  function openLightbox(src) {
    lbImg.src = src;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }

  track.addEventListener('click', e => {
    const card = e.target.closest('.porto-card');
    if (!card) return;
    const img = card.querySelector('.porto-img');
    if (img) openLightbox(img.src);
  });

  /* Cursor hint on image cards */
  [...track.querySelectorAll('.porto-card')].forEach(card => {
    if (card.querySelector('.porto-img')) card.style.cursor = 'zoom-in';
  });

  lbClose.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
})();

// ── SIDE NAV ACTIVE TRACKING ──
const navBtns    = document.querySelectorAll('.snb');
const navSections = document.querySelectorAll('section[id]');

const secObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navBtns.forEach(btn =>
        btn.classList.toggle('active', btn.dataset.section === entry.target.id)
      );
    }
  });
}, { threshold: 0.35 });

navSections.forEach(s => secObserver.observe(s));

// Smooth scroll on nav click
navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── PARALLAX ──
(function () {
  const hero        = document.getElementById('hero');
  const heroContent = document.querySelector('.hero-content');
  const cloudWraps  = document.querySelectorAll('.cloud-blobs');

  // Section content parallax targets — [selector, speed]
  // Uses CSS `translate` property (composes on top of `transform`, no conflicts with tilt/hover)
  const PX = [
    // About
    ['#about .glass',                        0.055],
    ['#about .stats-col',                    0.090],
    ['#about .sec-title',                    0.030],
    ['#about .sec-label',                    0.020],

    // Experience — staggered depth per item
    ['#experience .tl-item:nth-child(1)',    0.040],
    ['#experience .tl-item:nth-child(2)',    0.065],
    ['#experience .tl-item:nth-child(3)',    0.090],
    ['#experience .sec-title',              0.025],

    // Skills — grid rows at different depths
    ['#skills .skill-chip:nth-child(-n+4)',  0.045],
    ['#skills .skill-chip:nth-child(n+5)',   0.075],
    ['#skills .sec-title',                   0.025],

    // Certifications — two cards at different depths
    ['#certifications .cert-item:first-child', 0.060],
    ['#certifications .cert-item:last-child',  0.095],
    ['#certifications .sec-title',             0.025],

    // Contact
    ['#contact .contact-item:nth-child(1)',  0.040],
    ['#contact .contact-item:nth-child(2)',  0.065],
    ['#contact .contact-item:nth-child(3)',  0.050],
    ['#contact .contact-item:nth-child(4)',  0.080],
    ['#contact .sec-title',                  0.025],

    // Portfolio
    ['#portfolio .carousel-track-wrap',      0.040],
    ['#portfolio .sec-title',               0.025],
  ].map(([sel, spd]) => {
    const els = [...document.querySelectorAll(sel)];
    return els.map(el => ({ el, spd }));
  }).flat().filter(({ el }) => el);

  let ticking = false;

  function doParallax() {
    const sy = window.scrollY;
    const vc = window.innerHeight / 2;

    // ① Hero background — moves at 38% of scroll speed
    if (hero) hero.style.backgroundPositionY = `calc(50% + ${sy * 0.38}px)`;

    // ② Hero content — floats up as you scroll away
    if (heroContent) heroContent.style.translate = `0px ${sy * -0.15}px`;

    // ③ Cloud blobs — each section drifts at different speed
    const cloudSpeeds = [0.07, 0.11, 0.06, 0.09, 0.05];
    cloudWraps.forEach((c, i) => {
      const sec = c.closest('section');
      if (!sec) return;
      const mid = sec.offsetTop + sec.offsetHeight / 2;
      c.style.translate = `0px ${(sy - mid) * cloudSpeeds[i % cloudSpeeds.length]}px`;
    });

    // ④ Section content — each element at its own parallax depth
    PX.forEach(({ el, spd }) => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - vc) * spd;
      el.style.translate = `0px ${offset}px`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(doParallax); ticking = true; }
  }, { passive: true });

  doParallax();
})();