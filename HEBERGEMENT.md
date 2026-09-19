# Hébergement de la vidéo et des photos

Ce document explique où et comment héberger le film et les photos, et
comment les relier au site. À lire une fois que le design (front-end)
vous convient — c'est le cas ici.

## 1. Pourquoi pas directement sur GitHub ?

GitHub Pages sert très bien le **code** du site (HTML/CSS/JS), mais
n'est pas fait pour stocker des médias lourds :

| Limite GitHub Pages          | Valeur          |
|-------------------------------|------------------|
| Taille recommandée du dépôt   | 1 Go             |
| Taille max d'un fichier       | 100 Mo           |
| Taille max du site publié     | 1 Go             |
| Bande passante (souple)       | ~100 Go / mois   |

Votre film fait à lui seul ~3 Go : impossible à mettre sur GitHub
(dépasse même la taille max du fichier, largement). Les photos d'un
mariage (souvent 50 à 300 photos en bonne résolution) peuvent
facilement représenter plusieurs Go également. Il faut donc les
héberger ailleurs, et ne garder sur GitHub que le code.

## 2. La solution : Cloudflare R2 pour les deux

C'est exactement ce qui était prévu dans le cahier des charges initial
pour la vidéo — on utilise la même solution pour les photos, pas besoin
d'un service en plus.

**Pourquoi R2 est un bon choix ici :**

- **10 Go de stockage gratuits par mois.** Le film (3 Go) + une
  galerie de photos compressées (quelques centaines de Mo à 1-2 Go)
  tiennent largement dedans.
- **Zéro frais de sortie ("egress")** — c'est le point important :
  chez la plupart des concurrents (AWS S3 par exemple), c'est le
  téléchargement des fichiers par les invités qui coûte cher. Chez
  R2, télécharger ne coûte rien, peu importe le nombre d'invités qui
  regardent ou téléchargent le film.
- **Si vous dépassez le gratuit**, le stockage supplémentaire coûte
  environ 0,015 $/Go/mois — pour ce projet, on parle de quelques
  centimes par mois dans le pire des cas, pas plus.

## 3. Mettre en place le bucket R2

1. Créez un compte Cloudflare (gratuit) sur [cloudflare.com](https://cloudflare.com).
2. Dans le tableau de bord : **R2 Object Storage → Create bucket**.
   Donnez-lui un nom, ex. `mariage-marine-clement`.
3. Uploadez-y :
   - le film final (MP4, H.264, ~3 Go)
   - vos photos (idéalement compressées pour le web, voir section 5)
4. Rendez le bucket accessible publiquement en lecture :
   **Bucket → Settings → Public access → Allow Access**, ou reliez un
   sous-domaine dédié (ex. `medias.votredomaine.com`) via
   **Custom Domains** dans les réglages du bucket. Cloudflare vous
   donne alors une URL de base stable pour tous les fichiers du
   bucket, par exemple :
   ```
   https://medias.votredomaine.com/film-mariage.mp4
   https://medias.votredomaine.com/photos/demo-1.jpg
   ```

⚠️ **À ce stade, le bucket est public** : n'importe qui connaissant
l'URL exacte d'un fichier peut y accéder directement, sans passer par
le mot de passe du site. C'est suffisant pour un lancement rapide (les
URLs ne sont pas devinables), mais ce n'est pas une vraie protection.
L'étape suivante, plus tard, sera de passer par un **Cloudflare
Worker** qui vérifie le mot de passe et ne donne accès aux fichiers
qu'après authentification (URLs temporaires signées). Ce n'est pas
nécessaire pour démarrer.

## 4. Relier les URLs au site

Tout est centralisé à deux endroits, comme prévu dès le départ.

**Pour la vidéo** — en haut de `js/script.js` :

```js
const VIDEO_URL = "https://medias.votredomaine.com/film-mariage.mp4";
const DOWNLOAD_URL = "https://medias.votredomaine.com/film-mariage.mp4";
```

`VIDEO_URL` sert à la lecture dans le lecteur intégré, `DOWNLOAD_URL`
au bouton de téléchargement. Vous pouvez utiliser la même URL pour les
deux (comme ci-dessus) ou une URL différente si vous préférez proposer
un fichier de streaming allégé et un fichier de téléchargement en
qualité originale séparé.

**Pour les photos** — en haut de `js/gallery.js` :

```js
const PHOTOS = [
  {
    thumb: "https://medias.votredomaine.com/photos/thumbs/001.jpg",
    full:  "https://medias.votredomaine.com/photos/full/001.jpg",
    alt: "Marine et Clément"
  },
  {
    thumb: "https://medias.votredomaine.com/photos/thumbs/002.jpg",
    full:  "https://medias.votredomaine.com/photos/full/002.jpg",
    alt: ""
  },
  // ... une entrée par photo
];
```

Remplacez tout le tableau `PHOTOS` (il contient actuellement 6 photos
de démonstration à partir de votre photo fournie, juste pour montrer
le rendu de la grille et de la visionneuse).

## 5. Conseil pour les photos : générer des vignettes

Si vous avez 100+ photos en haute résolution (souvent 3-8 Mo chacune),
charger toute la grille en pleine résolution serait lent, surtout sur
mobile. L'idéal :

- une version **vignette** compressée (~800px de large, ~150-300 Ko)
  pour la grille — c'est le champ `thumb`
- la version **complète** (résolution normale, pas la HD brute) pour
  la visionneuse en grand — c'est le champ `full`

Des outils simples pour générer ça en masse : Squoosh (squoosh.app,
gratuit, dans le navigateur), ou un script ImageMagick/Python si vous
êtes à l'aise en ligne de commande. Si vous voulez, je peux vous
préparer un petit script qui fait ça automatiquement sur un dossier de
photos.

## 6. Résumé de l'architecture

```
GitHub Pages          → le code du site (HTML/CSS/JS), gratuit
Cloudflare R2         → le film + les photos, gratuit jusqu'à 10 Go
                         (largement suffisant ici)
```

Rien à payer pour lancer le site dans cette configuration, tant que
vous restez sous les 10 Go de stockage R2 — ce qui sera très
certainement le cas.

## 7. Étape suivante (plus tard, optionnelle)

Le mot de passe restera "front-end uniquement" tant que le Worker
Cloudflare n'est pas mis en place. Pour l'instant, ce n'est pas
bloquant : les URLs R2 ne sont pas indexées ni devinables, donc en
pratique seuls les gens qui ont le lien du site (et donc l'invitation)
tomberont dessus. Le Worker reste une amélioration à faire si vous
voulez une vraie protection cryptographique, mais n'est pas nécessaire
pour envoyer le site aux invités.
