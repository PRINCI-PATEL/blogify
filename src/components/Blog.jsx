import React, { useState } from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?w=600&auto=format&fit=crop&q=60",
    title: "Post 1 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
    category: "Design",
    readTime: "4 min read",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    title: "Post 2 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
    category: "Trends",
    readTime: "6 min read",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1754597302822-4b96f3442d3f?w=600&auto=format&fit=crop&q=60",
    title: "Post 3 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 22 2020",
    category: "Tutorial",
    readTime: "3 min read",
  },
  {
    id: 4,
    img: "https://plus.unsplash.com/premium_photo-1754781493808-e575e4474ee9?w=600&auto=format&fit=crop&q=60",
    title: "Post 4 Headline",
    text: "Sample small text. Lorem ipsum dolor sit amet.",
    date: "Wed Jul 12 2022",
    category: "Inspiration",
    readTime: "5 min read",
  },
];

function Blog() {
  const [showPage, setShowPage] = useState(false);

  if (showPage) {
    return (
      <div className="blogpage-container">
        <h1>Welcome to Your Blog ✍️</h1>
        <p>
          This is your brand new blog page! 🎉 
          Here you can start writing posts, add categories, and share your ideas with the world.
        </p>
        <button className="back-btn" onClick={() => setShowPage(false)}>
          ⬅ Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="blog-section">
      <h2 className="blog_title">Our Blog</h2>
      <p className="blog-subtitle">
        Explore insights, tutorials, and trends from our creative experts.  
        Stay inspired and keep learning with our latest posts.
      </p>

      {/* ✅ Featured Post Section */}
      {/* ✅ Featured Posts Section */}
<div className="featured-post">
  <h3>🌟 Featured Posts</h3>
  <div className="featured-grid">
    {blogs.slice(0, 3).map((blog) => (
      <div key={blog.id} className="featured-card">
        <img src={blog.img} alt={blog.title} />
        <h4>{blog.title}</h4>
        <p>{blog.text}</p>
        <button onClick={() => setShowPage(true)}>Read Featured →</button>
      </div>
    ))}
  </div>
</div>


      {/* ✅ Categories Section */}
      <div className="categories">
        <h3>📂 Categories</h3>
        <ul>
          <li>🎨 Design</li>
          <li>📈 Trends</li>
          <li>📘 Tutorial</li>
          <li>💡 Inspiration</li>
        </ul>
      </div>

      {/* ✅ Blog Grid */}
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} />
            <div className="blog-meta">
              <span className="blog-category">{blog.category}</span>
              <span className="blog-readtime">{blog.readTime}</span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
            <span className="blog-date">{blog.date}</span>
            <button className="read-more" onClick={() => setShowPage(true)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Newsletter Section */}
      <div className="newsletter">
        <h3>📩 Subscribe to Our Newsletter</h3>
        <p>Stay updated with the latest blogs, tutorials & design inspiration.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="view-all-container">
        <button className="view-all-btn" onClick={() => setShowPage(true)}>
          View All Posts
        </button>
      </div>
    </div>
  );
}

export default Blog;
