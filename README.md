# 🏗️ [Company Name] — Official Website

> Corporate website for **[Company Name]**, a manufacturer of premium aluminium gates, window frames, and architectural aluminium products.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Linting | ESLint + Prettier |
| Deployment | Vercel (via GitHub Actions) |

---

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── public/
│   ├── images/                 # Static images & assets
│   └── fonts/                  # Local fonts (if any)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx        # Products listing
│   │   │   └── [slug]/page.tsx # Individual product page
│   │   ├── gallery/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/           # Page-level sections
│   │       ├── Hero.tsx
│   │       ├── Products.tsx
│   │       ├── WhyUs.tsx
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/your-repo.git
cd your-repo

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |
| `npm run type-check` | Run TypeScript type checker |

---

## 🌍 Deployment

Deployed via **Vercel**, triggered automatically on push to `main`. The GitHub Actions workflow handles linting, type-checking, and build verification on every PR.

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: add your feature"`
3. Push and open a PR against `main`

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

Private — All rights reserved © [Company Name]
