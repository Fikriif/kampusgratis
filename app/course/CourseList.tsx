"use client";

import React from "react";
import { useCourses } from "../course/useCourses";

const CourseList: React.FC = () => {
  const { data, error, isLoading } = useCourses();

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
    </div>
  );
};

export default CourseList;
