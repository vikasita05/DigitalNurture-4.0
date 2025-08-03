import React from "react";

export default function BlogDetails({ blogs }) {
  return (
    <div>
      <h1 style={{color:'blue'}}>Blog Details</h1>
      {blogs.map((blog, idx) => (
        <div key={idx}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}