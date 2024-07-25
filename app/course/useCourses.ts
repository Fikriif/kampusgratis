import { useQuery } from "@tanstack/react-query";
interface Course {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

const fetchCourses = async (page: number): Promise<Course[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_page=${page}&_limit=10"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCourses = (page: number) => {
  return useQuery<Course[], Error>({
    queryKey: ["courses", page],
    queryFn: () => fetchCourses(page),
  });
};
