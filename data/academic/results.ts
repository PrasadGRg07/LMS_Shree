export interface Result {
  id: number;

  studentId: number;

  studentName: string;

  grade: string;

  section: string;

  subject: string;

  exam: string;

  marksObtained: number;

  totalMarks: number;

  percentage: number;

  gradePoint: string;

  resultStatus: "Pass" | "Fail";

  teacher: string;
}


export const results: Result[] = [

  {
    id: 1,
    studentId: 1,
    studentName: "Aarav Sharma",
    grade: "Grade 10",
    section: "A",
    subject: "Mathematics",
    exam: "First Unit Test",
    marksObtained: 42,
    totalMarks: 50,
    percentage: 84,
    gradePoint: "A",
    resultStatus: "Pass",
    teacher: "Ram Sharma",
  },


  {
    id: 2,
    studentId: 2,
    studentName: "Prisha Gurung",
    grade: "Grade 10",
    section: "A",
    subject: "English",
    exam: "First Unit Test",
    marksObtained: 46,
    totalMarks: 50,
    percentage: 92,
    gradePoint: "A+",
    resultStatus: "Pass",
    teacher: "Sita Gurung",
  },


  {
    id: 3,
    studentId: 3,
    studentName: "Bibek Thapa",
    grade: "Grade 11",
    section: "B",
    subject: "Accountancy",
    exam: "Terminal Exam",
    marksObtained: 78,
    totalMarks: 100,
    percentage: 78,
    gradePoint: "B+",
    resultStatus: "Pass",
    teacher: "Ramesh Adhikari",
  },


  {
    id: 4,
    studentId: 4,
    studentName: "Sanjana Rai",
    grade: "Grade 12",
    section: "A",
    subject: "Physics",
    exam: "Terminal Exam",
    marksObtained: 88,
    totalMarks: 100,
    percentage: 88,
    gradePoint: "A",
    resultStatus: "Pass",
    teacher: "Bikash KC",
  },


  {
    id: 5,
    studentId: 5,
    studentName: "Nischal Shrestha",
    grade: "Grade 9",
    section: "B",
    subject: "Science",
    exam: "Unit Test",
    marksObtained: 35,
    totalMarks: 50,
    percentage: 70,
    gradePoint: "B",
    resultStatus: "Pass",
    teacher: "Hari Thapa",
  },


  {
    id: 6,
    studentId: 6,
    studentName: "Aayush KC",
    grade: "Grade 8",
    section: "A",
    subject: "Mathematics",
    exam: "Unit Test",
    marksObtained: 30,
    totalMarks: 50,
    percentage: 60,
    gradePoint: "C+",
    resultStatus: "Pass",
    teacher: "Ram Sharma",
  },


  {
    id: 7,
    studentId: 7,
    studentName: "Srijana Lama",
    grade: "Grade 11",
    section: "A",
    subject: "Chemistry",
    exam: "Terminal Exam",
    marksObtained: 91,
    totalMarks: 100,
    percentage: 91,
    gradePoint: "A+",
    resultStatus: "Pass",
    teacher: "Sunita Shrestha",
  },


  {
    id: 8,
    studentId: 8,
    studentName: "Roshan Rai",
    grade: "Grade 12",
    section: "B",
    subject: "Computer Science",
    exam: "Final Exam",
    marksObtained: 95,
    totalMarks: 100,
    percentage: 95,
    gradePoint: "A+",
    resultStatus: "Pass",
    teacher: "Prasad Gurung",
  },


  {
    id: 9,
    studentId: 9,
    studentName: "Maya Thapa",
    grade: "Grade 10",
    section: "B",
    subject: "Social Studies",
    exam: "Unit Test",
    marksObtained: 28,
    totalMarks: 50,
    percentage: 56,
    gradePoint: "C",
    resultStatus: "Pass",
    teacher: "Kiran Rai",
  },


  {
    id: 10,
    studentId: 10,
    studentName: "Bibisha KC",
    grade: "Grade 7",
    section: "A",
    subject: "English",
    exam: "Unit Test",
    marksObtained: 18,
    totalMarks: 50,
    percentage: 36,
    gradePoint: "F",
    resultStatus: "Fail",
    teacher: "Sita Gurung",
  },

];


export default results;