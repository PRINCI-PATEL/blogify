import React from "react";
import "./ProductDesign.css";
import { motion } from "framer-motion";
const ProductDesign = () => {
  return (
    <div className="pd-page">

      {/* Hero Section */}
      <section className="pd-hero">
        <motion.h1
        initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
        <h1>Welcome to Product Design 🌍</h1>
        </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
        <p>Portfolio | Business | E-commerce | Blog | Custom Design</p>
        </motion.p>
        <button>Explore More</button>
      </section>

      {/* Portfolio Section */}
      <section className="pd-portfolio">
  <h2 className="pd-portfolio-title">My Portfolio</h2>
  <p className="pd-portfolio-subtitle">
    Here are some of my recent works showcasing creativity, design & development 🚀
  </p>

  <div className="pd-portfolio-grid">
    <div className="pd-card">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
        alt="Web Development"
      />
      <h3>Web Development</h3>
      <p>
        Created responsive and interactive websites using React, Tailwind and
 frameworks.
      </p>
      <a href="#" className="pd-btn">View Project</a>
    </div>

    <div className="pd-card">
      <img
        src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VUl8ZW58MHx8MHx8fDA%3D"
        alt="UI/UX Design"
      />
      <h3>UI / UX Design</h3>
      <p>
        Designed user-friendly mobile & web interfaces with Figma and Adobe XD.
      </p>
      <a href="#" className="pd-btn">View Project</a>
    </div>

    <div className="pd-card">
      <img
        src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFVJfGVufDB8fDB8fHww"
        alt="Mobile App"
      />
      <h3>Mobile App</h3>
      <p>
        Developed cross-platform mobile apps with smooth performance and
        beautiful UI.
      </p>
      <a href="#" className="pd-btn">View Project</a>
    </div>
  </div>
</section>


      {/* Business Section */}
      <section className="pd-business">
  <h2>Our Business</h2>
  <p>We provide high quality services to grow your brand 🚀</p>

  <div className="business-grid">
    {/* Card 1 */}
    <div className="business-card">
      <img src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVJfGVufDB8fDB8fHww" alt="Web Development" />
      <h3>Web Development</h3>
      <p>Building responsive, fast and secure websites tailored to your needs.</p>
    </div>

    {/* Card 2 */}
    <div className="business-card">
      <img src="https://media.istockphoto.com/id/2035914580/photo/professional-woman-analyzing-data-on-tablet-at-work-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bpjzf956Si68bFHByvp2Dio6LReUfwlIxo1fwKGfRMY=" alt="Marketing Strategy" />
      <h3>Marketing Strategy</h3>
      <p>Creative campaigns and strategies to grow your brand visibility.</p>
    </div>

    {/* Card 3 */}
    <div className="business-card">
      <img src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VUl8ZW58MHx8MHx8fDA%3D" alt="Creative Design" />
      <h3>Creative Design</h3>
      <p>Modern, eye-catching designs that enhance your brand identity.</p>
    </div>
  </div>
</section>


      {/* E-commerce Section */}
      <section className="pd-ecommerce" >
  <h2>Shop Products</h2>
  <div className="pd-product-grid">
    <div className="pd-product">
      <img src="https://media.istockphoto.com/id/1390456645/photo/metaverse-and-blockchain-technology-concepts-person-with-an-experiences-of-metaverse-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=jHsN5XXNnjCauD_ICdJJWPBnuPn3k2cTFOtMOEBThwI=" alt="Handbag" />
      <p>Web Design</p>
    </div>
    <div className="pd-product">
      <img src="https://media.istockphoto.com/id/2169040419/photo/ux-ui-designers-discussing-and-brainstorming-on-wireframes-for-a-website-and-mobile-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=FzAQ2MTOxTCa1sTRfwAQ7tD1nCu8Em_0Xz8i4Mo5JKM=" alt="Watch" />
      <p>Animation</p>
    </div>
    <div className="pd-product">
      <img src="https://media.istockphoto.com/id/2164339314/photo/ux-ui-designer-working-on-wireframes-for-a-website-and-mobile-app-prototype-surrounded-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=E6cTQ3ieJ_E8qGZq36dvrmRHqWa_79LAq8s-_T1pjoc=" alt="Watch" />
      <p>Development</p>
    </div>
    <div className="pd-product">
      <img src="https://images.unsplash.com/photo-1699040309386-11c615ed64d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFVJfGVufDB8fDB8fHww" alt="Watch" />
      <p>Discover</p>
    </div>
    <div className="pd-product">
      <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VUl8ZW58MHx8MHx8fDA%3D" alt="Watch" />
      <p>Illustration</p>
    </div>
    <div className="pd-product">
      <img src="https://images.unsplash.com/photo-1695671538019-0b45bdb5b608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFVJfGVufDB8fDB8fHww" alt="Watch" />
      <p>Branding</p>
    </div>
  </div>
</section>


      {/* Blog Section */}
      <section className="pd-blog">
  <h2 className="pd-blog-title">Latest Blogs</h2>
  <div className="pd-blog-list">
    <article className="pd-blog-card">
      <h3>📖 How to grow your business online</h3>
      <p>Discover smart strategies to take your business to the next level with online growth techniques.</p>
      <button className="pd-blog-btn">Read More →</button>
    </article>

    <article className="pd-blog-card">
      <h3>📖 10 Best Portfolio Design Ideas</h3>
      <p>Explore modern portfolio designs that can impress clients and showcase your creativity.</p>
      <button className="pd-blog-btn">Read More →</button>
    </article>

    <article className="pd-blog-card">
      <h3>📖 Future of E-commerce in 2025</h3>
      <p>Trends and predictions shaping the future of e-commerce in the coming years.</p>
      <button className="pd-blog-btn">Read More →</button>
    </article>
  </div>
</section>


      {/* Contact Section */}
      <section className="pd-contact">
  <h2 className="pd-contact-title">Contact Me</h2>
  <form className="pd-contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit" className="pd-contact-btn">Send Message ✉️</button>
  </form>
</section>

      
    </div>
  );
};

export default ProductDesign;