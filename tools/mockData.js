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
    title: "IIFE là gì? Khái niệm IIFE trong Javascript | Immediately invoked function expression | Lập trình JS",
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
    title: "STRICT MODE TRONG JAVASCRIPT??? - CHẾ ĐỘ NGHIÊM NGẶT TRONG JAVASCRIPT???",
    slug: "w1W-j4cSPF0",
    authorId: 1,
    category: "JavaScript Advanced"
  },
  {
    id: 7,
    title: "VALUE TYPES & REFERENCE TYPES | THAM TRỊ VÀ THAM CHIẾU JAVASCRIPT",
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
    description: "F8 là cộng đồng học tập và chia sẻ kiến thức lập trình dành cho tất cả mọi người.Các khóa học đều được đầu tư kỹ lưỡng về mặt.",
    thumbnailSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffullstack.edu.vn%2Fauthors%2Fson-dang&psig=AOvVaw0iUueJ-BTZ_GrFiJJ2hmI2&ust=1628604671377000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiuiKqPpPICFQAAAAAdAAAAABAU"
  },
  {
    id: 2,
    name: "freeCodeCamp.org",
    description: "Learn to code for free",
    thumbnailSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC8butISFwT-Wl7EV0hUK0BQ&psig=AOvVaw3eo41FFuIG18uWzid9cXE2&ust=1628604772899000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCEwtmPpPICFQAAAAAdAAAAABAD",
  },
  {
    id: 3,
    name: "Rythm",
    description: "Rythm Music Channel ",
    thumbnailSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgummybearpills.fandom.com%2Fwiki%2FNO_U_(Bot)&psig=AOvVaw3SBukaBG3cPCbIDOZwlFrR&ust=1628604785447000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC4jOCPpPICFQAAAAAdAAAAABAI"
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
