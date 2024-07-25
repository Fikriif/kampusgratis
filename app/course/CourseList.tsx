"use client";

import React, { useState } from "react";
import { useCourses } from "../course/useCourses";

const CourseList: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, error, isLoading } = useCourses(pageNumber);

  const handlePrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {data?.map((course) => (
          <li key={course.userId}>
            <h2>{course.id}</h2>
            <h3>{course.title}</h3>
            <h3>{course.completed}</h3>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
          className="p-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>Page {pageNumber}</span>
        <button onClick={handleNextPage} className="p-2 bg-gray-300 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseList;
