/* ================================================================
   Marine & Clément — Galerie photo
   ================================================================

   CONFIGURATION — la liste des photos
   ------------------------------------------------------------
   Chaque entrée a besoin de deux URLs :
     - thumb : une version compressée pour la grille (rapide à charger)
     - full  : la version affichée en grand dans la visionneuse

   Pour un petit lot de photos, thumb et full peuvent être la même
   image. Pour un mariage (souvent 50-300 photos), mieux vaut générer
   une vignette compressée par photo — voir HEBERGEMENT.md.

   Les photos ci-dessous pointent vers le bucket Cloudflare R2
   (dossier CAPTURE_JPEG). thumb et full utilisent la même URL —
   pas encore de vignettes compressées séparées (voir HEBERGEMENT.md
   section 5 si la grille devient lente à charger sur mobile).
================================================================ */

const PHOTOS = [
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_0.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_0.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_1.png", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_1.png", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_2.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_2.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_3.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_3.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_4.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_4.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_5.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_5.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_6.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_6.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_7.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_7.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_8.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_8.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_9.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_9.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_10.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_10.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_11.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_11.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_12.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_12.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_13.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_13.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_14.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_14.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_15.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_15.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_16.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_16.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_17.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_17.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_18.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_18.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_19.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_19.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_20.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_20.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_21.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_21.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_23.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_23.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_24.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_24.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_25.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_25.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_26.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_26.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_27.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_27.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_28.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_28.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_29.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_29.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_30.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_30.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_31.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_31.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_32.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_32.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_33.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_33.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_34.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_34.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_36.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_36.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_37.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_37.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_38.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_38.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_39.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_39.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_40.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_40.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_41.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_41.jpg", alt: "" },
  { thumb: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_42.jpg", full: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CAPTURE_JPEG/CLEM%26MARINNE_42.jpg", alt: "" },
];

/* ================================================================
   RENDU DE LA GRILLE
================================================================ */

(function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  PHOTOS.forEach(function (photo, index) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "gallery__item";
    item.setAttribute("aria-label", "Agrandir la photo" + (photo.alt ? " — " + photo.alt : ""));
    item.dataset.index = String(index);

    const img = document.createElement("img");
    img.src = photo.thumb;
    img.alt = photo.alt || "";
    img.loading = "lazy";
    img.className = "gallery__thumb";

    item.appendChild(img);
    grid.appendChild(item);
  });

  // Fondu progressif des vignettes à l'apparition dans l'écran.
  const items = grid.querySelectorAll(".gallery__item");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  items.forEach(function (item, i) {
    item.style.transitionDelay = Math.min(i * 40, 320) + "ms";
    observer.observe(item);
  });

  grid.addEventListener("click", function (event) {
    const item = event.target.closest(".gallery__item");
    if (!item) return;
    openLightbox(Number(item.dataset.index));
  });

  /* ==============================================================
     LIGHTBOX
  ============================================================== */

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("is-open");
    lightbox.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const photo = PHOTOS[currentIndex];
    lightboxImage.src = photo.full;
    lightboxImage.alt = photo.alt || "";
    lightboxCounter.textContent = currentIndex + 1 + " / " + PHOTOS.length;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
    updateLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % PHOTOS.length;
    updateLightbox();
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPrev();
    if (event.key === "ArrowRight") showNext();
  });
})();
