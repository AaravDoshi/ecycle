import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Aarav Doshi",
    role: "Team Lead & Developer",
    description: "Passionate about sustainability and innovation.",
    img: "doshisolo.jpg",
  },
  {
    name: "Gayatri Srivastava",
    role: "Admin",
    description: "Built the website to revolutionize e-waste management.",
    img: "gayatrisolo.jpg",
  },
  {
    name: "Raheel Shah",
    role: "Logistics",
    description: "Spread awareness through campaigns and social media.",
    img: "raheelsolo.jpg",
  },
  {
    name: "Divina Minocha",
    role: "Research",
    description: "Coordinated logistics and e-bin placements.",
    img: "team7.jpg",
  },
  {
    name: "Reeva Agrawal",
    role: "Outreach",
    description: "Conducted surveys and provided actionable insights.",
    img: "reevasolo.jpg",
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
