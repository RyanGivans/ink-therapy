(function () {
  const footerMount = document.getElementById("site-footer");
  if (!footerMount) return;

  const year = new Date().getFullYear();
  const isGitHubPagesRepo = window.location.pathname.split("/").filter(Boolean)[0] === "ink-therapy";
  const base = isGitHubPagesRepo ? "/ink-therapy/" : "/";
  const url = (path) => base + path.replace(/^\/+/, "");

  footerMount.innerHTML = `
    <footer class="global-footer">
      <div class="footer-glow"></div>

      <div class="footer-inner">
        <div class="footer-brand">
          <a href="${url("")}" class="footer-logo-wrap" aria-label="Ink Therapy home">
            <img src="${url("assets/logo-white.png")}" alt="Ink Therapy & Associates logo" class="footer-logo" />
          </a>

          <p class="footer-kicker">Ink Therapy & Associates</p>
          <h2>Art that heals. Ink that lasts.</h2>
          <p class="footer-copy">
            Premium tattoo work, intentional care, and a Fayetteville studio experience built around comfort, trust, and self-expression.
          </p>

          <div class="footer-actions">
            <a href="${url("contact/")}" class="footer-btn footer-btn-primary">Book Now</a>
            <a href="${url("aftercare/")}" class="footer-btn footer-btn-secondary">Aftercare</a>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <h3>Explore</h3>
            <a href="${url("")}">Home</a>
            <a href="${url("services/")}">Services</a>
            <a href="${url("team/")}">Artists</a>
            <a href="${url("gallery/")}">Gallery</a>
            <a href="${url("aftercare/")}">Aftercare</a>
          </div>

          <div class="footer-col">
            <h3>Studio</h3>
            <a href="${url("owner/")}">Owner</a>
            <a href="${url("booth-rental/")}">Booth Rental</a>
            <a href="${url("contact/")}">Contact</a>
            <a href="https://www.instagram.com/ink_therapy777/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/inktherapy777" target="_blank" rel="noopener">Facebook</a>
          </div>

          <div class="footer-col">
            <h3>Contact</h3>
            <a href="mailto:inktherapy777@gmail.com?subject=Tattoo%20Consult%20Request">Email Consult Request</a>
            <a href="https://www.instagram.com/ink_therapy777/" target="_blank" rel="noopener">Message on Instagram</a>
            <a href="https://www.tiktok.com/@inktherapy777" target="_blank" rel="noopener">TikTok</a>
            <p class="footer-small">Fayetteville, Arkansas</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© ${year} Ink Therapy & Associates. All rights reserved.</p>
        <p>Clean healing. Bold work. Lasting impressions.</p>
      </div>
    </footer>
  `;

  if (!document.getElementById("global-footer-styles")) {
    const style = document.createElement("style");
    style.id = "global-footer-styles";
    style.textContent = `
      .global-footer {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 20% 10%, rgba(201,161,95,.16), transparent 30%),
          linear-gradient(180deg, #07100b 0%, #030403 100%);
        color: #fff8ed;
        border-top: 1px solid rgba(255,248,237,.12);
        padding: 80px 0 0;
        font-family: Inter, Arial, sans-serif;
      }

      .footer-glow {
        position: absolute;
        width: 520px;
        height: 520px;
        right: -180px;
        top: -220px;
        background: radial-gradient(circle, rgba(201,161,95,.2), transparent 68%);
        pointer-events: none;
      }

      .footer-inner {
        position: relative;
        width: min(1180px, calc(100% - 36px));
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: 56px;
        padding-bottom: 56px;
      }

      .footer-brand { max-width: 620px; }
      .footer-logo-wrap { display: inline-flex; margin-bottom: 22px; }
      .footer-logo {
        width: 96px;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0 0 22px rgba(201,161,95,.22));
      }

      .footer-kicker {
        color: #c9a15f;
        font-size: 12px;
        letter-spacing: .26em;
        text-transform: uppercase;
        margin: 0 0 14px;
        font-weight: 900;
      }

      .footer-brand h2 {
        font-family: Georgia, serif;
        font-size: clamp(36px, 5vw, 72px);
        font-weight: 500;
        line-height: .95;
        letter-spacing: -.055em;
        margin: 0 0 18px;
      }

      .footer-copy {
        color: rgba(255,248,237,.7);
        font-size: 17px;
        line-height: 1.7;
        max-width: 560px;
        margin: 0;
      }

      .footer-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 30px;
      }

      .footer-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 22px;
        border-radius: 999px;
        font-size: 12px;
        letter-spacing: .16em;
        text-transform: uppercase;
        text-decoration: none;
        transition: transform .25s ease, border-color .25s ease, background .25s ease;
      }

      .footer-btn:hover { transform: translateY(-2px); }

      .footer-btn-primary {
        background: linear-gradient(135deg,#d7b675,#9f7b3c);
        color: #140f08;
        border: 1px solid rgba(255,231,174,.5);
        font-weight: 900;
      }

      .footer-btn-secondary {
        color: #fff8ed;
        border: 1px solid rgba(255,248,237,.18);
        background: rgba(255,248,237,.045);
      }

      .footer-links-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }

      .footer-col h3 {
        color: #c9a15f;
        font-size: 12px;
        letter-spacing: .22em;
        text-transform: uppercase;
        margin: 0 0 18px;
        font-weight: 900;
      }

      .footer-col a {
        display: block;
        color: rgba(255,248,237,.68);
        text-decoration: none;
        font-size: 15px;
        line-height: 1.4;
        margin-bottom: 13px;
        transition: color .25s ease, transform .25s ease;
      }

      .footer-col a:hover {
        color: #fff8ed;
        transform: translateX(3px);
      }

      .footer-small {
        color: rgba(255,248,237,.55);
        font-size: 13px;
        line-height: 1.6;
        margin-top: 18px;
      }

      .footer-bottom {
        position: relative;
        border-top: 1px solid rgba(255,248,237,.1);
        width: min(1180px, calc(100% - 36px));
        margin: 0 auto;
        padding: 24px 0;
        display: flex;
        justify-content: space-between;
        gap: 18px;
        color: rgba(255,248,237,.55);
        font-size: 13px;
      }

      .footer-bottom p { margin: 0; }

      @media (max-width: 900px) {
        .footer-inner { grid-template-columns: 1fr; }
        .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
        .footer-bottom { flex-direction: column; }
      }

      @media (max-width: 560px) {
        .global-footer { padding-top: 56px; }
        .footer-inner, .footer-bottom { width: min(100% - 26px, 1180px); }
        .footer-links-grid { grid-template-columns: 1fr; }
        .footer-actions { display: grid; }
        .footer-btn { width: 100%; }
      }
    `;

    document.head.appendChild(style);
  }
})();
