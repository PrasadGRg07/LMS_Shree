export interface GalleryItem {
  id: number;
  slug: string;

  title: string;
  category: string;

  description: string;
  longDescription: string;

  image: string;

  date: string;
  location: string;

  upcoming: boolean;

  eventTime: string;
  organizer: string;
  participants: string;
}


export const gallery: GalleryItem[] = [

  {
    id: 1,
    slug: "modern-classroom",

    title: "Modern Classroom",

    category: "Classroom",

    description:
      "Students learning in a modern and interactive classroom environment.",

    longDescription:
      "Our modern classrooms provide students with an engaging learning environment equipped with digital learning tools, comfortable seating, and collaborative spaces for effective learning.",

    image: "/images/gallery/classroom.jpg",

    date: "2026",

    location: "School Building",

    upcoming: false,

    eventTime: "Not Applicable",

    organizer: "Academic Department",

    participants: "All Students",
  },


  {
    id: 2,
    slug: "annual-sports-day-2026",

    title: "Annual Sports Day 2026",

    category: "Sports",

    description:
      "Students participating in exciting sports activities.",

    longDescription:
      "Annual Sports Day is one of the biggest school events where students participate in different competitions. The program focuses on teamwork, discipline, leadership, and physical development.",

    image: "/images/gallery/sports.jpg",

    date: "March 15, 2026",

    location: "School Ground",

    upcoming: true,

    eventTime: "10:00 AM - 4:00 PM",

    organizer: "Sports Department",

    participants: "Grade 6 - Grade 12 Students",
  },


  {
    id: 3,
    slug: "science-exhibition-2026",

    title: "Science Exhibition 2026",

    category: "Science",

    description:
      "Students presenting creative science projects and experiments.",

    longDescription:
      "The science exhibition allows students to demonstrate their creativity through innovative projects, experiments, and scientific discoveries.",

    image: "/images/gallery/lab.jpg",

    date: "April 20, 2026",

    location: "Science Laboratory",

    upcoming: true,

    eventTime: "11:00 AM - 3:00 PM",

    organizer: "Science Department",

    participants: "Science Students",
  },


  {
    id: 4,
    slug: "school-event-celebration",

    title: "School Event Celebration",

    category: "Events",

    description:
      "A memorable school celebration with students and teachers.",

    longDescription:
      "School celebrations bring together students, teachers, and parents to enjoy cultural programs, performances, and achievements.",

    image: "/images/gallery/event.jpg",

    date: "May 10, 2026",

    location: "School Auditorium",

    upcoming: true,

    eventTime: "9:30 AM - 2:00 PM",

    organizer: "Event Management Team",

    participants: "Students, Teachers, and Parents",
  },


  {
    id: 5,
    slug: "student-achievement",

    title: "Student Achievement",

    category: "Achievements",

    description:
      "Celebrating student success and academic achievements.",

    longDescription:
      "We celebrate students who achieve excellence in academics, sports, and extracurricular activities. Their success motivates the entire school community.",

    image: "/images/gallery/achievement.jpg",

    date: "2026",

    location: "School Campus",

    upcoming: false,

    eventTime: "Not Applicable",

    organizer: "Administration",

    participants: "Award Winning Students",
  },


  {
    id: 6,
    slug: "school-campus",

    title: "School Campus",

    category: "Campus",

    description:
      "Beautiful view of the school campus.",

    longDescription:
      "Our campus provides students with a safe and inspiring environment for learning, activities, and personal development.",

    image: "/images/gallery/campus.jpg",

    date: "2026",

    location: "Main Campus",

    upcoming: false,

    eventTime: "Not Applicable",

    organizer: "School Management",

    participants: "School Community",
  },

];