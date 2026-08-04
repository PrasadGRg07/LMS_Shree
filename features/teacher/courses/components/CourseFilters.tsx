"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}

export default function CourseFilters({
  search,
  setSearch,
  status,
  setStatus,
}: CourseFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Input
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="md:max-w-sm"
      />

      <Select
        value={status}
        onValueChange={(value) => setStatus(value ?? "all")}
      >
        <SelectTrigger className="md:w-48">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Courses</SelectItem>

          <SelectItem value="Published">Published</SelectItem>

          <SelectItem value="Draft">Draft</SelectItem>

          <SelectItem value="Archived">Archived</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
