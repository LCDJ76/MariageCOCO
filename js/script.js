/* ================================================================
   Marine & Clément — Le film du mariage
   ================================================================

   CONFIGURATION — à modifier lors de l'intégration Cloudflare
   ------------------------------------------------------------
   Remplacez simplement les deux valeurs ci-dessous par les URLs
   Cloudflare R2 / Worker une fois disponibles. Rien d'autre dans
   ce fichier n'a besoin d'être modifié.
================================================================ */

const VIDEO_URL = "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CLEM%26MARINNE_FILM_MARIAGE.mp4";     // ex: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CLEM%26MARINNE_FILM_MARIAGE.mp4"
const DOWNLOAD_URL = "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CLEM%26MARINNE_FILM_MARIAGE.mp4";  // ex: "https://pub-58fa438746034f85a2370699f0b84a2d.r2.dev/CLEM%26MARINNE_FILM_MARIAGE.mp4"

/* La porte d'entrée (mot de passe) est gérée par js/gate.js,
   partagé par toutes les pages du site. */

/* ================================================================
   DÉFILEMENT VERS LE FILM
================================================================ */

(function initScrollCue() {
  const cue = document.getElementById("scrollCue");
  const film = document.getElementById("film");
  if (!cue || !film) return;

  cue.addEventListener("click", function () {
    film.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();

/* ================================================================
   LECTEUR VIDÉO PERSONNALISÉ
================================================================ */

(function initPlayer() {
  const player = document.getElementById("player");
  const video = document.getElementById("video");
  const emptyState = document.getElementById("playerEmpty");
  const giantPlay = document.getElementById("giantPlay");
  const playBtn = document.getElementById("playBtn");
  const iconPlay = playBtn.querySelector(".icon-play");
  const iconPause = playBtn.querySelector(".icon-pause");
  const muteBtn = document.getElementById("muteBtn");
  const iconVolOn = muteBtn.querySelector(".icon-vol-on");
  const iconVolOff = muteBtn.querySelector(".icon-vol-off");
  const volumeSlider = document.getElementById("volumeSlider");
  const progress = document.getElementById("progress");
  const progressFill = document.getElementById("progressFill");
  const progressHandle = document.getElementById("progressHandle");
  const timeCurrent = document.getElementById("timeCurrent");
  const timeDuration = document.getElementById("timeDuration");
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  const hasVideo = Boolean(VIDEO_URL);

  if (hasVideo) {
    video.src = VIDEO_URL;
    emptyState.hidden = true;
  } else {
    // Pas encore de vidéo réelle : on affiche l'état vide et on
    // désactive la lecture, sans casser l'aperçu de l'interface.
    emptyState.hidden = false;
  }

  function formatTime(seconds) {
    if (!isFinite(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  function togglePlay() {
    if (!hasVideo) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  giantPlay.addEventListener("click", togglePlay);
  playBtn.addEventListener("click", togglePlay);

  video.addEventListener("play", function () {
    player.dataset.state = "playing";
    iconPlay.hidden = true;
    iconPause.hidden = false;
  });

  video.addEventListener("pause", function () {
    player.dataset.state = "paused";
    iconPlay.hidden = false;
    iconPause.hidden = true;
  });

  video.addEventListener("loadedmetadata", function () {
    timeDuration.textContent = formatTime(video.duration);
  });

  video.addEventListener("timeupdate", function () {
    const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    progressFill.style.width = pct + "%";
    progressHandle.style.left = pct + "%";
    progress.setAttribute("aria-valuenow", Math.round(pct));
    timeCurrent.textContent = formatTime(video.currentTime);
  });

  function seekFromEvent(clientX) {
    if (!hasVideo || !video.duration) return;
    const rect = progress.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
  }

  let isScrubbing = false;

  progress.addEventListener("pointerdown", function (e) {
    isScrubbing = true;
    seekFromEvent(e.clientX);
  });

  window.addEventListener("pointermove", function (e) {
    if (isScrubbing) seekFromEvent(e.clientX);
  });

  window.addEventListener("pointerup", function () {
    isScrubbing = false;
  });

  progress.addEventListener("keydown", function (e) {
    if (!hasVideo || !video.duration) return;
    const step = video.duration * 0.02;
    if (e.key === "ArrowRight") video.currentTime = Math.min(video.duration, video.currentTime + step);
    if (e.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - step);
  });

  volumeSlider.addEventListener("input", function () {
    const value = Number(volumeSlider.value) / 100;
    video.volume = value;
    video.muted = value === 0;
    updateVolumeIcon();
  });

  function updateVolumeIcon() {
    const muted = video.muted || video.volume === 0;
    iconVolOn.hidden = muted;
    iconVolOff.hidden = !muted;
  }

  muteBtn.addEventListener("click", function () {
    video.muted = !video.muted;
    if (!video.muted && video.volume === 0) {
      video.volume = 1;
      volumeSlider.value = 100;
    }
    updateVolumeIcon();
  });

  fullscreenBtn.addEventListener("click", function () {
    const frame = player.querySelector(".player__frame");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (frame.requestFullscreen) {
      frame.requestFullscreen();
    }
  });
})();

/* ================================================================
   TÉLÉCHARGEMENT
================================================================ */

(function initDownload() {
  const btn = document.getElementById("downloadBtn");
  const note = document.getElementById("downloadNote");

  if (DOWNLOAD_URL) {
    btn.href = DOWNLOAD_URL;
    btn.setAttribute("download", "");
    note.textContent = "Le film est disponible en qualité originale.";
  } else {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      note.textContent = "Le lien de téléchargement n'est pas encore actif.";
      note.style.color = "var(--gold)";
    });
  }
})();
