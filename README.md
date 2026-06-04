<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4facfe,50:00f2fe,100:0072ff&height=300&section=header&text=🌤️%20WEATHER%20APP&fontSize=70&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Real-Time%20Global%20Weather%20Forecaster&descAlignY=55&descSize=18&descColor=ffffff" width="100%" />
</p>

<p align="center">
  <a href="#-about-the-project"><img src="https://img.shields.io/badge/🌤️_About-Project-00e5ff?style=for-the-badge&labelColor=0a0a0a" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/⚡_Stack-React-61dafb?style=for-the-badge&labelColor=0a0a0a" /></a>
  <a href="#-quick-start"><img src="https://img.shields.io/badge/🚀_Setup-Easy-00e676?style=for-the-badge&labelColor=0a0a0a" /></a>
  <a href="#-developer"><img src="https://img.shields.io/badge/👥_Developer-Pooja_Murugan-e040fb?style=for-the-badge&labelColor=0a0a0a" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Axios-1.7.7-5A29E4?logo=axios&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=openweathermap&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/CSS3-Vanilla-1572B6?logo=css3&logoColor=white&style=flat-square" />
</p>

---

## 📋 Table of Contents
<details open>
<summary><b>Click to expand/collapse</b></summary>

- [🌤️ About the Project](#️-about-the-project)
- [✨ Key Deliverables & Features](#-key-deliverables--features)
- [🏗️ System Flow & Architecture](#️-system-flow--architecture)
- [⚡ Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Quick Start](#-quick-start)
- [👥 Developer](#-developer)

</details>

---

## 🌤️ About the Project
<table>
<tr>
<td width="60%">

**Weather App** is a sleek, real-time weather broadcasting application built using React.js. 

By integrating directly with the **OpenWeatherMap API**, it enables users to search for any city globally and receive instant, up-to-date weather reports. 

Rooted in a **responsive glassmorphic container design**, it features custom-built zoom animations, dynamic Celsius conversion, and robust input validations—delivering a premium and fluid user experience across both desktop and mobile devices.

</td>
<td width="40%">

```text
  ╔══════════════════════════╗
  ║    🌤️ WEATHER APP        ║
  ║                          ║
  ║  ┌────────────────────┐  ║
  ║  │   Search City...   │  ║
  ║  └────────────────────┘  ║
  ║            │             ║
  ║            ▼             ║
  ║  ┌────────────────────┐  ║
  ║  │     London, GB     │  ║
  ║  │      15.4 °C       │  ║
  ║  │  scattered clouds  │  ║
  ║  └────────────────────┘  ║
  ╚══════════════════════════╝
```

</td>
</tr>
</table>

---

## ✨ Key Deliverables & Features

<table>
<tr>
<td>

✔️ **Real-Time Data Integration:** Connects directly with the OpenWeatherMap endpoint for live statistics.<br/>
✔️ **Celsius Converter:** Automatically converts standard Kelvin readings from the API to Celsius `(K - 273.15)` dynamically on the client side.<br/>
✔️ **Glassmorphic UI Design:** Card interfaces styled with back-drop filter blurs, white outlines, and deep drop-shadows for a premium 3D feel.<br/>
✔️ **Responsive Keyframe Animations:** Features looping `@keyframes` desktop and mobile background zoom animations that feel organic and alive.<br/>
✔️ **Robust Validation Checks:** Instantly checks for empty inputs ("Please Enter the City!!!") and catches API status codes for invalid queries ("City not found").<br/>
✔️ **Responsive Layout Grid:** Tailored layouts using CSS media queries, keeping input elements and buttons legible and beautiful on all viewport widths.

</td>
</tr>
</table>

---

## 🏗️ System Flow & Architecture

The application operates as a single-page React client, executing asynchronous API fetches and resolving response layers dynamically.

```mermaid
graph TD
    subgraph Client ["🖥️ Client (React SPA)"]
        UI[App Component] --> Form[Search Form]
        Form --> Input[City Input State]
        Input --> Validate{Is Empty?}
        Validate -->|Yes| Err1[Show Error: Please Enter the City!!!]
        Validate -->|No| Fetch[Trigger Axios API Call]
    end

    subgraph ExternalAPI ["☁️ External Services"]
        Fetch -->|HTTP GET Request| OWM[OpenWeatherMap API]
        OWM -->|JSON Response| Parser[Parse Weather Data]
        OWM -->|API Error| Err2[Show Error: City not found]
    end

    subgraph DataFlow ["📊 Data Presentation"]
        Parser --> Temp[Convert Kelvin to Celsius]
        Temp --> ResultCard[Render Weather Result Card]
        ResultCard --> Display[Name, Temp, Description, Country]
    end

    style Client fill:#1a1a2e,stroke:#00e5ff,stroke-width:2px,color:#fff
    style ExternalAPI fill:#1a1a2e,stroke:#ff6600,stroke-width:2px,color:#fff
    style DataFlow fill:#1a1a2e,stroke:#00e676,stroke-width:2px,color:#fff
```

---

## ⚡ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|:---:|:---:|:---:|
| <img src="https://img.shields.io/badge/Frontend-React_18-61DAFB?logo=react&logoColor=white&style=for-the-badge" /> | React.js | Fast UI component rendering & state management |
| <img src="https://img.shields.io/badge/HTTP-Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge" /> | Axios | High-performance promise-based API fetching |
| <img src="https://img.shields.io/badge/Weather-OpenWeatherMap-orange?logo=openweathermap&logoColor=white&style=for-the-badge" /> | OpenWeatherMap | World-wide real-time weather database |
| <img src="https://img.shields.io/badge/Styling-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" /> | Vanilla CSS3 | Custom viewport animations, Flexbox, & Media Queries |

</div>

---

## 📁 Folder Structure
```bash
weather_application/
│
├── public/
│   ├── assets/                 # Brand assets
│   ├── favicon.ico             # App icon
│   ├── index.html              # Main HTML mount template
│   ├── manifest.json           # PWA metadata configuration
│   ├── robots.txt              # Search engine crawler policies
│   └── cloudy.png              # Search page illustration
│
├── src/
│   ├── App.css                 # Global styling, Glassmorphism, animations, media queries
│   ├── App.js                  # Core component: form validation, Axios API fetching, result rendering
│   ├── index.css               # Base reset rules and root styles
│   ├── index.js                # React DOM render entrypoint
│   ├── reportWebVitals.js      # App performance tracking logic
│   ├── setupTests.js           # Test suite configurations
│   ├── sea.jpg                 # Desktop dynamic zoom background image
│   └── weather_img.jpg         # Weather graphics resource
│
├── package.json                # Project dependencies and script runner configurations
└── README.md                   # Visual project overview & manual
```

---

## 🚀 Quick Start (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/poojamurugan23/Weather-App.git
cd "Weather App"

# 2. Install dependencies
npm install

# 3. Start the application
npm start
```

Your browser will automatically launch the project at `http://localhost:3000`.

---

<div align="center">

## 👥 Developer

<br/>

<table style="border-collapse: collapse; border: none; background: transparent; margin: 0 auto;">
  <tr>
    <td align="center">
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="70" alt="Developer UIUX"/>
      <br/><br/>
      <img src="https://img.shields.io/badge/🎨_Pooja_Murugan-e040fb?style=for-the-badge&labelColor=1a1a2e" />
      <br/>
      <br/>
      <sub><b>Frontend Developer & UI/UX Designer <br>Crafting Interactive and Responsive Web Experiences</b></sub>
      <br/><br/>
      <a href="https://www.linkedin.com/in/poojamurugan23/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </td>
  </tr>
</table>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=2000&color=F7FAFC&center=true&vCenter=true&width=500&lines=Developed+with+React.js;Real-time+Weather+Insights;Crafted+by+Pooja+Murugan;Enjoy+the+App!" alt="Footer Typing SVG" />

</div>