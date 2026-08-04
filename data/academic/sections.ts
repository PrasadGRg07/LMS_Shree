export interface Section {
  id: number;
  name: string;
  roomNumber: string;
  floor: number;
  capacity: number;
  currentStudents: number;
  classTeacher: string;
  academicYear: string;
  status: "Active" | "Inactive";
}

export const sections: Section[] = [
  {
    id: 1,
    name: "A",
    roomNumber: "101",
    floor: 1,
    capacity: 40,
    currentStudents: 38,
    classTeacher: "Ram Sharma",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 2,
    name: "B",
    roomNumber: "102",
    floor: 1,
    capacity: 40,
    currentStudents: 36,
    classTeacher: "Sita Karki",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 3,
    name: "C",
    roomNumber: "103",
    floor: 1,
    capacity: 40,
    currentStudents: 39,
    classTeacher: "Hari Adhikari",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 4,
    name: "D",
    roomNumber: "104",
    floor: 1,
    capacity: 40,
    currentStudents: 37,
    classTeacher: "Anita Gurung",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 5,
    name: "E",
    roomNumber: "201",
    floor: 2,
    capacity: 40,
    currentStudents: 35,
    classTeacher: "Bikash Rai",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 6,
    name: "F",
    roomNumber: "202",
    floor: 2,
    capacity: 40,
    currentStudents: 34,
    classTeacher: "Nirmala Thapa",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 7,
    name: "G",
    roomNumber: "203",
    floor: 2,
    capacity: 40,
    currentStudents: 32,
    classTeacher: "Prakash Bista",
    academicYear: "2026/27",
    status: "Active",
  },
  {
    id: 8,
    name: "H",
    roomNumber: "204",
    floor: 2,
    capacity: 40,
    currentStudents: 30,
    classTeacher: "Sunita KC",
    academicYear: "2026/27",
    status: "Active",
  },
];

export const sectionNames = sections.map((section) => section.name);

export const activeSections = sections.filter(
  (section) => section.status === "Active"
);

export const totalSectionCapacity = sections.reduce(
  (total, section) => total + section.capacity,
  0
);

export const totalCurrentStudents = sections.reduce(
  (total, section) => total + section.currentStudents,
  0
);