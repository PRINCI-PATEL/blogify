import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Responsive Design",
      description: "Looks great on any device",
      icon: "📱"
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed",
      icon: "⚡"
    },
    {
      title: "Modern Tech",
      description: "Built with React",
      icon: "⚛️"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface",
      icon: "👍"
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;