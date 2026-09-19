<p align="center">
  <img src="assets/whoami-readme-banner.svg" alt="WhoAmI portfolio banner" width="100%">
</p>

<p align="center">
  <strong>Personal portfolio built around the 999 identity.</strong><br>
  Responsive, animated, and designed for desktop and mobile.
</p>

<p align="center">
  <a href="https://whoami-alpha-amber.vercel.app"><img src="https://img.shields.io/badge/Live-Vercel-000000?logo=vercel&logoColor=white" alt="Live on Vercel"></a>
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&logoColor=white" alt="Next.js 16.2">
  <img src="https://img.shields.io/badge/React-19.2-149ECA?logo=react&logoColor=white" alt="React 19.2">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.9">
  <img src="https://img.shields.io/badge/Node.js-%E2%89%A522.13-5FA04E?logo=node.js&logoColor=white" alt="Node.js 22.13+">
</p>

<p align="center">
  <a href="https://whoami-alpha-amber.vercel.app">Live Site</a> ·
  <a href="#fitur-utama">Features</a> ·
  <a href="#tech-stack">Stack</a> ·
  <a href="#menjalankan-lokal">Local Setup</a>
</p>

---

## Tentang proyek

`whoami` adalah portfolio personal Muhammad AldiAnsyah. Website ini menampilkan profil, proyek, sertifikat, dan kontak dalam satu pengalaman visual yang fokus pada responsivitas, animasi ringan, dan identitas `999`.

Tampilan utamanya memakai dark interface dengan aksen lime, violet, cyan, dan gradient neon. Struktur desktop dan mobile dibuat agar tetap nyaman dipakai pada ukuran layar yang berbeda.

## Fitur utama

| Area | Implementasi |
| --- | --- |
| Branding | Identitas `999` dengan typography dan gradient animated |
| Hero | Intro profil, status, social links, dan CTA |
| Projects | Project cards dengan detail stack dan case view |
| About | Ringkasan profil dan kemampuan |
| Certificates | Sertifikat yang dapat dibuka langsung dari portfolio |
| Contact | Social links dan jalur kontak |
| Responsive | Desktop navigation dan mobile navigation terpisah |
| Interaction | Modal, hover states, scroll progress, dan micro-animation |

## Visual system

Palet utama mengikuti website:

```text
Night      #090a0c
Ink        #eef0e8
Lime       #c7ff4a
Violet     #9b87ff
Cyan       #56d6e7
```

Elemen `999` dipertahankan sebagai identitas visual utama, termasuk pada brand mark di header.

## Tech stack

| Layer | Teknologi |
| --- | --- |
| Framework | Next.js 16.2.6 |
| UI | React 19.2.6 |
| Language | TypeScript 5.9 |
| Icons | Lucide React |
| Styling | Custom CSS |
| Deployment | Vercel |
| Runtime | Node.js 22.13+ |

## Struktur halaman

```text
Hero
  ↓
Projects
  ↓
About
  ↓
Certificates
  ↓
Contact
```

Navigasi desktop menggunakan header tetap. Mobile menggunakan navigation bar khusus agar akses section tetap cepat tanpa memadatkan header.

## Menjalankan lokal

```bash
git clone https://github.com/Aldyy002-ctrl/whoami.git
cd whoami

npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deployment

Repository ini dikonfigurasi untuk deployment di Vercel.

Live site:

https://whoami-alpha-amber.vercel.app

## Project goals

- Menampilkan karya dalam format yang cepat dipahami.
- Mempertahankan identitas visual `999`.
- Nyaman dipakai di desktop dan mobile.
- Animasi tetap terasa hidup tanpa membuat interface berat.
- Project dan sertifikat mudah ditemukan.
- Struktur tetap sederhana untuk dikembangkan lagi.

---

<p align="center">
  <sub>Built with Next.js, React, TypeScript, and a lot of 999.</sub>
</p>
