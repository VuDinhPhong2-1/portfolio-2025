import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const experiences = [
  {
    company: "GPT GROUP",
    startDate: "03/04",
    endDate: "03/10",
    position: "Backend Developer Intern",
    technologies: [
      "Express",
      "Mongoose",
      "Cloudinary",
      "Twilio (OTP)",
      "Swagger",
      "Mailer",
    ],
    description: [
      "Designed and developed an order management system similar to J&T Express.",
      "Implemented user authentication via OTP to verify phone numbers for account updates.",
      "Integrated Cloudinary for storing and managing order images.",
      "Developed order processing APIs, including creating orders, updating statuses, assigning delivery personnel, and handling order pickups.",
      "Tracked order status and calculated shipping fees between provinces/districts.",
      "Documented APIs on Swagger to facilitate frontend integration.",
      "Optimized database queries and enhanced system security.",
    ],
  },
];

const Experience = () => {
  const scrollTab = useRef();
  const divs = useRef([]);
  CustomHook(scrollTab, divs);
  return (
    <section className="experience" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Work Experience
      </div>
      {experiences.map((exp, index) => (
        <div
          className="experience-item"
          key={index}
          ref={(el) => el && divs.current.push(el)}
        >
          <h2>{exp.company}</h2>
          <p>
            <strong>Start date:</strong> {exp.startDate} |{" "}
            <strong>End date:</strong> {exp.endDate}
          </p>
          <p>
            <strong>Position:</strong> {exp.position}
          </p>
          <p>
            <strong>Technologies:</strong> {exp.technologies.join(", ")}
          </p>
          <div>
            <strong>Job Description:</strong>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
