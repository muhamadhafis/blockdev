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
