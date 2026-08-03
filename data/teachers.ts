export interface Teacher {
  id: number;
  slug: string;

  name: string;
  subject: string;
  qualification: string;

  experience: string;
  bio: string;

  image: string;

  rating: number;
  students: number;

  featured: boolean;

  skills: string[];
}

export const teachers: Teacher[] = [
  {
    id: 1,
    slug: "john-smith",

    name: "John Smith",
    subject: "Computer Science",
    qualification: "MSc in Computer Science",

    experience: "8 Years Experience",

    bio: "Experienced computer science teacher specializing in programming, web development, and software engineering.",

    image: "/images/teachers/john.jpg",

    rating: 4.9,
    students: 520,

    featured: true,

    skills: [
      "Programming",
      "Web Development",
      "Database",
      "Software Engineering",
    ],
  },

  {
    id: 2,
    slug: "emily-johnson",

    name: "Emily Johnson",
    subject: "Mathematics",
    qualification: "Master's in Mathematics",

    experience: "10 Years Experience",

    bio: "Passionate mathematics educator helping students understand concepts through practical problem solving.",

    image: "/images/teachers/emily.jpg",

    rating: 4.8,
    students: 430,

    featured: true,

    skills: [
      "Algebra",
      "Geometry",
      "Calculus",
      "Problem Solving",
    ],
  },

  {
    id: 3,
    slug: "michael-brown",

    name: "Michael Brown",
    subject: "Physics",
    qualification: "MSc in Physics",

    experience: "9 Years Experience",

    bio: "Physics teacher focused on experiments, scientific thinking, and real-world applications.",

    image: "/images/teachers/michael.jpg",

    rating: 4.7,
    students: 380,

    featured: true,

    skills: [
      "Mechanics",
      "Electricity",
      "Physics Experiments",
    ],
  },

  {
    id: 4,
    slug: "sarah-wilson",

    name: "Sarah Wilson",
    subject: "Chemistry",
    qualification: "Master's in Chemistry",

    experience: "7 Years Experience",

    bio: "Chemistry instructor who combines laboratory activities with strong theoretical foundations.",

    image: "/images/teachers/sarah.jpg",

    rating: 4.8,
    students: 350,

    featured: false,

    skills: [
      "Organic Chemistry",
      "Laboratory",
      "Chemical Reactions",
    ],
  },

  {
    id: 5,
    slug: "david-clark",

    name: "David Clark",
    subject: "Biology",
    qualification: "MSc in Biology",

    experience: "6 Years Experience",

    bio: "Biology educator helping students explore life sciences, genetics, and human biology.",

    image: "/images/teachers/david.jpg",

    rating: 4.9,
    students: 410,

    featured: false,

    skills: [
      "Genetics",
      "Human Biology",
      "Ecology",
    ],
  },

  {
    id: 6,
    slug: "sophia-martinez",

    name: "Sophia Martinez",
    subject: "English",

    qualification: "MA in English Literature",

    experience: "8 Years Experience",

    bio: "English teacher specializing in communication skills, writing, grammar, and literature.",

    image: "/images/teachers/sophia.jpg",

    rating: 4.9,
    students: 460,

    featured: true,

    skills: [
      "Grammar",
      "Writing",
      "Communication",
      "Literature",
    ],
  },
];