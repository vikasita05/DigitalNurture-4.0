import React from "react";

export default function CourseDetails({ courses }) {
  return (
    <div>
      <h1 style={{color:'green'}}>Course Details</h1>
      {courses.map((c, idx) => (
        <div key={idx}>
          <h2>{c.name}</h2>
          <small>{c.date}</small>
        </div>
      ))}
    </div>
  );
}