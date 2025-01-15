import React from "react";
import "./Awareness.css";

const articles = [
  {
    title: "Electronic Waste (E-Waste) Fact Sheet",
    description:
      "Discover the pressing issues of e-waste and its environmental impact.",
    link: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)",
    img: `${process.env.PUBLIC_URL}thumbnail1.jpg`,
  },
  {
    title: "Environmental Risks of E-Waste",
    description:
      "Explore the environmental and health risks associated with e-waste.",
    link: "https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/",
    img: `${process.env.PUBLIC_URL}thumbnail2.svg`,
  },
  {
    title: "Sustainable Electronics and Circular Design",
    description:
      "Learn about sustainable approaches to reducing e-waste.",
    link: "https://www.eletimes.com/sustainable-electronics-in-reducing-e-waste-through-circular-design",
    img: `${process.env.PUBLIC_URL}thumbnail 3.jpeg`,
  },
  {
    title: "Funding for E-Waste Recycling",
    description: "Insights into funding opportunities for e-waste recycling.",
    link: "https://councilmagazine.com.au/funding-to-support-e-waste-recycling/",
    img: `${process.env.PUBLIC_URL}thumbnail4.jpeg`,
  },
  {
    title: "Countries Leading E-Waste Recycling",
    description: "Video insights into countries pioneering e-waste recycling.",
    link: "https://www.weforum.org/videos/countries-leading-recycling-e-waste/",
    img: `${process.env.PUBLIC_URL}thumbnail5.svg`,
  },
  {
    title: "E-Waste Management Market Growth",
    description: "Explore the future of the e-waste management market.",
    link: "https://www.newstrail.com/e-waste-management-market-to-set-phenomenal-growth-by-2032-enviro-hub-call2recycle-mba-polymers/",
    img: `${process.env.PUBLIC_URL}thumbnail6.jpg`,
  },
];

const videos = [
  {
    title: "Understanding E-Waste",
    link: "https://www.youtube.com/watch?v=5k-PR4y_ng0",
  },
  {
    title: "Circular Economy and E-Waste",
    link: "https://www.youtube.com/watch?v=KxGbqRF3-_0",
  },
  {
    title: "E-Waste Recycling Innovations",
    link: "https://www.youtube.com/watch?v=FoSc5h4yxHc",
  },
  {
    title: "Global Perspectives on E-Waste",
    link: "https://www.youtube.com/watch?v=IqxwnmlUUts",
  },
];

const Awareness = () => {
  return (
    <div className="awareness-container">
      <h1 className="awareness-title">Awareness</h1>
      <p className="awareness-subtitle">
        Learn more about e-waste management through articles and videos.
      </p>

      {/* Articles Section */}
      <h2 className="section-title">Articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img
              src={article.img}
              alt={article.title}
              className="article-thumbnail"
            />
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Videos Section */}
      <h2 className="section-title">Videos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.link.replace("watch?v=", "embed/")}
              title={video.title}
              className="video-frame"
              allowFullScreen
            />
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awareness;
