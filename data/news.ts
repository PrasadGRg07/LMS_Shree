export interface NewsItem {
  id: number;
  slug: string;

  title: string;
  category: string;

  description: string;
  longDescription: string;

  image: string;

  date: string;
  author: string;

  featured: boolean;

  type: "upcoming" | "previous" | "award" | "notice";


  // Event history
  timeline?: {
    year: string;
    title: string;
    description: string;
  }[];


  // Future event details
  upcomingDetails?: {
    eventDate: string;
    location: string;
    activities: string[];
  };
  //gallery images for the news item
  gallery?: string[];
}

export const news: NewsItem[] = [

  {
    id: 1,
    slug: "annual-examination-schedule-2026",

    title: "Annual Examination Schedule 2026",

    category: "Notice",

    description:
      "The school has announced the annual examination schedule for all students.",

    longDescription:
      "The annual examination schedule for the academic year 2026 has been published. Students are requested to prepare according to the given timetable and contact their respective teachers for any queries.",

    image: "/images/news/exam.jpg",

    date: "February 10, 2026",

    author: "School Administration",

    featured: true,

    type: "notice",
  },
  {
  id: 2,
  slug: "annual-sports-day-2026",

  title: "Annual Sports Day 2026",

  category: "Upcoming Event",

  description:
    "Students will participate in exciting sports activities and competitions.",

  longDescription:
    "Annual Sports Day is one of the biggest school events where students participate in different competitions. The event encourages teamwork, discipline, leadership, and physical development.",

  image: "/images/news/sports.jpg",

  date: "March 15, 2026",

  author: "Sports Department",

  featured: true,

  type: "upcoming",


  timeline: [
    {
      year: "2025",
      title: "Annual Sports Day 2025",
      description:
        "Students participated in football, athletics, volleyball, and relay competitions."
    },

    {
      year: "2024",
      title: "Annual Sports Day 2024",
      description:
        "Inter-house sports competition was successfully organized."
    },

    {
      year: "2023",
      title: "Annual Sports Day 2023",
      description:
        "Students showcased teamwork and sportsmanship through different activities."
    }
  ],


  upcomingDetails: {
    eventDate: "March 15, 2026",

    location: "School Ground",

    activities: [
      "Football Competition",
      "Basketball Competition",
      "Athletics",
      "Relay Race",
      "Prize Distribution"
    ],
  },
  gallery: [
    "/images/news/gallery/sports-1.jpg",
    "/images/news/gallery/sports-2.jpg",
    "/images/news/gallery/sports-3.jpg",
    "/images/news/gallery/sports-4.jpg",
  ],
},

{
  id: 3,
  slug: "science-fair-competition-2025",

  title: "Science Fair Competition 2025",

  category: "Previous Event",

  description:
    "Students successfully completed the annual science fair with innovative projects.",

  longDescription:
    "The science fair provided students with opportunities to present creative projects, perform experiments, and develop scientific thinking skills.",

  image: "/images/news/science.jpg",

  date: "December 20, 2025",

  author: "Science Department",

  featured: false,

  type: "previous",

  timeline: [
    {
      year: "2025",
      title: "Science Fair Competition 2025",
      description:
        "Students presented innovative science models, experiments, and technology projects.",
    },
    {
      year: "2024",
      title: "Science Exhibition 2024",
      description:
        "Students explored scientific concepts through practical demonstrations and creative ideas.",
    },
    {
      year: "2023",
      title: "Young Scientist Program",
      description:
        "Students participated in science activities and developed research skills.",
    },
  ],
},
 


  {
    id: 4,
    slug: "student-achievement-awards-2026",

    title: "Student Achievement Awards 2026",

    category: "Achievement",

    description:
      "Recognizing students for outstanding academic and extracurricular performance.",

    longDescription:
      "The school proudly celebrated students who achieved excellence in academics, sports, and extracurricular activities. Awards were presented to appreciate their dedication and hard work.",

    image: "/images/news/award.jpg",

    date: "January 25, 2026",

    author: "School Management",

    featured: true,

    type: "award",
    timeline: [
  {
    year: "2026",
    title: "Student Achievement Awards 2026",
    description:
      "Students were recognized for excellence in academics, sports, leadership, and extracurricular activities.",
  },
  {
    year: "2025",
    title: "Annual Excellence Awards 2025",
    description:
      "Outstanding students received awards for dedication and exceptional performance.",
  },
  {
    year: "2024",
    title: "Academic Recognition Program 2024",
    description:
      "Students with excellent academic results were honored by the school.",
  },
],
  },


  {
    id: 5,
    slug: "school-holiday-announcement",

    title: "School Holiday Announcement",

    category: "Announcement",

    description:
      "Important holiday information for students and parents.",

    longDescription:
      "The school management has announced upcoming holidays. Students and parents are requested to follow the official academic calendar for updated information.",

    image: "/images/news/holiday.jpg",

    date: "April 5, 2026",

    author: "Administration",

    featured: false,

    type: "notice",
  },


  {
    id: 6,
    slug: "cultural-program-2025",

    title: "Annual Cultural Program 2025",

    category: "Previous Event",

    description:
      "Students performed cultural activities and showcased their talents.",

    longDescription:
      "The annual cultural program featured music, dance, drama, and creative performances by students from different grades.",

    image: "/images/news/cultural.jpg",

    date: "November 18, 2025",

    author: "Event Committee",

    featured: false,

    type: "previous",
    timeline: [
  {
    year: "2025",
    title: "Annual Cultural Program 2025",
    description:
      "Students performed traditional dances, music, drama, and cultural presentations.",
  },
  {
    year: "2024",
    title: "Cultural Celebration 2024",
    description:
      "Students celebrated different cultures through creative performances and activities.",
  },
  {
    year: "2023",
    title: "School Talent Showcase 2023",
    description:
      "Students displayed their talents in singing, acting, art, and creative performances.",
  },
],
  },
    {
    id: 7,
    slug: "parent-teacher-meeting-2026",

    title: "Parent Teacher Meeting 2026",

    category: "Upcoming Event",

    description:
      "Parents are invited to discuss student progress with teachers.",

    longDescription:
      "The Parent Teacher Meeting provides an opportunity for parents and teachers to discuss academic progress, behavior, attendance, and future improvement plans for students.",

    image: "/images/news/parent-meeting.jpg",

    date: "June 10, 2026",

    author: "School Administration",

    featured: true,

      type: "upcoming",
    timeline: [
  {
    year: "2025",
    title: "Parent Teacher Meeting 2025",
    description:
      "Parents discussed student progress, attendance, and improvement plans with teachers.",
  },
  {
    year: "2024",
    title: "Parent Interaction Program 2024",
    description:
      "Teachers and parents worked together to support student development.",
  },
],

upcomingDetails: {
  eventDate: "June 10, 2026",
  location: "School Auditorium",
  activities: [
    "Student Progress Discussion",
    "Teacher Consultation",
    "Academic Guidance",
    "Parent Feedback Session",
  ],
},
  },


  {
    id: 8,
    slug: "new-computer-lab-opening",

    title: "New Computer Lab Opening",

    category: "Announcement",

    description:
      "The school has introduced a modern computer laboratory for students.",

    longDescription:
      "A new computer laboratory equipped with modern computers and updated technology has been opened to improve practical learning and digital skills among students.",

    image: "/images/news/computer-lab.jpg",

    date: "July 5, 2026",

    author: "IT Department",

    featured: true,

    type: "notice",
  },


  {
    id: 9,
    slug: "teacher-training-program",

    title: "Teacher Training Program",

    category: "Event",

    description:
      "Teachers participated in professional development training.",

    longDescription:
      "The teacher training program focused on modern teaching methods, digital tools, classroom management, and improving student learning experiences.",

    image: "/images/news/training.jpg",

    date: "August 12, 2026",

    author: "Academic Department",

    featured: false,

    type: "previous",
    timeline: [
  {
    year: "2025",
    title: "Teacher Training Program 2025",
    description:
      "Teachers learned modern teaching methods, classroom management, and digital learning techniques.",
  },
  {
    year: "2024",
    title: "Professional Development Workshop 2024",
    description:
      "Teachers participated in workshops to improve teaching quality.",
  },
],
  },


  {
    id: 10,
    slug: "student-scholarship-program",

    title: "Student Scholarship Program",

    category: "Achievement",

    description:
      "Outstanding students received scholarships for their achievements.",

    longDescription:
      "The school awarded scholarships to deserving students based on academic performance, talent, and dedication.",

    image: "/images/news/scholarship.jpg",

    date: "September 1, 2026",

    author: "School Management",

    featured: true,

    type: "award",
    timeline: [
  {
    year: "2026",
    title: "Student Scholarship Program 2026",
    description:
      "Students received scholarships based on academic performance, talent, and dedication.",
  },
  {
    year: "2025",
    title: "Merit Scholarship Awards 2025",
    description:
      "High-performing students received financial support for their education.",
  },
],
  },


  {
    id: 11,
    slug: "educational-tour-2026",

    title: "Educational Tour 2026",

    category: "Upcoming Event",

    description:
      "Students will visit educational and historical places.",

    longDescription:
      "The educational tour helps students gain practical knowledge outside the classroom while exploring historical, cultural, and scientific locations.",

    image: "/images/news/tour.jpg",

    date: "October 15, 2026",

    author: "Student Affairs Department",

    featured: true,

    type: "upcoming",
    timeline: [
  {
    year: "2025",
    title: "Educational Tour 2025",
    description:
      "Students visited historical and educational places to gain practical knowledge.",
  },
  {
    year: "2024",
    title: "Learning Trip 2024",
    description:
      "Students explored museums, cultural locations, and learning centers.",
  },
],

upcomingDetails: {
  eventDate: "October 15, 2026",
  location: "Historical and Educational Sites",
  activities: [
    "Museum Visit",
    "Historical Site Exploration",
    "Group Learning Activities",
    "Educational Sessions",
  ],
},
  },


  {
    id: 12,
    slug: "environment-day-celebration",

    title: "World Environment Day Celebration",

    category: "Previous Event",

    description:
      "Students participated in environmental awareness activities.",

    longDescription:
      "Students joined plantation programs, awareness campaigns, and activities focused on protecting the environment.",

    image: "/images/news/environment.jpg",

    date: "June 5, 2026",

    author: "Eco Club",

    featured: false,

    type: "previous",
    timeline: [
  {
    year: "2026",
    title: "World Environment Day Celebration",
    description:
      "Students participated in plantation programs and environmental awareness campaigns.",
  },
  {
    year: "2025",
    title: "Green School Campaign 2025",
    description:
      "Students promoted recycling, cleanliness, and environmental protection.",
  },
  {
    year: "2024",
    title: "Tree Plantation Program 2024",
    description:
      "Students and teachers planted trees around the school campus.",
  },
],
  },


  {
    id: 13,
    slug: "academic-result-publication-2026",

    title: "Academic Result Publication 2026",

    category: "Notice",

    description:
      "The school has published the annual academic results.",

    longDescription:
      "Students and parents can view the annual academic results. The school congratulates all students for their hard work and dedication.",

    image: "/images/news/results.jpg",

    date: "December 5, 2026",

    author: "Examination Department",

    featured: true,

    type: "notice",
  },


  {
    id: 14,
    slug: "library-upgrade-project",

    title: "Library Upgrade Project",

    category: "Announcement",

    description:
      "The school library has been upgraded with new resources.",

    longDescription:
      "The upgraded library includes new books, digital learning resources, and improved reading spaces to encourage students' learning habits.",

    image: "/images/news/library.jpg",

    date: "January 15, 2026",

    author: "Library Department",

    featured: false,

    type: "notice",
  },

];