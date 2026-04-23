
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
import minion from './assets/images/timeline/first-minion.jpg';
import chillingRoom from './assets/images/timeline/chilling-room.jpg';
import phuketTime1 from './assets/images/timeline/phuket-time.jpg';

// ─── Album Images ──────────────────────────────────────
import batminton from './assets/images/album/batminton.jpg';
import brahhh from './assets/images/album/brahhh.jpg';
import car from './assets/images/album/car.jpg';
import chill1 from './assets/images/album/chill1.jpg';
import chill2 from './assets/images/album/chill2.jpg';
import chillingInTheRoom from './assets/images/album/chilling-in-the-room.jpg';
import grandmaVisit from './assets/images/album/grandma-visit.jpg';
import myFevImage from './assets/images/album/my-fev-image2.jpg';
import petEvent from './assets/images/album/pet-event.jpg';
import puayTime from './assets/images/album/puay-time.jpg';
import sisWeddingEvent from './assets/images/album/sis-wedding-event.jpg';

// ─── Map Images ────────────────────────────────────────
import phuketTime from './assets/images/map/Phuket-time.jpg';
import chillBangsan from './assets/images/map/chill-bangsan.jpg';
import cocktailConcert from './assets/images/map/cocktail-concert.jpg';
import dogCafe from './assets/images/map/dog-cafe.jpg';
import halloweenConcert from './assets/images/map/halloween-concert.jpg';
import damnoenMarket from './assets/images/map/Damnoen-market.jpg';
import airplane from './assets/images/map/airplane.jpg';
import kataBeach from './assets/images/map/kata-beach.jpg';
import luckinShanghai from './assets/images/map/luckin-shanghai.jpg';
import osaka from './assets/images/map/osaka.jpg';
import phuketOldTown from './assets/images/map/phuket-old-town.jpg';



export const CONFIG = {
  // ─── Names & Date ────────────────────────────────────
  // Date uses Thai Buddhist calendar (พ.ศ.) — e.g. 2565 = 2022 CE
  HER_NAME: "FAH",
  MY_NAME: "Boss",
  ANNIVERSARY_DATE: "May 5, 2565",

  // ─── Timeline Memories ───────────────────────────────
  MEMORIES: [
    {
      date: "May 2565",
      title: "The First Photo of You",
      description: "The very first picture I ever had of you. I didn't know it yet, but this was the beginning of everything because this day was the day we change our status.",
      photo: firstImage,
    },
    {
      date: "August 2565",
      title: "One of Our First Dates",
      description: "Just the two of us, sitting together, and Eat CoCo with you. ",
      photo: oneOfFirstDate,
    },
    {
      date: "September 2565",
      title: "The First Minion with you",
      description: "First Minion you buy and you combine it for me. ",
      photo: minion,
    },
    {
      date: "October 2566",
      title: "Our First Concert",
      description: "Our first concert together 🎵. Free ticket from your dad !!! ",
      photo: firstConcert,
    },
    {
      date: "November 2566",
      title: "Our First Official Event",
      description: "Go to my sis wedding event together ✨",
      photo: firstOfficialEvent,
    },
    {
      date: "December 2566",
      title: "Photobooth Together",
      description: "Photo booth time at Future Park Rangsit. If I remember correctly, this is the first photobooth picture of us.",
      photo: firstPhotobooth,
    },
    {
      date: "Apil 2567",
      title: "Chill with you",
      description: "Just chill at the room with you.",
      photo: chillingRoom,
    },
    {
      date: "May 2567",
      title: "Phuket trip with you",
      description: "Trip to Phuket with you. The first time you came to my home.",
      photo: phuketTime1,
    },
    {
      date: "January 2568",
      title: "Our First Pets Café Date",
      description: "Our first pet cafe we went to. This is just before I went to internship with Tokyo, Japan. Our kind of perfect date 🐾",
      photo: firstPetsCafe, 
    },

    {
      date: "June 2568",
      title: "Health Booth Day at SIIT",
      description: "This is the first event I joined as I am a CEO of FondTech. And then you come !",
      photo: usAtHealthBooth,
    },
    {
      date: "June 2568",
      title: "SIIT Prize Day",
      description: "From work partner to be my girlfriend. Then we do every projects together! SIIT brought us together and I'll always be grateful for that.",
      photo: siitPirceDay,
    },
    {
      date: "January 2569",
      title: "Graduation Day 🎓",
      description: "We made it! Walking across that stage together, making heart hands in our gowns in front of the SIIT sign. From the first day of class to the last — you've been my greatest achievement.",
      photo: graduateDay,
    },
  ],

  // ─── Album Photos ────────────────────────────────────
  ALBUM_PHOTOS: [
    { src: myFevImage, caption: "Gun Dog Girlfriend 🐶", rotation: -2 },
    { src: sisWeddingEvent, caption: "Offical opening for my sis and you, especially when you got her flower", rotation: 2.5 },
    { src: grandmaVisit, caption: "Meeting the grandma!", rotation: -1.5 },
    { src: chillingInTheRoom, caption: "Cozy days in the room", rotation: 3 },
    { src: car, caption: "Road trip vibes at Phuket 🚗", rotation: -2.5 },
    { src: batminton, caption: "Badminton Time !", rotation: 1.5 },
    { src: chill1, caption: "Just chilling ☕", rotation: -3 },
    { src: chill2, caption: "More chill time ✨", rotation: 2 },
    { src: brahhh, caption: "That face 😂", rotation: -1 },
    { src: petEvent, caption: "Pet event day 🐶", rotation: 3 },
    { src: puayTime, caption: "First and Latest time @Puay together 🤓", rotation: -2 },
  ] as Array<{ src: string; caption: string; rotation: number }>,

  // ─── Map Pins ────────────────────────────────────────
  MAP_PINS: [
    {
      lat: 7.762160018937142,
      lng: 98.30545607471122,
      title: "Phuket Getaway",
      note: "Seeing sunset together at prime spot of Phuket",
      emoji: "🏖️",
      photo: phuketTime,
    },
    {
      lat: 13.28458122517785,
      lng: 100.91478661184593,
      title: "Chill Day at Bang Saen",
      note: "Lazy time at beach, seafood by the shore 🌊",
      emoji: "🌊",
      photo: chillBangsan,
    },
    {
      lat: 13.914240938789717,
      lng: 100.54840380325602,
      title: "Cocktail Concert Night",
      note: "The concert that we planed so long since I was at Japan.",
      emoji: "🍹",
      photo: cocktailConcert,
    },

    {
      lat: 13.779343511903729,
      lng: 100.39158411611159,
      title: "Dog Café Date",
      note: "First time I bring you to meet your friends 😂. I'm so happy to have time with you before going to Japan",
      emoji: "🐶",
      photo: dogCafe,
    },
    {
      lat: 13.669632110706429,
      lng: 100.61016502489561,
      title: "Halloween Concert",
      note: "Free ticket from your dad! I'm so happy to have time with you ❤️",
      emoji: "🎃",
      photo: halloweenConcert,
    },
    {
      lat: 13.5186,
      lng: 99.9602,
      title: "Damnoen Saduak Floating Market",
      note: "My first trip I fully plan for you 🤓",
      emoji: "🚣‍♂️",
      photo: damnoenMarket,
    },
    {
      lat: 13.6925,
      lng: 100.7500,
      title: "Our First Flight Together",
      note: "Our first journey to aboard by ourself (China, Shanghai) ✈️",
      emoji: "✈️",
      photo: airplane,
    },
    {
      lat: 7.8202, 
      lng: 98.2986,
      title: "Kata Beach Chill",
      note: "Another beautiful Phuket day by the sea. 🏖️, Leave a little puppy play water 🐶",
      emoji: "🏖️",
      photo: kataBeach,
    },
    {
      lat: 31.2304,
      lng: 121.4737,
      title: "Shanghai Exploration",
      note: "Just take a rest and chill a little bit before we continue our trip. ☕",
      emoji: "☕",
      photo: luckinShanghai,
    },
    {
      lat: 34.6937,
      lng: 135.5023,
      title: "Osaka Trip",
      note: " First time to Japan with you 🇯🇵",
      emoji: "🇯🇵",
      photo: osaka,
    },
    {
      lat: 7.8841,
      lng: 98.3891,
      title: "Phuket Old Town Walk",
      note: "Colorful buildings and even more colorful memories. I love walking through life with you. 🏘️",
      emoji: "🏘️",
      photo: phuketOldTown,
    },

  ],

  // ─── Love Notes ──────────────────────────────────────
  LOVE_NOTES: [
    "Your smile lights up my entire world 🌟",
    "The way you laugh makes everything better",
    "You always make my life colorful", 
    "I love eveything about you, your big mounth, your eyes, etc 😇 ",
    "I always happy when you do things for me",
    "You will be main part of my life and my future plan",
    "You are my many first time and many more",
    "The sound of your voice is always make rooms not quiet and boring",
  ],

  // ─── Love Letter ─────────────────────────────────────
  LOVE_LETTER: {
    greeting: "My Dearest,",
    body: `From the moment I met you, I knew my life was about to change in the most beautiful way. Every day with you feels like a gift making my life is more colorful.
    You have this incredible way of making the world brighter just by yaping and yaping non-stop 😂. I love the way you treat me like I am the most important person in your world. I truely appreciate how can you live and accept me even I do something wrong.
    Thank you for choosing me. Thank you for loving me. Thank you for being you.`,
    closing: "Forever and always yours,",
    signature: "BossTheMeow",
  },

  // ─── Finale ──────────────────────────────────────────
  FINALE_MESSAGE:
    "Here's to every sunrise we'll share, every laugh that echoes between us, and every quiet moment that speaks louder than words. You are my forever, and I am so grateful for every single day.",
  FINALE_SIGNATURE: "With all my love, Boss 💕",

  // ─── Quiz ────────────────────────────────────────────
  QUIZ_QUESTIONS: [
    {
      question: "Where did we first meet? 📍",
      options: ["The University", "A Local Cafe", "At a Friend's Party", "Group work online"],
      correctIndex: 3,
      hint: "We met during COVID-19"
    },
    {
      question: "What is our first date place? 👻",
      options: ["University", "Central Ladprao", "Future Park Rangsit", "Local village in TU100 Subject"],
      correctIndex: 2,
      hint: "It is bigest mall in Rangsit"
    },
    {
      question: "What is my favorite color? 🎨",
      options: ["Black", "Blue", "Mint Green", "Lavender"],
      correctIndex: 0,
      hint: "It's cool color and elegant"
    },
    {
      question: "Which city was the trip I took you to ? ✈️",
      options: ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya"],
      correctIndex: 3,
      hint: "The nearest city from room"
    },
    {
      question: "What's the one thing I can't live without? ☕",
      options: ["Coffee", "My Phone", "Chocolate", "You"],
      correctIndex: 3,
      hint: "You already know the answer to this one! ❤️"
    },
    {
      question: "What was the first movie we watched together? 🍿",
      options: ["A Romantic Comedy", "An Action Thriller", "A Comedy Horror Movie", "An Animated Film"],
      correctIndex: 2,
      hint: "We laughed a lot during this one!"
    },
    {
      question: "What's my favorite season? 🍂",
      options: ["Summer", "Rainy Season", "Winter", "Spring"],
      correctIndex: 2,
      hint: "I love the cool breeze and cozy sweaters!"
    },
    {
      question: "If I could travel anywhere right now, where would it be? 🏔️",
      options: ["Japan", "Switzerland", "Iceland", "Paris"],
      correctIndex: 0,
      hint: "Think about beautiful mountains and chocolate!"
    }
  ],

  QUIZ_RESULT_MESSAGES: {
    perfect: "You know me by heart 💖",
    great: "Almost perfect, just like us 🌸",
    okay: "Still learning, but I love you anyway 😄",
    tryAgain: "We need to spend more time together! 💌",
  },
};

// ─── Type exports ──────────────────────────────────────
export type Memory = (typeof CONFIG.MEMORIES)[number];
export type MapPin = (typeof CONFIG.MAP_PINS)[number];
export type AlbumPhoto = (typeof CONFIG.ALBUM_PHOTOS)[number];

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  hint?: string;
}
