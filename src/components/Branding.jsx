import React from "react";
import "./Branding.css";
import { motion } from "framer-motion";

const featuresData = [
  { id: 1, title: "Creative Design", desc: "Unique and modern designs to represent your brand." },
  { id: 2, title: "Marketing Strategy", desc: "Smart strategies to grow your brand visibility." },
  { id: 3, title: "Analytics", desc: "Track your brand performance with real-time analytics." },
  { id: 4, title: "Brand Consultation", desc: "Get expert guidance on how to improve and scale your brand." },
  { id: 5, title: "SEO Optimization", desc: "Boost your online presence and reach a wider audience organically." },
  { id: 6, title: "Content Creation", desc: "Engaging blogs, visuals, and videos tailored for your brand identity." },
  { id: 7, title: "UI/UX Design", desc: "User-friendly layouts and designs that enhance customer experience." },
  { id: 8, title: "Customer Engagement", desc: "Strategies to keep your customers loyal and engaged with your brand." },

  
];

const guidelinesData = [
  { 
    id: 1, 
    title: "Define your brand identity", 
    desc: "Create a clear identity that represents your values, vision, and unique positioning.", 
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=250&fit=crop"
  },
  { 
    id: 2, 
    title: "Refine your user experience", 
    desc: "Make your design user-friendly, intuitive, and aligned with customer expectations.", 
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop"
  },
  { 
    id: 3, 
    title: "Establish brand trust", 
    desc: "Show transparency, professionalism, and consistency to build credibility.", 
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop"
  },
  { 
    id: 4, 
    title: "Use your brand voice", 
    desc: "Maintain a consistent tone across all channels to connect emotionally with your audience.", 
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  },
  { 
    id: 5, 
    title: "Be aware of user pain points", 
    desc: "Understand customer struggles and solve them effectively through design and communication.", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop"
  },
  { 
    id: 6, 
    title: "Set up an easy layout and site structure", 
    desc: "Organize information logically so users can navigate your brand seamlessly.", 
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  
];

const Branding = () => {
  return (
    <div className="branding">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero-inner">
          <motion.h1
           initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Elevate Your Brand</h1>
          </motion.h1>
           <motion.p
           initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="hero-sub">
            Build a stunning brand presence that connects with your audience.
            Branding is more than just a logo or a tagline – it’s the soul of your business. It defines how your audience perceives you, how they connect with your products or services, and why they choose you over competitors. A strong brand creates trust, builds recognition, and communicates the values that your business stands for.
          </p>
          </motion.p>
          <div className="buttomm" >
          <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Our Features</h2>
          <div className="features-container">
            {featuresData.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.title.charAt(0)}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="guidelines">
        <div className="container">
          <h2 className="section-title">Branding Guidelines</h2>
          <div className="guideline-grid">
            {guidelinesData.map((guide) => (
              <div key={guide.id} className="guideline-card">
                <img src={guide.img} alt={guide.title} className="guideline-img" />
                <div className="guideline-content">
                  <h3>{guide.title}</h3>
                  <p>{guide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
