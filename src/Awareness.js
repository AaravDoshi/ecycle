import React from "react";
import "./Awareness.css";

const posts = [
  {
    id: 1,
    title: "Why E-Waste Matters",
    category: "Awareness",
    description: "Learn why managing e-waste is crucial for our planet's health.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder1.jpg`,
  },
  {
    id: 2,
    title: "Recycling Myths Busted",
    category: "Education",
    description: "Debunk the common myths about recycling and e-waste.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder2.jpg`,
  },
  {
    id: 3,
    title: "How to Recycle E-Waste",
    category: "Tips",
    description: "Step-by-step guide on how to recycle e-waste effectively.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder3.jpg`,
  },
  {
    id: 4,
    title: "Top 10 Recycling Facts",
    category: "Awareness",
    description: "Discover surprising facts about recycling e-waste.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder4.jpg`,
  },
  {
    id: 5,
    title: "E-Waste and the Environment",
    category: "Environment",
    description: "Understand how e-waste impacts our environment.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder5.jpg`,
  },
  {
    id: 6,
    title: "New Tech in Recycling",
    category: "Innovation",
    description: "Explore the latest technologies in e-waste recycling.",
    link: "#",
    image: `${process.env.PUBLIC_URL}/placeholder6.jpg`,
  },
];

const videos = [
  {
    id: 1,
    title: "What is E-Waste?",
    category: "Awareness",
    description: "A comprehensive introduction to e-waste management.",
    link: "https://www.youtube.com/embed/-uyIzKIw0xY",
    image: `${process.env.PUBLIC_URL}/video-placeholder1.jpg`,
  },
  {
    id: 2,
    title: "How to Recycle E-Waste",
    category: "Education",
    description: "Learn the basics of e-waste recycling in this video.",
    link: "https://www.youtube.com/embed/U3KUJTDPsSE",
    image: `${process.env.PUBLIC_URL}/video-placeholder2.jpg`,
  },
];

const Awareness = () => {
  return (
    <div className="awareness-container">
      <h1>Awareness</h1>
      <p>
        Explore our curated posts and videos to learn more about e-waste
        management, recycling, and sustainability.
      </p>
      <div className="masonry-layout">
        {posts.map((post) => (
          <div key={post.id} className="masonry-item">
            <div className="image-container">
              <img src={post.image} alt={post.title} />
              <span className="category-badge">{post.category}</span>
            </div>
            <div className="content-container">
              <h3>{post.title}</h3>
              <p className="description">{post.description}</p>
              <a href={post.link} className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}

        {videos.map((video) => (
          <div key={video.id} className="masonry-item video-item">
            <div className="image-container">
              <img src={video.image} alt={video.title} />
              <span className="category-badge">{video.category}</span>
            </div>
            <div className="content-container">
              <h3>{video.title}</h3>
              <p className="description">{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-video"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awareness;
