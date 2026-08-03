export interface Course {
  id: number;
  slug: string;

  title: string;
  description: string;
  longDescription: string;

  grade: string;
  category: string;

  teacher: string;
  duration: string;

  lessons: number;
  students: number;
  rating: number;

  image: string;

  featured: boolean;

  outcomes: string[];
  curriculum: {
    title: string;
    lessons: number;
  }[];

  requirements: string[];
}
export const courses: Course[] = [
{
  id: 1,
  slug: "computer-science",

  title: "Computer Science",

  description:
    "Master programming, algorithms, web development, databases, and software engineering through practical projects.",

  longDescription:
    "This course provides students with a strong foundation in computer science through hands-on learning. Students will explore programming concepts, web development, databases, software engineering principles, and modern technologies while completing real-world projects that strengthen logical thinking and problem-solving skills.",

  grade: "Grade 10",

  category: "Technology",

  teacher: "John Smith",

  duration: "6 Months",

  lessons: 32,

  students: 420,

  rating: 4.9,

  image: "/images/courses/computer.jpg",

  featured: true,

  outcomes: [
    "Understand programming fundamentals",
    "Build responsive websites",
    "Develop problem-solving skills",
    "Work with databases",
    "Create real-world projects",
  ],

  curriculum: [
    {
      title: "Introduction to Computing",
      lessons: 4,
    },
    {
      title: "HTML & CSS",
      lessons: 8,
    },
    {
      title: "JavaScript",
      lessons: 8,
    },
    {
      title: "React & Next.js",
      lessons: 8,
    },
    {
      title: "Final Project",
      lessons: 4,
    },
  ],

  requirements: [
    "Basic computer knowledge",
    "Laptop or desktop computer",
    "Internet connection",
    "Willingness to learn",
  ],
},

{
  id: 2,
  slug: "mathematics",

  title: "Mathematics",

  description:
    "Strengthen mathematical reasoning through algebra, geometry, trigonometry, and problem-solving.",

  longDescription:
    "Students develop a solid understanding of mathematical concepts through practical exercises, logical reasoning, and real-world applications. The course emphasizes analytical thinking and preparation for higher studies.",

  grade: "Grade 10",

  category: "Mathematics",

  teacher: "Emily Johnson",

  duration: "6 Months",

  lessons: 30,

  students: 385,

  rating: 4.8,

  image: "/images/courses/math.jpg",

  featured: true,

  outcomes: [
    "Master algebraic equations",
    "Understand geometry",
    "Solve trigonometric problems",
    "Improve logical thinking",
    "Prepare for examinations",
  ],

  curriculum: [
    { title: "Algebra", lessons: 8 },
    { title: "Geometry", lessons: 6 },
    { title: "Trigonometry", lessons: 6 },
    { title: "Statistics", lessons: 5 },
    { title: "Revision", lessons: 5 },
  ],

  requirements: [
    "Basic arithmetic skills",
    "Calculator",
    "Notebook",
    "Regular practice",
  ],
},

{
  id: 3,
  slug: "physics",

  title: "Physics",

  description:
    "Understand motion, force, electricity, energy, and modern physics through experiments.",

  longDescription:
    "A comprehensive physics course covering mechanics, electricity, magnetism, waves, optics, and modern physics while encouraging scientific inquiry.",

  grade: "Grade 10",

  category: "Science",

  teacher: "Michael Brown",

  duration: "6 Months",

  lessons: 34,

  students: 310,

  rating: 4.7,

  image: "/images/courses/physics.jpg",

  featured: true,

  outcomes: [
    "Understand scientific principles",
    "Perform laboratory experiments",
    "Apply formulas correctly",
    "Develop analytical skills",
    "Prepare for higher education",
  ],

  curriculum: [
    { title: "Mechanics", lessons: 8 },
    { title: "Heat", lessons: 6 },
    { title: "Electricity", lessons: 8 },
    { title: "Optics", lessons: 6 },
    { title: "Modern Physics", lessons: 6 },
  ],

  requirements: [
    "Basic mathematics",
    "Notebook",
    "Scientific calculator",
  ],
},

{
  id: 4,
  slug: "chemistry",

  title: "Chemistry",

  description:
    "Explore atoms, molecules, reactions, acids, bases, and laboratory techniques.",

  longDescription:
    "Learn chemical principles through experiments and practical applications while understanding matter and its transformations.",

  grade: "Grade 10",

  category: "Science",

  teacher: "Sarah Wilson",

  duration: "6 Months",

  lessons: 30,

  students: 295,

  rating: 4.8,

  image: "/images/courses/chemistry.jpg",

  featured: false,

  outcomes: [
    "Understand chemical reactions",
    "Perform experiments safely",
    "Balance equations",
    "Learn laboratory skills",
    "Apply chemistry in daily life",
  ],

  curriculum: [
    { title: "Atomic Structure", lessons: 6 },
    { title: "Chemical Bonding", lessons: 6 },
    { title: "Acids & Bases", lessons: 6 },
    { title: "Organic Chemistry", lessons: 6 },
    { title: "Practical Lab", lessons: 6 },
  ],

  requirements: [
    "Basic science knowledge",
    "Notebook",
  ],
},

{
  id: 5,
  slug: "biology",

  title: "Biology",

  description:
    "Study living organisms, genetics, ecology, anatomy, and human health.",

  longDescription:
    "Gain knowledge about living systems through diagrams, laboratory activities, and real-life biological applications.",

  grade: "Grade 10",

  category: "Science",

  teacher: "David Clark",

  duration: "6 Months",

  lessons: 32,

  students: 342,

  rating: 4.9,

  image: "/images/courses/biology.jpg",

  featured: true,

  outcomes: [
    "Understand cell biology",
    "Learn genetics",
    "Study ecosystems",
    "Improve observation skills",
    "Perform biological experiments",
  ],

  curriculum: [
    { title: "Cell Biology", lessons: 6 },
    { title: "Genetics", lessons: 6 },
    { title: "Human Body", lessons: 8 },
    { title: "Ecology", lessons: 6 },
    { title: "Practical", lessons: 6 },
  ],

  requirements: [
    "Basic science knowledge",
    "Notebook",
  ],
},

{
  id: 6,
  slug: "english",

  title: "English",

  description:
    "Develop grammar, writing, speaking, listening, and literature skills.",

  longDescription:
    "Improve English communication through reading, writing, grammar exercises, presentations, and literature studies.",

  grade: "Grade 10",

  category: "Language",

  teacher: "Sophia Martinez",

  duration: "6 Months",

  lessons: 28,

  students: 460,

  rating: 4.9,

  image: "/images/courses/english.jpg",

  featured: true,

  outcomes: [
    "Improve grammar",
    "Write essays confidently",
    "Enhance speaking skills",
    "Develop vocabulary",
    "Analyze literature",
  ],

  curriculum: [
    { title: "Grammar", lessons: 6 },
    { title: "Writing", lessons: 6 },
    { title: "Reading", lessons: 6 },
    { title: "Speaking", lessons: 5 },
    { title: "Literature", lessons: 5 },
  ],

  requirements: [
    "Basic English knowledge",
    "Notebook",
  ],
},

{
  id: 7,
  slug: "nepali",

  title: "Nepali",

  description:
    "Strengthen Nepali language skills through grammar, literature, and writing.",

  longDescription:
    "Students enhance reading, writing, speaking, and literary analysis in Nepali while learning cultural values.",

  grade: "Grade 10",

  category: "Language",

  teacher: "Ram Prasad Sharma",

  duration: "6 Months",

  lessons: 26,

  students: 398,

  rating: 4.8,

  image: "/images/courses/nepali.jpg",

  featured: false,

  outcomes: [
    "Improve grammar",
    "Enhance writing",
    "Read literature",
    "Develop communication",
    "Learn cultural heritage",
  ],

  curriculum: [
    { title: "Grammar", lessons: 6 },
    { title: "Essay Writing", lessons: 5 },
    { title: "Poetry", lessons: 5 },
    { title: "Stories", lessons: 5 },
    { title: "Revision", lessons: 5 },
  ],

  requirements: [
    "Basic Nepali knowledge",
    "Notebook",
  ],
},

{
  id: 8,
  slug: "social-studies",

  title: "Social Studies",

  description:
    "Understand history, geography, civics, economics, and global citizenship.",

  longDescription:
    "This course helps students understand societies, cultures, governance, economics, and historical developments through engaging discussions.",

  grade: "Grade 10",

  category: "Humanities",

  teacher: "Olivia Thomas",

  duration: "6 Months",

  lessons: 28,

  students: 265,

  rating: 4.7,

  image: "/images/courses/social.jpg",

  featured: false,

  outcomes: [
    "Understand history",
    "Learn geography",
    "Develop civic awareness",
    "Analyze economic concepts",
    "Think critically",
  ],

  curriculum: [
    { title: "History", lessons: 6 },
    { title: "Geography", lessons: 6 },
    { title: "Economics", lessons: 5 },
    { title: "Civics", lessons: 5 },
    { title: "Global Issues", lessons: 6 },
  ],

  requirements: [
    "Notebook",
    "Interest in society",
  ],
},

{
  id: 9,
  slug: "accounting",

  title: "Accounting",

  description:
    "Learn bookkeeping, financial statements, and accounting principles.",

  longDescription:
    "Students gain practical accounting skills by preparing journals, ledgers, trial balances, and financial reports.",

  grade: "Grade 11",

  category: "Commerce",

  teacher: "Daniel Lee",

  duration: "6 Months",

  lessons: 30,

  students: 250,

  rating: 4.8,

  image: "/images/courses/accounting.jpg",

  featured: false,

  outcomes: [
    "Prepare journals",
    "Maintain ledgers",
    "Create financial reports",
    "Understand accounting principles",
    "Analyze transactions",
  ],

  curriculum: [
    { title: "Accounting Basics", lessons: 6 },
    { title: "Journal Entries", lessons: 6 },
    { title: "Ledger", lessons: 6 },
    { title: "Financial Statements", lessons: 6 },
    { title: "Practice", lessons: 6 },
  ],

  requirements: [
    "Basic mathematics",
    "Notebook",
  ],
  },

]