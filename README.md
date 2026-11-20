# 🌿 Jharkhand Smart Tourism Platform
### AI + Blockchain-Powered Smart Tourism Ecosystem for Jharkhand

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_3D-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Ethereum](https://img.shields.io/badge/Ethereum-Smart_Contracts-purple?style=for-the-badge&logo=ethereum)](https://ethereum.org/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI_1.5_Flash-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)

---

## 📌 Project Overview

**Jharkhand Smart Tourism Platform** is an enterprise-grade, comprehensive travel and culture ecosystem designed to promote, streamline, and secure tourism across Jharkhand. The platform unites cutting-edge Artificial Intelligence, Ethereum-compatible blockchain technology, WebGL 3D spatial experiences, and decentralized IPFS storage into a unified platform tailored for **Tourists, Local Guides, Content Creators, and Tourism Administrators**.

---

## 🚀 Key Modules & Capabilities

### 1. 🤖 AI-Powered Itinerary Planner
- **Intelligent Day-by-Day Scheduling:** Dynamic generation of personalized day-wise itineraries matching traveler interests (heritage, waterfalls, adventure, wildlife, spirituality), trip duration, budget, and group size.
- **Integrated Route & Logistics:** Automated cost calculation, travel times, nearby stay options, and authentic Jharkhand local food recommendations (Litti Chokha, Dhuska, Rugda, Tribal Thali).
- **Edit, Save & Regenerate:** Save plans to personal dashboards, adjust stops dynamically, or regenerate on demand via Google Gemini AI with resilient local fallbacks.

### 2. 🌍 WebGL 3D 360° Earth & AR Tourism
- **Interactive 3D Earth Globe ("360 Earth"):** A WebGL 3D Earth model built with Three.js, featuring space starfields, atmospheric glow, and exact geographic pins for destinations (Ranchi, Deoghar, Netarhat, Betla, Patratu, Jamshedpur).
- **360° Ground Photosphere:** Immersive spherical street-view pan/tilt/zoom inside prominent landscapes (Hundru Falls, Baidyanath Jyotirlinga, Magnolia Sunset Point).
- **Live Camera AR Mode:** Real-time camera feed overlaid with spatial compass HUD, altitude meters, and directional radar pointing toward nearby attractions.
- **3D Cultural Heritage Artifact Inspector:** Interactive 3D model viewer showcasing Jharkhand's ancient Dokra brass art and tribal metalcrafts.

### 3. ⛓️ Blockchain-Based Guide & Vendor Verification
- **Official Guide Registration:** Streamlined onboarding for local guides to submit qualifications, ID proofs, languages, and police verification.
- **Smart Contract Attestation:** Applications are anchored to the Ethereum blockchain (Sepolia testnet) using cryptographic proof of registration to prevent fraud.
- **Dual-Verification Workflow:** Admin portal supports direct review, approval, rejection, and issuance of tamper-proof digital certificates.

### 4. 📜 IPFS Digital Certificates & QR Verification
- **Cryptographic Credentialing:** Generates verifiable guide certificates with IPFS document hashes (`ipfs://`), contract addresses, and blockchain transaction IDs.
- **Public Verification Portal (`/certificates/show-certificate`):** Anyone can scan a guide's certificate QR code to inspect authenticity, issuance timestamp, and revocation status in real time.

### 5. 🎨 AI Handicraft Customization
- **Tribal Crafts Marketplace:** Browse authentic local products (Dokra figurines, Bamboo baskets, Santhali textiles, Lac bangles).
- **Prompt-to-Preview Customizer:** Allows tourists to customize patterns, textures, and color palettes using AI image and vector synthesis before submitting orders to local artisans.

### 6. 📱 Content Creator Dashboard & Tourism Campaigns
- **Creator Onboarding & Channel Linking:** Authentic YouTube/social channel integration.
- **Performance & Incentive Tiers:** Bronze, Silver, Gold, and Platinum creator tiers based on engagement score, video reach, and tourist conversion.
- **Campaign Leaderboard & Rewards:** Discover and promote tourist destinations, submit campaign links, and unlock official state incentives.

### 7. ⭐ Reviews & Real-Time AI Sentiment Analysis
- **Smart Feedback Engine:** Tourists can submit ratings and category reviews (cleanliness, accessibility, hospitality, safety, value).
- **Sentiment Classification:** Automatic tone evaluation (Positive / Neutral / Negative) with sentiment scores and keyword extraction using Gemini AI with instant rule-based fallback.
- **Dynamic Analytics Dashboard:** Live star distribution charts and top-mentioned highlights per destination.

---

## 👥 Multi-Role User Architecture

| Role | Core Capabilities |
| :--- | :--- |
| **🧳 Tourist** | Explore attractions, generate AI itineraries, 360 Earth & AR view, book hotels, customize handicrafts, submit reviews |
| **🧭 Local Guide** | Apply for official verification, upload credentials, get blockchain-anchored certificates, showcase public QR profile |
| **📸 Content Creator** | Link social channels, join tourism promotion campaigns, track engagement scores, earn rewards & tier badges |
| **🛡️ Administrator** | Review guide applications, approve certificates, oversee analytics, manage users, destinations, and campaigns |

---

## 🛠️ Technology Stack

- **Frontend & Full-Stack Framework:** Next.js 15.5.3 (App Router with Turbopack)
- **UI & Styling:** React 19, Tailwind CSS 4, Radix UI, Lucide Icons
- **3D & Spatial Visualization:** Three.js (WebGL 3D Globe & Photospheres)
- **Interactive Mapping:** React-Leaflet & OpenStreetMap
- **Authentication & RBAC:** Clerk Auth (`@clerk/nextjs`)
- **Database & Persistence:** MongoDB Atlas with Mongoose (non-blocking resilient connection)
- **Artificial Intelligence:** Google Gemini API (`@google/generative-ai` / Gemini 1.5 Flash)
- **Blockchain & Decentralized Storage:** Ethereum / Ethers.js v6, IPFS / Pinata Gateway
- **QR Code Engine:** `qrcode`


---

## 📄 License
This project is licensed under the **MIT License**.
