import { useQuery } from "@tanstack/react-query";

interface Course {
  id: number;
  name: string;
  img: string;
  price: number;
  value: number;
}

const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch("../dummy/items.json"); // Menggunakan items.json
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCourses = () => {
  return useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });
};
