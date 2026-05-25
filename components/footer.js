(function () {
  const footerMount = document.getElementById("site-footer");
  if (!footerMount) return;

  const year = new Date().getFullYear();

  const isGitHubPagesRepo =
    window.location.pathname.split("/").filter(Boolean)[0] === "ink-therapy";

  const base = isGitHubPagesRepo ? "/ink-therapy/" : "/";
  const url = (path = "") => `${base}${String(path).replace(/^\/+/, "")}`;

  footerMount.innerHTML = `
    <footer class="it-footer">
      <div class="it-footer__glow"></div>

      <div class="it-footer__inner">
        <div class="it-footer__brand-area">
          <a href="${url("")}" class="it-footer__brand" aria-label="Ink Therapy home">
            <span class="it-footer__monogram">IT</span>
            <span>
              <strong>Ink Therapy</strong>
              <small>& Associates</small>
            </span>
          </a>

          <p class="it-footer__copy">
            A calm, inclusive tattoo studio in Fayetteville built around custom art,
            comfort, identity, and intentional care.
          </p>

          <div class="it-footer__actions">
            <a href="${url("contact/")}" class="it-footer__btn it-footer__btn--gold">Book a Consult</a>
            <a href="${url("aftercare/")}" class="it-footer__btn">Aftercare</a>
          </div>
        </div>

        <div class="it-footer__links">
          <div>
            <h3>Explore</h3>
            <a href="${url("")}">Home</a>
            <a href="${url("services/")}">Services</a>
            <a href="${url("team/")}">Artists</a>
            <a href="${url("gallery/")}">Gallery</a>
            <a href="${url("booth-rental/")}">Booth Rental</a>
          </div>

          <div>
            <h3>Connect</h3>
            <a href="${url("contact/")}">Contact</a>
            <a href="mailto:inktherapy777@gmail.com?subject=Tattoo%20Consult%20Request">Email</a>
            <a href="https://www.instagram.com/ink_therapy777/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/inktherapy777" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.tiktok.com/@inktherapy777" target="_blank" rel="noopener">TikTok</a>
          </div>
        </div>
      </div>

      <div class="it-footer__bottom">
        <p>© ${year} Ink Therapy & Associates. Fayetteville, Arkansas.</p>

        <a
          class="it-footer__credit"
          href="https://www.vistaventureco.com"
          target="_blank"
          rel="noopener"
          aria-label="Website by Vista Venture Co"
        >
          <span>Website by</span>
          <img
            src="${url("assets/vista-venture-footer-logo.png")}"
            alt="Vista Venture Co"
            class="it-footer__vista-logo"
          />
        </a>
      </div>
    </footer>
  `;

  if (!document.getElementById("it-footer-styles")) {
    const style = document.createElement("style");
    style.id = "it-footer-styles";
    style.textContent = `
      .it-footer {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 18% 0%, rgba(201,161,95,.13), transparent 31%),
          radial-gradient(circle at 88% 12%, rgba(142,161,189,.12), transparent 28%),
          linear-gradient(180deg, #07100b 0%, #030403 100%);
        color: #fff8ed;
        border-top: 1px solid rgba(255,248,237,.12);
        font-family: Inter, Arial, sans-serif;
      }

      .it-footer__glow {
        position: absolute;
        width: 560px;
        height: 560px;
        right: -240px;
        top: -260px;
        background: radial-gradient(circle, rgba(201,161,95,.2), transparent 68%);
        pointer-events: none;
      }

      .it-footer__inner {
        position: relative;
        width: min(1180px, calc(100% - 36px));
        margin: 0 auto;
        padding: 72px 0 48px;
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: 60px;
        align-items: start;
      }

      .it-footer__brand-area {
        max-width: 610px;
      }

      .it-footer__brand {
        display: inline-flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        color: #fff8ed;
        margin-bottom: 22px;
      }

      .it-footer__monogram {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: 1px solid rgba(201,161,95,.42);
        background:
          radial-gradient(circle at 30% 18%, rgba(201,161,95,.28), transparent 44%),
          rgba(255,248,237,.045);
        color: #c9a15f;
        font-family: Georgia, serif;
        font-size: 22px;
        letter-spacing: -.04em;
        box-shadow: 0 18px 48px rgba(0,0,0,.32);
      }

      .it-footer__brand strong {
        display: block;
        font-family: Georgia, serif;
        font-size: clamp(29px, 4vw, 46px);
        line-height: .9;
        font-weight: 500;
        letter-spacing: -.045em;
      }

      .it-footer__brand small {
        display: block;
        color: rgba(255,248,237,.58);
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .22em;
        text-transform: uppercase;
        margin-top: 8px;
      }

      .it-footer__copy {
        color: rgba(255,248,237,.68);
        font-size: 17px;
        line-height: 1.7;
        max-width: 570px;
        margin: 0;
      }

      .it-footer__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
        margin-top: 28px;
      }

      .it-footer__btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 21px;
        border-radius: 999px;
        border: 1px solid rgba(255,248,237,.18);
        background: rgba(255,248,237,.045);
        color: #fff8ed;
        text-decoration: none;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: .15em;
        text-transform: uppercase;
        transition: .28s ease;
      }

      .it-footer__btn:hover {
        transform: translateY(-2px);
        border-color: rgba(201,161,95,.65);
      }

      .it-footer__btn--gold {
        background: linear-gradient(135deg, #d7b675, #9f7b3c);
        color: #140f08;
        border-color: rgba(255,231,174,.5);
      }

      .it-footer__links {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        gap: 34px;
      }

      .it-footer__links h3 {
        color: #c9a15f;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .24em;
        text-transform: uppercase;
        margin: 0 0 18px;
      }

      .it-footer__links a {
        display: block;
        width: max-content;
        color: rgba(255,248,237,.66);
        text-decoration: none;
        font-size: 15px;
        line-height: 1.35;
        margin-bottom: 13px;
        transition: color .25s ease, transform .25s ease;
      }

      .it-footer__links a:hover {
        color: #fff8ed;
        transform: translateX(3px);
      }

      .it-footer__bottom {
        position: relative;
        width: min(1180px, calc(100% - 36px));
        margin: 0 auto;
        padding: 22px 0 26px;
        border-top: 1px solid rgba(255,248,237,.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 22px;
        color: rgba(255,248,237,.52);
        font-size: 13px;
      }

      .it-footer__bottom p {
        margin: 0;
      }

      .it-footer__credit {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        color: rgba(255,248,237,.5);
        text-decoration: none;
        white-space: nowrap;
        transition: opacity .25s ease, transform .25s ease;
      }

      .it-footer__credit:hover {
        opacity: 1;
        transform: translateY(-1px);
      }

      .it-footer__credit span {
        font-size: 11px;
        font-weight: 900;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: rgba(255,248,237,.42);
      }

      .it-footer__vista-logo {
        width: 158px;
        height: auto;
        display: block;
        opacity: .92;
        filter: saturate(1.08) brightness(1.06);
      }

      @media (max-width: 900px) {
        .it-footer__inner {
          grid-template-columns: 1fr;
          gap: 42px;
        }

        .it-footer__bottom {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 560px) {
        .it-footer__inner,
        .it-footer__bottom {
          width: min(100% - 26px, 1180px);
        }

        .it-footer__inner {
          padding-top: 56px;
        }

        .it-footer__brand {
          align-items: flex-start;
        }

        .it-footer__monogram {
          width: 52px;
          height: 52px;
          font-size: 20px;
        }

        .it-footer__links {
          grid-template-columns: 1fr;
          gap: 28px;
        }

        .it-footer__actions {
          display: grid;
        }

        .it-footer__btn {
          width: 100%;
        }

        .it-footer__credit {
          align-items: flex-start;
          flex-direction: column;
          gap: 8px;
        }

        .it-footer__vista-logo {
          width: 170px;
        }
      }
    `;

    document.head.appendChild(style);
  }
})();
