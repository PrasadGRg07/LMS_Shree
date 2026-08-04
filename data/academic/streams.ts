export interface Stream {
  id: number;
  name: string;
  code: string;
  description: string;
  grades: string[];
  compulsorySubjects: number;
  electiveSubjects: number;
  totalStudents: number;
  coordinator: string;
  color: string;
  icon: string;
  status: "Active" | "Inactive";
}

export const streams: Stream[] = [
  {
    id: 1,
    name: "Science",
    code: "SCI",
    description:
      "Designed for students pursuing careers in engineering, medicine, IT, research, and science.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 168,
    coordinator: "Sunil Gautam",
    color: "#2563EB",
    icon: "Microscope",
    status: "Active",
  },

  {
    id: 2,
    name: "Management",
    code: "MGT",
    description:
      "Focused on business, entrepreneurship, accounting, finance, and management studies.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 192,
    coordinator: "Ramesh Shrestha",
    color: "#16A34A",
    icon: "Briefcase",
    status: "Active",
  },

  {
    id: 3,
    name: "Humanities",
    code: "HUM",
    description:
      "Includes social sciences, languages, psychology, sociology, and communication.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 74,
    coordinator: "Sarita Khadka",
    color: "#9333EA",
    icon: "BookOpen",
    status: "Active",
  },

  {
    id: 4,
    name: "Education",
    code: "EDU",
    description:
      "Prepares students for careers in teaching, pedagogy, and educational leadership.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 42,
    coordinator: "Manisha Koirala",
    color: "#EA580C",
    icon: "GraduationCap",
    status: "Active",
  },

  {
    id: 5,
    name: "Law",
    code: "LAW",
    description:
      "Introduces legal studies, constitutional law, civic education, and jurisprudence.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 28,
    coordinator: "Prakash Dahal",
    color: "#DC2626",
    icon: "Scale",
    status: "Active",
  },

  {
    id: 6,
    name: "Agriculture",
    code: "AGR",
    description:
      "Covers crop production, animal science, horticulture, and sustainable farming.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 36,
    coordinator: "Bikash Karki",
    color: "#65A30D",
    icon: "Leaf",
    status: "Active",
  },

  {
    id: 7,
    name: "Technical & Vocational",
    code: "TVT",
    description:
      "Skill-based education including engineering, hospitality, IT, and vocational training.",
    grades: ["Grade 11", "Grade 12"],
    compulsorySubjects: 5,
    electiveSubjects: 2,
    totalStudents: 58,
    coordinator: "Dipesh Adhikari",
    color: "#0891B2",
    icon: "Wrench",
    status: "Active",
  },
];

export const activeStreams = streams.filter(
  (stream) => stream.status === "Active"
);

export const streamNames = streams.map((stream) => stream.name);

export const totalHigherSecondaryStudents = streams.reduce(
  (total, stream) => total + stream.totalStudents,
  0
);