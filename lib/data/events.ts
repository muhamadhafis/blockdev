import { CDN } from "./site";

export interface EventItem {
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  registerUrl: string;
  excerpt: string;
  description: string[];
}

export const EVENTS: EventItem[] = [
  {
    slug: "arbitrum-open-house-singapore",
    title: "Arbitrum Open House - Singapore",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/a9fb45a9-734b-4049-bbf2-dad0e68e3851.jpg",
    date: "09 Sep 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "We are excited to support Arbitrum Open House Singapore — a global builder program with a strong focus on supporting the next generation of builders across Southeast Asia.",
    description: [
      "We are excited to support Arbitrum Open House Singapore — a global builder program with a strong focus on supporting the next generation of builders across Southeast Asia.",
      "Only a few days remain to apply for the Open House Buildathon.",
      "Compete for $115K in prizes and grants across the General, Promising Products, and Robinhood Chain tracks, with top teams getting the opportunity to advance to the in-person Founder House in London.",
      "Sep 14 – Oct 4, 2026 — fully online and open globally. Apply with an existing project or build on new ideas. Limited spots remaining.",
    ],
  },
  {
    slug: "astra-commons-jakarta",
    title: "Astra Commons: Jakarta",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/0c930bc7-aa32-4b5f-b891-d997f23c02e6.png",
    date: "09 Sep 2026",
    author: "Admin Blockdev",
    registerUrl: "https://luma.com/a7x5kjwz",
    excerpt: "Jakarta is joining the GPT-6 Astra celebration!",
    description: [
      "Jakarta is joining the GPT-6 Astra celebration!",
      "No formal speaker session — mostly coffee, networking, and talking with other builders.",
      "We also invite experienced technical people and builders you can sit with, ask anything, discuss ideas, and connect with directly — not as speakers, just people you can learn from.",
      "If you want better networking or simply want to talk about AI and coding with people outside your usual circle, this is a good place.",
      "Limited spots, with second attendance confirmation to reduce no-shows.",
    ],
  },
  {
    slug: "blockchain-life-2026",
    title: "Blockchain Life 2026",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/8c856e56-9cdc-482c-b4d0-43a5d90f02f9.png",
    date: "02 Sep 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "Blockchain Life 2026 is the global meeting point for the world of web3, cryptocurrencies, and mining — the 17th edition takes place in Dubai on December 1–2.",
    description: [
      "Blockchain Life 2026 is the global meeting point for the world of web3, cryptocurrencies, and mining — the 17th edition takes place in Dubai on December 1–2.",
      "The forum brings together crypto whales, founders, and top executives of leading companies, gathering over 15,000 participants from 130+ countries.",
      "Visionary speakers unveil key insights, forecasts, and strategies to maximize opportunities during the bull run.",
      "Known for high-level networking, Blockchain Life remains the must-attend event defining the global crypto market. Buy tickets on the official website.",
    ],
  },
  {
    slug: "infinity-accelerator",
    title: "Infinity Accelerator",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/cc250585-967c-4306-91b9-e6afa582c00f.png",
    date: "02 Apr 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "Indonesia's creative economy is a major force, yet its most valuable asset — intellectual property (IP) — remains illiquid and hard to access.",
    description: [
      "Indonesia's creative economy is a major force, yet its most valuable asset — intellectual property (IP) — remains illiquid and hard to access.",
      "Our mission is to build the financial infrastructure that unlocks that value. Realizing the economic value of IP takes more than technology: we need an integrated ecosystem that connects innovation, investment, and policy.",
      "The integrated accelerator solution accelerates potential startups, turning their projects into living blueprints for real-world business models.",
    ],
  },
  {
    slug: "kelas-rutin-5",
    title: "Regular Class — Batch 5",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/d4dfe6e6-7ef1-48dd-9385-5f781e902f3a.jpg",
    date: "28 Aug 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "BlockDev Regular Class — Batch 5 (offline): a Blockchain and AI workshop for only 65 selected participants, open to Developers, Business, and UI/UX roles.",
    description: [
      "BlockDev Regular Class — Batch 5 (offline): a Blockchain and AI workshop for only 65 selected participants, open to Developers, Business, and UI/UX roles.",
      "Venue: BINUS Kemanggisan (Saturdays). The workshop starts September 26, 2026 and runs for 10 sessions.",
      "Registration closes September 12, 2026. Selected participants are contacted for a 1-on-1 mentor interview (Sep 1–14), and finalists are announced on September 17.",
    ],
  },
  {
    slug: "monad-blitz",
    title: "Monad Blitz",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/f8a411dc-1d12-4963-bf8c-9e42564a4fc4.jpg",
    date: "14 Aug 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "Join the Monad Blitz hackathon with a total prize pool of $2,000.",
    description: [
      "Join the Monad Blitz hackathon with a total prize pool of $2,000.",
      "August 8, 2026, at Markas Indonesia HQ, Midpoint Place 21st Floor, Jakarta.",
      "Compete solo or in teams of up to 3 people — no team yet? Find or form one on the day itself.",
      "Eligible projects must be built during the Monad Blitz timeline, have a public GitHub repo with a clear README, a smart contract deployed on Monad Testnet or Mainnet, and a hosted public web link (not localhost!).",
    ],
  },
  {
    slug: "monad-build",
    title: "Monad Build",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/211132cd-aace-4f20-bcd9-555c88833347.jpg",
    date: "14 Aug 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "Want to start coding in Web3 from zero and build your own DEX hands-on?",
    description: [
      "Want to start coding in Web3 from zero and build your own DEX hands-on?",
      "BlockDev, ETH Jakarta, and Monad host Monad Build Jakarta — a theory and practice blockchain development workshop together with the Monad team.",
      "Saturday, August 1, 2026, 09:00–17:00 WIB in Central Jakarta.",
      "Topics: blockchain fundamentals (structure, transactions, wallets, consensus), what developers need to master (Solidity, TypeScript, React, Go), dApps vs Web2 apps, full-stack Web3 with Hardhat and Foundry, and agentic coding with Claude Code, Codex, and Antigravity.",
    ],
  },
  {
    slug: "monad-metropolis",
    title: "Monad Metropolis",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/bcb608a5-3027-430c-a019-5c485adfe428.jpg",
    date: "09 Sep 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "BlockDev joins as a Community Supporter for Monad Metropolis!",
    description: [
      "BlockDev joins as a Community Supporter for Monad Metropolis!",
      "Metropolis is Monad's global hackathon, held online for 6 weeks for builders worldwide who want to build the next generation of startups on Monad.",
      "Total prize of $250K across 4 competition tracks, a $5K bounty bonus for teams from supporting communities, and access to mentors and ecosystem partners.",
      "If you have an idea you have always wanted to build, now is the time to start. We want to see builders from BlockDev join Metropolis. Register at monad.xyz/metropolis.",
    ],
  },
  {
    slug: "nextblock",
    title: "NextBlock",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/014de0e9-160a-42a1-9125-e1fe48399227.jpg",
    date: "14 Aug 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "BlockDev is preparing a new program for anyone who wants to truly master AI — practical for work and everyday life.",
    description: [
      "BlockDev is preparing a new program for anyone who wants to truly master AI — practical for work and everyday life.",
      "Open to anyone willing to learn.",
      "Stay tuned on all official BlockDev channels so you do not miss it!",
    ],
  },
  {
    slug: "workshop-web3-stikom-bali",
    title: "Web3 Workshop — STIKOM Bali",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/event/05d85fc3-b489-4938-a9a6-97c61f34a539.jpg",
    date: "14 Aug 2026",
    author: "Admin Blockdev",
    registerUrl: "",
    excerpt: "Want to learn how to build Web3 apps and understand how smart contracts work — from zero to deploying your own?",
    description: [
      "Want to learn how to build Web3 apps and understand how smart contracts work — from zero to deploying your own?",
      "BlockDev x Upbit invite you to the workshop \"Building on Web3: Smart Contract Development with Solidity\", part of Chain & Chill Bali at Coinfest Week.",
      "Tuesday, August 18, 2026, 09:00–13:00 WITA at ITB STIKOM Bali, Jimbaran Campus (Hall, 4th floor). Free and open to the public.",
      "You will learn blockchain and Web3 fundamentals, smart contract and dApp basics, and deploy your very first smart contract hands-on.",
    ],
  },
];
