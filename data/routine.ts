export interface Routine {
  id: number;

  day:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday";

  startTime: string;
  endTime: string;

  subject: string;

  teacher: string;

  room: string;

  grade: string;

  section: string;
}

export const routine: Routine[] = [
  {
    id: 1,
    day: "Sunday",
    startTime: "08:00",
    endTime: "08:45",
    subject: "English",
    teacher: "Mr. Sharma",
    room: "101",
    grade: "10",
    section: "A",
  },
  {
    id: 2,
    day: "Sunday",
    startTime: "08:50",
    endTime: "09:35",
    subject: "Mathematics",
    teacher: "Mrs. Gurung",
    room: "205",
    grade: "10",
    section: "A",
  },
  {
    id: 3,
    day: "Sunday",
    startTime: "09:40",
    endTime: "10:25",
    subject: "Science",
    teacher: "Mr. Thapa",
    room: "Lab 1",
    grade: "10",
    section: "A",
  },
  {
    id: 4,
    day: "Sunday",
    startTime: "10:40",
    endTime: "11:25",
    subject: "Computer",
    teacher: "Mr. Karki",
    room: "Computer Lab",
    grade: "10",
    section: "A",
  },
  {
    id: 5,
    day: "Monday",
    startTime: "08:00",
    endTime: "08:45",
    subject: "Nepali",
    teacher: "Mrs. Rai",
    room: "104",
    grade: "10",
    section: "A",
  },
  {
    id: 6,
    day: "Monday",
    startTime: "08:50",
    endTime: "09:35",
    subject: "Social Studies",
    teacher: "Mr. Lama",
    room: "203",
    grade: "10",
    section: "A",
  },
  {
    id: 7,
    day: "Monday",
    startTime: "09:40",
    endTime: "10:25",
    subject: "Computer",
    teacher: "Mr. Karki",
    room: "Computer Lab",
    grade: "10",
    section: "A",
  },
  {
    id: 8,
    day: "Monday",
    startTime: "10:40",
    endTime: "11:25",
    subject: "Health",
    teacher: "Mrs. KC",
    room: "107",
    grade: "10",
    section: "A",
  },
];