import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import { books } from "./books";

const blogs = [
  {title: "React Learning", author: "Stephen Biz", desc: "Welcome to learning React!"},
  {title: "Installation", author: "Schwezdenier", desc: "You can install React from npm."}
];

const courses = [
  {name: "Angular", date: "4/5/2021"},
  {name: "React", date: "6/3/2021"}
];

function App() {
  const [view, setView] = useState("books");

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={() => setView("books")}>Book Details</button>
        <button onClick={() => setView("blogs")}>Blog Details</button>
        <button onClick={() => setView("courses")}>Course Details</button>
      </div>
      <div>
        {view === "books" && <BookDetails books={books} />}
        {view === "blogs" && <BlogDetails blogs={blogs} />}
        {view === "courses" && <CourseDetails courses={courses} />}
      </div>
    </div>
  );
}

export default App;
