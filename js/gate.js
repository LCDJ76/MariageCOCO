/* ================================================================
   Marine & Clément — Porte d'entrée (mot de passe)
   ================================================================
   Fichier PARTAGÉ, inclus par toutes les pages du site
   (index.html, galerie.html, ...).

   PROTOTYPE UNIQUEMENT : cette vérification se fait entièrement
   côté navigateur, le mot de passe est donc visible dans le code
   source. Ce n'est PAS une vraie protection. La vérification
   définitive devra être assurée par un Cloudflare Worker.
================================================================ */

const DEMO_PASSWORD = "09052026";

(function initGate() {
  const gate = document.getElementById("gate");
  const site = document.getElementById("site");
  const form = document.getElementById("gateForm");
  const input = document.getElementById("gatePassword");
  const error = document.getElementById("gateError");

  const SESSION_KEY = "mc-wedding-unlocked";

  function unlock() {
    gate.classList.add("is-hidden");
    site.removeAttribute("aria-hidden");
    site.classList.add("is-visible");
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch (e) {
      /* stockage indisponible : sans conséquence sur le prototype */
    }
  }

  // Si déjà déverrouillé pendant cette session (sur une autre page
  // du site), on saute directement — pas besoin de retaper le
  // mot de passe à chaque page.
  try {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      unlock();
    }
  } catch (e) {
    /* ignore */
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = input.value.trim();

    if (value === DEMO_PASSWORD) {
      error.classList.remove("is-visible");
      unlock();
    } else {
      error.classList.add("is-visible");
      input.focus();
      input.select();
    }
  });
})();
