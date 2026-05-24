# ⚡ Ravinthra A — Interactive Portfolio
> **Production-Grade Backend & Machine Learning Engineer**

An elite, high-fidelity personal portfolio engineered from the ground up to showcase advanced backend microservices, semantic NLP classifiers, and predictive risk modeling. Built entirely with raw, high-performance vanilla web technologies — completely framework-free and optimized for speed, security, and accessibility.

[![Live on GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://ravinthra.github.io/portfolio/)
[![Live on Vercel](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel)](https://portfolio-livid-two-10.vercel.app)

---

## 🔗 Live Deployments

| Environment | Hosting Platform | URL |
| :--- | :--- | :--- |
| **Production Primary** | **Vercel** (CDN Edge Optimization) | [portfolio-livid-two-10.vercel.app ↗](https://portfolio-livid-two-10.vercel.app) |
| **Production Backup** | **GitHub Pages** | [ravinthra.github.io/portfolio ↗](https://ravinthra.github.io/portfolio/) |

---

## 📸 Key Features & Architecture

This portfolio is not just a resume; it is a proof-of-concept demonstrating high-performance frontend engineering and bulletproof web practices.

### 🌟 Client-Side Engineering & Micro-Animations
* **Interactive Neural Network Canvas (`js/three-scene.js`)**: A custom-coded, high-performance 2D Canvas animation representing neural layers that dynamically reacts to mouse position, gravity attraction, and screen resize events.
* **Typewriter Cinematic Loader (`js/loader.js`)**: An elegant, modern introductory sequence displaying a real-time progress bar synced to core page resources, complete with dynamic typewriter animation cycling professional roles.
* **Comet-Trail Custom Cursor (`js/cursor.js`)**: A custom mouse-pointer overlay implementing smooth pointer tracking with canvas trail particle generation and magnetic target snap-rings.
* **Scroll-Triggered Fluid Timeline (`js/scroll.js`)**: Scroll-driven reveal metrics, counting indicators, progress indicators, and an interactive academic timeline showing background milestones.
* **3D Perspective Card Tilt (`js/interactions.js`)**: 3D parallax effects on hover, magnetic CTAs, responsive navigation wrappers, and scroll spy indicators.

### 🛡️ Production Security & Hardening
* **A+ Content Security Policy (CSP)**: Strict `default-src 'none'` configuration, strictly white-listing scripts, styles, and assets to mitigate XSS risks entirely. No inline scripts, ensuring 100% compliance.
* **Strict Privacy & Anti-Hijack Headers**: Configured with `X-Frame-Options: DENY` (prevents Clickjacking), `Referrer-Policy: strict-origin-when-cross-origin`, and standard `Permissions-Policy` to disable unused device APIs.
* **Zero Runtime Overhead**: No NPM packages, no bulky modern frameworks, and no external Javascript CDNs. Loaded with speed and clean separation of concerns.

---

## 🛠️ The Tech Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Structure** | HTML5 (Strict Semantic Hierarchy, WCAG 2.1 AA Compliant) |
| **Styling** | Custom CSS3 (Tokens, CSS variables, Grid systems, CSS Clamp scaling) |
| **Scripting** | Modern Vanilla JavaScript (ES6+, modular IIFEs, 2D HTML Canvas API) |
| **Typography** | Google Fonts (Syne, Inter, DM Mono) |
| **Hosting & DNS** | Vercel CDN Edge Middleware & GitHub Pages |

---

## 📁 System Architecture

The project maintains a highly modular directory structure separating structural, behavioral, and graphical components:

```
portfolio/
├── index.html              # Main landing & showcase layout (SEO optimized)
├── 404.html                # Custom 404 error page with full interactive particles
├── robots.txt              # Search engine index rules
├── sitemap.xml             # Complete crawl roadmap for index engines
├── vercel.json             # Edge headers, strict caching, security policies
│
├── css/
│   ├── base.css            # Style resets, typography system, CSS tokens
│   ├── components.css      # Core buttons, responsive navigation, custom pointer
│   ├── sections.css        # Hero, About, Skills, Projects, and Timeline blocks
│   └── effects.css         # Visual grain overlay, noise masks, keyframe animations
│
├── js/
│   ├── cursor.js           # Canvas-based trail custom cursor with magnetic targets
│   ├── loader.js           # Loading intro + asynchronous asset loading callbacks
│   ├── three-scene.js      # Interactive, custom Canvas 2D math neural network
│   ├── scroll.js           # Scroll metrics tracker, progress bar, lazy counter numbers
│   ├── interactions.js     # Card physics tilt, magnetic cursor actions, responsive navigation
│   └── particles-404.js    # Custom 404 particle grid algorithm
│
└── assets/
    ├── profile.jpg         # High-resolution professional profile asset
    ├── social-card.png     # Open Graph meta image (1200×630px preview)
    └── Ravinthra.pdf       # Verified offline curriculum vitae (Resume)
```

---

## 🚀 Deployed Engineering Projects

A showcase of 4 production-ready, fully deployed engineering projects demonstrating competency across APIs, distributed computing, containerization, NLP, and model evaluation.

### 01. Alumni Information System
* **Objective:** Designed and built a high-performance university collaboration portal bridging alumni relations and active administrative channels.
* **Engineering Highlights:**
  * **Role-Based Authentication:** Developed a comprehensive **4-role hierarchy** (Administrator, Department Head, Alumnus, Student) authenticated via custom secure OTP layers.
  * **Batch Integration:** Designed and implemented a robust bulk CSV parser capable of provisioning profiles asynchronously.
  * **Production Middleware:** Set up a Django service backed by **PostgreSQL**, using **Gunicorn** and **WhiteNoise** optimized for quick load speeds.
* **Tech Stack:** `Django 5.0` · `PostgreSQL` · `Gunicorn` · `WhiteNoise` · `Render`
* **Links:** [README Documentation ↗](https://github.com/Ravinthra/Alumni_Information_System#readme) | [Source Code ↗](https://github.com/Ravinthra/Alumni_Information_System)

### 02. Customer Churn Prediction System
* **Objective:** Designed an analytical pipeline to identify, measure, and predict subscription user attrition patterns.
* **Engineering Highlights:**
  * **Rigorous Modeling:** Evaluated 4 distinct algorithms (Logistic Regression, SVC, Decision Trees, and Random Forest), opting for Random Forest after achieving a **ROC-AUC of 0.8576** and an overall **81.34% Accuracy**.
  * **Robust REST Layer:** Engineered a clean Django REST service incorporating standardized CORS configurations, request-ID propagation, and standard health-check routes.
  * **Integration Testing:** Created **9 end-to-end unit tests** ensuring correct pipeline outputs, robust data validation, and predictable payload structures.
* **Tech Stack:** `Scikit-learn` · `Django REST Framework` · `Random Forest` · `Render`
* **Links:** [Live Demo ↗](https://customer-churn-prediction-ezz6.onrender.com) | [Source Code ↗](https://github.com/Ravinthra/Customer_Churn_Prediction_System)

### 03. Credit Risk & Loan Default Prediction (⭐ Featured Project)
* **Objective:** Constructed a business-critical predictive risk engine for financial assessment, targeting reduction in loan default incidents.
* **Engineering Highlights:**
  * **SQL Feature Mining:** Engineered **66 features** using SQL joining 4 separate tables, optimized for model training.
  * **Business Threshold Tuning:** Conducted precise financial modeling and optimization of decision boundaries, preventing **₹91.2 Lakhs** in estimated loan default overheads.
  * **Containerized Microservices:** Created a multi-tier microservice architecture separating Django and FastAPI services using **Docker Compose** workflows.
  * **Interpretability:** Integrated a local **SHAP** explainer system to map out exact feature contributions for transparency in individual credit scoring decisions.
* **Tech Stack:** `FastAPI` · `XGBoost` · `LightGBM` · `SHAP` · `Docker` · `PostgreSQL` · `Render`
* **Links:** [Live Demo ↗](https://credit-risk-ai.onrender.com) | [Source Code ↗](https://github.com/Ravinthra/Credit_Risk_ML)

### 04. AI Resume Analyzer
* **Objective:** Built an NLP classification and matching engine to automatically screen applicant portfolios against precise skill criteria.
* **Engineering Highlights:**
  * **Deep Learning Classifiers:** Fine-tuned a **BERT model (110M Parameters)** to classify candidate details across 5 tech categories, achieving a **1.0 validation F1-score**.
  * **Semantic Matching Engine:** Coded a cosine similarity engine comparing structural resume content against job roles to determine exact match rates.
  * **Security-Minded Upload Pipeline:** Hardened files uploads using magic-byte signature validation for PDFs, preventing malicious file injections.
* **Tech Stack:** `BERT` · `PyTorch` · `Django` · `Docker` · `Hugging Face Spaces`
* **Links:** [Live Space ↗](https://huggingface.co/spaces/Ravinthra9922/resume-analyzer) | [Source Code ↗](https://github.com/Ravinthra/resume_analyzer)

---

## 💻 Local Setup & Customization

Follow these steps to run the portfolio locally on your system for development and testing.

### 1. Clone the Codebase
```bash
git clone https://github.com/Ravinthra/portfolio.git
cd portfolio
```

### 2. Launch a Local Web Server
Since the website makes use of modular vanilla scripts and relative URLs, launching it directly via the filesystem (`file://`) will trigger CORS blocking in modern browsers. Spin up a lightweight local server:

* **Using Python (Recommended)**:
  ```bash
  python -m http.server 8000
  ```
* **Using Node.js (`http-server`)**:
  ```bash
  npx http-server -p 8000
  ```
* **Using VS Code**: Install the **Live Server** extension, open the project root, and click **Go Live**.

Open your browser and navigate to `http://localhost:8000`.

### 3. Customize Details
* **To update your profile information**: Edit details within [index.html](file:///d:/Rv/Github%20Antigravity/portfolio/index.html).
* **To adjust design systems (colors, layout rules)**: Edit tokens in [css/base.css](file:///d:/Rv/Github%20Antigravity/portfolio/css/base.css).
* **To modify background animations**: Edit the Canvas configurations in [js/three-scene.js](file:///d:/Rv/Github%20Antigravity/portfolio/js/three-scene.js).

---

## 🎓 Education

* **Master of Computer Applications (MCA)** — *Hindusthan College of Engineering and Technology* (2023 — 2025)  
  **CGPA:** **8.49**
* **Bachelor of Science in Computer Science (B.Sc CS)** — *Gobi Arts & Science College* (2020 — 2023)  
  **CGPA:** **7.93**

---

## 📬 Contact & Channels

Let's collaborate, discuss backend system architectures, or model optimization strategies:

| Channel | Contact Reference / Link |
| :--- | :--- |
| **Email** | [ravinthra9922@gmail.com](mailto:ravinthra9922@gmail.com) |
| **LinkedIn** | [linkedin.com/in/ravinthra9922 ↗](https://linkedin.com/in/ravinthra9922) |
| **GitHub** | [github.com/Ravinthra ↗](https://github.com/Ravinthra) |
| **Phone** | [+91 7010023421](tel:+917010023421) |

---

<p align="center">
  © 2025-2026 Ravinthra A. Designed & Engineered with precision.
</p>
