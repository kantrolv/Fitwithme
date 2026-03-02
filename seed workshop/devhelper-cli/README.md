<div align="center">

```
  ╔══════════════════════════════════╗
  ║       DevHelper CLI  v1.0.0      ║
  ║   Developer Productivity Toolkit  ║
  ╚══════════════════════════════════╝
```

# 🚀 DevHelper CLI

**Your all-in-one developer productivity toolkit — right in the terminal.**

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Commander.js](https://img.shields.io/badge/Commander.js-12.0-FF6B6B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen?style=for-the-badge)

*Built with Node.js · TypeScript · Commander.js · Axios · Chalk*

</div>

---

## 📖 What is DevHelper CLI?

**DevHelper CLI** is a beautifully designed command-line toolkit built for developers who live in the terminal. With **10 powerful commands**, **3 live API integrations**, and fully **Object-Oriented TypeScript** architecture — it's both a great productivity tool and a clean reference project.

Whether you want to check the weather, look up a GitHub profile, get a random programming joke, or just do a quick calculation — DevHelper has you covered, without ever leaving your terminal.

---

## ✨ Features at a Glance

| Feature | Details |
|---------|---------|
| 🧩 **10 CLI Commands** | Weather, GitHub, Jokes, Quotes, File Info, System, Time, Calc, Random, Greet |
| 🌐 **3 Live API Integrations** | Open-Meteo, GitHub REST API, Quotable.io |
| 🏛️ **OOP Architecture** | Every command is a class; services are decoupled |
| 🎨 **Colored Output** | Rich terminal UI via Chalk |
| 🛡️ **Input Validation** | All inputs validated before execution |
| ⚡ **Offline Fallbacks** | Joke & Quote commands work even without internet |
| 🌍 **Global Install** | Use `devhelper` from anywhere in your terminal |

---

## 🛠️ Tech Stack

```
Node.js          → Runtime
TypeScript       → Type-safe development
Commander.js     → CLI command registration & help system
Axios            → HTTP API requests
Chalk            → Colorful terminal output
```

---

## 📦 Installation

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher

### Clone & Install

```bash
# Step 1 — Navigate into the project
cd devhelper-cli

# Step 2 — Install dependencies
npm install

# Step 3 — Build TypeScript to JavaScript
npm run build

# Step 4 — Install globally (use devhelper anywhere!)
npm install -g .
```

### Activate in your shell (first time only)

```bash
source ~/.zshrc
```

---

## 🚀 Quick Start

```bash
devhelper greet Vamshi
devhelper weather Mumbai
devhelper github torvalds
devhelper joke
```

---

## 📋 All Commands

### 👋 `greet` — Personalized Greeting

```bash
devhelper greet <name>
```

**Example:**
```
devhelper greet Vamshi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  👋 DevHelper Greeter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Hello, Vamshi! Welcome to DevHelper CLI 🚀
  Your one-stop developer toolkit for the terminal.
```

---

### 🌤️ `weather` — Live Weather Lookup

Powered by **[Open-Meteo API](https://open-meteo.com)** — completely free, no API key needed.

```bash
devhelper weather <city>
```

**Example:**
```
devhelper weather Mumbai

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🌤️  Weather — Mumbai
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Condition:    ☀️  Clear sky
  Temperature:  29.1°C
  Wind Speed:   8.7 km/h
  ─────────────────────────────────
  Powered by Open-Meteo (open-meteo.com)
```

**Try these cities:**
```bash
devhelper weather Tokyo
devhelper weather London
devhelper weather "New York"
devhelper weather Dubai
devhelper weather Sydney
```

---

### 💡 `quote` — Motivational Quote

Powered by **[Quotable.io](https://api.quotable.io)** — with offline fallbacks.

```bash
devhelper quote
```

**Example:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  💡 Quote of the Moment
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "Success usually comes to those who are
   too busy to be looking for it."

         — Henry David Thoreau
```

---

### 🐙 `github` — GitHub Profile Lookup

Powered by the **[GitHub REST API](https://api.github.com)**.

```bash
devhelper github <username>
```

**Example:**
```
devhelper github torvalds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🐙 GitHub Profile — @torvalds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Name:          Linus Torvalds
  Company:       Linux Foundation
  Location:      Portland, OR
  ─────────────────────────────────
  Public Repos:  11
  Followers:     288,565
  Following:     0
  ─────────────────────────────────
  Member Since:  September 3, 2011

  Profile: https://github.com/torvalds
```

**Stalk great devs:**
```bash
devhelper github gaearon        # React (Dan Abramov)
devhelper github sindresorhus   # 1000+ npm packages
devhelper github tj             # Express.js creator
devhelper github yyx990803      # Vue.js (Evan You)
```

---

### 😂 `joke` — Random Programming Joke

Powered by **[Official Joke API](https://official-joke-api.appspot.com)** — with offline fallbacks.

```bash
devhelper joke
```

**Example:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  😂 Programming Joke
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Q: Why do programmers prefer dark mode?

  A: Because light attracts bugs.
```

---

### 📁 `fileinfo` — File Metadata Inspector

Uses Node.js built-in **`fs`** module. No API needed.

```bash
devhelper fileinfo <filepath>
```

**Example:**
```
devhelper fileinfo package.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📁 File Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Path:          /Users/.../devhelper-cli/package.json
  Name:          package.json
  Type:          File (.json)
  ─────────────────────────────────
  Size:          790.00 B (790 bytes)
  Created:       Wed, Mar 4, 2026, 10:39:07 PM
  Last Modified: Wed, Mar 4, 2026, 10:39:07 PM
```

---

### 🖥️ `system` — System Information

Uses Node.js built-in **`os`** module. No API needed.

```bash
devhelper system
```

**Example:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🖥️  System Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Hostname:      my-MacBook-Pro.local
  User:          vamshi
  ─────────────────────────────────
  OS:            macOS
  Architecture:  arm64
  CPU Model:     Apple M3
  CPU Cores:     8
  ─────────────────────────────────
  Total Memory:  8.00 GB
  Free Memory:   1.20 GB
  Used Memory:   6.80 GB (85%)
  ─────────────────────────────────
  System Uptime: 2h 30m
  Node.js:       v22.17.1
```

---

### 🕒 `time` — Date & Time Display

```bash
devhelper time
```

**Example:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🕒 Current Date & Time
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  10:38:43 PM
  Wednesday, March 4, 2026
  ─────────────────────────────────
  UTC Offset:      UTC+05:30
  Unix Timestamp:  1772644371797
  ISO 8601:        2026-03-04T17:08:51.797Z
```

---

### 🧮 `calc` — Terminal Calculator

Supports `+`, `-`, `*`, `/` operations.

```bash
devhelper calc <num1> <operator> <num2>
```

**Examples:**
```bash
devhelper calc 5 + 3        →  8
devhelper calc 100 - 37     →  63
devhelper calc 10 / 4       →  2.5
devhelper calc 7 "*" 6      →  42
devhelper calc 2026 - 1947  →  79
devhelper calc 999 "*" 999  →  998001
```

> ⚠️ Wrap `*` in quotes in zsh: `devhelper calc 9 "*" 9`

---

### 🎲 `random` — Random Number Generator

```bash
devhelper random <min> <max>
```

**Examples:**
```bash
devhelper random 1 10       # Dice roll
devhelper random 1 100      # Percentage
devhelper random 1 1000000  # Lottery!
```

**Output:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎲 Random Number Generator
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Range: 1 → 100

  🎯 Result: 73
```

---

## 🏛️ Project Architecture

```
devhelper-cli/
├── src/
│   ├── commands/               ← One class per command (OOP)
│   │   ├── greetCommand.ts
│   │   ├── weatherCommand.ts
│   │   ├── quoteCommand.ts
│   │   ├── githubCommand.ts
│   │   ├── jokeCommand.ts
│   │   ├── fileInfoCommand.ts
│   │   ├── systemCommand.ts
│   │   ├── timeCommand.ts
│   │   ├── calcCommand.ts
│   │   └── randomCommand.ts
│   │
│   ├── services/               ← API communication layer
│   │   ├── weatherService.ts   → Open-Meteo API
│   │   ├── githubService.ts    → GitHub REST API
│   │   ├── quoteService.ts     → Quotable.io API
│   │   └── jokeService.ts      → Official Joke API
│   │
│   ├── utils/
│   │   ├── logger.ts           ← Chalk-styled output helper
│   │   └── validator.ts        ← Input validation utilities
│   │
│   └── index.ts                ← Commander.js entry point
│
├── dist/                       ← Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

### OOP Pattern Used

Every command follows this clean structure:

```typescript
export class ExampleCommand {
  private service: ExampleService;

  constructor() {
    this.service = new ExampleService();
  }

  async execute(arg: string): Promise<void> {
    // 1. Validate input
    // 2. Fetch from service
    // 3. Display with Logger
  }
}
```

Services handle all external API calls, and commands only handle display logic — clean **separation of concerns**.

---

## 🧪 Development

```bash
# Run without building (uses ts-node)
npm run dev -- greet Vamshi

# Build TypeScript → JavaScript
npm run build

# Run the built CLI
npm start -- weather Mumbai
```

---

## 🎮 Fun Combos to Try

```bash
# Start your day right
devhelper time && devhelper quote

# Check the mood worldwide
devhelper weather Tokyo && devhelper weather London && devhelper weather New York

# Stalk the legends
devhelper github torvalds && devhelper github gaearon

# Entertainment chain
devhelper joke && devhelper joke && devhelper joke

# Big brain math
devhelper calc 1337 "*" 420

# Lucky numbers
devhelper random 1 1000000
```

---

## 📄 License

MIT © 2026 DevHelper CLI

---

<div align="center">

**Made with ❤️ for developers who love the terminal**

*If you found this useful, give it a ⭐ and share it!*

</div>
