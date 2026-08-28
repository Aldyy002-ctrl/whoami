"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  className: string;
  children: ReactNode;
};

function Modal({ open, onClose, label, className, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="presentation" onMouseDown={onClose}>
      <div
        className={`modal-shell ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup dialog">
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

const projects = [
  {
    number: "01",
    title: "KaiNime",
    type: "Full-stack media platform",
    summary:
      "Platform media lintas perangkat dengan streaming adaptif, reader offline, sinkronisasi riwayat, dan aplikasi Android.",
    stack: ["Next.js", "React", "TypeScript", "Cloudflare"],
    accent: "violet",
    private: true,
  },
  {
    number: "02",
    title: "RESTO Mobile",
    type: "Mobile operations app",
    summary:
      "Aplikasi operasional restoran untuk mengelola menu, transaksi, meja, stok harian, dan beberapa peran pengguna.",
    stack: ["Ionic", "Vue", "MySQL", "REST API"],
    accent: "cyan",
    private: false,
    href: "https://github.com/Aldyy002-ctrl/resto-mobile-app",
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=%2B6283152113679",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.893 9.888-9.893 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.895 6.994c-.003 5.45-4.437 9.894-9.887 9.894",
  },
  {
    label: "GitHub",
    href: "https://github.com/Aldyy002-ctrl",
    path: "M12 .7a11.3 11.3 0 00-3.57 22.02c.57.1.77-.24.77-.55v-2.16c-3.15.68-3.81-1.34-3.81-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.53-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.11 1.16a10.8 10.8 0 015.66 0c2.16-1.47 3.11-1.16 3.11-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.34-2.65 5.3-5.17 5.58.41.35.77 1.04.77 2.1v3.11c0 .31.2.66.78.55A11.3 11.3 0 0012 .7",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xydt_dyy/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.24.42.56.22.96.49 1.38.91.42.42.69.82.91 1.38.17.43.37 1.07.42 2.24.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.42 2.24-.22.56-.49.96-.91 1.38-.42.42-.82.69-1.38.91-.43.17-1.07.37-2.24.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.24-.42a3.8 3.8 0 01-1.38-.91 3.8 3.8 0 01-.91-1.38c-.17-.43-.37-1.07-.42-2.24C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.42-2.24.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.43-.17 1.07-.37 2.24-.42C8.42 2.17 8.8 2.16 12 2.16m0-2.16C8.74 0 8.33.01 7.06.07 5.8.12 4.94.32 4.19.61c-.78.3-1.44.71-2.1 1.37C1.43 2.64 1.02 3.3.72 4.08.43 4.83.23 5.69.18 6.95.12 8.22.11 8.63.11 11.89s.01 3.67.07 4.94c.05 1.26.25 2.12.54 2.87.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.75.29 1.61.49 2.87.54 1.27.06 1.68.07 4.94.07s3.67-.01 4.94-.07c1.26-.05 2.12-.25 2.87-.54.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.29-.75.49-1.61.54-2.87.06-1.27.07-1.68.07-4.94s-.01-3.67-.07-4.94c-.05-1.26-.25-2.12-.54-2.87-.3-.78-.71-1.44-1.37-2.1A5.96 5.96 0 0019.81.61c-.75-.29-1.61-.49-2.87-.54C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84m0 10.16A4 4 0 1112 8a4 4 0 010 8m7.84-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@katateki_999",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.38v13.67a2.84 2.84 0 11-2-2.72V9.5a6.22 6.22 0 106.22 6.17V8.74a8.16 8.16 0 004.77 1.52V6.89a4.85 4.85 0 01-1.84-.2",
  },
];

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke atas">
          <span className="brand-mark">999</span>
          <span className="brand-name">ALDIANSYAH</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#projects">Proyek</a>
          <a href="#about">Tentang</a>
          <a href="#certificates">Sertifikat</a>
          <a href="#contact">Kontak</a>
        </nav>

        <a className="header-cta" href="mailto:kbnmmjj@gmail.com">
          <span className="header-cta-label">Mari terhubung</span> <ArrowUpRight size={16} />
        </a>
      </header>

      <nav className="mobile-nav-bar" aria-label="Navigasi mobile">
        <a href="#projects"><Briefcase size={19} /><span>Proyek</span></a>
        <a href="#about"><Code2 size={19} /><span>Tentang</span></a>
        <a href="#certificates"><Award size={19} /><span>Sertifikat</span></a>
        <a href="#contact"><Mail size={19} /><span>Kontak</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            Terbuka untuk peluang dan kolaborasi
          </div>

          <p className="eyebrow">PORTFOLIO / 2026</p>
          <h1>
            Membangun produk digital yang
            <span> berguna dan terasa hidup.</span>
          </h1>
          <p className="hero-description">
            Saya Muhammad AldiAnsyah, web developer dari Samarinda. Saya mengubah
            ide menjadi aplikasi web dan mobile yang responsif, cepat, dan mudah
            dipakai.
          </p>

          <div className="social-links" aria-label="Media sosial">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={social.label}
                title={social.label}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d={social.path} /></svg>
              </a>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Lihat karya <ArrowDownRight size={18} />
            </a>
            <a
              className="button button-ghost"
              href="https://github.com/Aldyy002-ctrl"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Ringkasan profil">
          <div className="panel-topline">
            <span>PROFILE.SYS</span>
            <Sparkles size={18} />
          </div>
          <button
            className="profile-trigger"
            type="button"
            aria-label="Perbesar foto profil"
            onClick={() => setProfileOpen(true)}
          >
            <span className="profile-shape">
              <img src="/profile.jpg" alt="Foto Muhammad AldiAnsyah" />
            </span>
            <span className="profile-hint">Klik untuk memperbesar</span>
          </button>
          <Modal
            open={profileOpen}
            onClose={() => setProfileOpen(false)}
            label="Foto profil Muhammad AldiAnsyah"
            className="profile-modal"
          >
            <img src="/profile.jpg" alt="Muhammad AldiAnsyah" />
          </Modal>
          <div className="profile-row">
            <span>Fokus</span>
            <strong>Web & Mobile</strong>
          </div>
          <div className="profile-row">
            <span>Lokasi</span>
            <strong><MapPin size={14} /> Samarinda, ID</strong>
          </div>
          <div className="profile-row">
            <span>Status</span>
            <strong>Siap berkontribusi</strong>
          </div>
        </div>

        <div className="hero-footnote">
          <Code2 size={17} />
          <span>Frontend</span>
          <span>Backend</span>
          <span>Mobile</span>
          <span>UI/UX</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 02</p>
            <h2>Proyek yang menyelesaikan masalah nyata.</h2>
          </div>
          <p>
            Setiap proyek menunjukkan cara saya merancang alur, membangun fitur,
            dan memperbaiki pengalaman pengguna.
          </p>
        </div>

        <div className="project-list">
          <button
            className="project-card project-card-button accent-violet"
            type="button"
            onClick={() => setCaseOpen(true)}
          >
            <div className="project-number">01</div>
            <div className="project-body">
              <div className="project-meta">
                <span>{projects[0].type}</span>
                <span className="privacy-pill">Private case study</span>
              </div>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].summary}</p>
              <div className="tag-list">{projects[0].stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="project-icon"><ArrowUpRight size={22} /></div>
          </button>
          <Modal
            open={caseOpen}
            onClose={() => setCaseOpen(false)}
            label="Studi kasus KaiNime"
            className="case-modal"
          >
            <h2>KaiNime</h2>
            <p className="modal-description">
              Studi kasus platform media lintas perangkat. Kode sumber tetap private.
            </p>
            <div className="case-modal-grid">
              <div><span>MASALAH</span><p>Akses media, riwayat, dan bacaan offline perlu tetap nyaman di desktop maupun Android.</p></div>
              <div><span>SOLUSI</span><p>Streaming adaptif, bookshelf offline, sinkronisasi riwayat, reader panjang, dan aplikasi Android.</p></div>
              <div><span>KONTRIBUSI</span><p>Perencanaan produk, UI/UX, integrasi frontend-backend, optimasi performa, pengujian, dan build otomatis.</p></div>
              <div><span>TEKNOLOGI</span><p>Next.js, React, TypeScript, Tailwind CSS, Cloudflare, HLS, dan Android WebView.</p></div>
            </div>
          </Modal>

          <a className="project-card accent-cyan" href={projects[1].href} target="_blank" rel="noreferrer">
            <div className="project-number">02</div>
            <div className="project-body">
              <div className="project-meta"><span>{projects[1].type}</span></div>
              <h3>{projects[1].title}</h3>
              <p>{projects[1].summary}</p>
              <div className="tag-list">{projects[1].stack.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="project-icon"><ArrowUpRight size={22} /></div>
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <div>
            <p className="eyebrow">ABOUT / APPROACH</p>
            <h2>Saya belajar lewat produk yang benar-benar dipakai.</h2>
          </div>
          <div className="about-copy">
            <p>
              Latar belakang PPLG membentuk dasar teknis saya. Proyek nyata
              mengajarkan hal yang lebih luas: memahami masalah, memilih solusi,
              menguji hasil, lalu memperbaikinya berdasarkan pengalaman pengguna.
            </p>
            <p>
              Saya nyaman mengerjakan proses dari tampilan hingga data, serta
              berkolaborasi untuk mengubah kebutuhan menjadi fitur yang jelas.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          <article>
            <Code2 size={23} />
            <span>01</span>
            <h3>Frontend</h3>
            <p>Antarmuka responsif, aksesibel, dan nyaman di desktop maupun mobile.</p>
          </article>
          <article>
            <Database size={23} />
            <span>02</span>
            <h3>Backend & Data</h3>
            <p>API, autentikasi, alur data, dan struktur database untuk kebutuhan produk.</p>
          </article>
          <article>
            <Smartphone size={23} />
            <span>03</span>
            <h3>Mobile</h3>
            <p>Pengalaman aplikasi yang ringan dengan alur sentuh dan kondisi offline.</p>
          </article>
          <article>
            <Wrench size={23} />
            <span>04</span>
            <h3>Problem Solving</h3>
            <p>Debugging, optimasi performa, pengujian, dan perbaikan bertahap.</p>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-title">
          <p className="eyebrow">JOURNEY / EXPERIENCE</p>
          <h2>Pengalaman yang membentuk cara kerja saya.</h2>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-icon"><Briefcase size={20} /></div>
            <div>
              <p className="timeline-label">PENGALAMAN KERJA</p>
              <h3>Programmer • CV. Britech</h3>
              <p>
                Berkontribusi pada proyek website perusahaan, membantu pengelolaan
                data berskala besar, memimpin koordinasi tim, dan membimbing pengguna
                saat proses serah terima.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-year">2023—2026</div>
            <div className="timeline-icon"><GraduationCap size={20} /></div>
            <div>
              <p className="timeline-label">PENDIDIKAN</p>
              <h3>PPLG • SMK Negeri 7 Samarinda</h3>
              <p>
                Mengembangkan fondasi pemrograman, database, UI/UX, kerja tim, serta
                membangun proyek sistem perpustakaan dan aplikasi berbasis web.
              </p>
            </div>
          </article>
        </div>

        <div className="skills-board">
          <div className="skills-lead">
            <p className="eyebrow">TOOLBOX</p>
            <h3>Teknologi yang saya gunakan.</h3>
          </div>
          <div className="skills-groups">
            <div>
              <span className="skills-label">CURRENT STACK</span>
              <p>Next.js • React • TypeScript • Tailwind CSS • Vue • Ionic</p>
            </div>
            <div>
              <span className="skills-label">BACKEND & DATA</span>
              <p>Node.js • PHP • MySQL • Drizzle ORM • REST API</p>
            </div>
            <div>
              <span className="skills-label">WORKFLOW</span>
              <p>Git • GitHub • Cloudflare • Figma • Canva • Testing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificate-section" id="certificates">
        <div className="certificate-heading">
          <div>
            <p className="eyebrow">PROOF OF LEARNING</p>
            <h2>Sertifikat dan pembelajaran.</h2>
          </div>
          <p>
            Tiga dokumen digital tersedia. Sertifikat fisik lainnya akan
            ditambahkan setelah proses scan.
          </p>
        </div>

        <div className="certificate-grid">
          <a href="/certificate-oracle.pdf" target="_blank" rel="noreferrer" className="certificate-card">
            <div className="certificate-icon"><Award size={24} /></div>
            <p>ORACLE ACADEMY</p>
            <h3>Java Fundamentals</h3>
            <span>21 November 2023</span>
            <div className="certificate-link">Lihat dokumen <ExternalLink size={15} /></div>
          </a>

          <a href="/certificate-learningx-1.pdf" target="_blank" rel="noreferrer" className="certificate-card">
            <div className="certificate-icon"><FileText size={24} /></div>
            <p>LEARNINGX</p>
            <h3>CSR Kalimantan Timur Informatika</h3>
            <span>21 Mei 2024</span>
            <div className="certificate-link">Lihat dokumen <ExternalLink size={15} /></div>
          </a>

          <a href="/certificate-learningx-2.pdf" target="_blank" rel="noreferrer" className="certificate-card">
            <div className="certificate-icon"><FileText size={24} /></div>
            <p>LEARNINGX</p>
            <h3>Informatika SMA/SMK Kelas X</h3>
            <span>20 Januari 2024</span>
            <div className="certificate-link">Lihat dokumen <ExternalLink size={15} /></div>
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true" />
        <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
        <h2>Punya ide atau peluang yang cocok?</h2>
        <p className="contact-copy">
          Saya terbuka untuk posisi junior developer, proyek kolaborasi, dan
          kesempatan belajar lewat produk nyata.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:kbnmmjj@gmail.com">
            <Mail size={18} /> Kirim email
          </a>
          <a
            className="button button-ghost"
            href="https://api.whatsapp.com/send/?phone=%2B6283152113679"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <span className="brand-mark">999</span>
          <p>Muhammad AldiAnsyah</p>
        </div>
        <p>Web Developer • Samarinda, Indonesia</p>
        <div className="footer-links">
          <a href="https://github.com/Aldyy002-ctrl" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:kbnmmjj@gmail.com">Email</a>
          <a href="#top">Kembali ke atas ↑</a>
        </div>
      </footer>
    </main>
  );
}
