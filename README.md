# VeritasDemo — VERITAS Mobile App Visual Prototype

Web-based visual prototype for the **VERITAS** mobile app, rendering 20 full-featured screens as realistic iPhone 14 mockups (390px × 844px) on a high-polish presentation dashboard.

## 🚀 Overview

VERITAS is an AI-powered road safety, telematics, and decentralized emergency response mobile platform. This repository contains the complete visual display and interaction prototype designed for stakeholder demos and mobile flow reviews.

## 📱 Featured Screens (All 20 Screens)

1. **Screen 01: Login / Authentication** — Credentials, Google SSO, and account recovery.
2. **Screen 02: Home Dashboard** — Safety status shield, ESP32 Dashcam connection (78%), 4 quick actions, nearby hazards, and circular driver safety gauge (87/100).
3. **Screen 03: Live Hazard Map** — Vector road map, pulsing user location radar, categorized hazard pins (potholes, construction, waterlogging), and bottom sheet preview card.
4. **Screen 04: Drive Screen (Active Driving)** — Split-view rear/front camera with AI bounding boxes (*"Pothole 82%"*), driver face mesh monitor (*"Alert"*), live telemetry (42 km/h, 8.2 km), and floating pulsing SOS button.
5. **Screen 05: Hazard Alert Popup** — Dimmed drive background with centered modal alert card (*"Pothole 200 m ahead"*, 3 confirmations, 18s countdown bar, Confirm/Not There).
6. **Screen 06: Drowsiness Warning (Level 2)** — Front IR camera face outline with iris tracking, EAR/PERCLOS metrics, Level 2 severity bar, and rest stop suggestion.
7. **Screen 07: Emergency SOS (Active)** — Full-screen red gradient, 10s countdown, GPS coordinates (`26.4031° N, 75.7915° E`), 3 notified contacts with checkmarks, Sewai Hospital ETA, and Call 108 button.
8. **Screen 08: SOS — Offline (BLE Relay)** — Full-screen dark mesh background, device-to-device BLE hop diagram, 3 devices in range indicator, and offline GNSS coordinates.
9. **Screen 09: Crash Detected** — Full-screen amber/red gradient, 3.8G impact severity, Auto-SOS 10s countdown, mini map location pin, and *"I'm OK, Cancel"* vs *"Send SOS Now"*.
10. **Screen 10: Hospital Recommendation** — Traumatic injury type filters (Head selected), Best Match Sewai Hospital (Trauma Level 2, Neurosurgery, 2.4 km, 8 min) with Navigate/Call, City Hospital (L3), and expandable AI triage rationale.
11. **Screen 11: Trip Summary** — Trip Complete checkmark, circular 87/100 score, 4-stat metrics grid, telemetry event log, and route trace map.
12. **Screen 12: Driver Safety Score** — 87/100 circular gauge, 4 metric breakdown cards, weekly sparkline trend, and recent trip logs.
13. **Screen 13: Report Hazard** — 6 hazard category cards, GPS coordinates toggle, dual photo upload placeholders with dashcam snap, description box, severity slider, and submit button.
14. **Screen 14: First-Aid Guide (Bystander AI)** — Offline badge, 6 emergency protocols, CPR step-by-step guidance cards, 110 BPM rhythm indicator, Play Audio, and Next Step button.
15. **Screen 15: Pocket Medical Assistant** — Offline edge AI badge, interactive message bubbles, quick question chips (*"CPR steps?"*, *"Burns?"*, *"Fracture?"*, *"Move injured?"*), and voice mic input bar.
16. **Screen 16: Emergency Contacts** — Offline directory with search bar, 108 Ambulance, 101 Fire, 3 Trauma Hospitals, Police, and Blood Banks with direct call and directions actions.
17. **Screen 17: Nearby Alerts** — Filter tabs (All, Hazards, Incidents, Traffic), vertical alert feed with confidence badges, and Confirm / Not There voting buttons.
18. **Screen 18: Route Planning** — Origin/Destination inputs, 3 AI route cards (Route 1 Recommended 28 min/12 km/2 hazards, Route 2 Zero Hazards 32 min, Route 3 Congested 35 min), and Start Navigation button.
19. **Screen 19: Profile & Settings** — User card for Khushi Sharma, ESP32 dashcam status (*"ESP32-ABC123" paired*), toggles for Federated Learning and Critical Notifications, and Logout.
20. **Screen 20: Multilingual Demo** — 8 Indic languages with radio selectors and live voice/text translation preview card.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Vanilla Tailwind CSS (VERITAS Design System tokens)
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/vanshikakhurana139/VeritasDemo.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
