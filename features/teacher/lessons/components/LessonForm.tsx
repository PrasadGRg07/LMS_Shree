"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Lesson } from "@/data/lessons";

import {
  Upload,
  Video,
  FileText,
  File,
  Calendar,
  Link2,
} from "lucide-react";

import {
  lessonSchema,
  LessonFormValues,
} from "../schemas/lessonSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface LessonFormProps {
  courseId: string;
  lesson?: Lesson;
  mode?: "create" | "edit";
}

interface Chapter {
  id: string;
  title: string;
  description?: string | null;
  order: number;
  courseId: string;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001/api";

export default function LessonForm({
  courseId,
  lesson,
  mode = "create",
}: LessonFormProps) {
  // --------------------------------
  // Local State
  // --------------------------------

  const [contentFile, setContentFile] =
    useState<File | null>(null);

  const [contentPreview, setContentPreview] =
    useState("");

  const [resourceFiles, setResourceFiles] =
    useState<File[]>([]);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [chapters, setChapters] =
    useState<Chapter[]>([]);

  const [isLoadingChapters, setIsLoadingChapters] =
    useState(true);

  // --------------------------------
  // React Hook Form
  // --------------------------------

  const form = useForm<LessonFormValues>({
    resolver: zodResolver(lessonSchema),

    defaultValues: {
      title: lesson?.title ?? "",
      description: lesson?.description ?? "",
      chapterId: lesson?.chapter ?? "",
      type: lesson?.type ?? "Video",
      duration: lesson?.duration ?? "",
      isPreview: false,
      status: lesson?.status ?? "Draft",
    },
  });

  const lessonType = form.watch("type");

  // --------------------------------
  // Load Chapters From Express API
  // --------------------------------

  useEffect(() => {
    async function loadChapters() {
      try {
        setIsLoadingChapters(true);

        const response = await fetch(
          `${API_URL}/chapters`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to load chapters"
          );
        }

        const courseChapters = data.data.filter(
          (chapter: Chapter) =>
            chapter.courseId === courseId
        );

        setChapters(courseChapters);
      } catch (error) {
        console.error(
          "Failed to load chapters:",
          error
        );
      } finally {
        setIsLoadingChapters(false);
      }
    }

    loadChapters();
  }, [courseId]);

  // --------------------------------
  // Reset when editing
  // --------------------------------

  useEffect(() => {
    if (mode === "edit" && lesson) {
      form.reset({
        title: lesson.title,
        description: lesson.description,
        chapterId: lesson.chapter,
        type: lesson.type,
        duration: lesson.duration,
        isPreview: false,
        status: lesson.status,
      });
    }
  }, [lesson, mode, form]);

  // --------------------------------
  // Content File
  // --------------------------------

  function handleContentFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setContentFile(file);

    if (file.type.startsWith("image/")) {
      setContentPreview(
        URL.createObjectURL(file)
      );
    } else {
      setContentPreview("");
    }
  }

  // --------------------------------
  // Resource Files
  // --------------------------------

  function handleResources(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files) return;

    setResourceFiles(
      Array.from(e.target.files)
    );
  }

  // --------------------------------
  // Cleanup
  // --------------------------------

  useEffect(() => {
    return () => {
      if (contentPreview) {
        URL.revokeObjectURL(contentPreview);
      }
    };
  }, [contentPreview]);

  // --------------------------------
  // Convert Frontend Type → Prisma Type
  // --------------------------------

  function mapLessonType(
    type: LessonFormValues["type"]
  ) {
    const typeMap = {
      Video: "VIDEO",
      PDF: "PDF",
      Document: "DOCUMENT",
      Assignment: "ASSIGNMENT",
      "Live Class": "LIVE_CLASS",
    } as const;

    return typeMap[type];
  }

  // --------------------------------
  // Convert Frontend Status → Prisma Status
  // --------------------------------

  function mapLessonStatus(
    status: LessonFormValues["status"]
  ) {
    const statusMap = {
      Draft: "DRAFT",
      Published: "PUBLISHED",
    } as const;

    return statusMap[status];
  }

  // --------------------------------
  // Submit
  // --------------------------------

  async function onSubmit(
    values: LessonFormValues
  ) {
    setIsSubmitting(true);

    try {
      if (!values.chapterId) {
        throw new Error(
          "Please select a chapter."
        );
      }

      const payload = {
        title: values.title,
        description: values.description,
        chapterId: values.chapterId,
        type: mapLessonType(values.type),
        duration: values.duration,
        status: mapLessonStatus(values.status),
        isPreview: values.isPreview,
        order: 1,
      };

      console.log(
        mode === "edit"
          ? "Updating lesson:"
          : "Creating lesson:",
        payload
      );

      // --------------------------------
      // CREATE
      // --------------------------------

      if (mode === "create") {
        const response = await fetch(
          `${API_URL}/lessons`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message ||
              "Failed to create lesson"
          );
        }

        console.log(
          "Lesson created:",
          data.data
        );

        alert(
          "Lesson created successfully! 🎉"
        );

        return;
      }

      // --------------------------------
      // UPDATE
      // --------------------------------

      if (mode === "edit") {
        if (!lesson?.id) {
          throw new Error(
            "Lesson ID is missing."
          );
        }

        const response = await fetch(
          `${API_URL}/lessons/${lesson.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message ||
              "Failed to update lesson"
          );
        }

        console.log(
          "Lesson updated:",
          data.data
        );

        alert(
          "Lesson updated successfully! 🎉"
        );
      }
    } catch (error) {
      console.error(
        "Lesson submission failed:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8 rounded-2xl border bg-card p-8 shadow-sm"
    >
      {/* --------------------------------
          Header
      -------------------------------- */}

      <div className="space-y-1">
        <h2 className="text-2xl font-bold">
          {mode === "edit"
            ? "Edit Lesson"
            : "Create Lesson"}
        </h2>

        <p className="text-muted-foreground">
          {mode === "edit"
            ? "Update lesson information and learning materials."
            : "Add learning materials to your course."}
        </p>
      </div>

      {/* --------------------------------
          Lesson Information
      -------------------------------- */}

      <section className="space-y-6 rounded-xl border p-6">
        <div>
          <h3 className="text-lg font-semibold">
            Lesson Information
          </h3>

          <p className="text-sm text-muted-foreground">
            Basic information about this lesson.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Lesson Title */}

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="title">
              Lesson Title
            </Label>

            <Input
              id="title"
              placeholder="Introduction to Algebra"
              {...form.register("title")}
            />

            {form.formState.errors.title && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors.title
                    .message
                }
              </p>
            )}
          </div>

          {/* Description */}

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">
              Description
            </Label>

            <Textarea
              id="description"
              rows={5}
              placeholder="Describe what students will learn..."
              {...form.register("description")}
            />

            {form.formState.errors.description && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors
                    .description.message
                }
              </p>
            )}
          </div>

          {/* Chapter */}

          <div className="space-y-2">
            <Label>Chapter</Label>

            <Controller
              control={form.control}
              name="chapterId"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isLoadingChapters}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        isLoadingChapters
                          ? "Loading chapters..."
                          : "Select Chapter"
                      }
                    />
                  </SelectTrigger>

                  <SelectContent>
                    {chapters.map((chapter) => (
                      <SelectItem
                        key={chapter.id}
                        value={chapter.id}
                      >
                        {chapter.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {form.formState.errors.chapterId && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors
                    .chapterId.message
                }
              </p>
            )}
          </div>

          {/* Lesson Type */}

          <div className="space-y-2">
            <Label>Lesson Type</Label>

            <Controller
              control={form.control}
              name="type"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Video">
                      🎥 Video
                    </SelectItem>

                    <SelectItem value="PDF">
                      📄 PDF
                    </SelectItem>

                    <SelectItem value="Document">
                      📑 Document
                    </SelectItem>

                    <SelectItem value="Assignment">
                      📝 Assignment
                    </SelectItem>

                    <SelectItem value="Live Class">
                      📹 Live Class
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {form.formState.errors.type && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors.type
                    .message
                }
              </p>
            )}
          </div>

          {/* Duration */}

          <div className="space-y-2">
            <Label htmlFor="duration">
              Duration
            </Label>

            <Input
              id="duration"
              placeholder="45 Minutes"
              {...form.register("duration")}
            />

            {form.formState.errors.duration && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors
                    .duration.message
                }
              </p>
            )}
          </div>

          {/* Status */}

          <div className="space-y-2">
            <Label>Status</Label>

            <Controller
              control={form.control}
              name="status"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Draft">
                      Draft
                    </SelectItem>

                    <SelectItem value="Published">
                      Published
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {form.formState.errors.status && (
              <p className="text-sm text-red-500">
                {
                  form.formState.errors.status
                    .message
                }
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------
          Lesson Content
      -------------------------------- */}

      <section className="space-y-6 rounded-xl border p-6">
        <div>
          <h3 className="text-lg font-semibold">
            Lesson Content
          </h3>

          <p className="text-sm text-muted-foreground">
            Upload or configure the lesson content.
          </p>
        </div>

        {/* Video */}

        {lessonType === "Video" && (
          <div className="space-y-4">
            <Label>Video File</Label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-10 transition hover:bg-muted/40">
              <Video className="mb-3 h-12 w-12 text-blue-600" />

              <p className="font-medium">
                Upload Video
              </p>

              <p className="text-sm text-muted-foreground">
                MP4, MOV, AVI
              </p>

              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleContentFile}
              />
            </label>
          </div>
        )}

        {/* PDF */}

        {lessonType === "PDF" && (
          <div className="space-y-4">
            <Label>PDF Notes</Label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-10 transition hover:bg-muted/40">
              <FileText className="mb-3 h-12 w-12 text-red-600" />

              <p className="font-medium">
                Upload PDF
              </p>

              <p className="text-sm text-muted-foreground">
                PDF Documents Only
              </p>

              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleContentFile}
              />
            </label>
          </div>
        )}

        {/* Document */}

        {lessonType === "Document" && (
          <div className="space-y-4">
            <Label>Document</Label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-10 transition hover:bg-muted/40">
              <File className="mb-3 h-12 w-12 text-indigo-600" />

              <p className="font-medium">
                Upload Document
              </p>

              <p className="text-sm text-muted-foreground">
                DOC, DOCX, PPT, PPTX
              </p>

              <input
                type="file"
                accept=".doc,.docx,.ppt,.pptx"
                className="hidden"
                onChange={handleContentFile}
              />
            </label>
          </div>
        )}

        {/* Assignment */}

        {lessonType === "Assignment" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Assignment File</Label>

              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleContentFile}
              />
            </div>

            <div className="space-y-2">
              <Label>
                Submission Deadline
              </Label>

              <Input
                type="datetime-local"
              />
            </div>
          </div>
        )}

        {/* Live Class */}

        {lessonType === "Live Class" && (
          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">
              <Label>Meeting Link</Label>

              <div className="relative">
                <Link2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  className="pl-10"
                  placeholder="https://meet.google.com/..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Class Schedule</Label>

              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  className="pl-10"
                  type="datetime-local"
                />
              </div>
            </div>

          </div>
        )}

        {/* Selected File */}

        {contentFile && (
          <div className="rounded-xl border bg-muted/30 p-5">
            <div className="flex items-center gap-4">

              {contentFile.type.startsWith("video") ? (
                <Video className="h-10 w-10 text-blue-600" />
              ) : contentFile.type.includes("pdf") ? (
                <FileText className="h-10 w-10 text-red-600" />
              ) : (
                <File className="h-10 w-10 text-indigo-600" />
              )}

              <div className="flex-1">
                <p className="font-semibold">
                  {contentFile.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {(contentFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            {contentPreview && (
              <div className="mt-6">
                <Image
                  src={contentPreview}
                  alt="Preview"
                  width={700}
                  height={350}
                  className="rounded-xl object-cover"
                />
              </div>
            )}
          </div>
        )}
      </section>

      {/* --------------------------------
          Learning Resources
      -------------------------------- */}

      <section className="space-y-6 rounded-xl border p-6">
        <div>
          <h3 className="text-lg font-semibold">
            Learning Resources
          </h3>

          <p className="text-sm text-muted-foreground">
            Upload additional files that students can download.
          </p>
        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-8 transition hover:bg-muted/40">
          <Upload className="mb-3 h-10 w-10 text-primary" />

          <p className="font-medium">
            Upload Resources
          </p>

          <p className="text-sm text-muted-foreground">
            PDF, DOCX, PPTX, ZIP (Multiple files supported)
          </p>

          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
            className="hidden"
            onChange={handleResources}
          />
        </label>

        {resourceFiles.length > 0 && (
          <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
            <h4 className="font-medium">
              Uploaded Resources
            </h4>

            {resourceFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg bg-background p-3"
              >
                <File className="h-5 w-5 text-primary" />

                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {file.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --------------------------------
          Learning Settings
      -------------------------------- */}

      <section className="space-y-6 rounded-xl border p-6">
        <div>
          <h3 className="text-lg font-semibold">
            Learning Settings
          </h3>

          <p className="text-sm text-muted-foreground">
            Configure how students will access this lesson.
          </p>
        </div>

        {/* Free Preview */}

        <Controller
          control={form.control}
          name="isPreview"
          render={({ field }) => (
            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <h4 className="font-medium">
                  Free Preview
                </h4>

                <p className="text-sm text-muted-foreground">
                  Students can view this lesson before enrolling.
                </p>
              </div>

              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) =>
                  field.onChange(e.target.checked)
                }
                className="h-5 w-5"
              />
            </div>
          )}
        />

        {/* Learning Objectives */}

        <div className="space-y-2">
          <Label>Learning Objectives</Label>

          <Textarea
            rows={4}
            placeholder={`Example:

• Understand Algebra fundamentals
• Solve simple equations
• Complete practice exercises`}
          />

          <p className="text-xs text-muted-foreground">
            Describe what students should achieve after completing this lesson.
          </p>
        </div>

        {/* Prerequisites */}

        <div className="space-y-2">
          <Label>Prerequisites</Label>

          <Textarea
            rows={3}
            placeholder="Students should complete Chapter 1 before starting this lesson."
          />
        </div>

        {/* Teacher Notes */}

        <div className="space-y-2">
          <Label>Teacher Notes</Label>

          <Textarea
            rows={3}
            placeholder="Private notes for instructors (not visible to students)."
          />
        </div>
      </section>

      {/* --------------------------------
          Actions
      -------------------------------- */}

      <section className="rounded-xl border p-6">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <Button
            type="button"
            variant="outline"
            disabled={isSubmitting}
            onClick={() => form.reset()}
          >
            Reset
          </Button>

          <Button
            type="button"
            variant="secondary"
            disabled={isSubmitting}
            onClick={() => {
              console.log(
                "Save Draft",
                form.getValues()
              );
            }}
          >
            Save Draft
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? mode === "edit"
                ? "Updating..."
                : "Publishing..."
              : mode === "edit"
                ? "Update Lesson"
                : "Publish Lesson"}
          </Button>

        </div>
      </section>
    </form>
  );
}
