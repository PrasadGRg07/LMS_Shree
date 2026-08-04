export interface Assignment {
  id: number;

  title: string;

  subject: string;

  grade: string;

  section: string;

  teacher: string;

  description: string;

  dueDate: string;

  totalMarks: number;

  submitted: number;

  totalStudents: number;

  status: "Pending" | "Completed" | "Overdue";
}


export const assignments: Assignment[] = [

  {
    id: 1,

    title: "Algebra Practice Set",

    subject: "Mathematics",

    grade: "Grade 10",

    section: "A",

    teacher: "Ram Sharma",

    description:
      "Solve algebra equations and submit your worksheet.",

    dueDate:
      "2026-08-10",

    totalMarks:
      20,

    submitted:
      38,

    totalStudents:
      42,

    status:
      "Pending",
  },


  {
    id: 2,

    title: "Essay Writing",

    subject: "English",

    grade: "Grade 9",

    section: "B",

    teacher: "Sita Gurung",

    description:
      "Write an essay about technology impact on education.",

    dueDate:
      "2026-08-12",

    totalMarks:
      25,

    submitted:
      35,

    totalStudents:
      40,

    status:
      "Pending",
  },


  {
    id: 3,

    title: "Computer Programming Task",

    subject: "Computer Science",

    grade: "Grade 12",

    section: "A",

    teacher: "Prasad Gurung",

    description:
      "Create a basic programming project using C language.",

    dueDate:
      "2026-08-05",

    totalMarks:
      50,

    submitted:
      32,

    totalStudents:
      32,

    status:
      "Completed",
  },


  {
    id: 4,

    title: "Science Practical Report",

    subject: "Science",

    grade: "Grade 10",

    section: "A",

    teacher: "Hari Thapa",

    description:
      "Submit laboratory experiment report.",

    dueDate:
      "2026-08-15",

    totalMarks:
      30,

    submitted:
      25,

    totalStudents:
      43,

    status:
      "Pending",
  },


  {
    id: 5,

    title: "Database Design Project",

    subject: "Computer Science",

    grade: "Grade 12",

    section: "B",

    teacher: "Anil Shrestha",

    description:
      "Create ER diagram and database schema.",

    dueDate:
      "2026-08-20",

    totalMarks:
      40,

    submitted:
      18,

    totalStudents:
      35,

    status:
      "Pending",
  },


  {
    id: 6,

    title: "Nepali Literature Review",

    subject: "Nepali",

    grade: "Grade 11",

    section: "A",

    teacher: "Maya Rai",

    description:
      "Review selected Nepali literature chapters.",

    dueDate:
      "2026-08-07",

    totalMarks:
      20,

    submitted:
      30,

    totalStudents:
      34,

    status:
      "Completed",
  },


  {
    id: 7,

    title: "Physics Numerical Problems",

    subject: "Physics",

    grade: "Grade 12",

    section: "A",

    teacher: "Bikash KC",

    description:
      "Solve mechanics numerical questions.",

    dueDate:
      "2026-08-18",

    totalMarks:
      35,

    submitted:
      20,

    totalStudents:
      30,

    status:
      "Pending",
  },


  {
    id: 8,

    title: "Accounting Journal Entries",

    subject: "Accountancy",

    grade: "Grade 11",

    section: "B",

    teacher: "Ramesh Adhikari",

    description:
      "Prepare journal and ledger entries.",

    dueDate:
      "2026-08-09",

    totalMarks:
      25,

    submitted:
      28,

    totalStudents:
      38,

    status:
      "Overdue",
  },


  {
    id: 9,

    title: "Biology Diagram Assignment",

    subject: "Biology",

    grade: "Grade 12",

    section: "A",

    teacher: "Sunita Shrestha",

    description:
      "Draw and explain biological diagrams.",

    dueDate:
      "2026-08-25",

    totalMarks:
      20,

    submitted:
      12,

    totalStudents:
      28,

    status:
      "Pending",
  },


  {
    id: 10,

    title: "Social Studies Project",

    subject: "Social Studies",

    grade: "Grade 10",

    section: "B",

    teacher: "Kiran Rai",

    description:
      "Prepare a project about Nepalese culture.",

    dueDate:
      "2026-08-30",

    totalMarks:
      30,

    submitted:
      15,

    totalStudents:
      40,

    status:
      "Pending",
  },

];


export default assignments;