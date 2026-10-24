# Farbod Azimmohseni's academic homepage

A static academic homepage for **https://farbod82.github.io/**, inspired by
[Xue Bin Peng's homepage](https://xbpeng.github.io/). It includes a biography,
four publications, SkelGGCNN and SenseTask projects, education, teaching, and the supplied CV.

## Preview locally

Open `index.html` directly, or run:

```sh
npm run dev
```

Then visit http://127.0.0.1:8000. There are no package dependencies to install.

## Publish on GitHub Pages

1. Create a public repository named **farbod82.github.io** under **Farbod82**.
2. Push this folder to its `main` branch.
3. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
4. The included **Deploy homepage to GitHub Pages** workflow publishes the site
   on each push to `main`. If the initial run happened before enabling Pages,
   rerun it from the **Actions** tab using **Run workflow**.

The deployment uses GitHub's built-in `GITHUB_TOKEN`; no secret needs to be added.
The publication URL will be **https://farbod82.github.io/** once deployment succeeds.

With an authenticated GitHub CLI, the equivalent setup is:

```sh
git init -b main
git add .
git commit -m "Create academic homepage"
gh repo create Farbod82/farbod82.github.io --public --source=. --remote=origin --push
gh api --method POST repos/Farbod82/farbod82.github.io/pages -f build_type=workflow
gh workflow run pages.yml
```

## Edit the content

- **Bio, publications, links, education, and teaching:** `index.html`.
- **Appearance and responsive layout:** `styles.css`.
- **CV:** replace `CV.pdf`, keeping the filename.
- **Profile photograph:** replace `profile_image.png`.
- **Animated demonstrations:** replace the GIFs in `assets/`. Update the HTML's
  width/height values if the image dimensions change. GIFs play automatically
  and loop continuously; no JavaScript or playback controls are required.

Run `npm run build` to generate `dist/`, which contains only public site files.
The original root files also work with GitHub's `main` / root publishing option.

## Content and media sources

- Biography, publication metadata, teaching, and education: the supplied `CV.pdf`
  (October 2026). The skill-transfer paper has no venue or review-status label
  on the homepage. SenseTask remains labeled **preprint**, as in the CV.
- Profile photograph: the supplied `profile_image.png`, displayed with a CSS crop.
- Project animations: [Farbod82/SkelGGCNN, docs/assets](https://github.com/Farbod82/SkelGGCNN/tree/main/docs/assets).
- SenseTask project description and link: [SenseTask](https://sensetask.net/).
- Paper links are the original links embedded in the CV.
- The layout is an original implementation inspired by the reference; no reference
  page text, tracking code, or research images have been copied.
