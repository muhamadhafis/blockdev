# Decision Log (ADR)

## ADR-001: Font Primary Menggunakan Inter Display via Google Fonts
- **Status**: Diterima
- **Tanggal**: 2026-11-12
- **Konteks**: Desain membutuhkan tipografi modern bergaya Eco.com/Linear dengan karakteristik display yang tajam pada headline dan mudah dibaca pada teks isi.
- **Keputusan**: Menggunakan `next/font/google` dengan font `Inter` serta konfigurasi optical size axis `axes: ["opsz"]` dan CSS `font-optical-sizing: auto;`.
- **Konsekuensi**: Performa optimal dengan automatic font subsetting dan preloading dari Next.js tanpa beban unduhan aset lokal mandiri.

## ADR-002: Integrasi ScrollStack dengan Scroll Utama Halaman (Window Scroll)
- **Status**: Diterima
- **Tanggal**: 2026-11-12
- **Konteks**: Komponen *How BlockDev Helps You Grow* sebelumnya menggunakan *contained scroll* dengan container berketinggian statis 680px, sehingga memicu scroll bersarang (*nested scroll*) yang kurang ergonomis bagi navigasi pengguna.
- **Keputusan**: Mengaktifkan `useWindowScroll={true}`, menghapus container berketinggian statis, mengatur `stackPosition="100px"`, dan menonaktifkan `smoothScroll` untuk menjaga kelancaran scroll bawaan browser tanpa *wheel event hijacking*.
- **Konsekuensi**: Kartu menumpuk secara alami sejalan dengan scroll halaman utama (*sticky stacking*).
