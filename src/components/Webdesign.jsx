import React, { useEffect, useMemo, useState } from "react";
import "./Webdesign.css"
import { motion } from "framer-motion";

const seedItems = [
  {
    id: 1,
    img: "https://cdn.dribbble.com/userupload/44587589/file/168258486927287d342074261d0b888c.png?format=webp&resize=800x600&vertical=center",
    title: "One Week Wonders",
    author: "TEAM",
    likes: 56,
    views: 5000,
    tag: "UI",
    date: "2025-08-01",
  },
  {
    id: 2,
    img: "https://cdn.dribbble.com/userupload/44588145/file/c0faca687cd13e3e4395ac337375f6c8.png?format=webp&resize=800x600&vertical=center",
    title: "Odama",
    author: "TEAM",
    likes: 59,
    views: 4100,
    tag: "Illustration",
    date: "2025-07-18",
  },
  {
    id: 3,
    img: "https://cdn.dribbble.com/userupload/44589245/file/still-f39764163ba4e5409fec394acc51333d.png?format=webp&resize=800x600&vertical=center",
    title: "MUTI",
    author: "PRO",
    likes: 87,
    views: 20100,
    tag: "Branding",
    date: "2025-06-29",
  },
  {
    id: 4,
    img: "https://cdn.dribbble.com/userupload/44586275/file/15136cfaf38296dad9c49081c116d85c.jpg?format=webp&resize=800x600&vertical=center",
    title: "Ann-Sophie De Steur",
    author: "PRO",
    likes: 5,
    views: 122,
    tag: "Photography",
    date: "2025-05-12",
  },
  // Extra demo items for a richer grid
  {
    id: 5,
    img: "https://cdn.dribbble.com/userupload/44586275/file/15136cfaf38296dad9c49081c116d85c.jpg?format=webp&resize=800x600&vertical=center",
    title: "Minimal Product Shots",
    author: "TEAM",
    likes: 132,
    views: 28900,
    tag: "Product",
    date: "2025-08-10",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    title: "Pastel Mobile UI Kit",
    author: "PRO",
    likes: 71,
    views: 9100,
    tag: "UI",
    date: "2025-08-06",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    title: "Dev Dashboard Concept",
    author: "TEAM",
    likes: 44,
    views: 2300,
    tag: "Web App",
    date: "2025-07-30",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200",
    title: "Vibrant Poster Series",
    author: "PRO",
    likes: 165,
    views: 48100,
    tag: "Print",
    date: "2025-04-22",
  },
];

function humanizeViews(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

const Chip = ({ active, children, onClick }) => (
  <button
    className={`chip ${active ? "chip--active" : ""}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

const Modal = ({ open, onClose, item }) => {
  if (!open || !item) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <img className="modal__image" src={item.img} alt={item.title} />
        <div className="modal__content">
          <h3>{item.title}</h3>
          <p className="muted">{item.author} • {item.tag} • {new Date(item.date).toDateString()}</p>
          <div className="modal__stats">
            <span>❤️ {item.likes}</span>
            <span>👁 {humanizeViews(item.views)}</span>
          </div>
          <p>
            A short description about this project could go here—objective, tools, and
            impact. Replace this with your actual case study summary.
          </p>
          <div className="modal__actions">
            <a className="btn btn--primary" href="#" onClick={(e) => e.preventDefault()}>View Case Study</a>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Webdesign() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [role, setRole] = useState("All");
  const [sort, setSort] = useState("recent");
  const [view, setView] = useState("grid");
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const tags = useMemo(() => ["All", ...Array.from(new Set(seedItems.map((i) => i.tag)))], []);
  const roles = ["All", "TEAM", "PRO"];

  const items = useMemo(() => {
    let data = seedItems.filter((i) =>
      i.title.toLowerCase().includes(query.toLowerCase())
    );
    if (tag !== "All") data = data.filter((i) => i.tag === tag);
    if (role !== "All") data = data.filter((i) => i.author === role);

    switch (sort) {
      case "likes":
        data = [...data].sort((a, b) => b.likes - a.likes);
        break;
      case "views":
        data = [...data].sort((a, b) => b.views - a.views);
        break;
      default:
        data = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return data;
  }, [query, tag, role, sort]);

  const openModal = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div className="header__text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Web Design</h1>
          </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>Handpicked projects—UI, branding, web apps, and more.Web design is the art and science of creating websites that are not only visually appealing but also user-friendly and responsive. It focuses on layout, colors, typography, graphics, and overall user experience (UX). A well-designed website makes a strong first impression, reflects brand identity, and provides smooth navigation for visitors. Good web design is also SEO-friendly, which helps in achieving better search rankings, and ensures mobile responsiveness so that the website works seamlessly across all devices.</p>
        </motion.p>
        </div>
      </header>

      <section className="toolbar">
        <div className="toolbar__search">
          <input
            type="text"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="toolbar__filters">
          {/* <div className="chips">
            {tags.map((t) => (
              <Chip key={t} active={t === tag} onClick={() => setTag(t)}>
                {t}
              </Chip>
            ))}
          </div> */}
          <div className="chips">
            {roles.map((r) => (
              <Chip key={r} active={r === role} onClick={() => setRole(r)}>
                {r}
              </Chip>
            ))}
          </div>
        </div>
        {<div className="toolbar__sortview">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="recent">Sort: Most Recent</option>
            <option value="likes">Sort: Most Liked</option>
            <option value="views">Sort: Most Viewed</option>
          </select>
          <div className="view-toggle" role="group" aria-label="Toggle view">
            <button
              className={`icon-btn ${view === "grid" ? "icon-btn--active" : ""}`}
              onClick={() => setView("grid")}
              title="Grid view"
              type="button"
            >
              ⬛
            </button>
            <button
              className={`icon-btn ${view === "list" ? "icon-btn--active" : ""}`}
              onClick={() => setView("list")}
              title="List view"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>}
      </section>

      {/* Grid / List Section */}
      <div className={`portfolio-container ${view === "list" ? "portfolio-container--list" : ""}`}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card card--skeleton" />
          ))
          : items.map((item) => (
            <article key={item.id} className="card" onClick={() => openModal(item)}>
              <div className="card__media">
                <img loading="lazy" src={item.img} alt={item.title} />
                <div className="card__hover">
                  <button className="btn btn--primary" type="button">View</button>
                </div>
              </div>
              <div className="card-info">
                <div className="card-info__top">
                  <h4>{item.title}</h4>
                  <span className={`badge ${item.author === "PRO" ? "badge--pro" : "badge--team"}`}>
                    {item.author}
                  </span>
                </div>
                <p className="muted">{item.tag} • {new Date(item.date).toLocaleDateString()}</p>
                <div className="stats">
                  <span>❤️ {item.likes}</span>
                  <span>👁 {humanizeViews(item.views)}</span>
                </div>
              </div>
            </article>
          ))}
      </div>



      <Modal open={open} onClose={() => setOpen(false)} item={activeItem} />
    </div>
  );
}


