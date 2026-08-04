export type GradeLevel =
  | "Pre-Primary"
  | "Primary"
  | "Lower Secondary"
  | "Secondary"
  | "Higher Secondary";

export interface Grade {
  id: number;
  name: string;
  shortName: string;
  level: GradeLevel;
  minimumAge: number;
  maximumAge: number;
  totalSections: number;
  totalStudents: number;
  classTeacher: string;
  academicYear: string;
}

export const grades: Grade[] = [
  {
    id: 1,
    name: "Nursery",
    shortName: "NUR",
    level: "Pre-Primary",
    minimumAge: 3,
    maximumAge: 4,
    totalSections: 2,
    totalStudents: 48,
    classTeacher: "Anita Sharma",
    academicYear: "2026/27",
  },
  {
    id: 2,
    name: "LKG",
    shortName: "LKG",
    level: "Pre-Primary",
    minimumAge: 4,
    maximumAge: 5,
    totalSections: 2,
    totalStudents: 52,
    classTeacher: "Suman Rai",
    academicYear: "2026/27",
  },
  {
    id: 3,
    name: "UKG",
    shortName: "UKG",
    level: "Pre-Primary",
    minimumAge: 5,
    maximumAge: 6,
    totalSections: 2,
    totalStudents: 56,
    classTeacher: "Rita Thapa",
    academicYear: "2026/27",
  },
  {
    id: 4,
    name: "Grade 1",
    shortName: "G1",
    level: "Primary",
    minimumAge: 6,
    maximumAge: 7,
    totalSections: 3,
    totalStudents: 96,
    classTeacher: "Bikash Karki",
    academicYear: "2026/27",
  },
  {
    id: 5,
    name: "Grade 2",
    shortName: "G2",
    level: "Primary",
    minimumAge: 7,
    maximumAge: 8,
    totalSections: 3,
    totalStudents: 98,
    classTeacher: "Sabina KC",
    academicYear: "2026/27",
  },
  {
    id: 6,
    name: "Grade 3",
    shortName: "G3",
    level: "Primary",
    minimumAge: 8,
    maximumAge: 9,
    totalSections: 3,
    totalStudents: 101,
    classTeacher: "Dipesh Adhikari",
    academicYear: "2026/27",
  },
  {
    id: 7,
    name: "Grade 4",
    shortName: "G4",
    level: "Primary",
    minimumAge: 9,
    maximumAge: 10,
    totalSections: 3,
    totalStudents: 104,
    classTeacher: "Mina Gurung",
    academicYear: "2026/27",
  },
  {
    id: 8,
    name: "Grade 5",
    shortName: "G5",
    level: "Primary",
    minimumAge: 10,
    maximumAge: 11,
    totalSections: 3,
    totalStudents: 108,
    classTeacher: "Roshan Sharma",
    academicYear: "2026/27",
  },
  {
    id: 9,
    name: "Grade 6",
    shortName: "G6",
    level: "Lower Secondary",
    minimumAge: 11,
    maximumAge: 12,
    totalSections: 4,
    totalStudents: 132,
    classTeacher: "Prakash Dahal",
    academicYear: "2026/27",
  },
  {
    id: 10,
    name: "Grade 7",
    shortName: "G7",
    level: "Lower Secondary",
    minimumAge: 12,
    maximumAge: 13,
    totalSections: 4,
    totalStudents: 136,
    classTeacher: "Nirmala Poudel",
    academicYear: "2026/27",
  },
  {
    id: 11,
    name: "Grade 8",
    shortName: "G8",
    level: "Lower Secondary",
    minimumAge: 13,
    maximumAge: 14,
    totalSections: 4,
    totalStudents: 140,
    classTeacher: "Kamal Bista",
    academicYear: "2026/27",
  },
  {
    id: 12,
    name: "Grade 9",
    shortName: "G9",
    level: "Secondary",
    minimumAge: 14,
    maximumAge: 15,
    totalSections: 4,
    totalStudents: 148,
    classTeacher: "Sarita Khadka",
    academicYear: "2026/27",
  },
  {
    id: 13,
    name: "Grade 10",
    shortName: "G10",
    level: "Secondary",
    minimumAge: 15,
    maximumAge: 16,
    totalSections: 4,
    totalStudents: 152,
    classTeacher: "Ramesh Shrestha",
    academicYear: "2026/27",
  },
  {
    id: 14,
    name: "Grade 11",
    shortName: "G11",
    level: "Higher Secondary",
    minimumAge: 16,
    maximumAge: 17,
    totalSections: 5,
    totalStudents: 168,
    classTeacher: "Sunil Gautam",
    academicYear: "2026/27",
  },
  {
    id: 15,
    name: "Grade 12",
    shortName: "G12",
    level: "Higher Secondary",
    minimumAge: 17,
    maximumAge: 18,
    totalSections: 5,
    totalStudents: 170,
    classTeacher: "Manisha Koirala",
    academicYear: "2026/27",
  },
];

export const gradeLevels: GradeLevel[] = [
  "Pre-Primary",
  "Primary",
  "Lower Secondary",
  "Secondary",
  "Higher Secondary",
];

export const totalSchoolStudents = grades.reduce(
  (total, grade) => total + grade.totalStudents,
  0
);

export const totalSchoolSections = grades.reduce(
  (total, grade) => total + grade.totalSections,
  0
);