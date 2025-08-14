import React from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    img: "https://via.placeholder.com/300x200",
    title: "Post 1 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/300x200",
    title: "Post 2 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300x200",
    title: "Post 3 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
  },
];

function Blog() {
  return (
    <div className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
            <span className="blog-date">{blog.date}</span>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
