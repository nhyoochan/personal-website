(function() {
  const scripts = document.getElementsByTagName('script');
  let currentScript = null;
  for (let script of scripts) {
    if (script.getAttribute('src') && script.getAttribute('src').endsWith('navbar.js')) {
      currentScript = script;
      break;
    }
  }
  
  let rootPrefix = './';
  if (currentScript) {
    const src = currentScript.getAttribute('src');
    rootPrefix = src.replace('navbar.js', '');
  }

  const navHTML = `
    <style>
    header {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      height: 70px !important;
      padding: 0 clamp(1.2rem, 5vw, 3rem) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      box-sizing: border-box !important;
      z-index: 500 !important;
    }

    .header-left {
      position: absolute !important;
      left: clamp(1.2rem, 5vw, 3rem) !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      z-index: 20 !important;
      display: flex !important;
      align-items: center !important;
    }

    .header-brand {
      position: absolute !important;
      left: 50% !important;
      top: 50% !important;
      transform: translate(-50%, -50%) !important;
      z-index: 10 !important;
      font-family: monospace !important;
      font-size: clamp(0.65rem, 1.8vw, 0.8rem) !important;
      text-transform: uppercase !important;
      color: var(--gold) !important;
      text-decoration: none !important;
      white-space: nowrap !important;
      margin: 0 !important;
      opacity: 1 !important;
    }

    .header-right {
      position: absolute !important;
      right: clamp(1.2rem, 5vw, 3rem) !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      z-index: 20 !important;
      display: flex !important;
      align-items: center !important;
      gap: 0.7rem !important;
      margin: 0 !important;
    }

    .header-icon {
      display: inline-flex; align-items: center; justify-content: center;
      width: 26px; height: 26px; border-radius: 8px;
      padding: 4px; box-shadow: 0 8px 18px rgba(0,0,0,0.18);
      opacity: 0; animation: fadeSlideDown 0.8s ease 0.6s forwards;
      transition: transform 0.25s ease, opacity 0.25s ease;
      box-sizing: border-box;
      flex-shrink: 0;
    }
    .header-icon:hover { transform: translateY(-1px); }
    .header-icon svg { width: 100%; height: 100%; fill: #ffffff; display: block; }

    .header-instagram {
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .header-home {
      display: inline-flex; align-items: center; justify-content: center;
      width: 26px; height: 26px; border-radius: 8px;
      background: rgba(201, 168, 76, 0.15) !important;
      border: 1px solid rgba(201, 168, 76, 0.3) !important;
      padding: 3px; box-shadow: 0 8px 18px rgba(0,0,0,0.18);
      opacity: 0; animation: fadeSlideDown 0.8s ease 0.6s forwards;
      transition: transform 0.25s ease, opacity 0.25s ease, background 0.25s ease;
      color: var(--gold, #c9a84c) !important;
      box-sizing: border-box;
      flex-shrink: 0;
    }
    .header-home:hover {
      transform: translateY(-1px);
      background: rgba(201, 168, 76, 0.28) !important;
    }
    .header-home svg {
      width: 100%; height: 100%; fill: currentColor; display: block;
    }

    /* Responsive Mobile Rules */
    @media (max-width: 900px) {
      .header-brand {
        display: none !important;
      }
      .header-right {
        left: 50% !important;
        right: auto !important;
        transform: translate(-50%, -50%) !important;
        gap: 6px !important;
      }
      .header-left {
        left: 14px !important;
      }
    }

    @media (max-width: 375px) {
      header {
        height: 60px !important;
      }
      .header-left {
        left: 10px !important;
      }
      .menu-btn {
        width: 36px !important;
        height: 36px !important;
      }
      .header-right {
        gap: 4px !important;
      }
      .header-icon,
      .header-instagram,
      .header-home {
        width: 23px !important;
        height: 23px !important;
        padding: 3px !important;
        border-radius: 6px !important;
      }
    }
  </style>
  <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true" role="dialog" aria-label="Main menu">
    <div class="drawer-inner">
      <p class="drawer-label">Menu</p>



      <a href="${rootPrefix}media/" class="drawer-link">
        <svg class="drawer-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
        <div><span class="drawer-platform">Media</span><span class="drawer-handle">Creative Work</span></div>
      </a>

      <a href="${rootPrefix}development/" class="drawer-link">
        <svg class="drawer-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        <div><span class="drawer-platform">Code</span><span class="drawer-handle">Development</span></div>
      </a>

      <a href="${rootPrefix}charity/" class="drawer-link">
        <svg class="drawer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <div><span class="drawer-platform">Support</span><span class="drawer-handle">PMDRF</span></div>
      </a>


    </div>
  </div>

  <header id="header">
    <div class="header-left">
      <button class="menu-btn" id="menuBtn" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <a href="${rootPrefix}" class="header-brand"> न्ह्युचन राजकर्णिकार </a>

    <div class="header-right">
      <!-- Instagram -->
      <a href="https://www.instagram.com/nhyoochan/" class="header-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1116.5 13 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zm5.75-3.12a1.38 1.38 0 110 2.75 1.38 1.38 0 010-2.75z"/></svg>
      </a>

      <!-- Facebook -->
      <a href="https://www.facebook.com/nhyoochan" class="header-icon" style="background: #1877F2;" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
      </a>

      <!-- GitHub -->
      <a href="https://github.com/nhyoochan" class="header-icon" style="background: #24292f;" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
      </a>

      <!-- TikTok -->
      <a href="https://www.tiktok.com/@nhyoochan" class="header-icon" style="background: #000000;" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
      </a>

      <!-- X -->
      <a href="https://x.com/nhyoochan1309" class="header-icon" style="background: #000000;" target="_blank" rel="noopener noreferrer" aria-label="X">
        <svg viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
      </a>

      <!-- YouTube -->
      <a href="https://www.youtube.com/@nhyoochan_1309" class="header-icon" style="background: #FF0000;" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <svg viewBox="0 0 24 24"><path d="M21.582 6.186a2.78 2.78 0 00-1.956-1.96C17.9 3.75 12 3.75 12 3.75s-5.9 0-7.626.476a2.78 2.78 0 00-1.956 1.96C2 7.915 2 12 2 12s0 4.085.418 5.814a2.78 2.78 0 001.956 1.96C6.1 20.25 12 20.25 12 20.25s5.9 0 7.626-.476a2.78 2.78 0 001.956-1.96C22 16.085 22 12 22 12s0-4.085-.418-5.814zM10 15.464V8.536L15.932 12 10 15.464z"/></svg>
      </a>

      <!-- Mail -->
      <a href="mailto:nhyoochan@nhyoochan.com.np" class="header-icon" style="background: #EA4335;" aria-label="Email">
        <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      </a>
    </div>
  </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Initialize event listeners after insertion
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }
  }, { passive: true });

  const menuBtn = document.getElementById('menuBtn');
  const drawer  = document.getElementById('mobileDrawer');
  let open = false;
  
  function toggleDrawer() {
    open = !open;
    if (menuBtn) {
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    }
    if (drawer) {
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', String(!open));
    }
    document.body.classList.toggle('drawer-open', open);
  }
  
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleDrawer);
  }
  if (drawer) {
    drawer.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', () => { if (open) toggleDrawer(); }));
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) toggleDrawer(); });
})();

