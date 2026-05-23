# ⚡ Ravinthra A — Portfolio

> **Backend & ML Engineer** · Django · FastAPI · PostgreSQL · Scikit-learn · PyTorch

[![Live on GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-181717?logo=github)](https://ravinthra.github.io/portfolio/)
[![Live on Vercel](https://img.shields.io/badge/Live-Vercel-000000?logo=vercel)](https://portfolio-livid-two-10.vercel.app)

---

## 🔗 Live Demo

| Platform | URL |
|----------|-----|
| **GitHub Pages** | https://ravinthra.github.io/portfolio/ |
| **Vercel** | https://portfolio-livid-two-10.vercel.app |

---

## 📸 Overview

A production-grade personal portfolio showcasing 4 deployed projects in backend engineering and machine learning. Built with pure HTML, CSS, and Vanilla JS — no frameworks, no runtime dependencies.

**Key highlights:**
- ⚡ Interactive neural network canvas animation (pure Canvas 2D)
- 🎯 Custom comet-trail cursor with glow effect
- 🔐 A+ Content Security Policy with strict `default-src 'none'`
- 📱 Fully responsive — collapses to single column on mobile
- ♿ WCAG 2.1 AA accessible — skip links, `prefers-reduced-motion`, focus-visible
- 🚀 Zero external JS dependencies — no CDN, no npm packages

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (CSS custom properties, Grid, `clamp()`) |
| Scripting | Vanilla JavaScript (ES6+, IIFEs, Canvas 2D) |
| Fonts | Google Fonts — Syne, Inter, DM Mono |
| Deployment | GitHub Pages (Branch) + Vercel |

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main page (Hero, About, Skills, Projects, Education, Contact)
├── 404.html                # Custom 404 page with particle animation
├── robots.txt              # SEO crawler rules
├── sitemap.xml             # Sitemap for search engines
├── vercel.json             # Vercel config: headers, caching, 404 routing
│
├── css/
│   ├── base.css            # Reset, design tokens, typography
│   ├── components.css      # Navbar, loader, buttons, cursor
│   ├── sections.css        # Hero, About, Skills, Projects, Education, Contact, Responsive
│   └── effects.css         # Noise overlay, grain, utility animations
│
├── js/
│   ├── cursor.js           # Canvas comet-trail cursor with reticle ring
│   ├── loader.js           # Cinematic intro + typewriter role cycling
│   ├── three-scene.js      # Interactive neural network background (Canvas 2D)
│   ├── scroll.js           # Scroll progress, reveal animations, counters, timeline
│   └── interactions.js     # 3D card tilt, magnetic buttons, mobile nav, active links
│
└── assets/
    ├── profile.jpg         # Profile photo
    ├── social-card.png     # OG image (1200×630)
    └── Ravinthra.pdf       # Downloadable resume
```

---

## 🚀 Featured Projects

| # | Project | Stack | Live |
|---|---------|-------|------|
| 01 | **Alumni Information System** | Django 5.0, PostgreSQL, Gunicorn, WhiteNoise, Render | [README ↗](https://github.com/Ravinthra/Alumni_Information_System#readme) |
| 02 | **Customer Churn Prediction** | Scikit-learn, Django REST, Random Forest, Render | [Live ↗](https://customer-churn-prediction-ezz6.onrender.com) |
| 03 ⭐ | **Credit Risk / Loan Default** | XGBoost, LightGBM, SHAP, FastAPI, Docker, Render | [Live ↗](https://credit-risk-ai.onrender.com) |
| 04 | **AI Resume Analyzer** | BERT, PyTorch, Django, Docker, Hugging Face | [Live ↗](https://huggingface.co/spaces/Ravinthra9922/resume-analyzer) |

---

## 🔐 Security

- **CSP:** `default-src 'none'` — strict allowlist only
- **X-Frame-Options:** `DENY` — clickjacking protection
- **Permissions-Policy:** camera, mic, payment, geolocation all blocked
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Vercel headers:** Security headers applied at CDN edge level
- **No inline scripts** — fully CSP-compliant
- **No secrets or tokens** anywhere in the codebase

---

## 📦 Deployment

### GitHub Pages (Automatic via Branch)

The site is configured to deploy directly from the `main` branch without requiring any custom workflows:
1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Under **Branch**, select **`main`** and **`/ (root)`**.
4. Click **Save** ✅. Subsequent pushes to `main` will automatically update your site.

### Vercel (Automatic)

The site is optimized and configured for seamless deployment on Vercel:
1. Import this repository at [vercel.com](https://vercel.com).
2. Framework Preset: **Other** · Build Command: *(leave empty)* · Output Directory: *(leave empty)*.
3. Deploy! Subsequent pushes to `main` will automatically trigger a new deployment via webhooks ✅.

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| Email | ravinthra9922@gmail.com |
| LinkedIn | [ravinthra9922](https://linkedin.com/in/ravinthra9922) |
| GitHub | [Ravinthra](https://github.com/Ravinthra) |
| Phone | +91 7010023421 |

---

<p align="center">© 2025 Ravinthra A · Crafted with precision</p>
