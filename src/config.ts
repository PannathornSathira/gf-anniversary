
//💕 PERSONAL CONFIG 💕


// ─── Timeline Images ───────────────────────────────────
import firstImage from './assets/images/timeline/first-image.jpg';
import oneOfFirstDate from './assets/images/timeline/one-of-first-date.jpg';
import firstPetsCafe from './assets/images/timeline/first-pets-cafe.jpg';
import firstPhotobooth from './assets/images/timeline/first-photobooth.jpg';
import firstConcert from './assets/images/timeline/first-concert.jpg';
import firstOfficialEvent from './assets/images/timeline/first-official-event.jpg';
import usAtHealthBooth from './assets/images/timeline/us-at-health-booth.jpg';
import siitPirceDay from './assets/images/timeline/siit-pirce-day.jpg';
import graduateDay from './assets/images/timeline/graduate-day.jpg';

// ─── Album Images ──────────────────────────────────────
import batminton from './assets/images/album/batminton.jpg';
import brahhh from './assets/images/album/brahhh.jpg';
import car from './assets/images/album/car.jpg';
import chill1 from './assets/images/album/chill1.jpg';
import chill2 from './assets/images/album/chill2.jpg';
import chillingInTheRoom from './assets/images/album/chilling-in-the-room.jpg';
import grandmaVisit from './assets/images/album/grandma-visit.jpg';
import myFevImage from './assets/images/album/my-fev-image.PNG';
import petEvent from './assets/images/album/pet-event.jpg';
import puayTime from './assets/images/album/puay-time.jpg';
import sisWeddingEvent from './assets/images/album/sis-wedding-event.jpg';

// ─── Map Images ────────────────────────────────────────
import phuketTime from './assets/images/map/Phuket-time.jpg';
import chillBangsan from './assets/images/map/chill-bangsan.jpg';
import cocktailConcert from './assets/images/map/cocktail-concert.jpg';
import dogCafe from './assets/images/map/dog-cafe.jpg';
import halloweenConcert from './assets/images/map/halloween-concert.jpg';


export const CONFIG = {
  // ─── Names & Date ────────────────────────────────────
  // Date uses Thai Buddhist calendar (พ.ศ.) — e.g. 2565 = 2022 CE
  HER_NAME: "FAH",
  MY_NAME: "Boss",
  ANNIVERSARY_DATE: "May 5, 2565",

  // ─── Timeline Memories ───────────────────────────────
  MEMORIES: [
    {
      date: "2565",
      title: "The First Photo of You",
      description: "The very first picture I ever had of you. Even behind a mask, those eyes already had me falling. I didn't know it yet, but this was the beginning of everything.",
      photo: firstImage,
    },
    {
      date: "2565",
      title: "One of Our First Dates",
      description: "Just the two of us, sitting together, your hand on your cheek and that sweet little smile. I remember being so nervous, but you made everything feel so easy and warm.",
      photo: oneOfFirstDate,
    },
    {
      date: "2566",
      title: "Our First Pets Café Date",
      description: "We spent the afternoon surrounded by adorable fur babies. Watching you light up around them made me fall for you even more. Our kind of perfect date 🐾",
      photo: firstPetsCafe,
    },
    {
      date: "2566",
      title: "First Photobooth Together",
      description: "Squeezing into that tiny booth, making silly faces, and keeping the photo strips as our little treasure. These are some of my favorite pictures of us.",
      photo: firstPhotobooth,
    },
    {
      date: "2566",
      title: "Our First Concert",
      description: "The music, the lights, the crowd — but all I could focus on was you. Dancing together, singing along, and making memories that still give me chills 🎵",
      photo: firstConcert,
    },
    {
      date: "2567",
      title: "Our First Official Event",
      description: "Looking our best, side by side. You in that stunning outfit, me trying to keep up. We cleaned up nicely together, didn't we? 💫",
      photo: firstOfficialEvent,
    },
    {
      date: "2567",
      title: "Health Booth Day at SIIT",
      description: "Even at a health booth on campus, we found a way to make it our own little moment. Every place becomes special when I'm with you.",
      photo: usAtHealthBooth,
    },
    {
      date: "2567",
      title: "SIIT PIRCE Day",
      description: "Representing together at PIRCE Day. From classmates to soulmates — SIIT brought us together and I'll always be grateful for that.",
      photo: siitPirceDay,
    },
    {
      date: "2568",
      title: "Graduation Day 🎓",
      description: "We made it! Walking across that stage together, making heart hands in our gowns in front of the SIIT sign. From the first day of class to the last — you've been my greatest achievement.",
      photo: graduateDay,
    },
  ],

  // ─── Album Photos ────────────────────────────────────
  ALBUM_PHOTOS: [
    { src: myFevImage, caption: "Late night LINE calls — distance never stood a chance 💕", rotation: -2 },
    { src: sisWeddingEvent, caption: "Plus one to a wedding — looking like a dream couple 💃", rotation: 2.5 },
    { src: grandmaVisit, caption: "Meeting the grandma! She loved you instantly 👵💕", rotation: -1.5 },
    { src: chillingInTheRoom, caption: "Cozy days in the room — my favorite place is next to you 🛋️", rotation: 3 },
    { src: car, caption: "Road trip vibes — you, me, and the open road 🚗", rotation: -2.5 },
    { src: batminton, caption: "Badminton date — competitive but always on the same team 🏸", rotation: 1.5 },
    { src: chill1, caption: "Just chilling — the simple moments are the sweetest ☕", rotation: -3 },
    { src: chill2, caption: "More chill time — I could spend forever doing nothing with you ✨", rotation: 2 },
    { src: brahhh, caption: "That face 😂 — you always know how to make me laugh", rotation: -1 },
    { src: petEvent, caption: "Pet event day — surrounded by cuteness (including you) 🐶", rotation: 3 },
    { src: puayTime, caption: "Fun times together — every moment with you is an adventure 🎉", rotation: -2 },
  ] as Array<{ src: string; caption: string; rotation: number }>,

  // ─── Map Pins ────────────────────────────────────────
  MAP_PINS: [
    {
      lat: 7.8804,
      lng: 98.3923,
      title: "Phuket Getaway",
      note: "Sun, sand, and us — our tropical escape together. Every sunset was more beautiful because I watched it with you 🌅",
      emoji: "🏖️",
      photo: phuketTime,
    },
    {
      lat: 13.2833,
      lng: 100.9167,
      title: "Chill Day at Bang Saen",
      note: "Lazy beach vibes, seafood by the shore, and your laughter carried by the ocean breeze 🌊",
      emoji: "🌊",
      photo: chillBangsan,
    },
    {
      lat: 13.7563,
      lng: 100.5018,
      title: "Cocktail Concert Night",
      note: "Drinks, live music, and dancing the night away. You looked incredible under those lights 🍸",
      emoji: "🍹",
      photo: cocktailConcert,
    },
    {
      lat: 13.7469,
      lng: 100.5349,
      title: "Dog Café Date",
      note: "Puppies and you — my two favorite things in one place. Your smile when you held that little one was everything 🐕",
      emoji: "🐶",
      photo: dogCafe,
    },
    {
      lat: 13.7225,
      lng: 100.5291,
      title: "Halloween Concert",
      note: "Costumes, spooky vibes, and the best concert buddy I could ever ask for 🎃",
      emoji: "🎃",
      photo: halloweenConcert,
    },
  ],

  // ─── Love Notes ──────────────────────────────────────
  LOVE_NOTES: [
    "Your smile lights up my entire world 🌟",
    "The way you laugh makes everything better",
    "You make even ordinary days feel magical ✨",
    "I love how your eyes sparkle when you're happy",
    "Your kindness inspires me every single day",
    "I fall in love with you a little more each morning 🌅",
    "You're my favorite person in the whole universe",
    "The sound of your voice is my favorite melody 🎵",
  ],

  // ─── Love Letter ─────────────────────────────────────
  LOVE_LETTER: {
    greeting: "My Dearest,",
    body: `From the moment I met you, I knew my life was about to change in the most beautiful way. Every day with you feels like a gift I never knew I deserved.

You have this incredible way of making the world brighter just by being in it. Your laugh is my favorite sound. Your smile, my favorite sight. And your heart — oh, your heart — is the most beautiful thing I've ever known.

I love the way you scrunch your nose when you're thinking. I love how you always know exactly what to say to make me feel better. I love the little things — the way you hold my hand, the notes you leave me, the way you look at me like I'm the only person in the room.

Every moment with you is a treasure. Every memory we make is a jewel I keep safe in my heart. And every tomorrow with you is a promise I will always cherish.

Thank you for choosing me. Thank you for loving me. Thank you for being you.`,
    closing: "Forever and always yours,",
    signature: "My Name",
  },

  // ─── Finale ──────────────────────────────────────────
  FINALE_MESSAGE:
    "Here's to every sunrise we'll share, every laugh that echoes between us, and every quiet moment that speaks louder than words. You are my forever, and I am so grateful for every single day.",
  FINALE_SIGNATURE: "With all my love, My Name 💕",
};

// ─── Type exports ──────────────────────────────────────
export type Memory = (typeof CONFIG.MEMORIES)[number];
export type MapPin = (typeof CONFIG.MAP_PINS)[number];
export type AlbumPhoto = (typeof CONFIG.ALBUM_PHOTOS)[number];
