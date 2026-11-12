# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Standard workspace documentation structure (`docs/`, `.agents/`, `PRD.md`, `CHANGELOG.md`).

### Changed
- Font utama diganti dari Geist Sans menjadi Inter Display (`next/font/google` dengan `axes: ["opsz"]`).
- Section *How BlockDev Helps You Grow* (`ScrollStack`) diintegrasikan dengan scroll utama halaman (`useWindowScroll={true}`).
- Gradient atas pada Hero Video dihapus, dan gradient bawah diperbesar penuh ke atas (`inset-0`).
- Section *How BlockDev Helps You Grow* dilengkapi sticky header yang tetap menempel di bawah navbar saat kartu program menumpuk di bawahnya.
- Sinkronisasi exit transform pada sticky header *How BlockDev Helps You Grow* sehingga judul otomatis bergeser ke atas bersama tumpukan kartu saat item terakhir terdorong keluar layar.
- Menghapus item program ke-5 (05 // COMPETITION - Hackathon) dari section *How BlockDev Helps You Grow*.
- Menghapus style nomor dan kategori mono pada setiap kartu *How BlockDev Helps You Grow* (tampilan langsung menampilkan judul program).
- Navbar adaptif: menggunakan logo berwarna (blockdev-colored.png) dan menu terang di area Hero Video, serta beralih ke logo normal (blockdev.png) dan tema menu gelap bersih di section konten.
- Menghapus tombol CTA (Explore Track) pada kartu *How BlockDev Helps You Grow* untuk tampilan yang lebih bersih dan ringkas.
- Mengoptimalkan tumpukan kartu ScrollStack: fade-out otomatis pada konten kartu yang tertumpuk agar teks tidak tembus ke tab atas, jarak tab diperkecil ke 10px, dan posisi stack disesuaikan ke 28vh untuk ruang bebas di bawah header.
