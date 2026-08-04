export interface TeacherCourse {
  id: number;
  slug: string;

  title: string;
  subject: string;
  grade: string;
  section: string;

  students: number;
  lessons: number;
  assignments: number;

  progress: number;

  image: string;

  description: string;
}

export const teacherCourses: TeacherCourse[] = [
  {
    id: 1,
    slug: "english-grade-10-a",
    title: "English",
    subject: "English",
    grade: "Grade 10",
    section: "A",
    students: 42,
    lessons: 24,
    assignments: 8,
    progress: 88,
    image: "/images/courses/english.jpg",
    description:
      "Reading, writing, grammar, literature, communication and language skills.",
  },

  {
    id: 2,
    slug: "nepali-grade-10-a",
    title: "Nepali",
    subject: "Nepali",
    grade: "Grade 10",
    section: "A",
    students: 42,
    lessons: 22,
    assignments: 7,
    progress: 84,
    image: "/images/courses/nepali.jpg",
    description:
      "Nepali language, grammar, essay writing, literature and communication.",
  },

  {
    id: 3,
    slug: "mathematics-grade-10-a",
    title: "Mathematics",
    subject: "Mathematics",
    grade: "Grade 10",
    section: "A",
    students: 45,
    lessons: 30,
    assignments: 10,
    progress: 92,
    image: "/images/courses/mathematics.jpg",
    description:
      "Algebra, geometry, trigonometry, statistics and problem-solving techniques.",
  },

  {
    id: 4,
    slug: "science-grade-10-a",
    title: "Science",
    subject: "Science",
    grade: "Grade 10",
    section: "A",
    students: 43,
    lessons: 28,
    assignments: 9,
    progress: 90,
    image: "/images/courses/science.jpg",
    description:
      "Physics, chemistry, biology, environmental science and practical experiments.",
  },

  {
    id: 5,
    slug: "social-studies-grade-10-a",
    title: "Social Studies",
    subject: "Social Studies",
    grade: "Grade 10",
    section: "A",
    students: 40,
    lessons: 20,
    assignments: 6,
    progress: 82,
    image: "/images/courses/social.jpg",
    description:
      "History, geography, civics, economics and Nepalese society.",
  },

  {
    id: 6,
    slug: "health-grade-10-a",
    title: "Health, Population & Environment",
    subject: "Health",
    grade: "Grade 10",
    section: "A",
    students: 39,
    lessons: 18,
    assignments: 5,
    progress: 80,
    image: "/images/courses/health.jpg",
    description:
      "Human health, nutrition, reproductive health, environment and sanitation.",
  },

  {
    id: 7,
    slug: "computer-grade-10-a",
    title: "Computer Science",
    subject: "Computer Science",
    grade: "Grade 10",
    section: "A",
    students: 48,
    lessons: 22,
    assignments: 8,
    progress: 95,
    image: "/images/courses/computer.jpg",
    description:
      "Computer fundamentals, office applications, programming and networking.",
  },

  {
    id: 8,
    slug: "accountancy-grade-11-b",
    title: "Accountancy",
    subject: "Accountancy",
    grade: "Grade 11",
    section: "B",
    students: 36,
    lessons: 24,
    assignments: 7,
    progress: 86,
    image: "/images/courses/accounting.jpg",
    description:
      "Accounting principles, journal entries, ledger, trial balance and financial statements.",
  },

  {
    id: 9,
    slug: "economics-grade-11-b",
    title: "Economics",
    subject: "Economics",
    grade: "Grade 11",
    section: "B",
    students: 34,
    lessons: 22,
    assignments: 6,
    progress: 84,
    image: "/images/courses/economics.jpg",
    description:
      "Microeconomics, macroeconomics, market structures and Nepalese economy.",
  },

  {
    id: 10,
    slug: "business-studies-grade-11-b",
    title: "Business Studies",
    subject: "Business Studies",
    grade: "Grade 11",
    section: "B",
    students: 38,
    lessons: 20,
    assignments: 6,
    progress: 81,
    image: "/images/courses/business.jpg",
    description:
      "Business management, entrepreneurship, marketing and organizational behavior.",
  },

  {
    id: 11,
    slug: "physics-grade-12-a",
    title: "Physics",
    subject: "Physics",
    grade: "Grade 12",
    section: "A",
    students: 30,
    lessons: 30,
    assignments: 10,
    progress: 93,
    image: "/images/courses/physics.jpg",
    description:
      "Mechanics, electricity, magnetism, optics and modern physics.",
  },

  {
    id: 12,
    slug: "chemistry-grade-12-a",
    title: "Chemistry",
    subject: "Chemistry",
    grade: "Grade 12",
    section: "A",
    students: 30,
    lessons: 28,
    assignments: 9,
    progress: 91,
    image: "/images/courses/chemistry.jpg",
    description:
      "Organic, inorganic and physical chemistry with laboratory practicals.",
  },

  {
    id: 13,
    slug: "biology-grade-12-a",
    title: "Biology",
    subject: "Biology",
    grade: "Grade 12",
    section: "A",
    students: 28,
    lessons: 26,
    assignments: 8,
    progress: 89,
    image: "/images/courses/biology.jpg",
    description:
      "Botany, zoology, genetics, biotechnology and ecology.",
  },

  {
    id: 14,
    slug: "computer-science-grade-12-a",
    title: "Computer Science",
    subject: "Computer Science",
    grade: "Grade 12",
    section: "A",
    students: 32,
    lessons: 24,
    assignments: 8,
    progress: 94,
    image: "/images/courses/computer.jpg",
    description:
      "Programming, database systems, networking, web development and software engineering.",
  },

  {
    id: 15,
    slug: "optional-mathematics-grade-12-a",
    title: "Optional Mathematics",
    subject: "Optional Mathematics",
    grade: "Grade 12",
    section: "A",
    students: 26,
    lessons: 28,
    assignments: 9,
    progress: 90,
    image: "/images/courses/optional-math.jpg",
    description:
      "Advanced algebra, vectors, calculus and mathematical modeling.",
  },
];