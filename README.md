# 🌸 GF Anniversary Website 🌸

A romantic, dreamy, and highly personalized anniversary website built as a storybook experience. This project was created to celebrate our journey together, from the first time we met to our graduation day and beyond.

## ✨ Features

- **📖 Storybook Journey**: 7 unique chapters that unfold through smooth page transitions.
- **📅 Interactive Timeline**: A chronological walk down memory lane with photos and stories.
- **📍 Our Map**: A custom map featuring the special places that define our story.
- **📝 Love Notes**: A sticky-note board of reasons why she's special.
- **📸 Polaroid Album**: A beautiful gallery of our favorite moments.
- **✉️ Love Letter**: A digital envelope that opens to reveal a heartfelt message.
- **🎆 Finale Page**: A celebratory conclusion with a detailed breakdown of time spent together (Years · Months · Days) and floating confetti.
- **🌸 Dreamy Aesthetic**: Soft pastel tones, floating petal animations, and elegant typography.

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Maps**: React Leaflet
- **Date Math**: Custom Thai Buddhist Calendar (พ.ศ.) support
- **Icons/Effects**: Canvas Confetti

## ⚙️ Customization

All personal details are centralized in `src/config.ts`. To customize this for your own story:

1. **Personal Info**: Update names and your anniversary date (supports Thai year format like "May 5, 2565").
2. **Images**: 
   - Place your images in `src/assets/images/`.
   - Import them at the top of `src/config.ts`.
   - Assign them to the `MEMORIES`, `ALBUM_PHOTOS`, or `MAP_PINS` arrays.
3. **Messages**: Edit the titles, descriptions, and the final love letter to match your voice.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PannathornSathira/gf-anniversary.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📜 License

Created with ❤️ by Boss for Fah.
