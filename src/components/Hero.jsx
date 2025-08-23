import React from "react";
import "./Hero.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"

const cardsData = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1677609986965-c356ca6d683c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyUGxhaW50aW5nJTIwU3R1ZGlvfGVufDB8fDB8fHww",
    title: "Plainting Studio",
    team: true,
    likes: 56,
    views: "3.7k",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_vector-1711987684064-d3a0ffb6790e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0ZWR8ZW58MHx8MHx8fDA%3D",
    title: "Animation",
    team: true,
    likes: 165,
    views: "11.7k",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_vector-1682299637957-8c29c0fd4007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D",
    title: "Branding",
    team: true,
    likes: 171,
    views: "16.1k",
  },
  {
    id: 4,
    image:
      "https://cdn.dribbble.com/userupload/44533726/file/05383ff72b3fa0481c36e158eda51145.png?format=webp&resize=400x300&vertical=center",
    title: "HALO LAB",
    team: true,
    likes: 113,
    views: "14.3k",
  },
  {
    id: 5,
    image:
      "https://cdn.dribbble.com/userupload/24330356/file/still-8f7566dc89b49029e98538ed7ff4a032.png?format=webp&resize=640x480&vertical=center",
    title: "Creative Studio",
    team: false,
    likes: 87,
    views: "9.1k",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_vector-1734510179333-a289f7669d2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXglMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D",
    title: "UX Agency",
    team: true,
    likes: 142,
    views: "12.4k",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_vector-1723387348696-b2e8f437438b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduJTIwbGFifGVufDB8fDB8fHww",
    title: "Design Lab",
    team: false,
    likes: 65,
    views: "8.2k",
  },
  {
    id: 8,
    image:
      "https://plus.unsplash.com/premium_vector-1725674962767-030ae1090b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwaXhlbCUyMGFydCUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Pixel Art Studio",
    team: true,
    likes: 230,
    views: "22.7k",
  },
  {
    id: 9,
    image:
      "https://plus.unsplash.com/premium_vector-1733495234451-2ee6fdd742d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdlYmZsb3clMjBleHBlcnRzfGVufDB8fDB8fHww",
    title: "Webflow Experts",
    team: false,
    likes: 94,
    views: "10.1k",
  },
  {
    id: 10,
    image:
      "https://plus.unsplash.com/premium_vector-1732641946431-f25d9b6010a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFVJfGVufDB8fDB8fHww",
    title: "UIverse",
    team: true,
    likes: 180,
    views: "15.5k",
  },
];

// Latest posts data
const latestPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    title: "Discover",
    date: "MAY 15, 2017",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    title: "Minimal Branding Ideas for Modern Startups",
    date: "MAY 16, 2016",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Product Design",
    date: "MAY 16, 2020",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Web Design",
    date: "MAY 16, 2025",
  },
];

// Popular posts data
const popularPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    title: "Branding",
    date: "MAY 14, 2016",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    title: "Top 20 Responsive Websites for Inspiration",
    date: "MAY 14, 2023",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    title: "Animation",
    date: "MAY 18, 2024",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    title: "Product Design",
    date: "MAY 14, 2025",
  },
];

const featuresData = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Responsive on Mobile Devices",
    desc: "Never lose a mobile reader again. Your website will adapt to and display beautifully on all screen sizes."
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Quick & Easy Branding",
    desc: "Your blog reflects your personality. Don't compromise. Setup logo, colors, and layout to match your brand."
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/4205/4205922.png",
    title: "Live Customization",
    desc: "Adjust colors, typography, toggle elements, as well as choose from 1000+ layout combinations."
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/11518/11518443.png",
    title: "Easy Subscribers",
    desc: "Get subscribers with built-in MailChimp compatibility and two unique custom-designed widgets."
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/4205/4205922.png",
    title: "High Performance",
    desc: "Enjoy fast hand-optimized code and subtle optimized animations for the quickest page load times."
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    title: "Easy Demo Import",
    desc: "Import demos with one click with our demo importer that is fully optimized for shared as well as dedi webhosts."
  }
];

const Hero = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Blog Header Section */}
      <div className="blog-header">
        <h1 className="blog-title">Blogify</h1>
        <p className="blog-subtitle">
          Inspirational blog designs for inspiration.Blogify ek modern blogging
          platform hai jahan aap apne ideas, stories aur knowledge easily share
          kar sakte ho.
        </p>

        <div className="blog-categories">
          <button className="active">Discover</button>
          <button>Animation</button>
          <button>Branding</button>
          <button>Illustration</button>
          <button>Mobile</button>
          <button>Print</button>
          <button>Product Design</button>
          <button>Typography</button>
          <button>Web Design</button>
        </div>
      </div>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <div className="card-info1">
                <h4>{card.title}</h4>
                {card.team && <span className="team-badge">TEAM</span>}
              </div>
              <div className="card-stats">
                <span>❤️ {card.likes}</span>
                <span>👁 {card.views}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      {/* ⭐ Features Section (added here) */}
      <section className="features-section">
        <h2>
          Great Features for a <span className="highlight">Successful Blog</span>
        </h2>
        <p className="subtitle">
          We have tons of other features to make managing your site even easier.
          Here's just a look under the hood.
        </p>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card" style={{background:"white"}}>
              <div className="icon-box">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* ⭐ Social Widget Section */}
      <div className="social">
        <h3>Get Social With <span className="highlight">CheerUp</span></h3>
        <p>Enjoy amazing integrations with popular social media networks. Entice your readers to share and make your posts go viral.
        </p>
        </div>
        <div className="social-grid">
          <img
            src="https://theme-sphere.com/demo/cheerup-landing/img/section-social.jpg"
            alt="Social Stats"
            className="social-image"
          />
        </div>
     
      {/* ✅ CTA Section (same page) */}
      <section className="cta-section">
        <h2>Start Your <span className="highlight">Blogging Journey Today 🚀</span></h2>
        <p>Join Blogify and share your thoughts with the world.</p>
        <button className="cta-btn" onClick={() => navigate("/blog")}>
          Get Started
        </button>
      </section>
       {/* Blog Widgets */}
      <section className="blog-info">
        <div className="blog-widget about">
          <h3>ABOUT</h3>
          <img
            src="https://cheerup2.theme-sphere.com/rovella/wp-content/uploads/sites/5/2016/09/about-footer-2.jpg"
            alt="About"
          />
          <p>
            Sed ut in perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
        </div>

        {/* Latest Posts Section */}
        <div className="blog-widget posts">
          <h3>LATEST POSTS</h3>
          {latestPosts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} />
              <div>
                <p>{post.title}</p>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Posts Section */}
        <div className="blog-widget posts">
          <h3>POPULAR POSTS</h3>
          {popularPosts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} />
              <div>
                <p>{post.title}</p>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      </>
  );
};

export default Hero;
