# Visual FOC

Interactive learning platform for **FOC (Field-Oriented Control)** of BLDC / PMSM motors. Understand Clarke/Park transforms through live animations, and tune a real-time PMSM physics simulation to see how PI gains, load torque, and flux affect motor response.

![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) [![License](https://img.shields.io/badge/license-Apache--2.0-blue)](LICENSE)

**English** · [中文](README.zh-CN.md)

🌐 **Live:** <https://foc.jrtx.site>

## Features

- **Fundamentals** — what FOC is, the BLDC vs PMSM distinction, the full control block diagram, and why a position sensor is essential
- **Animated Walkthrough** — one guided animation tells the whole story in 7 narrated steps: three-phase currents, the rotating field, the rotor following it, the torque angle γ, Clarke/Park transforms and the encoder. Three linked canvases (phase currents / motor cross-section / rotor-view dq + torque) share a single state; a free-explore mode hands the γ and speed sliders to you
- **Simulation** — a real PMSM physics engine (Clarke → Park → PI → inverse Park → SVPWM → electrical + mechanical equations) running on `requestAnimationFrame`, with a live motor visualization and scrolling waveforms (speed, Iq, Id)
- **Tuning** — preset PI-tuning scenarios (ideal, oscillating Kp, overshooting Ki, loaded start, disturbance rejection) that demonstrate classic phenomena
- **Quiz** — instant-feedback questions to verify your understanding

## Tech Stack

- Pure HTML / CSS / JavaScript — zero external dependencies
- Real PMSM math (Clarke, Park, torque & mechanical ODEs, dual PI current controllers)
- Responsive design with dark mode support
- Deployed as a static site on GitHub Pages

## Quick Start

### 1. Clone

```bash
git clone https://github.com/turinglambdaai/visual-foc.git
cd visual-foc
```

### 2. Install & run

```bash
npm install
npm start          # Start dev server with live reload
```

Or use Python's built-in HTTP server:

```bash
python -m http.server 8000 -d src
```

## Build for Deployment

```bash
npm run build      # Copies src/ to docs/ for GitHub Pages
```

## Project Structure

```
src/
├── index.html              # Single-page app (inline CSS + JS)
└── CNAME                   # foc.jrtx.site
```

## License

Licensed under the [Apache License 2.0](LICENSE).
