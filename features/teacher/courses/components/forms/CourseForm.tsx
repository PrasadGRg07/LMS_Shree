"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Banknote,
  Clock,
  Upload,
  X,
  Save,
  Eye,
  Send,
} from "lucide-react";

import { Course, CourseStatus, CourseType } from "../../types/course";

interface CourseFormProps {
  initialData?: Course;
  onSubmit?: (data: Course) => void;
}

export default function CourseForm({ initialData, onSubmit }: CourseFormProps) {
  const router = useRouter();
  const isEditing = !!initialData;

  const [formData, setFormData] = useState<Partial<Course>>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    subject: initialData?.subject || "",
    gradeLevel: initialData?.gradeLevel || "",
    courseType: initialData?.courseType || "Regular Class",
    duration: initialData?.duration || "",
    price: initialData?.price || 0,
    status: initialData?.status || "Draft",
    teacherName: initialData?.teacherName || "",
    thumbnail: initialData?.thumbnail || "",
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string>(
    initialData?.thumbnail || "",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleThumbnailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);

        setFormData((prev) => ({
          ...prev,
          thumbnail: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
    }
  }

  function removeThumbnail() {
    setThumbnailPreview("");

    setFormData((prev) => ({
      ...prev,
      thumbnail: "",
    }));
  }

  async function handleSubmit(e: React.FormEvent, action: "draft" | "publish") {
    e.preventDefault();
    setIsSubmitting(true);

    const courseData: Course = {
      id: initialData?.id || "",
      title: formData.title || "",
      description: formData.description || "",
      subject: formData.subject || "",
      gradeLevel: formData.gradeLevel || "",
      courseType: (formData.courseType as CourseType) || "Regular Class",
      duration: formData.duration || "",
      price: formData.price || 0,
      status: action === "publish" ? "Published" : "Draft",
      teacherId: initialData?.teacherId || "",
      teacherName: formData.teacherName || "",
      students: initialData?.students || 0,
      lessons: initialData?.lessons || 0,
      assignments: initialData?.assignments || 0,
      quizzes: initialData?.quizzes || 0,
      rating: initialData?.rating || 0,
      completionRate: initialData?.completionRate || 0,
      createdAt: initialData?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastUpdated: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      thumbnail: formData.thumbnail || "",
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onSubmit) {
      onSubmit(courseData);
    } else {
      console.log("Form submitted:", courseData);
      router.push("/dashboard/teacher/courses");
    }

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, "draft")} className="max-w-4xl">
      <div className="space-y-8">
        {/* Basic Information */}

        <div
          className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-6
          "
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-600" />
            Basic Information
          </h2>

          <div className="space-y-5">
            {/* Title */}

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Course Title
              </label>

              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Advanced React Development"
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                placeholder-gray-400
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                "
              />
            </div>

            {/* Description */}

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your course content, objectives, and what students will learn..."
                rows={5}
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                placeholder-gray-400
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                resize-vertical
                "
              />
            </div>

            {/* Subject & Grade Level */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Computer Science"
                  className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-2.5
                  text-sm
                  text-gray-900
                  placeholder-gray-400
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  outline-none
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="gradeLevel"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Grade Level
                </label>

                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-2.5
                  text-sm
                  text-gray-900
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  outline-none
                  bg-white
                  "
                >
                  <option value="">Select grade level</option>
                  <option value="Elementary">Elementary</option>
                  <option value="Middle School">Middle School</option>
                  <option value="High School">High School</option>
                  <option value="College">College</option>
                  <option value="Professional">Professional</option>
                  <option value="All Levels">All Levels</option>
                </select>
              </div>
            </div>

            {/* Teacher Name */}

            <div>
              <label
                htmlFor="teacherName"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Teacher Name
              </label>

              <input
                type="text"
                id="teacherName"
                name="teacherName"
                value={formData.teacherName}
                onChange={handleChange}
                placeholder="e.g., Sarah Johnson"
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                placeholder-gray-400
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                "
              />
            </div>
          </div>
        </div>

        {/* Course Details */}

        <div
          className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-6
          "
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Clock size={20} className="text-purple-600" />
            Course Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Course Type */}

            <div>
              <label
                htmlFor="courseType"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Course Type
              </label>

              <select
                id="courseType"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                bg-white
                "
              >
                <option value="Regular Class">Regular Class</option>
                <option value="Exam Preparation">Exam Preparation</option>
                <option value="Online Course">Online Course</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            {/* Duration */}

            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Duration
              </label>

              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 8 Weeks"
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                placeholder-gray-400
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                "
              />
            </div>

            {/* Price in Rupees */}

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Price (RS)
              </label>

              <div className="relative">
                <div
                  className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  font-medium
                  text-sm
                  "
                >
                  RS
                </div>

                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setFormData((prev) => ({
                      ...prev,
                      price: value === "" ? 0 : parseInt(value),
                    }));
                  }}
                  placeholder="0"
                  className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-12
                  pr-20
                  py-2.5
                  text-sm
                  text-gray-900
                  placeholder-gray-400
                  transition
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  outline-none
                  "
                />

                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {formData.price === 0 ? (
                    <span
                      className="
                      text-xs
                      font-semibold
                      text-emerald-600
                      bg-emerald-50
                      px-2.5
                      py-1
                      rounded-full
                      "
                    >
                      Free
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">
                      RS {formData.price?.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail */}

        <div
          className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-6
          "
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Upload size={20} className="text-green-600" />
            Course Thumbnail
          </h2>

          <div className="space-y-4">
            {thumbnailPreview ? (
              <div className="relative inline-block">
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail preview"
                  className="
                  w-64
                  h-36
                  object-cover
                  rounded-lg
                  border
                  border-gray-200
                  "
                />

                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="
                  absolute
                  -top-2
                  -right-2
                  p-1
                  rounded-full
                  bg-red-500
                  text-white
                  hover:bg-red-600
                  transition
                  shadow-sm
                  "
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <label
                className="
                flex
                flex-col
                items-center
                justify-center
                w-64
                h-36
                border-2
                border-dashed
                border-gray-300
                rounded-lg
                cursor-pointer
                hover:border-blue-400
                hover:bg-blue-50
                transition
                "
              >
                <Upload size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Upload thumbnail</span>
                <span className="text-xs text-gray-400 mt-1">
                  PNG, JPG or WebP
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Status (only when editing) */}

        {isEditing && (
          <div
            className="
            rounded-xl
            border
            border-gray-200
            bg-white
            p-6
            "
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Eye size={20} className="text-amber-600" />
              Course Status
            </h2>

            <div>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                w-full
                md:w-64
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                text-gray-900
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
                outline-none
                bg-white
                "
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>
        )}

        {/* Actions */}

        <div
          className="
          flex
          items-center
          justify-end
          gap-3
          pt-4
          border-t
          border-gray-200
          "
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="
            px-6
            py-2.5
            rounded-lg
            border
            border-gray-300
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-gray-50
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
            px-6
            py-2.5
            rounded-lg
            border
            border-gray-300
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-gray-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            flex
            items-center
            gap-2
            "
          >
            <Save size={16} />
            {isSubmitting ? "Saving..." : "Save as Draft"}
          </button>

          <button
            type="button"
            onClick={(e) => handleSubmit(e, "publish")}
            disabled={isSubmitting}
            className="
            px-6
            py-2.5
            rounded-lg
            bg-blue-600
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-700
            disabled:opacity-50
            disabled:cursor-not-allowed
            flex
            items-center
            gap-2
            shadow-sm
            "
          >
            <Send size={16} />
            {isSubmitting ? "Publishing..." : "Publish Course"}
          </button>
        </div>
      </div>
    </form>
  );
}
