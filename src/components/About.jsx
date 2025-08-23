import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe2,
  Lightbulb,
  Zap,
  Lock,
  Smartphone,
  Settings,
  Users,
} from "lucide-react";
import "./About.css";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
    >
      <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-gray-100 p-6 shadow-inner">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
          <Icon className="h-10 w-10 text-indigo-600" aria-hidden />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function About() {
  const highlights = [
    { icon: Rocket, title: "Easy to Use", description: "Write, edit & publish in minutes — no coding required!" },
    { icon: Globe2, title: "Community Driven", description: "Connect with thousands of people worldwide." },
    { icon: Lightbulb, title: "Inspire Others", description: "Your ideas have the power to change someone’s day." },
    { icon: Zap, title: "Super Fast", description: "Optimized performance ensures everything loads instantly." },
    { icon: Lock, title: "Secure", description: "Your data and content are always safe with us." },
    { icon: Smartphone, title: "Mobile Friendly", description: "Looks great on every device — phone, tablet, or desktop." },
    { icon: Settings, title: "Customizable", description: "Easily adjust features and style as per your needs." },
    { icon: Users, title: "Collaboration", description: "Work together with your team in real-time seamlessly." },
  ];

  const team = [
    { name: "Aarav Sharma", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Verma", role: "Lead Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rahul Mehta", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/men/65.jpg" },
    { name: "Sneha Kapoor", role: "Marketing Head", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  ];

  return (
    <div className="about-container">
      <div className="about-main-content">
        {/* ===== Title ===== */}
        <h2 className="brand-name">About Us</h2>

        {/* ===== Intro ===== */}
        <div className="about-text">
          <p>
            Welcome to <strong>Blogify</strong> — your creative corner on the
            internet! Whether you’re a passionate writer, curious reader, or
            here to share your thoughts, Blogify is your go-to platform.
          </p>
          <p>
            We believe in the power of words to inspire, connect, and transform
            minds. Our mission is to make blogging easy, fun, and rewarding for
            everyone.
          </p>
        </div>

        {/* ===== Mission & Vision ===== */}
        <div className="mission-vision">
          <div className="mv-card">
            <h3>🌍 Our Mission</h3>
            <p>
              To empower individuals and businesses with simple, fast, and
              effective blogging solutions that help them share ideas with the
              world.
            </p>
          </div>
          <div className="mv-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To become the world’s most trusted and user-friendly blogging
              platform where creativity meets technology.
            </p>
          </div>
        </div>

        {/* ===== Features ===== */}
        {/* ===== Features ===== */}
<div className="highlights-section">
  <div className="section-title">
    <h2>Our Highlights</h2>
    <p>Discover what makes us stand out from the rest</p>
  </div>

  <div className="highlights-grid">
    {/* Card 1 */}
    <div className="feature-card2">
      <div className="icon-box">⭐</div>
      <h3>Quality Products</h3>
      <p>We ensure the best quality in every product we deliver to our customers.</p>
    </div>

    {/* Card 2 */}
    <div className="feature-card2">
      <div className="icon-box">⚡</div>
      <h3>Fast Delivery</h3>
      <p>Get your orders delivered quickly with our reliable delivery service.</p>
    </div>

    {/* Card 3 */}
    <div className="feature-card2">
      <div className="icon-box">💎</div>
      <h3>Premium Support</h3>
      <p>Our support team is always ready to assist you 24/7 with any query.</p>
    </div>

    {/* Card 4 */}
    <div className="feature-card2">
      <div className="icon-box">🌍</div>
      <h3>Global Reach</h3>
      <p>We are expanding globally to bring the best experience everywhere.</p>
    </div>
     <div className="feature-card2">
      <div className="icon-box">🚀</div>
      <h3>Our Vision</h3>
      <p>Get your orders delivered quickly with our reliable delivery service.</p>
    </div>
    <div className="feature-card2">
      <div className="icon-box">🚀</div>
      <h3>Our Vision</h3>
      <p>Get your orders delivered quickly with our reliable delivery service.</p>
    </div>
  
  </div>
</div>

           {/* ===== Team ===== */}
        <div className="section-title">
          <h2>Meet Our Team</h2>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="cta-section">
          <h2>🚀 Ready to Start Your Journey?</h2>
          <p>Join Blogify today and share your stories with the world.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default About;
