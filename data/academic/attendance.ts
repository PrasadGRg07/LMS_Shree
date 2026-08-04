export interface AttendanceRecord {
  id: number;

  studentId: number;

  studentName: string;

  grade: string;

  section: string;

  date: string;

  status: "Present" | "Absent" | "Late";

  markedBy: string;
}


export const attendanceRecords: AttendanceRecord[] = [

  {
    id: 1,
    studentId: 1,
    studentName: "Aarav Sharma",
    grade: "Grade 10",
    section: "A",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Prasad Gurung",
  },


  {
    id: 2,
    studentId: 2,
    studentName: "Prisha Gurung",
    grade: "Grade 10",
    section: "A",
    date: "2026-08-04",
    status: "Absent",
    markedBy: "Prasad Gurung",
  },


  {
    id: 3,
    studentId: 3,
    studentName: "Bibek Thapa",
    grade: "Grade 11",
    section: "B",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Ram Sharma",
  },


  {
    id: 4,
    studentId: 4,
    studentName: "Sanjana Rai",
    grade: "Grade 12",
    section: "A",
    date: "2026-08-04",
    status: "Late",
    markedBy: "Maya Rai",
  },


  {
    id: 5,
    studentId: 5,
    studentName: "Nischal Shrestha",
    grade: "Grade 9",
    section: "B",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Hari Thapa",
  },


  {
    id: 6,
    studentId: 6,
    studentName: "Aayush KC",
    grade: "Grade 8",
    section: "A",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Sita Gurung",
  },


  {
    id: 7,
    studentId: 7,
    studentName: "Srijana Lama",
    grade: "Grade 11",
    section: "A",
    date: "2026-08-04",
    status: "Absent",
    markedBy: "Ram Sharma",
  },


  {
    id: 8,
    studentId: 8,
    studentName: "Roshan Rai",
    grade: "Grade 12",
    section: "B",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Anil Shrestha",
  },


  {
    id: 9,
    studentId: 9,
    studentName: "Maya Thapa",
    grade: "Grade 10",
    section: "B",
    date: "2026-08-04",
    status: "Late",
    markedBy: "Prasad Gurung",
  },


  {
    id: 10,
    studentId: 10,
    studentName: "Bibisha KC",
    grade: "Grade 7",
    section: "A",
    date: "2026-08-04",
    status: "Present",
    markedBy: "Sita Gurung",
  },

];


export default attendanceRecords;