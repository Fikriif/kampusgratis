"use client";

import React from "react";
import { useCourses } from "../course/useCourses";
import Image from "next/image";

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
          <li key={course.id}>
            <h2>{course.name}</h2>
            <Image src={course.img} alt="none" width={250} height={250} />
            <p>Price: {course.price}</p>
            <p>{course.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
