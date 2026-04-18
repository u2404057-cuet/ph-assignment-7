# KeenKeeper 🌿

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

---

## 📖 Description

KeenKeeper is a personal relationship management app that helps you stay connected with the people who matter most. Track when you last reached out, log interactions, and get a clear picture of which friendships need a little more attention — all in one clean, minimal interface.

---

## 🚀 Live Demo

🔗 [https://cuet-ph-assignment-7.netlify.app/](https://cuet-ph-assignment-7.netlify.app/)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI v5](https://daisyui.com/) | Component library on top of Tailwind |
| [Recharts](https://recharts.org/) | Data visualization / stats charts |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## ✨ Features

- 👥 **Friend Cards** — View all your friends at a glance with their photo, status, tags, and days since last contact
- 📊 **Dashboard Stats** — See total friends, on-track relationships, and friends needing attention
- ✅ **Quick Check-In** — Log a call, text, or video interaction with a friend in one click
- 🕐 **Timeline** — A chronological log of all your interactions across all friends
- 📈 **Stats Page** — Visual charts showing your relationship activity over time
- 🔔 **Toast Notifications** — Instant feedback when you log an interaction
- 🔍 **Friend Detail Page** — Dedicated page for each friend with full details and check-in options
- 404 **Custom Not Found Page** — Friendly error page for unknown routes
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout (Navbar, Footer, Providers)
│   ├── not-found.jsx        # 404 page
│   ├── friend/
│   │   └── page.js          # Friends list page
│   ├── timeline/
│   │   └── page.js          # Interaction timeline page
│   └── stats/
│       └── page.js          # Stats & charts page
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── FriendCard/
│   ├── CardCounter/
│   ├── CheckIn/
│   └── ToastProvider/
├── context/
│   └── FriendsProvider.jsx  # Global state for timeline/interactions
public/
└── friendsData.json         # Local friends data
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/u2404057-cuet/ph-assignment-7.git

# Navigate into the project
cd ph-assignment-7

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 👤 Author

**u2404057-cuet**
- GitHub: [@u2404057-cuet](https://github.com/u2404057-cuet)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
