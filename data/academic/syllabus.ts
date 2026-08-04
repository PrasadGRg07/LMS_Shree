export interface Syllabus {
  id: number;

  subject: string;

  grade: string;

  section: string;

  teacher: string;

  units: Unit[];

  completion: number;
}


export interface Unit {
  unit: string;

  chapters: string[];

  lessons: number;

  completedLessons: number;
}


export const syllabus: Syllabus[] = [

  {
    id: 1,

    subject: "Mathematics",

    grade: "Grade 10",

    section: "A",

    teacher: "Ram Sharma",

    completion: 75,

    units: [

      {
        unit: "Algebra",

        chapters: [
          "Linear Equations",
          "Quadratic Equations",
          "Polynomials",
        ],

        lessons: 12,

        completedLessons: 9,
      },

      {
        unit: "Geometry",

        chapters: [
          "Triangles",
          "Circles",
          "Coordinate Geometry",
        ],

        lessons: 10,

        completedLessons: 6,
      },

    ],
  },


  {
    id: 2,

    subject: "English",

    grade: "Grade 9",

    section: "B",

    teacher: "Sita Gurung",

    completion: 80,

    units: [

      {
        unit: "Grammar",

        chapters: [
          "Tenses",
          "Voice",
          "Reported Speech",
        ],

        lessons: 10,

        completedLessons: 8,
      },

      {
        unit: "Literature",

        chapters: [
          "Poetry",
          "Stories",
          "Drama",
        ],

        lessons: 12,

        completedLessons: 9,
      },

    ],
  },


  {
    id: 3,

    subject: "Computer Science",

    grade: "Grade 12",

    section: "A",

    teacher: "Prasad Gurung",

    completion: 65,

    units: [

      {
        unit: "Programming",

        chapters: [
          "C Programming",
          "Functions",
          "Data Structures",
        ],

        lessons: 15,

        completedLessons: 10,
      },


      {
        unit: "Database",

        chapters: [
          "SQL",
          "ER Diagram",
          "Normalization",
        ],

        lessons: 12,

        completedLessons: 8,
      },

    ],
  },


  {
    id: 4,

    subject: "Science",

    grade: "Grade 10",

    section: "A",

    teacher: "Hari Thapa",

    completion: 70,

    units: [

      {
        unit: "Physics",

        chapters: [
          "Motion",
          "Force",
          "Energy",
        ],

        lessons: 12,

        completedLessons: 8,
      },

    ],
  },


  {
    id: 5,

    subject: "Physics",

    grade: "Grade 12",

    section: "A",

    teacher: "Bikash KC",

    completion: 85,

    units: [

      {
        unit: "Mechanics",

        chapters: [
          "Vectors",
          "Dynamics",
          "Gravity",
        ],

        lessons: 15,

        completedLessons: 13,
      },

    ],
  },


  {
    id: 6,

    subject: "Chemistry",

    grade: "Grade 12",

    section: "A",

    teacher: "Sunita Shrestha",

    completion: 78,

    units: [

      {
        unit: "Organic Chemistry",

        chapters: [
          "Hydrocarbons",
          "Organic Reactions",
        ],

        lessons: 10,

        completedLessons: 8,
      },

    ],
  },


  {
    id: 7,

    subject: "Biology",

    grade: "Grade 12",

    section: "A",

    teacher: "Sunita Shrestha",

    completion: 72,

    units: [

      {
        unit: "Genetics",

        chapters: [
          "DNA",
          "Heredity",
          "Evolution",
        ],

        lessons: 14,

        completedLessons: 10,
      },

    ],
  },


  {
    id: 8,

    subject: "Accountancy",

    grade: "Grade 11",

    section: "B",

    teacher: "Ramesh Adhikari",

    completion: 82,

    units: [

      {
        unit: "Accounting Basics",

        chapters: [
          "Journal",
          "Ledger",
          "Trial Balance",
        ],

        lessons: 12,

        completedLessons: 10,
      },

    ],
  },


  {
    id: 9,

    subject: "Economics",

    grade: "Grade 11",

    section: "B",

    teacher: "Anil Shrestha",

    completion: 76,

    units: [

      {
        unit: "Micro Economics",

        chapters: [
          "Demand",
          "Supply",
          "Market",
        ],

        lessons: 12,

        completedLessons: 9,
      },

    ],
  },


  {
    id: 10,

    subject: "Social Studies",

    grade: "Grade 10",

    section: "B",

    teacher: "Kiran Rai",

    completion: 68,

    units: [

      {
        unit: "Nepal History",

        chapters: [
          "Ancient Nepal",
          "Modern Nepal",
        ],

        lessons: 10,

        completedLessons: 7,
      },

    ],
  },

];


export default syllabus;