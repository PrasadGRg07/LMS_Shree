const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

export interface CreateLessonPayload {
  title: string;
  description: string;
  chapterId: string;
  type: "VIDEO" | "PDF" | "DOCUMENT" | "ASSIGNMENT" | "LIVE_CLASS";
  duration: string;
  status: "DRAFT" | "PUBLISHED";
  isPreview: boolean;
  order?: number;
}

export async function createLesson(payload: CreateLessonPayload) {
  const response = await fetch(`${API_URL}/lessons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create lesson");
  }

  return data;
}

export async function getLessons() {
  const response = await fetch(`${API_URL}/lessons`, {
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch lessons");
  }

  return data;
}

export async function getLesson(id: string) {
  const response = await fetch(`${API_URL}/lessons/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch lesson");
  }

  return data;
}

export async function updateLesson(
  id: string,
  payload: Partial<CreateLessonPayload>,
) {
  const response = await fetch(`${API_URL}/lessons/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update lesson");
  }

  return data;
}

export async function deleteLesson(id: string) {
  const response = await fetch(`${API_URL}/lessons/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete lesson");
  }

  return data;
}