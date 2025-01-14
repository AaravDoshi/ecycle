import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Doshi Solo",
    role: "Team Lead",
    description: "Passionate about sustainability and innovation.",
    img: "doshisolo.jpg",
  },
  {
    name: "Gayatri Solo",
    role: "Developer",
    description: "Built the website to revolutionize e-waste management.",
    img: "gayatrisolo.jpg",
  },
  {
    name: "Raheel Solo",
    role: "Marketing",
    description: "Spread awareness through campaigns and social media.",
    img: "raheelsolo.jpg",
  },
  {
    name: "Emily Davis",
    role: "Operations",
    description: "Coordinated logistics and e-bin placements.",
    img: "team6.jpg",
  },
  {
    name: "Michael Brown",
    role: "Researcher",
    description: "Conducted surveys and provided actionable insights.",
    img: "team8.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-subtitle">
        Meet the team behind Team E-Cycle. We're dedicated to making e-waste
        management accessible and impactful.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-container">
              <img
                src={`${process.env.PUBLIC_URL}/${member.img}`}
                alt={member.name}
                className="team-member-image"
              />
            </div>
            <h2 className="team-member-name">{member.name}</h2>
            <h3 className="team-member-role">{member.role}</h3>
            <p className="team-member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
