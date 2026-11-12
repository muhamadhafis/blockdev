# 🚀 BlockDev Web Redesign — Project Handover

Dokumen serah terima ini merangkum seluruh arsitektur, pembaruan desain, komponen reusable, dan panduan pemeliharaan untuk proyek **BlockDev** ([https://blockdev.org/](https://blockdev.org/)).

---

## 📌 1. Ikhtisar Proyek

Proyek ini merupakan pembaruan total (*modern redesign*) dari situs BlockDev yang bertransformasi dari portal web konvensional yang padat informasi (*over-information*) menjadi situs modern berstandar internasional ala **Eco.com / Linear / Vercel** dengan karakteristik:
- **Light Theme Modern**: Dominasi warna putih bersih (`#ffffff`), border halus (`border-zinc-200`), dan tipografi kontras tinggi.
- **Micro-Interactions & Animation**: Integrasi komponen **React Bits** berbasis GSAP ScrollTrigger dan Motion.
- **Cinematic Full-Screen Hero**: Background video 100vh dengan dual gradient dan tipografi terang.
- **Komponen Modular & Reusable**: Memudahkan penambahan halaman dan fitur baru ke depannya.

---

## 🛠️ 2. Tech Stack & Dependencies

| Layer | Teknologi | Catatan |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.4.6** | App Router, React 19.3, Turbopack |
| **Package Manager**| **Bun 1.4.4** | Cepat, efisien, dengan `bun.lock` |
| **Styling** | **Tailwind CSS v4.3.3** | Menggunakan CSS theme variables dan utilities modern |
| **Motion & Animation** | **GSAP 3.15 + Motion** | Mendukung scrub scroll reveal dan card stacking |
| **Icons** | **Lucide React** | Stroke tipis 24x24 konsisten |
| **Utilities** | **clsx + tailwind-merge** | Helper `cn()` untuk penggabungan class dinamis |

---

## 🎨 3. Design System & Spesifikasi Tombol

Sistem tombol diimplementasikan secara terpusat pada [`components/ui/button.tsx`](file:///home/der/dev/blockdev/components/ui/button.tsx):

### Varian Tombol
1. **`primary` (Electric Blue)**:
   - Gradient: `from-[#2b6af7] via-[#2563EB] to-[#1d4ed8]`
   - Teks: Monospace uppercase putih (`font-mono text-xs sm:text-sm tracking-wider`)
   - Opsi `withArrow`: Kotak pill putih di sisi kanan dengan panah biru `→`
2. **`secondary` (Solid White)**:
   - Background putih solid dengan teks hitam monospace (`bg-white text-zinc-950 border border-zinc-250 shadow-sm`)
   - Sesuai referensi foto pertama (*"BUILD WITH ECO"*)
3. **`ghost` (Charcoal Abu-abu)**:
   - Background abu-abu charcoal dengan teks putih monospace (`bg-[#1c1c1f] text-white border border-white/10`)
   - Sesuai referensi foto kedua (*"SCHEDULE DEMO"*)

### Responsivitas Ukuran (`size="responsive"`)
- **Mobile (Default)**: Ukuran `sm` (`h-9 px-3.5 text-xs`) agar ideal untuk genggaman perangkat seluler.
- **Tablet (`sm`/`md`)**: Ukuran `md` (`h-11 px-5 text-sm`).
- **Laptop & Desktop (`lg`)**: Ukuran `lg` (`h-12 px-6 text-sm`).

---

## 🏗️ 4. Struktur Halaman & Komponen ([`app/page.tsx`](file:///home/der/dev/blockdev/app/page.tsx))

### 1. Navigation Bar ([`components/navbar.tsx`](file:///home/der/dev/blockdev/components/navbar.tsx))
- **Posisi**: `fixed top-0 inset-x-0 z-50` transparan dengan `backdrop-blur-md`.
- **Layout `justify-between` & Adaptif**:
  - **Hero Mode**: Memakai logo berwarna [`public/images/blockdev-colored.png`](file:///home/der/dev/blockdev/public/images/blockdev-colored.png) dan teks menu terang (`text-zinc-100`).
  - **Content Mode**: Otomatis beralih ke logo normal [`public/images/blockdev.png`](file:///home/der/dev/blockdev/public/images/blockdev.png) dan teks menu normal (`text-zinc-600`) saat melewati area Hero.
  - **Kanan**: Tombol **Masuk** (style *Ghost*, status *disabled*) dan tombol **Gabung** (style *Secondary*).

### 2. Hero Section 100vh ([`components/hero.tsx`](file:///home/der/dev/blockdev/components/hero.tsx))
- **Tampilan Penuh**: `h-screen min-h-[100dvh]`.
- **Background Video**: Memutar video looping [`public/videos/hero.mp4`](file:///home/der/dev/blockdev/public/videos/hero.mp4).
- **Gradient Overlay**:
  - Gradien Atas: Ditiadakan agar video bersih di bawah navbar.
  - Gradien Bawah: Diperbesar penuh dan dipertebal ke atas (`inset-0 bg-linear-to-t from-black via-black/80 to-black/50`) serta base tint `bg-black/40` untuk kontras teks optimal.
- **Teks Tengah Terang (Murni 2 Baris)**:
  - Headline: *Empowering Indonesia’s Builders* (`text-white drop-shadow-md`)
  - Deskripsi: *Learn, build, and connect through a growing builder network across Indonesia* (`text-zinc-100`)
- **CTA**: Tombol responsif Primary Blue + Secondary White.

### 3. Section About 100vh ([`components/bento-features.tsx`](file:///home/der/dev/blockdev/components/bento-features.tsx))
- **Tampilan Penuh**: `h-screen min-h-[100dvh]`.
- **Langsung ke Narasi Tanpa Judul**: Memanfaatkan komponen **`<ScrollReveal />`** dari React Bits.
- **Tuning Anti-Lag**:
  - `enableBlur={false}` & `effect="fade"` untuk mengeliminasi beban rasterisasi GPU pada ponsel berdaya rendah.
  - `wordAnimationStart="top 50%"`: Animasi baru terpicu saat teks sudah melewati garis tengah layar.

### 4. Section How BlockDev Helps You Grow ([`components/how-blockdev-helps.tsx`](file:///C:/Users/narad/dev/blockdev/components/how-blockdev-helps.tsx))
- **Integrasi Komponen `<ScrollStack />` (React Bits)**: Efek kartu menumpuk terintegrasi scroll utama halaman (`useWindowScroll={true}`) dengan sticky header yang tersinkronisasi transform keluar secara harmonis bersama kartu terakhir (`headerRef` exit sync, `stackPosition: 28vh`).
- **4 Kartu Program**:
  1. *Community Event & Seminar*
  2. *Bootcamp*
  3. *Workshop*
  4. *Incubation*

### 5. Section Our Journey ([`components/our-journey.tsx`](file:///C:/Users/narad/dev/blockdev/components/our-journey.tsx))
- **Integrasi Komponen `<Masonry />` (React Bits)**: Tampilan galeri foto dinamis dokumentasi nyata seminar, workshop, dan hackathon BlockDev.
- **Fitur Interaktif**:
  - Auto-fit columns responsive (`columnWidth: 280px`, `gap: 16px`, `radius: 16px`).
  - Limit tampilan adaptif & tombol See More: default 3 gambar pada mobile (`< sm`), 8 gambar pada desktop (`>= sm`), dan toggle *See More / Show Less* untuk membuka seluruh foto.
  - Efek hover zoom halus pada setiap kartu foto.
  - Interactive physics tile dragging & auto reflow.
  - Lightbox modal dengan navigasi keyboard (`Escape`, `ArrowLeft`, `ArrowRight`) dan navigasi tombol panah (`lucide-react`).

### 6. Section Backed & Trusted Ecosystem ([`components/logo-cloud.tsx`](file:///C:/Users/narad/dev/blockdev/components/logo-cloud.tsx))
- **Integrasi Komponen `<LogoLoop />` (React Bits)**:
  - Menggunakan komponen reusable [`components/ui/LogoLoop.tsx`](file:///C:/Users/narad/dev/blockdev/components/ui/LogoLoop.tsx) dan [`components/ui/LogoLoop.css`](file:///C:/Users/narad/dev/blockdev/components/ui/LogoLoop.css).
  - Menampilkan 20 logo SVG mitra dari folder [`public/images/partners/`](file:///C:/Users/narad/dev/blockdev/public/images/partners/) dalam 2 baris (Dual-Row Infinite Loop).
  - Baris 1 meluncur ke kiri (`direction="left"`), baris 2 meluncur ke kanan (`direction="right"`).
  - Tampilan abu-abu bawaan melalui properti `muted={0.7}`, kembali ke warna penuh saat kursor diarahkan atau disentuh.
  - Mendukung interaktivitas drag & fling, scale on hover, dan fade out mask transparan di ujung kiri-kanan.
- **Komponen Judul Terstandarisasi ([`components/ui/section-header.tsx`](file:///C:/Users/narad/dev/blockdev/components/ui/section-header.tsx))**:
  - Komponen judul modular yang menyelaraskan tipografi judul section, badge mono, dan deskripsi antar-section (digunakan pada *Our Journey* dan *Logo Cloud*).

### 7. Section Pendukung Lainnya
- [`components/target-audience.tsx`](file:///C:/Users/narad/dev/blockdev/components/target-audience.tsx): Tab persona interaktif (Engineers, Students, Founders, Partners).
- [`components/upcoming-events.tsx`](file:///C:/Users/narad/dev/blockdev/components/upcoming-events.tsx): Kartu event real-world terkini (Monad Metropolis, Astra Commons, Arbitrum Open House).
- [`components/community-cta.tsx`](file:///C:/Users/narad/dev/blockdev/components/community-cta.tsx): Banner konversi Telegram & Discord + subscription box.
- [`components/footer.tsx`](file:///C:/Users/narad/dev/blockdev/components/footer.tsx): Footer terang dengan hak cipta dan kredit inisiasi *William Sutanto*.

---

## 📁 5. Direktori & Aset Penting

```
blockdev/
├── app/
│   ├── globals.css          # Theme variables, custom grid, utility classes
│   ├── layout.tsx           # Root layout (Light theme, Inter Display fonts, metadata)
│   └── page.tsx             # Halaman utama merangkum seluruh section
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Sistem tombol (primary, secondary, ghost, responsive)
│   │   ├── badge.tsx        # Pill badge minimalis
│   │   ├── spotlight-card.tsx # Kartu spotlight kursor
│   │   ├── bento-grid.tsx   # Grid modular
│   │   ├── ScrollReveal.tsx # Komponen React Bits ScrollReveal (GSAP)
│   │   ├── ScrollReveal.css # Stylesheet ScrollReveal
│   │   ├── ScrollStack.tsx  # Komponen React Bits ScrollStack
│   │   └── ScrollStack.css  # Stylesheet ScrollStack
│   ├── navbar.tsx           # Sticky/fixed glass navbar
│   ├── hero.tsx             # 100vh Hero video section
│   ├── bento-features.tsx   # 100vh About statement section
│   ├── how-blockdev-helps.tsx # 5 program tracks stack section
│   ├── target-audience.tsx  # Persona tracks section
│   ├── upcoming-events.tsx  # Event & hackathon cards
│   ├── community-cta.tsx    # Telegram/Discord CTA
│   └── footer.tsx           # Global footer
├── public/
│   ├── images/
│   │   └── blockdev.png     # Logo resmi BlockDev (1280x246)
│   └── videos/
│       └── hero.mp4         # Video looping hero (12MB)
└── HANDOVER.md              # File panduan serah terima ini
```

---

## 💻 6. Panduan Menjalankan Proyek

```bash
# 1. Instal dependensi
bun install

# 2. Jalankan development server
bun run dev

# 3. Pengecekan tipe TypeScript (bebas error)
bunx tsc --noEmit
```

---

## ✅ 7. Status Pengujian
- **TypeScript**: `bunx tsc --noEmit` lolos **0 error**.
- **Browser & Responsivitas**: Diverifikasi via Playwright dan browser rendering pada mobile, tablet, dan desktop.
