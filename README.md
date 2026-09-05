# ZalorForge

<div align="center">

*An ethical, high-performance software ecosystem built on a sustainable, user-first philosophy.*

[![Cloudflare Pages](https://img.shields.io/badge/Hosting-Cloudflare%20Pages-orange?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![Turso](https://img.shields.io/badge/Database-Turso%20(SQLite)-blue?style=flat-square&logo=sqlite)](https://turso.tech/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 🚀 About ZalorForge

ZalorForge is a modern software ecosystem engineered to challenge the bloat, surveillance, and predatory practices of contemporary web applications. Built from the ground up with a **user-first, privacy-respecting, and performance-obsessed** mindset, ZalorForge provides a suite of lightweight, high-utility tools designed to empower users rather than exploit them.

The project operates on a **zero-cost, scalable, and sustainable infrastructure model**, proving that robust digital infrastructure doesn't require massive corporate backing or invasive data collection.

---

## 🏗️ Technical Architecture

ZalorForge leverages an ultra-fast, modern Edge-native stack designed for maximum uptime, minimal latency, and global reach:

* **Frontend & CDN:** Hosted on **Cloudflare Pages** for lightning-fast asset delivery, automated Git deployments, and unlimited global bandwidth.
* **Security Middleware:** Powered by **Cloudflare Workers** to handle authentication flows, route validation, and secure server-to-database communication without exposing sensitive credentials to the client.
* **Database & Persistence:** Backed by **Turso (libSQL/SQLite)**, offering a robust 5GB relational storage limit, exceptional querying speed, and modern ORM compatibility while avoiding platform lock-in.

---

## 🛠️ Core Principles

* **Privacy by Design:** Zero third-party trackers, zero behavioral profiling, and absolute respect for user data ownership.
* **High Performance:** Lightweight dependencies and optimized edge delivery ensure instantaneous load times across all devices.
* **Sustainable Operations:** Designed to run efficiently on free-tier cloud primitives, ensuring long-term project independence and zero financial friction.
* **Open & Transparent:** Open-source code built on collaborative principles, empowering the community to audit, modify, and grow the ecosystem.

---

## 📦 Getting Started

To set up a local development environment for ZalorForge, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* A modern package manager (npm, pnpm, or bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zalorforge.git
   cd zalorforge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your development keys:
   ```env
   TURSO_DATABASE_URL=your_local_or_remote_turso_url
   TURSO_AUTH_TOKEN=your_turso_auth_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions, feature proposals, and bug reports are welcome. Please open an issue or submit a pull request to discuss proposed changes before committing.

---

## 📄 License

This project is open-source software licensed under the **[MIT License](LICENSE)**.
