import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Aarav Doshi",
    role: "Team Leader & Developer",
    description: "The tech genius who coded our success and led the way with innovation!",
    img: "doshisolo.jpg",
  },
  {
    name: "Gayatri Srivastava",
    role: "Analytics Coordinator",
    description: "The data whisperer—turned numbers into insights that guided our every decision!",
    img: "gayatrisolo.jpg",
  },
  {
    name: "Raheel Shah",
    role: "Logistics",
    description: "The calm in the storm—always resolving issues and keeping the peace when tensions rise!",
    img: "raheelsolo.jpg",
  },
  {
    name: "Divina Minocha",
    role: "Market Research & Strategy",
    description: "The strategist—kept us in check, always knowing the next move!",
    img: "divinasolo.jpg",
  },
  {
    name: "Reeva Agrawal",
    role: "Social Media",
    description: "The voice of our project—posting, sharing, and making sure our message goes viral!",
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
