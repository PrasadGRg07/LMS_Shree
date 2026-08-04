export interface Exam {
  id: number;

  title: string;

  examType: "Unit Test" | "Terminal Exam" | "Final Exam";

  subject: string;

  grade: string;

  section: string;

  date: string;

  startTime: string;

  duration: string;

  totalMarks: number;

  teacher: string;

  room: string;

  status: "Upcoming" | "Completed";
}


export const exams: Exam[] = [

  {
    id: 1,
    title: "First Unit Test",
    examType: "Unit Test",
    subject: "Mathematics",
    grade: "Grade 10",
    section: "A",
    date: "2026-08-15",
    startTime: "10:00 AM",
    duration: "1 Hour",
    totalMarks: 50,
    teacher: "Ram Sharma",
    room: "Room 204",
    status: "Upcoming",
  },


  {
    id: 2,
    title: "English Assessment",
    examType: "Unit Test",
    subject: "English",
    grade: "Grade 9",
    section: "B",
    date: "2026-08-17",
    startTime: "11:00 AM",
    duration: "1 Hour",
    totalMarks: 50,
    teacher: "Sita Gurung",
    room: "Room 105",
    status: "Upcoming",
  },


  {
    id: 3,
    title: "Computer Programming Exam",
    examType: "Terminal Exam",
    subject: "Computer Science",
    grade: "Grade 12",
    section: "A",
    date: "2026-09-05",
    startTime: "9:00 AM",
    duration: "2 Hours",
    totalMarks: 75,
    teacher: "Prasad Gurung",
    room: "Computer Lab",
    status: "Upcoming",
  },


  {
    id: 4,
    title: "Science Practical Exam",
    examType: "Final Exam",
    subject: "Science",
    grade: "Grade 10",
    section: "A",
    date: "2026-09-10",
    startTime: "12:00 PM",
    duration: "2 Hours",
    totalMarks: 50,
    teacher: "Hari Thapa",
    room: "Science Lab",
    status: "Upcoming",
  },


  {
    id: 5,
    title: "Physics Terminal Exam",
    examType: "Terminal Exam",
    subject: "Physics",
    grade: "Grade 12",
    section: "A",
    date: "2026-09-12",
    startTime: "10:00 AM",
    duration: "3 Hours",
    totalMarks: 100,
    teacher: "Bikash KC",
    room: "Room 301",
    status: "Upcoming",
  },


  {
    id: 6,
    title: "Accountancy Test",
    examType: "Unit Test",
    subject: "Accountancy",
    grade: "Grade 11",
    section: "B",
    date: "2026-08-22",
    startTime: "9:30 AM",
    duration: "1.5 Hours",
    totalMarks: 50,
    teacher: "Ramesh Adhikari",
    room: "Room 205",
    status: "Upcoming",
  },


  {
    id: 7,
    title: "Database Practical",
    examType: "Final Exam",
    subject: "Database Systems",
    grade: "Grade 12",
    section: "B",
    date: "2026-09-15",
    startTime: "1:00 PM",
    duration: "2 Hours",
    totalMarks: 50,
    teacher: "Prasad Gurung",
    room: "Computer Lab",
    status: "Upcoming",
  },


  {
    id: 8,
    title: "Nepali Literature Exam",
    examType: "Terminal Exam",
    subject: "Nepali",
    grade: "Grade 11",
    section: "A",
    date: "2026-09-18",
    startTime: "10:00 AM",
    duration: "2 Hours",
    totalMarks: 75,
    teacher: "Maya Rai",
    room: "Room 201",
    status: "Upcoming",
  },


  {
    id: 9,
    title: "Biology Practical",
    examType: "Final Exam",
    subject: "Biology",
    grade: "Grade 12",
    section: "A",
    date: "2026-09-20",
    startTime: "11:00 AM",
    duration: "2 Hours",
    totalMarks: 50,
    teacher: "Sunita Shrestha",
    room: "Biology Lab",
    status: "Upcoming",
  },


  {
    id: 10,
    title: "Social Studies Final",
    examType: "Final Exam",
    subject: "Social Studies",
    grade: "Grade 10",
    section: "B",
    date: "2026-09-25",
    startTime: "9:00 AM",
    duration: "2 Hours",
    totalMarks: 100,
    teacher: "Kiran Rai",
    room: "Room 102",
    status: "Upcoming",
  },

];


export default exams;