"use client";
import { useParams } from "next/navigation";
import React from "react";

const Student = () => {
  const params = useParams(); // Get student ID from the URL return object
  const studentId = params?.id;

  return (
    <div>
      <h1>Student Details</h1>
      <p>ID: {studentId}</p>
    </div>
  );
};

export default Student;
