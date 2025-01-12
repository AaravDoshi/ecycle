import React from 'react';
import './Awareness.css'; // Import CSS file for styles

// Articles Data
const articles = [
  {
    title: "Electronic Waste (E-Waste)",
    description: "A comprehensive fact sheet on the health and environmental impacts of e-waste.",
    thumbnail: "https://via.placeholder.com/300x200?text=E-Waste+Fact+Sheet",
    link: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)"
  },
  {
    title: "Environmental Impact of E-Waste",
    description: "Explore the growing environmental challenges posed by e-waste worldwide.",
    thumbnail: "https://via.placeholder.com/300x200?text=Environmental+Impact",
    link: "https://earth.org/environmental-impact-of-e-waste/"
  },
  {
    title: "E-Waste and Health Hazards",
    description: "Scientific research on the harmful health effects caused by improper e-waste handling.",
    thumbnail: "https://via.placeholder.com/300x200?text=Health+Hazards",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2215153220303925"
  },
  {
    title: "Toxicology of E-Waste",
    description: "An in-depth look at the toxicological impacts of e-waste on ecosystems.",
    thumbnail: "https://via.placeholder.com/300x200?text=Toxicology",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2963874/"
  },
  {
    title: "Environmental Risks of E-Waste",
    description: "Understanding the growing environmental risks associated with e-waste.",
    thumbnail: "https://via.placeholder.com/300x200?text=Environmental+Risks",
    link: "https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/"
  },
  {
    title: "The E-Waste Problem",
    description: "59 million tons of e-waste: Is the problem spiraling out of control?",
    thumbnail: "https://via.placeholder.com/300x200?text=E-Waste+Problem",
    link: "https://www.nrdc.org/stories/59-million-tons-our-e-waste-problem-getting-out-control"
  }
];

// Videos Data
const videos = [
  {
    title: "E-Waste Management",
    src: "https://www.youtube.com/embed/5k-PR4y_ng0"
  },
  {
    title: "Effects of E-Waste",
    src: "https://www.youtube.com/embed/90ixtgA9uMs"
  },
  {
    title: "E-Waste Problem Overview",
    src: "https://www.youtube.com/embed/-uyIzKIw0xY"
  },
  {
    title: "E-Waste Recycling Solutions",
    src: "https://www.youtube.com/embed/U3KUJTDPsSE"
  }
];

const Awareness = () => {
  return (
    <div className="awareness-container">
      <h1 className="awareness-title">E-Waste Awareness</h1>
      <p className="awareness-description">
        Learn about the importance of managing e-waste responsibly and discover how you can contribute to a cleaner environment.
      </p>

      {/* Videos Section */}
      <div className="awareness-section">
        <h2 className="awareness-section-title">Videos</h2>
        <div className="content-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <iframe
                src={video.src}
                title={video.title}
                className="video-frame"
                allowFullScreen
              ></iframe>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="awareness-section">
        <h2 className="awareness-section-title">Articles</h2>
        <div className="content-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <img src={article.thumbnail} alt={article.title} className="article-thumbnail" />
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awareness;
