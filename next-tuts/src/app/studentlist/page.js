"use client";
import Link from "next/link";
import React from "react";

const students = [
  { id: "1", name: "Sangam" },
  { id: "2", name: "Mohit" },
  { id: "3", name: "Viky" },
  { id: "4", name: "Manish" },
  { id: "5", name: "Ujwal" },
];

const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;