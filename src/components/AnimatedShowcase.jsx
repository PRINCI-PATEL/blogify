import React from "react";
import { motion } from "framer-motion";
import "./AnimatedShowcase.css"; 

const AnimatedShowcase = () => {
  const whyAnimations = [
    {
      title: "✨ Engagement",
      desc: "Animations grab user attention and encourage them to explore more of your website.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    },
    {
      title: "⚡ Smooth UX",
      desc: "Well-placed animations make navigation intuitive and enjoyable for users.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop",
    },
    {
      title: "🌍 Modern Design",
      desc: "Sleek animations make your interface look futuristic and premium.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    },
  ];

  const typesOfAnimations = [
    {
      title: "Fade In / Fade Out",
      desc: "Elements smoothly appear or disappear, commonly used for modals, alerts, and images.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
    },
    {
      title: "Slide Transitions",
      desc: "Content glides into view from left, right, top, or bottom, creating a natural flow.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    },
    {
      title: "Scale & Zoom",
      desc: "Buttons, cards, and images zoom in/out on hover for attention grabbing effects.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    },
    {
      title: "Scroll Reveal",
      desc: "As you scroll, content reveals itself section by section, creating curiosity.",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=250&fit=crop",
    },
    {
      title: "Hover Interactions",
      desc: "Cards tilt, buttons bounce, and icons rotate when hovered, making them interactive.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    },
    {
      title: "Background Motion",
      desc: "Animated gradients, floating blobs, and particles add depth to your UI.",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=250&fit=crop",
    },
    {
      title: "Fade In / Fade Out",
      desc: "Elements smoothly appear or disappear, commonly used for modals, alerts, and images.",
      img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=400&h=250&fit=crop",
    },
    {
      title: "Fade In / Fade Out",
      desc: "Elements smoothly appear or disappear, commonly used for modals, alerts, and images.",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="animation-showcase-container">
      {/* Hero Section */}
      <section className="animation-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>🌟 Animated Universe</h1>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to the <strong>world of animations</strong>.  
          Discover how motion effects transform a static website into an  digital experience.

          ✨ “Animation is more than just moving pictures; it is the art of bringing imagination to life. It turns ideas into experiences, adds emotions to design, and gives stories a heartbeat. In branding and design, animation is not simply decoration—it is the bridge that connects a brand with its audience, making interactions memorable and meaningful.”
        </motion.p>
      </section>

      {/* Why Animations Section */}
      <section className="animation-section">
        <h2 className="animation-heading">Why Use Animations? 🎭</h2>
        <div className="animation-cards-grid">
          {whyAnimations.map((item, i) => (
            <motion.div
              key={i}
              className="animation-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Types of Animations Section */}
      <section className="animation-section">
        <h2 className="animation-heading">Types of Animations 🎨</h2>
        <div className="animation-cards-grid">
          {typesOfAnimations.map((item, i) => (
            <motion.div
              key={i}
              className="animation-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AnimatedShowcase;
