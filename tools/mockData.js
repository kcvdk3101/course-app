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
    title: "HOISTING TRONG JAVASCRIPT LÀ GÌ???",
    slug: "3MLhU1DrUxM",
    authorId: 1,
    category: "JavaScript Advanced"
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
  { id: 1, name: "F8 Official" },
  {
    id: 2, name: "freeCodeCamp.org"
  },
  { id: 3, name: "Rhythm" },
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
