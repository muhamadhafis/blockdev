/** Shared CDN base and site-level static content (team, gallery, partners). */
export const CDN = "https://blockdev.sgp1.cdn.digitaloceanspaces.com";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  { name: "William Sutanto", role: "Founder", image: `${CDN}/asset/team/william.png` },
  { name: "Dennis", role: "Head", image: `${CDN}/asset/team/dennis.png` },
  { name: "Ron", role: "Community Manager", image: `${CDN}/asset/team/ron.png` },
  { name: "Viga", role: "Social Media Manager", image: `${CDN}/asset/team/viga.png` },
  { name: "Zahra", role: "Event & Partnership Manager", image: `${CDN}/asset/team/zahra.png` },
  { name: "Andika", role: "Creative Designer", image: `${CDN}/asset/team/dika.png` },
  { name: "Kiki", role: "Videographer", image: `${CDN}/asset/team/kiki.png` },
  { name: "Merry", role: "Human Resources Manager", image: `${CDN}/asset/team/merry.png` },
  { name: "Samuel", role: "Event Associate", image: `${CDN}/asset/team/samuel.png` },
  { name: "Lexy", role: "Developer Relations", image: `${CDN}/asset/team/lexy.png` },
  { name: "Cathlyn", role: "Developer Relations", image: `${CDN}/asset/team/shanice.png` },
];

export interface GalleryPhoto {
  id: string;
  img: string;
  width: number;
  height: number;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  "728bee70-0cd0-4ba1-83c4-5dc7e0a5d6cc",
  "11b5d6b5-83f8-4687-9318-033f23fac877",
  "acf30eb8-0b7e-4367-89a1-4d7324430600",
  "aa1fc478-1c8c-4515-8db8-1c667db28c3d",
  "6032b6a9-60e5-4450-964a-ff1edd823861",
  "ecf21e04-1638-4d8f-a923-e6c16b0f78fb",
  "2f53e988-b550-49f2-bb3d-53ce1b616874",
  "c84e942d-6362-4d1d-bfe0-24135c935d17",
  "4ac23b50-d358-4178-82ca-4076a1f6ba55",
  "9f4fd580-b76f-4385-90d0-5c8af2e21bac",
].map((id, index) => ({
  id,
  img: `${CDN}/asset/journey/${id}.jpg`,
  // Mixed aspect ratios so the masonry layout stays organic
  width: 800,
  height: index % 3 === 1 ? 1000 : 600,
}));

export const DASHBOARD_URL = "https://blockdev.org/dashboard";

export const PARTNER_LOGOS: string[] = Array.from(
  { length: 20 },
  (_, i) => `${CDN}/asset/partner/${i + 1}.svg`
);
