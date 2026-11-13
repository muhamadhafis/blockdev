import { CDN } from "./site";

export interface KnowledgeItem {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  description: string[];
}

export const KNOWLEDGE_ARTICLES: KnowledgeItem[] = [
  {
    slug: "perbedaan-web3-vs-blockchain",
    title: "Web3 vs Blockchain",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/be2bcdd5-ad2a-449d-9a23-83ac16022a2a.jpg",
    excerpt: "In short, Web3 is a safer and more transparent evolution of the internet, and blockchain is the technology that powers it.",
    description: [
      "In short, Web3 is a safer and more transparent evolution of the internet, and blockchain is the technology that powers it.",
      "Blockchain is the underlying technology — a digital data storage system connected through cryptography — while Web3 is one of its major applications.",
    ],
  },
  {
    slug: "apa-itu-web3",
    title: "What is Web3",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/91e05d10-d123-4956-bb23-dac33f4d7ce3.jpg",
    excerpt: "In 2008, a group of anonymous technologists, philosophers, and visionaries started a revolution for a more open internet.",
    description: [
      "In 2008, a group of anonymous technologists, philosophers, and visionaries started a revolution for a more open internet.",
      "Amid the global financial crisis, they set out to build a new digital economy on peer-to-peer networks — not controlled by any single person or entity, yet usable by anyone.",
      "Few knew this novel payment project would be worth trillions within a decade, rivaling gold as an asset.",
    ],
  },
  {
    slug: "berbagai-aplikasi-dan-layanan-yang-dapat-diakses-dalam-web3",
    title: "Apps and Services in Web3",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/5a0324af-6fa6-4db2-b6a7-1b23c2dd71b0.jpg",
    excerpt: "Because Web3 is built on blockchain, more and more services and applications are becoming accessible on the platform.",
    description: [
      "Because Web3 is built on blockchain, more and more services and applications are becoming accessible on the platform.",
      "NFTs (Non-Fungible Tokens) are tokens stored on a blockchain with a cryptographic hash that makes each one unique and impossible to duplicate — direct ownership of your identity, content, and assets, with open code replacing corporate ownership.",
    ],
  },
  {
    slug: "perkembangan-web3",
    title: "The Evolution of Web3",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/26f879ef-e89e-474b-9684-4ebe9d0a9177.jpg",
    excerpt: "The fundamental difference between Web2 and Web3 is decentralization. Decentralized systems let you use any Web3 app without giving up your personal data.",
    description: [
      "The fundamental difference between Web2 and Web3 is decentralization. Decentralized systems let you use any Web3 app without giving up your personal data.",
      "It works because apps run on blockchain and are directly decentralized, so no third party can interfere.",
      "Another key ingredient that makes Web3 powerful is composability — the ability of apps to build on each other.",
    ],
  },
  {
    slug: "apa-itu-dompet-web30",
    title: "What is a Web3 Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/e1adda34-b22f-4868-a220-a01598b78250.jpg",
    excerpt: "A Web3 wallet is a product of Web3 technology: a digital wallet that stores crypto assets, from tokens to NFTs.",
    description: [
      "A Web3 wallet is a product of Web3 technology: a digital wallet that stores crypto assets, from tokens to NFTs.",
      "Through it, users can access decentralized applications across many blockchains.",
      "At its core, the wallet contains the system that lets you interact with Web3 networks.",
    ],
  },
  {
    slug: "membuat-dompet-web3",
    title: "Creating a Web3 Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/aa6fe4f1-8618-4395-9f78-e5be307c8640.jpg",
    excerpt: "In this module you will learn what a Web3 wallet is and how to download one.",
    description: [
      "In this module you will learn what a Web3 wallet is and how to download one.",
      "To fully understand crypto wallets, we first need a few concepts about blockchain and how wallets help us interact with it.",
      "An address is a string of text generated with cryptography to represent your account on the blockchain — it can be shared publicly and is completely safe to do so.",
    ],
  },
  {
    slug: "custodial-wallet",
    title: "Custodial Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/a4951b93-9dce-49e8-bd02-cd159a9a8f55.jpg",
    excerpt: "A custodial wallet is a crypto storage service offered by centralized services such as centralized exchanges.",
    description: [
      "A custodial wallet is a crypto storage service offered by centralized services such as centralized exchanges.",
      "It comes with benefits: the user has less responsibility for managing private keys, since storage is delegated to the platform.",
      "When a user delegates wallet storage to one platform, they are essentially trusting that institution with their private keys.",
    ],
  },
  {
    slug: "non-custodial-wallet",
    title: "Non-Custodial Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/f7c6580f-8923-4e62-849d-0d9b99e3c2b9.jpg",
    excerpt: "A non-custodial wallet is a crypto storage wallet whose private keys are fully controlled by its owner.",
    description: [
      "A non-custodial wallet is a crypto storage wallet whose private keys are fully controlled by its owner.",
      "For users who want full control over their funds or assets, this is the best option — transactions happen directly without intermediaries.",
      "This makes non-custodial wallets a good choice for traders and investors.",
    ],
  },
  {
    slug: "apa-itu-teknologi-blockchain",
    title: "What is Blockchain Technology?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/756f4964-afdd-460a-b7dc-8b92186dfba9.jpg",
    excerpt: "As Indonesian society becomes more aware of cryptocurrency, supporting terms like blockchain are also getting attention — but not everyone understands what blockchain is.",
    description: [
      "As Indonesian society becomes more aware of cryptocurrency, supporting terms like blockchain are also getting attention — but not everyone understands what blockchain is.",
      "Blockchain is a digital system that makes data storage integrated with itself, popularized because it can be used across many business sectors.",
      "It is not limited to crypto communities — the technology has applications far beyond.",
    ],
  },
  {
    slug: "mengapa-blockchain-penting",
    title: "Why Blockchain Matters",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/b0eaae33-5e65-4cca-b3a3-81d8a84ed00d.jpg",
    excerpt: "Traditional database technology presents challenges in recording financial transactions. Consider a property sale: after payment, ownership transfers to the buyer.",
    description: [
      "Traditional database technology presents challenges in recording financial transactions. Consider a property sale: after payment, ownership transfers to the buyer.",
      "Individually, both buyer and seller can record the transaction — but there is no trusted source of truth.",
      "The seller could easily claim they never received the money, and the buyer could argue the same about the ownership transfer.",
    ],
  },
  {
    slug: "penggunaan-teknologi-blockchain",
    title: "Uses of Blockchain Technology",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/7979322e-8bf2-4778-b42d-aedcc2880c18.jpg",
    excerpt: "There are many opportunities to use blockchain beyond cryptocurrency, with finance as the main sector that benefits.",
    description: [
      "There are many opportunities to use blockchain beyond cryptocurrency, with finance as the main sector that benefits.",
      "In the financial sector, the technology works like a digital ledger that anyone can access anytime, anywhere — without needing approval from financial institutions like banks.",
      "Essentially, it makes every transaction transparent and verifiable.",
    ],
  },
  {
    slug: "fitur-teknologi-blockchain",
    title: "Features of Blockchain Technology",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/1bc86186-5cd2-4aba-8bbe-8d4f1e64b9c9.jpg",
    excerpt: "Every new technology has its own strengths, and blockchain is no exception.",
    description: [
      "Every new technology has its own strengths, and blockchain is no exception.",
      "Decentralization: before blockchain, centralized systems were applied by many industries including banks — but concentrating everyone's data in one place has clear weaknesses.",
      "Blockchain removes that single point of control and failure.",
    ],
  },
  {
    slug: "manfaat-teknologi-blockchain",
    title: "Benefits of Blockchain",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/a88664fa-fb07-4417-a3c3-db7ff738bdd8.jpg",
    excerpt: "Blockchain is often called a technology that can change the world — here is why users are drawn to it.",
    description: [
      "Blockchain is often called a technology that can change the world — here is why users are drawn to it.",
      "It improves peer-to-peer interaction without intermediaries, like digital currency exchange that no longer requires professional brokers.",
      "It also gives users full control over the assets stored in their wallets.",
    ],
  },
  {
    slug: "jenis-blockchain",
    title: "Types of Blockchain",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/1c5dfd0b-df62-4507-8dc2-ed0193354cf9.jpg",
    excerpt: "Blockchain is an advanced database mechanism that allows transparent information sharing within a network. Data is stored in blocks linked together in a chain.",
    description: [
      "Blockchain is an advanced database mechanism that allows transparent information sharing within a network. Data is stored in blocks linked together in a chain.",
      "It is an important foundation for a decentralized, transparent digital world.",
      "There are four main types of blockchain networks: public, private, consortium, and hybrid — each with its own platform.",
    ],
  },
  {
    slug: "apa-itu-layer-dalam-blockchain",
    title: "What are Blockchain Layers?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/d57d4b7d-73a9-4690-8128-d706715abead.jpg",
    excerpt: "Blockchain combines several technologies — mathematical algorithms, cryptography, and encryption-decryption — creating the distributed ledger system we know today.",
    description: [
      "Blockchain combines several technologies — mathematical algorithms, cryptography, and encryption-decryption — creating the distributed ledger system we know today.",
      "Its operations are organized in layers, each with a different role.",
      "The layered system keeps the network from being controlled by a single entity, and every layer is equally important for decentralization.",
    ],
  },
  {
    slug: "scalability-trilemma",
    title: "The Scalability Trilemma",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/ad01f483-da2e-4ffc-bd4b-a6f392e50e69.jpg",
    excerpt: "Before going deeper into blockchain layers, it helps to understand why layers exist at all.",
    description: [
      "Before going deeper into blockchain layers, it helps to understand why layers exist at all.",
      "They emerged from a condition called the blockchain scalability trilemma — first introduced by Ethereum founder Vitalik Buterin.",
      "The trilemma is the challenge every decentralized platform faces in balancing decentralization, security, and scalability.",
    ],
  },
  {
    slug: "cara-mengatasi-trilema-blockchain",
    title: "Solving the Blockchain Trilemma",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/12bc5852-8663-40de-8c76-5d9b56cc71c6.jpg",
    excerpt: "So far there is no definitive solution to the trilemma, but several approaches try to address it.",
    description: [
      "So far there is no definitive solution to the trilemma, but several approaches try to address it.",
      "Layer-1 refers to base blockchain protocols like Bitcoin, Litecoin, and Ethereum, with methods developed to improve their scalability directly.",
      "One approach is changing the consensus mechanism — moving away from proof-of-work toward alternatives.",
    ],
  },
  {
    slug: "apa-itu-ethereum",
    title: "What is Ethereum",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/1be8e748-5927-4fec-a479-32c52bc810d6.jpg",
    excerpt: "Blockchain was popularized by the anonymous person (or group) Satoshi Nakamoto when they released the Bitcoin Network in 2009.",
    description: [
      "Blockchain was popularized by the anonymous person (or group) Satoshi Nakamoto when they released the Bitcoin Network in 2009.",
      "Bitcoin is a blockchain network specialized for cryptocurrency, mainly handling BTC transfers across the network without intermediaries or a trusted authority — while keeping the network itself secure and unhackable.",
      "(P.S. The Bitcoin network may also be the world's greatest bug bounty — if you can hack it, you become a trillionaire instantly.)",
    ],
  },
  {
    slug: "apa-itu-kontrak-cerdas-smart-contract",
    title: "What is a Smart Contract?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/4847923b-647e-4851-a488-f02315b98f88.jpg",
    excerpt: "Blockchain was popularized by Satoshi Nakamoto with the Bitcoin Network in 2009 — a network built for cryptocurrency transfers without intermediaries.",
    description: [
      "Blockchain was popularized by Satoshi Nakamoto with the Bitcoin Network in 2009 — a network built for cryptocurrency transfers without intermediaries.",
      "Smart contracts took this foundation further: programs stored on a blockchain that run automatically when conditions are met.",
      "They remove the need for trusted third parties in countless transactions.",
    ],
  },
  {
    slug: "apa-itu-defi",
    title: "What is DeFi",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/36fdf3c8-eeef-43eb-9516-cbbe6144d1d7.jpg",
    excerpt: "DeFi stands for Decentralized Finance — also known as distributed or open finance — and is predicted to be the next disruptor of the financial industry.",
    description: [
      "DeFi stands for Decentralized Finance — also known as distributed or open finance — and is predicted to be the next disruptor of the financial industry.",
      "DeFi refers to alternative financial infrastructure built on blockchain and Ethereum.",
      "In DeFi, financial transactions are facilitated not by centralized institutions but by decentralized peer-to-peer networks.",
    ],
  },
  {
    slug: "apa-itu-non-fungible-token-nft",
    title: "What is an NFT",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/691a7717-9421-449a-a9b2-28dd65706472.jpg",
    excerpt: "Non-Fungible Tokens (NFTs) are hailed as a new way for ordinary people to collect wealth without holding the physical item.",
    description: [
      "Non-Fungible Tokens (NFTs) are hailed as a new way for ordinary people to collect wealth without holding the physical item.",
      "NFTs are unique digital assets representing both tangible and intangible goods.",
      "Because they live on a blockchain, proof of ownership can be verified and cannot be forged.",
    ],
  },
  {
    slug: "apa-itu-game-fi",
    title: "What is GameFi",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/a21fe3ae-0811-4cff-9bb3-bcc081b1b06f.jpg",
    excerpt: "GameFi is an innovation in NFT-based digital asset gaming platforms — it makes asset ownership monetizable.",
    description: [
      "GameFi is an innovation in NFT-based digital asset gaming platforms — it makes asset ownership monetizable.",
      "Modern gaming platforms leverage NFTs and decentralized finance (DeFi), making GameFi a popular new trend in digital assets.",
      "In play-to-earn, players actually own the assets they use and earn while playing.",
    ],
  },
  {
    slug: "apa-itu-dao",
    title: "What is a DAO",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/ab558f89-2fd0-421d-b5e4-380b4cad5686.jpg",
    excerpt: "A DAO (Decentralized Autonomous Organization) is an open-source blockchain protocol governed by a set of rules.",
    description: [
      "A DAO (Decentralized Autonomous Organization) is an open-source blockchain protocol governed by a set of rules.",
      "Created by its elected members, it automatically executes certain actions without intermediaries.",
      "It acts like a venture capital fund based on open-source code — with no management structure or board of directors.",
    ],
  },
  {
    slug: "apa-itu-socialfi",
    title: "What is SocialFi",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/272767e4-f182-4937-83cf-1459e12a3ca9.jpg",
    excerpt: "SocialFi is a new social network connecting people with shared interests, built on Web 3.0.",
    description: [
      "SocialFi is a new social network connecting people with shared interests, built on Web 3.0.",
      "SocialFi platforms combine decentralization and efficiency to help users manage their social media accounts.",
      "It has the potential to revolutionize social media — though several challenges remain.",
    ],
  },
  {
    slug: "pengenalan-dasar-pemograman",
    title: "Introduction to Programming Basics",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/4b5c6778-464b-4ea7-8255-5ae7fb138f52.jpg",
    excerpt: "To start building Web3 applications, you need basic Web2 knowledge — many Web2 topics are directly useful in Web3.",
    description: [
      "To start building Web3 applications, you need basic Web2 knowledge — many Web2 topics are directly useful in Web3.",
      "In fact, Web3 is an extension of Web2 in terms of the technologies used.",
      "For example, if you build a smart contract, you still need to give users a way to interact with it — usually a website or application.",
    ],
  },
  {
    slug: "pengenalan-frontend-pemograman",
    title: "Introduction to Front-End Development",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/cfbc562b-4d75-4791-9682-a12fc4e60360.jpg",
    excerpt: "What you should know before starting a career in front-end development — this article is for anyone starting front-end development without a programming background.",
    description: [
      "What you should know before starting a career in front-end development — this article is for anyone starting front-end development without a programming background.",
      "The goal is to help newcomers understand the world of software development and find their way in this dense ecosystem.",
      "The result is a roadmap for starting the learning process: how to become a front-end developer, step by step.",
    ],
  },
  {
    slug: "pengenalan-backend-pemograman",
    title: "Introduction to Back-End Development",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/b34d3b0b-5f0d-4028-914e-7a951d51ed4e.jpg",
    excerpt: "Software engineers always seem to discuss the front-end and back-end of their applications — but what does that actually mean?",
    description: [
      "Software engineers always seem to discuss the front-end and back-end of their applications — but what does that actually mean?",
      "The front-end is code that runs on the client side — usually HTML, CSS, and JavaScript — and builds the user interface.",
      "The back-end is code that runs on the server: it receives client requests, holds the logic for returning the right data, and includes the database.",
    ],
  },
  {
    slug: "pengenalan-remix-ide-pemograman",
    title: "Introduction to Remix IDE",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/1982c2d9-3b88-46fa-827c-22f9d4e61f32.jpg",
    excerpt: "Remix is an open-source web and desktop Integrated Development Environment (IDE) for Ethereum development.",
    description: [
      "Remix is an open-source web and desktop Integrated Development Environment (IDE) for Ethereum development.",
      "It is the easiest development tool to start building on Ethereum, with a large plugin collection to extend the experience.",
      "Remix lets you write Solidity directly in the browser, with tools to test, debug, and deploy your smart contracts to the blockchain. Visit https://remix.ethereum.org/",
    ],
  },
];

export const KNOWLEDGE_VIDEOS: KnowledgeItem[] = [
  {
    slug: "apa-itu-blockchain-layer-2",
    title: "What is a Blockchain Layer 2?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/c798210e-08e1-4c29-bfc5-5ce729f16938.jpg",
    excerpt: "Blockchain fees too expensive? Layer 2 is the smart solution — here is how it works.",
    description: [
      "Blockchain fees too expensive? Layer 2 is the smart solution — here is how it works.",
    ],
  },
  {
    slug: "aplikasi-aplikasi-di-dunia-web3",
    title: "Apps in the Web3 World",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/bcb7aefd-a35a-40f7-b4d4-7662b598957b.jpg",
    excerpt: "The 4 most popular categories of Web3 applications, explained simply.",
    description: [
      "The 4 most popular categories of Web3 applications, explained simply.",
    ],
  },
  {
    slug: "apa-itu-smart-contract",
    title: "What is a Smart Contract?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/5c96abb4-cdff-44f1-ba18-b9adad038bf8.jpg",
    excerpt: "The secret of Ethereum — what a smart contract really is.",
    description: [
      "The secret of Ethereum — what a smart contract really is.",
    ],
  },
  {
    slug: "hot-wallet-vs-cold-wallet",
    title: "Hot Wallet vs Cold Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/2d330bc3-a66d-4d45-9add-f9aac2479226.jpg",
    excerpt: "Which is the best way to store your digital assets?",
    description: [
      "Which is the best way to store your digital assets?",
    ],
  },
  {
    slug: "custodial-non-custodial-wallet",
    title: "Custodial vs Non-Custodial Wallet",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/9ecbb8de-b3aa-4fb9-9ea2-bed1b45f1e9b.jpg",
    excerpt: "Which wallet type keeps your assets safest?",
    description: [
      "Which wallet type keeps your assets safest?",
    ],
  },
  {
    slug: "apa-itu-dompet-web3",
    title: "What is a Web3 Wallet?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/6e1403d5-a5a2-4506-a19a-97f2ff16af1e.jpg",
    excerpt: "The key to the future of the internet — how a Web3 wallet really works.",
    description: [
      "The key to the future of the internet — how a Web3 wallet really works.",
    ],
  },
  {
    slug: "blockchain-trilema",
    title: "The Blockchain Trilemma",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/50999999-a677-4cf0-b717-904b90ab05ce.jpg",
    excerpt: "Why is there no perfect blockchain?",
    description: [
      "Why is there no perfect blockchain?",
    ],
  },
  {
    slug: "jenis-jenis-blockchain",
    title: "Types of Blockchain",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/f6904103-d1f3-4dd6-952f-155e2a19975b.jpg",
    excerpt: "Public vs private blockchain — the difference beginners should know.",
    description: [
      "Public vs private blockchain — the difference beginners should know.",
    ],
  },
  {
    slug: "apa-itu-blockchain",
    title: "What is Blockchain?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/88952542-57c3-4498-a0ad-10f0b049c586.jpg",
    excerpt: "The secret behind the future of money and the internet.",
    description: [
      "The secret behind the future of money and the internet.",
    ],
  },
  {
    slug: "apa-itu-konsensus",
    title: "What is Consensus?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/course/e2f98fa1-f0f8-4c1d-9893-d48a368a7a95.jpg",
    excerpt: "How does a company work without a boss? That is consensus in blockchain.",
    description: [
      "How does a company work without a boss? That is consensus in blockchain.",
    ],
  },
  {
    slug: "apa-itu-web3",
    title: "What is Web3?",
    image: "https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/https://blockdev.sgp1.cdn.digitaloceanspaces.com/knowledge/91e05d10-d123-4956-bb23-dac33f4d7ce3.jpg",
    excerpt: "Can Web3 really replace the internet we use today?",
    description: [
      "Can Web3 really replace the internet we use today?",
    ],
  },
];
