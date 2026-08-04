import { Course } from "../types/course";
import { teacherCourses } from "../data/courses";


// Get all teacher courses

export async function getCourses(): Promise<Course[]> {

  return teacherCourses;

}



// Get single course by ID

export async function getCourseById(
  id: string
): Promise<Course | undefined> {


  console.log("Searching Course ID:", id);

  console.log("Available Courses:", teacherCourses);


  const course = teacherCourses.find(
    (course) => course.id === id
  );


  console.log("Found Course:", course);


  return course;

}



// Create new course

export async function createCourse(
  course: Course
): Promise<Course> {


  teacherCourses.push(course);


  return course;

}



// Update course

export async function updateCourse(
  id: string,
  data: Partial<Course>
): Promise<Course | undefined> {


  const index =
    teacherCourses.findIndex(
      (course) => course.id === id
    );


  if(index === -1){

    return undefined;

  }



  teacherCourses[index] = {

    ...teacherCourses[index],

    ...data,

  };



  return teacherCourses[index];

}



// Delete course

export async function deleteCourse(
  id: string
): Promise<boolean> {


  const index =
    teacherCourses.findIndex(
      (course) => course.id === id
    );



  if(index === -1){

    return false;

  }



  teacherCourses.splice(
    index,
    1
  );


  return true;

}