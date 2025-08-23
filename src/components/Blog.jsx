import React, { useState } from "react";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

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

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="blog-card">
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="view-all-container">
        <button className="view-all-btn" onClick={() => setShowPage(true)}>
          View All Posts
        </button>
      </div>
    </div>
  );
}

export default Blog;
