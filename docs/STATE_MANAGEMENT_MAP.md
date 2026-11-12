# State Management Map

## Pola State
Situs ini berfokus pada presentasi web statis dan animasi interaktif sisi klien.
- **Client Components (`"use client"`)**: Digunakan secara selektif pada komponen yang memerlukan hook browser, event listener, atau integrasi GSAP / Motion (`ScrollReveal`, `ScrollStack`, `spotlight-card`, `target-audience`).
- **Server Components**: Root layout dan wrapper halaman utama.
