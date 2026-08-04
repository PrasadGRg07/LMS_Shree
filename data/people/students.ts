export interface Student {
  id: number;

  studentId: string;

  firstName: string;
  lastName: string;
  fullName: string;

  gender: "Male" | "Female";

  dateOfBirth: string;

  email: string;
  phone: string;

  address: string;

  avatar: string;

  bloodGroup: string;

  grade: string;
  section: string;

  rollNumber: number;

  academicYear: string;

  stream: string;

  subjects: string[];

  parentId: number;

  guardianName: string;
  guardianPhone: string;

  admissionDate: string;

  attendance: number;

  averageGrade: number;

  rank: number;

  status:
    | "Active"
    | "Graduated"
    | "Inactive";

  achievements: string[];

  bio: string;
}


export const students: Student[] = [

  {
    id: 1,
    studentId: "STD-2026-0001",

    firstName: "Aarav",
    lastName: "Sharma",
    fullName: "Aarav Sharma",

    gender: "Male",

    dateOfBirth: "2010-04-15",

    email: "aarav.sharma@student.eduzin.edu.np",
    phone: "9800000001",

    address: "Kathmandu",

    avatar: "/images/students/student-1.jpg",

    bloodGroup: "A+",

    grade: "Grade 10",
    section: "A",

    rollNumber: 1,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Computer Science",
    ],

    parentId: 1,

    guardianName: "Raj Sharma",
    guardianPhone: "9845000001",

    admissionDate: "2020-04-10",

    attendance: 97,

    averageGrade: 92,

    rank: 1,

    status: "Active",

    achievements: [
      "Science Quiz Winner",
      "Mathematics Excellence Award",
    ],

    bio:
      "Hardworking student interested in science and technology.",
  },


  {
    id: 2,
    studentId: "STD-2026-0002",

    firstName: "Prisha",
    lastName: "Karki",
    fullName: "Prisha Karki",

    gender: "Female",

    dateOfBirth: "2010-08-21",

    email: "prisha.karki@student.eduzin.edu.np",

    phone: "9800000002",

    address: "Lalitpur",

    avatar: "/images/students/student-2.jpg",

    bloodGroup: "B+",

    grade: "Grade 10",
    section: "A",

    rollNumber: 2,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
    ],

    parentId: 2,

    guardianName: "Ramesh Karki",
    guardianPhone: "9845000002",

    admissionDate: "2020-04-12",

    attendance: 99,

    averageGrade: 90,

    rank: 2,

    status: "Active",

    achievements: [
      "Debate Competition Winner",
    ],

    bio:
      "Creative learner with strong communication skills.",
  },


  {
    id: 3,
    studentId: "STD-2026-0003",

    firstName: "Bibek",
    lastName: "Gurung",
    fullName: "Bibek Gurung",

    gender: "Male",

    dateOfBirth: "2011-02-10",

    email: "bibek.gurung@student.eduzin.edu.np",

    phone: "9800000003",

    address: "Pokhara",

    avatar: "/images/students/student-3.jpg",

    bloodGroup: "O+",

    grade: "Grade 9",
    section: "B",

    rollNumber: 5,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Computer Science",
    ],

    parentId: 3,

    guardianName: "Hari Gurung",
    guardianPhone: "9845000003",

    admissionDate: "2021-04-15",

    attendance: 95,

    averageGrade: 86,

    rank: 5,

    status: "Active",

    achievements: [
      "Football Team Member",
    ],

    bio:
      "Active student interested in sports and programming.",
  },


  {
    id: 4,
    studentId: "STD-2026-0004",

    firstName: "Sanjana",
    lastName: "Shrestha",
    fullName: "Sanjana Shrestha",

    gender: "Female",

    dateOfBirth: "2012-01-25",

    email:
      "sanjana.shrestha@student.eduzin.edu.np",

    phone: "9800000004",

    address: "Bhaktapur",

    avatar: "/images/students/student-4.jpg",

    bloodGroup: "A-",

    grade: "Grade 8",
    section: "A",

    rollNumber: 8,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 4,

    guardianName: "Mohan Shrestha",
    guardianPhone: "9845000004",

    admissionDate: "2022-04-12",

    attendance: 98,

    averageGrade: 88,

    rank: 3,

    status: "Active",

    achievements: [
      "Art Competition Participant",
    ],

    bio:
      "Interested in arts and creative activities.",
  },


  {
    id: 5,
    studentId: "STD-2026-0005",

    firstName: "Nischal",
    lastName: "Rai",
    fullName: "Nischal Rai",

    gender: "Male",

    dateOfBirth: "2008-11-19",

    email:
      "nischal.rai@student.eduzin.edu.np",

    phone: "9800000005",

    address: "Dharan",

    avatar: "/images/students/student-5.jpg",

    bloodGroup: "O-",

    grade: "Grade 12",
    section: "A",

    rollNumber: 3,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],

    parentId: 5,

    guardianName: "Kamal Rai",
    guardianPhone: "9845000005",

    admissionDate: "2018-04-20",

    attendance: 96,

    averageGrade: 91,

    rank: 2,

    status: "Active",

    achievements: [
      "Programming Competition Finalist",
    ],

    bio:
      "Science student passionate about computer technology.",
  },  {
    id: 6,
    studentId: "STD-2026-0006",

    firstName: "Aayush",
    lastName: "Thapa",
    fullName: "Aayush Thapa",

    gender: "Male",

    dateOfBirth: "2009-06-12",

    email: "aayush.thapa@student.eduzin.edu.np",
    phone: "9800000006",

    address: "Kathmandu",

    avatar: "/images/students/student-6.jpg",

    bloodGroup: "B+",

    grade: "Grade 11",
    section: "B",

    rollNumber: 4,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 6,

    guardianName: "Dinesh Thapa",
    guardianPhone: "9845000006",

    admissionDate: "2019-04-18",

    attendance: 94,

    averageGrade: 84,

    rank: 8,

    status: "Active",

    achievements: [
      "Business Quiz Participant",
    ],

    bio:
      "Management student interested in entrepreneurship.",
  },


  {
    id: 7,
    studentId: "STD-2026-0007",

    firstName: "Srijana",
    lastName: "Poudel",
    fullName: "Srijana Poudel",

    gender: "Female",

    dateOfBirth: "2009-09-08",

    email: "srijana.poudel@student.eduzin.edu.np",
    phone: "9800000007",

    address: "Chitwan",

    avatar: "/images/students/student-7.jpg",

    bloodGroup: "A+",

    grade: "Grade 11",
    section: "A",

    rollNumber: 6,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 7,

    guardianName: "Ramesh Poudel",
    guardianPhone: "9845000007",

    admissionDate: "2019-04-15",

    attendance: 98,

    averageGrade: 93,

    rank: 1,

    status: "Active",

    achievements: [
      "Science Exhibition Winner",
    ],

    bio:
      "Science student interested in medical studies.",
  },


  {
    id: 8,
    studentId: "STD-2026-0008",

    firstName: "Roshan",
    lastName: "Lama",
    fullName: "Roshan Lama",

    gender: "Male",

    dateOfBirth: "2008-03-17",

    email: "roshan.lama@student.eduzin.edu.np",

    phone: "9800000008",

    address: "Lalitpur",

    avatar: "/images/students/student-8.jpg",

    bloodGroup: "O+",

    grade: "Grade 12",
    section: "A",

    rollNumber: 6,

    academicYear: "2026",

    stream: "Computer Science",

    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English",
    ],

    parentId: 8,

    guardianName: "Kiran Lama",
    guardianPhone: "9845000008",

    admissionDate: "2018-04-12",

    attendance: 97,

    averageGrade: 89,

    rank: 4,

    status: "Active",

    achievements: [
      "Coding Competition Participant",
    ],

    bio:
      "Computer science student focused on programming.",
  },


  {
    id: 9,
    studentId: "STD-2026-0009",

    firstName: "Maya",
    lastName: "Gurung",
    fullName: "Maya Gurung",

    gender: "Female",

    dateOfBirth: "2009-12-01",

    email: "maya.gurung@student.eduzin.edu.np",

    phone: "9800000009",

    address: "Pokhara",

    avatar: "/images/students/student-9.jpg",

    bloodGroup: "B-",

    grade: "Grade 11",
    section: "C",

    rollNumber: 12,

    academicYear: "2026",

    stream: "Humanities",

    subjects: [
      "Social Studies",
      "Psychology",
      "English",
      "Nepali",
    ],

    parentId: 9,

    guardianName: "Bimal Gurung",
    guardianPhone: "9845000009",

    admissionDate: "2019-04-10",

    attendance: 96,

    averageGrade: 87,

    rank: 5,

    status: "Active",

    achievements: [
      "Essay Writing Winner",
    ],

    bio:
      "Humanities student interested in social studies.",
  },


  {
    id: 10,
    studentId: "STD-2026-0010",

    firstName: "Bibisha",
    lastName: "Khadka",
    fullName: "Bibisha Khadka",

    gender: "Female",

    dateOfBirth: "2007-07-15",

    email: "bibisha.khadka@student.eduzin.edu.np",

    phone: "9800000010",

    address: "Kathmandu",

    avatar: "/images/students/student-10.jpg",

    bloodGroup: "A+",

    grade: "Grade 12",
    section: "B",

    rollNumber: 2,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 10,

    guardianName: "Hari Khadka",
    guardianPhone: "9845000010",

    admissionDate: "2018-04-05",

    attendance: 99,

    averageGrade: 92,

    rank: 1,

    status: "Active",

    achievements: [
      "Best Student Award",
    ],

    bio:
      "Management student with excellent academic performance.",
  },  {
    id: 11,
    studentId: "STD-2026-0011",

    firstName: "Anish",
    lastName: "Bohara",
    fullName: "Anish Bohara",

    gender: "Male",

    dateOfBirth: "2010-10-09",

    email: "anish.bohara@student.eduzin.edu.np",
    phone: "9800000011",

    address: "Bhaktapur",

    avatar: "/images/students/student-11.jpg",

    bloodGroup: "O+",

    grade: "Grade 9",
    section: "A",

    rollNumber: 9,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
    ],

    parentId: 11,

    guardianName: "Prakash Bohara",
    guardianPhone: "9845000011",

    admissionDate: "2021-04-08",

    attendance: 96,

    averageGrade: 85,

    rank: 9,

    status: "Active",

    achievements: [
      "Football Player",
    ],

    bio:
      "Student interested in sports and science.",
  },


  {
    id: 12,
    studentId: "STD-2026-0012",

    firstName: "Riya",
    lastName: "Shah",
    fullName: "Riya Shah",

    gender: "Female",

    dateOfBirth: "2011-05-22",

    email: "riya.shah@student.eduzin.edu.np",
    phone: "9800000012",

    address: "Kathmandu",

    avatar: "/images/students/student-12.jpg",

    bloodGroup: "A+",

    grade: "Grade 8",
    section: "B",

    rollNumber: 12,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 12,

    guardianName: "Suresh Shah",
    guardianPhone: "9845000012",

    admissionDate: "2022-04-15",

    attendance: 98,

    averageGrade: 91,

    rank: 2,

    status: "Active",

    achievements: [
      "Drawing Competition Winner",
    ],

    bio:
      "Creative learner with strong academic performance.",
  },


  {
    id: 13,
    studentId: "STD-2026-0013",

    firstName: "Suman",
    lastName: "Tamang",
    fullName: "Suman Tamang",

    gender: "Male",

    dateOfBirth: "2008-12-14",

    email: "suman.tamang@student.eduzin.edu.np",

    phone: "9800000013",

    address: "Kathmandu",

    avatar: "/images/students/student-13.jpg",

    bloodGroup: "B+",

    grade: "Grade 12",
    section: "A",

    rollNumber: 8,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],

    parentId: 13,

    guardianName: "Raj Tamang",
    guardianPhone: "9845000013",

    admissionDate: "2018-04-20",

    attendance: 95,

    averageGrade: 86,

    rank: 7,

    status: "Active",

    achievements: [
      "Robotics Club Member",
    ],

    bio:
      "Science student interested in robotics and technology.",
  },


  {
    id: 14,
    studentId: "STD-2026-0014",

    firstName: "Asmita",
    lastName: "Rana",
    fullName: "Asmita Rana",

    gender: "Female",

    dateOfBirth: "2009-04-30",

    email: "asmita.rana@student.eduzin.edu.np",

    phone: "9800000014",

    address: "Pokhara",

    avatar: "/images/students/student-14.jpg",

    bloodGroup: "AB+",

    grade: "Grade 11",
    section: "A",

    rollNumber: 10,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 14,

    guardianName: "Bikram Rana",
    guardianPhone: "9845000014",

    admissionDate: "2019-04-22",

    attendance: 99,

    averageGrade: 94,

    rank: 1,

    status: "Active",

    achievements: [
      "Science Fair Winner",
    ],

    bio:
      "Excellent science student preparing for medical studies.",
  },


  {
    id: 15,
    studentId: "STD-2026-0015",

    firstName: "Sagar",
    lastName: "KC",
    fullName: "Sagar KC",

    gender: "Male",

    dateOfBirth: "2009-11-18",

    email: "sagar.kc@student.eduzin.edu.np",

    phone: "9800000015",

    address: "Lalitpur",

    avatar: "/images/students/student-15.jpg",

    bloodGroup: "O+",

    grade: "Grade 11",
    section: "B",

    rollNumber: 15,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 15,

    guardianName: "Rajan KC",
    guardianPhone: "9845000015",

    admissionDate: "2019-04-12",

    attendance: 97,

    averageGrade: 88,

    rank: 4,

    status: "Active",

    achievements: [
      "Business Presentation Winner",
    ],

    bio:
      "Management student interested in business.",
  },  {
    id: 16,
    studentId: "STD-2026-0016",

    firstName: "Nisha",
    lastName: "Gautam",
    fullName: "Nisha Gautam",

    gender: "Female",

    dateOfBirth: "2010-07-11",

    email: "nisha.gautam@student.eduzin.edu.np",

    phone: "9800000016",

    address: "Chitwan",

    avatar: "/images/students/student-16.jpg",

    bloodGroup: "B+",

    grade: "Grade 10",
    section: "B",

    rollNumber: 14,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Computer Science",
    ],

    parentId: 16,

    guardianName: "Madan Gautam",
    guardianPhone: "9845000016",

    admissionDate: "2020-04-18",

    attendance: 97,

    averageGrade: 89,

    rank: 4,

    status: "Active",

    achievements: [
      "Computer Quiz Participant",
    ],

    bio:
      "Student interested in science and computers.",
  },


  {
    id: 17,
    studentId: "STD-2026-0017",

    firstName: "Kushal",
    lastName: "Adhikari",
    fullName: "Kushal Adhikari",

    gender: "Male",

    dateOfBirth: "2008-08-20",

    email:
      "kushal.adhikari@student.eduzin.edu.np",

    phone: "9800000017",

    address: "Kathmandu",

    avatar: "/images/students/student-17.jpg",

    bloodGroup: "A+",

    grade: "Grade 12",
    section: "C",

    rollNumber: 12,

    academicYear: "2026",

    stream: "Humanities",

    subjects: [
      "Social Studies",
      "Psychology",
      "English",
      "Nepali",
    ],

    parentId: 17,

    guardianName: "Bishnu Adhikari",
    guardianPhone: "9845000017",

    admissionDate: "2018-04-15",

    attendance: 94,

    averageGrade: 82,

    rank: 9,

    status: "Active",

    achievements: [
      "Essay Competition Participant",
    ],

    bio:
      "Humanities student interested in social research.",
  },


  {
    id: 18,
    studentId: "STD-2026-0018",

    firstName: "Alisha",
    lastName: "Maharjan",
    fullName: "Alisha Maharjan",

    gender: "Female",

    dateOfBirth: "2011-03-08",

    email:
      "alisha.maharjan@student.eduzin.edu.np",

    phone: "9800000018",

    address: "Lalitpur",

    avatar: "/images/students/student-18.jpg",

    bloodGroup: "O+",

    grade: "Grade 8",
    section: "A",

    rollNumber: 6,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 18,

    guardianName: "Rabin Maharjan",
    guardianPhone: "9845000018",

    admissionDate: "2022-04-10",

    attendance: 99,

    averageGrade: 93,

    rank: 1,

    status: "Active",

    achievements: [
      "Spelling Competition Winner",
    ],

    bio:
      "Excellent student with interest in languages.",
  },


  {
    id: 19,
    studentId: "STD-2026-0019",

    firstName: "Ayush",
    lastName: "Basnet",
    fullName: "Ayush Basnet",

    gender: "Male",

    dateOfBirth: "2012-09-14",

    email:
      "ayush.basnet@student.eduzin.edu.np",

    phone: "9800000019",

    address: "Bhaktapur",

    avatar: "/images/students/student-19.jpg",

    bloodGroup: "AB+",

    grade: "Grade 7",
    section: "B",

    rollNumber: 11,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 19,

    guardianName: "Raju Basnet",
    guardianPhone: "9845000019",

    admissionDate: "2023-04-15",

    attendance: 96,

    averageGrade: 86,

    rank: 8,

    status: "Active",

    achievements: [
      "Football Team Member",
    ],

    bio:
      "Active student interested in sports.",
  },


  {
    id: 20,
    studentId: "STD-2026-0020",

    firstName: "Sneha",
    lastName: "Rijal",
    fullName: "Sneha Rijal",

    gender: "Female",

    dateOfBirth: "2009-10-25",

    email:
      "sneha.rijal@student.eduzin.edu.np",

    phone: "9800000020",

    address: "Kathmandu",

    avatar: "/images/students/student-20.jpg",

    bloodGroup: "A-",

    grade: "Grade 11",
    section: "A",

    rollNumber: 3,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 20,

    guardianName: "Bimal Rijal",
    guardianPhone: "9845000020",

    admissionDate: "2019-04-20",

    attendance: 98,

    averageGrade: 90,

    rank: 3,

    status: "Active",

    achievements: [
      "Biology Project Winner",
    ],

    bio:
      "Science student interested in healthcare.",
  },  {
    id: 21,
    studentId: "STD-2026-0021",

    firstName: "Rohan",
    lastName: "Shrestha",
    fullName: "Rohan Shrestha",

    gender: "Male",

    dateOfBirth: "2011-06-18",

    email:
      "rohan.shrestha@student.eduzin.edu.np",

    phone: "9800000021",

    address: "Kathmandu",

    avatar: "/images/students/student-21.jpg",

    bloodGroup: "O+",

    grade: "Grade 9",
    section: "B",

    rollNumber: 7,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
    ],

    parentId: 21,

    guardianName: "Santosh Shrestha",
    guardianPhone: "9845000021",

    admissionDate: "2021-04-20",

    attendance: 97,

    averageGrade: 88,

    rank: 6,

    status: "Active",

    achievements: [
      "Science Project Participant",
    ],

    bio:
      "Student interested in experiments and technology.",
  },


  {
    id: 22,
    studentId: "STD-2026-0022",

    firstName: "Karishma",
    lastName: "Thapa",
    fullName: "Karishma Thapa",

    gender: "Female",

    dateOfBirth: "2010-11-02",

    email:
      "karishma.thapa@student.eduzin.edu.np",

    phone: "9800000022",

    address: "Pokhara",

    avatar: "/images/students/student-22.jpg",

    bloodGroup: "B+",

    grade: "Grade 10",
    section: "A",

    rollNumber: 15,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Computer Science",
    ],

    parentId: 22,

    guardianName: "Dipak Thapa",
    guardianPhone: "9845000022",

    admissionDate: "2020-04-15",

    attendance: 99,

    averageGrade: 94,

    rank: 1,

    status: "Active",

    achievements: [
      "Mathematics Olympiad Participant",
    ],

    bio:
      "High performing student interested in mathematics.",
  },


  {
    id: 23,
    studentId: "STD-2026-0023",

    firstName: "Suman",
    lastName: "Khadka",
    fullName: "Suman Khadka",

    gender: "Male",

    dateOfBirth: "2009-01-19",

    email:
      "suman.khadka@student.eduzin.edu.np",

    phone: "9800000023",

    address: "Bhaktapur",

    avatar: "/images/students/student-23.jpg",

    bloodGroup: "A+",

    grade: "Grade 11",
    section: "B",

    rollNumber: 18,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 23,

    guardianName: "Hari Khadka",
    guardianPhone: "9845000023",

    admissionDate: "2019-04-16",

    attendance: 95,

    averageGrade: 83,

    rank: 10,

    status: "Active",

    achievements: [
      "Entrepreneurship Club Member",
    ],

    bio:
      "Management student interested in business ideas.",
  },


  {
    id: 24,
    studentId: "STD-2026-0024",

    firstName: "Pooja",
    lastName: "Gurung",
    fullName: "Pooja Gurung",

    gender: "Female",

    dateOfBirth: "2008-05-26",

    email:
      "pooja.gurung@student.eduzin.edu.np",

    phone: "9800000024",

    address: "Pokhara",

    avatar: "/images/students/student-24.jpg",

    bloodGroup: "O+",

    grade: "Grade 12",
    section: "A",

    rollNumber: 14,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 24,

    guardianName: "Mohan Gurung",
    guardianPhone: "9845000024",

    admissionDate: "2018-04-18",

    attendance: 98,

    averageGrade: 92,

    rank: 3,

    status: "Active",

    achievements: [
      "Biology Exhibition Winner",
    ],

    bio:
      "Science student preparing for higher education.",
  },


  {
    id: 25,
    studentId: "STD-2026-0025",

    firstName: "Nabin",
    lastName: "Rai",
    fullName: "Nabin Rai",

    gender: "Male",

    dateOfBirth: "2011-09-07",

    email:
      "nabin.rai@student.eduzin.edu.np",

    phone: "9800000025",

    address: "Dharan",

    avatar: "/images/students/student-25.jpg",

    bloodGroup: "B-",

    grade: "Grade 8",
    section: "A",

    rollNumber: 20,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 25,

    guardianName: "Bikash Rai",
    guardianPhone: "9845000025",

    admissionDate: "2022-04-12",

    attendance: 96,

    averageGrade: 84,

    rank: 12,

    status: "Active",

    achievements: [
      "Football Tournament Participant",
    ],

    bio:
      "Student interested in sports and teamwork.",
  },  {
    id: 26,
    studentId: "STD-2026-0026",

    firstName: "Aarohi",
    lastName: "Joshi",
    fullName: "Aarohi Joshi",

    gender: "Female",

    dateOfBirth: "2012-02-18",

    email:
      "aarohi.joshi@student.eduzin.edu.np",

    phone: "9800000026",

    address: "Kathmandu",

    avatar: "/images/students/student-26.jpg",

    bloodGroup: "A+",

    grade: "Grade 7",
    section: "A",

    rollNumber: 5,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 26,

    guardianName: "Ramesh Joshi",
    guardianPhone: "9845000026",

    admissionDate: "2023-04-10",

    attendance: 99,

    averageGrade: 95,

    rank: 1,

    status: "Active",

    achievements: [
      "Reading Competition Winner",
    ],

    bio:
      "Young learner with excellent academic performance.",
  },


  {
    id: 27,
    studentId: "STD-2026-0027",

    firstName: "Prakash",
    lastName: "Malla",
    fullName: "Prakash Malla",

    gender: "Male",

    dateOfBirth: "2008-10-16",

    email:
      "prakash.malla@student.eduzin.edu.np",

    phone: "9800000027",

    address: "Lalitpur",

    avatar: "/images/students/student-27.jpg",

    bloodGroup: "O+",

    grade: "Grade 12",
    section: "B",

    rollNumber: 16,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 27,

    guardianName: "Bhim Malla",
    guardianPhone: "9845000027",

    admissionDate: "2018-04-15",

    attendance: 96,

    averageGrade: 85,

    rank: 8,

    status: "Active",

    achievements: [
      "Business Case Competition",
    ],

    bio:
      "Management student interested in finance.",
  },


  {
    id: 28,
    studentId: "STD-2026-0028",

    firstName: "Elina",
    lastName: "Shrestha",
    fullName: "Elina Shrestha",

    gender: "Female",

    dateOfBirth: "2009-07-13",

    email:
      "elina.shrestha@student.eduzin.edu.np",

    phone: "9800000028",

    address: "Bhaktapur",

    avatar: "/images/students/student-28.jpg",

    bloodGroup: "B+",

    grade: "Grade 11",
    section: "A",

    rollNumber: 7,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 28,

    guardianName: "Rajesh Shrestha",
    guardianPhone: "9845000028",

    admissionDate: "2019-04-12",

    attendance: 98,

    averageGrade: 91,

    rank: 4,

    status: "Active",

    achievements: [
      "Science Club Member",
    ],

    bio:
      "Science student interested in research.",
  },


  {
    id: 29,
    studentId: "STD-2026-0029",

    firstName: "Rosina",
    lastName: "Lama",
    fullName: "Rosina Lama",

    gender: "Female",

    dateOfBirth: "2010-03-22",

    email:
      "rosina.lama@student.eduzin.edu.np",

    phone: "9800000029",

    address: "Kathmandu",

    avatar: "/images/students/student-29.jpg",

    bloodGroup: "AB+",

    grade: "Grade 10",
    section: "B",

    rollNumber: 19,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 29,

    guardianName: "Kiran Lama",
    guardianPhone: "9845000029",

    admissionDate: "2020-04-20",

    attendance: 97,

    averageGrade: 87,

    rank: 7,

    status: "Active",

    achievements: [
      "Art Club Member",
    ],

    bio:
      "Creative student interested in design and arts.",
  },


  {
    id: 30,
    studentId: "STD-2026-0030",

    firstName: "Bikram",
    lastName: "Thapa",
    fullName: "Bikram Thapa",

    gender: "Male",

    dateOfBirth: "2008-06-05",

    email:
      "bikram.thapa@student.eduzin.edu.np",

    phone: "9800000030",

    address: "Pokhara",

    avatar: "/images/students/student-30.jpg",

    bloodGroup: "A+",

    grade: "Grade 12",
    section: "A",

    rollNumber: 20,

    academicYear: "2026",

    stream: "Computer Science",

    subjects: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "English",
    ],

    parentId: 30,

    guardianName: "Rajan Thapa",
    guardianPhone: "9845000030",

    admissionDate: "2018-04-20",

    attendance: 99,

    averageGrade: 93,

    rank: 1,

    status: "Active",

    achievements: [
      "Programming Contest Winner",
    ],

    bio:
      "Computer science student passionate about software development.",
  },  {
    id: 31,
    studentId: "STD-2026-0031",

    firstName: "Sushant",
    lastName: "Giri",
    fullName: "Sushant Giri",

    gender: "Male",

    dateOfBirth: "2011-01-14",

    email:
      "sushant.giri@student.eduzin.edu.np",

    phone: "9800000031",

    address: "Kathmandu",

    avatar: "/images/students/student-31.jpg",

    bloodGroup: "O+",

    grade: "Grade 9",
    section: "A",

    rollNumber: 11,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
    ],

    parentId: 31,

    guardianName: "Dilip Giri",
    guardianPhone: "9845000031",

    admissionDate: "2021-04-10",

    attendance: 95,

    averageGrade: 82,

    rank: 14,

    status: "Active",

    achievements: [
      "Basketball Team Member",
    ],

    bio:
      "Student interested in sports and science.",
  },


  {
    id: 32,
    studentId: "STD-2026-0032",

    firstName: "Kritika",
    lastName: "Sharma",
    fullName: "Kritika Sharma",

    gender: "Female",

    dateOfBirth: "2012-08-16",

    email:
      "kritika.sharma@student.eduzin.edu.np",

    phone: "9800000032",

    address: "Lalitpur",

    avatar: "/images/students/student-32.jpg",

    bloodGroup: "A+",

    grade: "Grade 7",
    section: "B",

    rollNumber: 18,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 32,

    guardianName: "Ashok Sharma",
    guardianPhone: "9845000032",

    admissionDate: "2023-04-12",

    attendance: 98,

    averageGrade: 90,

    rank: 3,

    status: "Active",

    achievements: [
      "Essay Writing Participant",
    ],

    bio:
      "Student interested in reading and writing.",
  },


  {
    id: 33,
    studentId: "STD-2026-0033",

    firstName: "Bishal",
    lastName: "Gurung",
    fullName: "Bishal Gurung",

    gender: "Male",

    dateOfBirth: "2009-11-11",

    email:
      "bishal.gurung@student.eduzin.edu.np",

    phone: "9800000033",

    address: "Pokhara",

    avatar: "/images/students/student-33.jpg",

    bloodGroup: "B+",

    grade: "Grade 11",
    section: "C",

    rollNumber: 21,

    academicYear: "2026",

    stream: "Humanities",

    subjects: [
      "Psychology",
      "Social Studies",
      "English",
      "Nepali",
    ],

    parentId: 33,

    guardianName: "Milan Gurung",
    guardianPhone: "9845000033",

    admissionDate: "2019-04-20",

    attendance: 94,

    averageGrade: 80,

    rank: 12,

    status: "Active",

    achievements: [
      "Public Speaking Participant",
    ],

    bio:
      "Humanities student interested in society and culture.",
  },


  {
    id: 34,
    studentId: "STD-2026-0034",

    firstName: "Manish",
    lastName: "Raut",
    fullName: "Manish Raut",

    gender: "Male",

    dateOfBirth: "2008-02-28",

    email:
      "manish.raut@student.eduzin.edu.np",

    phone: "9800000034",

    address: "Biratnagar",

    avatar: "/images/students/student-34.jpg",

    bloodGroup: "O-",

    grade: "Grade 12",
    section: "A",

    rollNumber: 22,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],

    parentId: 34,

    guardianName: "Ramesh Raut",
    guardianPhone: "9845000034",

    admissionDate: "2018-04-15",

    attendance: 97,

    averageGrade: 88,

    rank: 6,

    status: "Active",

    achievements: [
      "Physics Project Participant",
    ],

    bio:
      "Science student interested in engineering.",
  },


  {
    id: 35,
    studentId: "STD-2026-0035",

    firstName: "Samiksha",
    lastName: "Koirala",
    fullName: "Samiksha Koirala",

    gender: "Female",

    dateOfBirth: "2009-06-25",

    email:
      "samiksha.koirala@student.eduzin.edu.np",

    phone: "9800000035",

    address: "Kathmandu",

    avatar: "/images/students/student-35.jpg",

    bloodGroup: "B+",

    grade: "Grade 11",
    section: "B",

    rollNumber: 24,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 35,

    guardianName: "Hari Koirala",
    guardianPhone: "9845000035",

    admissionDate: "2019-04-18",

    attendance: 98,

    averageGrade: 90,

    rank: 2,

    status: "Active",

    achievements: [
      "Accounting Competition Winner",
    ],

    bio:
      "Management student with strong financial skills.",
  },  {
    id: 36,
    studentId: "STD-2026-0036",

    firstName: "Rajan",
    lastName: "Shrestha",
    fullName: "Rajan Shrestha",

    gender: "Male",

    dateOfBirth: "2010-03-14",

    email:
      "rajan.shrestha@student.eduzin.edu.np",

    phone: "9800000036",

    address: "Kathmandu",

    avatar: "/images/students/student-36.jpg",

    bloodGroup: "A+",

    grade: "Grade 10",
    section: "A",

    rollNumber: 20,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Computer Science",
    ],

    parentId: 36,

    guardianName: "Deepak Shrestha",
    guardianPhone: "9845000036",

    admissionDate: "2020-04-10",

    attendance: 96,

    averageGrade: 86,

    rank: 8,

    status: "Active",

    achievements: [
      "Computer Club Member",
    ],

    bio:
      "Student interested in programming and technology.",
  },


  {
    id: 37,
    studentId: "STD-2026-0037",

    firstName: "Anu",
    lastName: "Bista",
    fullName: "Anu Bista",

    gender: "Female",

    dateOfBirth: "2011-12-02",

    email:
      "anu.bista@student.eduzin.edu.np",

    phone: "9800000037",

    address: "Pokhara",

    avatar: "/images/students/student-37.jpg",

    bloodGroup: "O+",

    grade: "Grade 8",
    section: "B",

    rollNumber: 15,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 37,

    guardianName: "Kamal Bista",
    guardianPhone: "9845000037",

    admissionDate: "2022-04-15",

    attendance: 99,

    averageGrade: 92,

    rank: 2,

    status: "Active",

    achievements: [
      "Dance Competition Winner",
    ],

    bio:
      "Creative student interested in arts.",
  },


  {
    id: 38,
    studentId: "STD-2026-0038",

    firstName: "Roshan",
    lastName: "Shah",
    fullName: "Roshan Shah",

    gender: "Male",

    dateOfBirth: "2008-09-17",

    email:
      "roshan.shah@student.eduzin.edu.np",

    phone: "9800000038",

    address: "Birgunj",

    avatar: "/images/students/student-38.jpg",

    bloodGroup: "B+",

    grade: "Grade 12",
    section: "B",

    rollNumber: 25,

    academicYear: "2026",

    stream: "Management",

    subjects: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "English",
    ],

    parentId: 38,

    guardianName: "Sanjay Shah",
    guardianPhone: "9845000038",

    admissionDate: "2018-04-20",

    attendance: 95,

    averageGrade: 84,

    rank: 9,

    status: "Active",

    achievements: [
      "Business Club Member",
    ],

    bio:
      "Student interested in business management.",
  },


  {
    id: 39,
    studentId: "STD-2026-0039",

    firstName: "Sita",
    lastName: "Panta",
    fullName: "Sita Panta",

    gender: "Female",

    dateOfBirth: "2009-02-14",

    email:
      "sita.panta@student.eduzin.edu.np",

    phone: "9800000039",

    address: "Dhangadhi",

    avatar: "/images/students/student-39.jpg",

    bloodGroup: "A-",

    grade: "Grade 11",
    section: "A",

    rollNumber: 13,

    academicYear: "2026",

    stream: "Science",

    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
    ],

    parentId: 39,

    guardianName: "Bikash Panta",
    guardianPhone: "9845000039",

    admissionDate: "2019-04-15",

    attendance: 97,

    averageGrade: 89,

    rank: 5,

    status: "Active",

    achievements: [
      "Biology Research Project",
    ],

    bio:
      "Science student interested in biology.",
  },


  {
    id: 40,
    studentId: "STD-2026-0040",

    firstName: "Nirajan",
    lastName: "KC",
    fullName: "Nirajan KC",

    gender: "Male",

    dateOfBirth: "2012-04-09",

    email:
      "nirajan.kc@student.eduzin.edu.np",

    phone: "9800000040",

    address: "Lalitpur",

    avatar: "/images/students/student-40.jpg",

    bloodGroup: "O+",

    grade: "Grade 7",
    section: "A",

    rollNumber: 9,

    academicYear: "2026",

    stream: "General",

    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
    ],

    parentId: 40,

    guardianName: "Raj KC",
    guardianPhone: "9845000040",

    admissionDate: "2023-04-18",

    attendance: 98,

    averageGrade: 89,

    rank: 4,

    status: "Active",

    achievements: [
      "Quiz Competition Participant",
    ],

    bio:
      "Young learner interested in science.",
  },

  // Generate additional dummy students (41-100)
];

const extraFirstNames = [
  "Aarav",
  "Prisha",
  "Bibek",
  "Sanjana",
  "Nischal",
  "Aayush",
  "Srijana",
  "Roshan",
  "Maya",
  "Bibisha",
  "Anish",
  "Riya",
  "Suman",
  "Asmita",
  "Sagar",
  "Nisha",
  "Kushal",
  "Alisha",
  "Ayush",
  "Sneha",
];


const extraLastNames = [
  "Sharma",
  "Gurung",
  "Thapa",
  "Shrestha",
  "Rai",
  "Tamang",
  "Karki",
  "Adhikari",
  "KC",
  "Poudel",
];


const extraGrades = [
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];


const extraSections = [
  "A",
  "B",
  "C",
];


const extraStreams = [
  "General",
  "Science",
  "Management",
  "Humanities",
  "Computer Science",
];


const generatedStudents: Student[] =
  Array.from({ length: 60 }, (_, index) => {

    const id = index + 41;


    const firstName =
      extraFirstNames[index % extraFirstNames.length];


    const lastName =
      extraLastNames[index % extraLastNames.length];


    return {

      id,

      studentId:
        `STD-2026-${String(id).padStart(4, "0")}`,


      firstName,

      lastName,

      fullName:
        `${firstName} ${lastName}`,


      gender:
        index % 2 === 0
          ? "Male"
          : "Female",


      dateOfBirth:
        `201${index % 5}-0${(index % 9) + 1}-15`,


      email:
        `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id}@student.eduzin.edu.np`,


      phone:
        `98000000${id}`,


      address:
        [
          "Kathmandu",
          "Pokhara",
          "Lalitpur",
          "Bhaktapur",
          "Chitwan",
        ][index % 5],


      avatar:
        `/images/students/student-${(index % 20) + 1}.jpg`,


      bloodGroup:
        [
          "A+",
          "B+",
          "O+",
          "AB+",
        ][index % 4],


      grade:
        extraGrades[index % extraGrades.length],


      section:
        extraSections[index % extraSections.length],


      rollNumber:
        index + 21,


      academicYear:
        "2026",


      stream:
        extraStreams[index % extraStreams.length],


      subjects:
        [
          "English",
          "Nepali",
          "Mathematics",
          "Science",
        ],


      parentId:
        id,


      guardianName:
        `Guardian ${id}`,


      guardianPhone:
        `98450000${id}`,


      admissionDate:
        "2022-04-15",


      attendance:
        80 + (index % 20),


      averageGrade:
        60 + (index % 40),


      rank:
        id,


      status:
        "Active",


      achievements:
        [
          "School Activity Participant",
        ],


      bio:
        "Student enrolled in Eduzin LMS.",
    };
  });


// Add generated students to existing data

students.push(...generatedStudents);


export default students;