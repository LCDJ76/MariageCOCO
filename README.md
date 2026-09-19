# Marine & Clément — Site du film de mariage

Prototype front-end (HTML / CSS / JS vanilla), prêt pour GitHub Pages.
Aucune intégration Cloudflare pour l'instant — tout fonctionne en local.

## Structure

```
index.html
galerie.html
css/style.css
js/gate.js       ← mot de passe (partagé par les deux pages)
js/script.js     ← lecteur vidéo + téléchargement (index.html)
js/gallery.js    ← grille photo + visionneuse (galerie.html)
assets/images/maries.jpg          ← votre photo, déjà en place
assets/images/titre-mariage.png   ← le titre stylisé que vous avez fourni
assets/images/galerie-demo/       ← 6 photos de démonstration à remplacer
```

Le site a maintenant deux pages, reliées par une petite navigation en
haut : **Le film** (`index.html`) et **Photos** (`galerie.html`). Le
mot de passe ne se demande qu'une fois : en passant d'une page à
l'autre, pas besoin de le retaper.

## Prévisualiser en local

Pas de build, pas de dépendances. Deux options :

**Option simple** — double-cliquez sur `index.html`. Il s'ouvre dans votre
navigateur et tout fonctionne (photo, mot de passe, lecteur).

**Option recommandée** — lancez un petit serveur local (évite certaines
limitations de sécurité des navigateurs avec les fichiers locaux, utile
plus tard pour tester la vidéo) :

```bash
cd wedding-site
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## Mot de passe de démonstration

Le prototype est protégé par un mot de passe **côté front uniquement**,
juste pour visualiser le parcours complet (page → mot de passe → film).

Mot de passe actuel : **09052026**

⚠️ Ce n'est pas une vraie protection : le mot de passe est visible dans
`js/gate.js`. La vraie sécurité viendra du Cloudflare Worker, comme
prévu dans le cahier des charges.

## Ajouter des photos à la galerie

La liste des photos est centralisée en haut de `js/gallery.js`
(tableau `PHOTOS`). 6 photos de démonstration y sont pour l'instant,
à partir de votre photo fournie — remplacez-les par vos vraies photos.

## Hébergement du film et des photos

Voir **[HEBERGEMENT.md](./HEBERGEMENT.md)** — le guide complet pour
héberger le film et les photos sur Cloudflare R2 (gratuit dans ce cas
de figure) et relier leurs URLs au site.

## Ce qui est prêt à remplacer

Tout est centralisé en haut de `js/script.js` :

```js
const VIDEO_URL = "";     // URL Cloudflare R2 du film (streaming)
const DOWNLOAD_URL = "";  // URL Cloudflare R2 du film (téléchargement)
```

Tant que ces deux valeurs sont vides, le site affiche un état "aperçu"
propre (visuel du lecteur visible, message "le film sera ajouté ici",
bouton de téléchargement visible mais qui prévient que le lien n'est
pas encore actif) — rien n'est cassé, tout est démontrable tel quel.

## Remplacer la photo

Le fond du hero et l'image du mot de passe utilisent la même image :

```
assets/images/maries.jpg
```

Remplacez simplement ce fichier par une autre photo (même nom) pour la
changer partout sur le site.

## Publier sur GitHub Pages

1. Créez un dépôt GitHub **public** (un dépôt privé avec GitHub Pages
   demande un compte payant GitHub Pro).
2. Poussez le contenu de ce dossier à la racine du dépôt :
   ```bash
   git init
   git add .
   git commit -m "Site mariage Marine & Clément"
   git branch -M main
   git remote add origin <url-de-votre-dépôt>
   git push -u origin main
   ```
3. Dans les réglages du dépôt : **Settings → Pages → Source →
   Deploy from a branch → `main` / `root`**.
4. Le site sera disponible à une adresse du type
   `https://votre-compte.github.io/nom-du-depot/`.

Note : un dépôt GitHub Pages **gratuit** est public par défaut même si
le contenu n'est pas indexé — n'importe qui connaissant l'URL exacte
pourra la visiter (le mot de passe front-end filtre l'accès au contenu,
mais pas la visibilité de l'URL elle-même). C'est exactement pour cette
raison que l'étape suivante (Cloudflare Worker) est prévue pour la
vraie protection.

## Prochaine étape (non commencée)

- Upload du film (~3 Go, MP4 H.264) sur Cloudflare R2
- Cloudflare Worker pour l'authentification réelle et des URLs
  temporaires sécurisées
- Branchement de `VIDEO_URL` et `DOWNLOAD_URL` sur les URLs R2/Worker
