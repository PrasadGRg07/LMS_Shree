export interface TimetableEntry {
  id: number;

  day: string;

  time: string;

  subject: string;

  grade: string;

  section: string;

  classroom: string;

  teacher: string;

  type: "Theory" | "Practical";
}


export const timetable: TimetableEntry[] = [

  {
    id: 1,
    day: "Sunday",
    time: "10:00 AM - 11:00 AM",
    subject: "Computer Science",
    grade: "Grade 12",
    section: "A",
    classroom: "Lab 1",
    teacher: "Prasad Gurung",
    type: "Practical",
  },


  {
    id: 2,
    day: "Sunday",
    time: "11:00 AM - 12:00 PM",
    subject: "Mathematics",
    grade: "Grade 10",
    section: "A",
    classroom: "Room 204",
    teacher: "Ram Sharma",
    type: "Theory",
  },


  {
    id: 3,
    day: "Monday",
    time: "9:00 AM - 10:00 AM",
    subject: "English",
    grade: "Grade 9",
    section: "B",
    classroom: "Room 105",
    teacher: "Sita Gurung",
    type: "Theory",
  },


  {
    id: 4,
    day: "Monday",
    time: "10:00 AM - 11:00 AM",
    subject: "Science",
    grade: "Grade 10",
    section: "A",
    classroom: "Science Lab",
    teacher: "Hari Thapa",
    type: "Practical",
  },


  {
    id: 5,
    day: "Tuesday",
    time: "11:00 AM - 12:00 PM",
    subject: "Physics",
    grade: "Grade 12",
    section: "A",
    classroom: "Room 301",
    teacher: "Bikash KC",
    type: "Theory",
  },


  {
    id: 6,
    day: "Wednesday",
    time: "9:00 AM - 10:00 AM",
    subject: "Accountancy",
    grade: "Grade 11",
    section: "B",
    classroom: "Room 205",
    teacher: "Ramesh Adhikari",
    type: "Theory",
  },


  {
    id: 7,
    day: "Wednesday",
    time: "1:00 PM - 2:00 PM",
    subject: "Database Systems",
    grade: "Grade 12",
    section: "B",
    classroom: "Computer Lab",
    teacher: "Prasad Gurung",
    type: "Practical",
  },


  {
    id: 8,
    day: "Thursday",
    time: "10:00 AM - 11:00 AM",
    subject: "Biology",
    grade: "Grade 12",
    section: "A",
    classroom: "Biology Lab",
    teacher: "Sunita Shrestha",
    type: "Practical",
  },


  {
    id: 9,
    day: "Friday",
    time: "9:00 AM - 10:00 AM",
    subject: "Social Studies",
    grade: "Grade 10",
    section: "B",
    classroom: "Room 102",
    teacher: "Kiran Rai",
    type: "Theory",
  },


  {
    id: 10,
    day: "Friday",
    time: "11:00 AM - 12:00 PM",
    subject: "Programming",
    grade: "Grade 11",
    section: "A",
    classroom: "Computer Lab",
    teacher: "Prasad Gurung",
    type: "Practical",
  },

];


export default timetable;