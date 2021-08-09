const courses = [
  {
    id: 1,
    title: "Full React Course 2020",
    slug: "4UZrsTqkcW4",
    authorId: 2,
    category: "React JS"
  },
  {
    id: 2,
    title: "IIFE là gì? Khái niệm IIFE trong Javascript",
    slug: "N-3GU1F1UBY",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 3,
    title: "Scope trong Javascript là gì?",
    slug: "5N8vz_VmszE",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 4,
    title: "Closure là gì? Javascript closure?",
    slug: "xtQtGKL0NCI",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 5,
    title: "Sleep Chill Vibes",
    slug: "YPWG-GhyrZY",
    authorId: 1,
    category: "Music"
  },
  {
    id: 6,
    title: "STRICT MODE TRONG JAVASCRIPT ?",
    slug: "w1W-j4cSPF0",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 7,
    title: "VALUE TYPES & REFERENCE TYPES",
    slug: "n4tS1Q5-EzY",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 8,
    title: "THIS KEYWORD - TỪ KHOÁ THIS TRONG JAVASCRIPT",
    slug: "ii1Ra_zLDIo",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 9,
    title: "LO:FI",
    slug: "e97w-GHsRMY",
    authorId: 3,
    category: "Music"
  },

];

const authors = [
  {
    id: 1,
    name: "F8 Official",
    description: "F8 là cộng đồng học tập và chia sẻ kiến thức lập trình.",
    thumbnailSrc: "https://avatar-redirect.appspot.com/google/109023826614717592641?size=400"
  },
  {
    id: 2,
    name: "freeCodeCamp.org",
    description: "Learn to code for free.",
    thumbnailSrc: "https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    name: "Rythm",
    description: "Rythm Music Channel.",
    thumbnailSrc: "https://rythm.fm/rythm.png"
  },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

module.exports = {
  newCourse,
  courses,
  authors
};
