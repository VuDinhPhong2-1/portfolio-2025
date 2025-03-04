import {
  faCss3,
  faHtml5,
  faJs,
  faLaravel,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

function Skills() {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "HTML (HyperText Markup Language) is the foundation of every website. I have experience in building semantic web structures and organizing content effectively.",
    },
    {
      name: "CSS",
      des: "I have basic proficiency in CSS3, including Flexbox, Grid, Animation, and Responsive Design. I also have experience working with SCSS and MUI.",
    },
    {
      name: "JavaScript",
      des: "Strong knowledge of JavaScript ES6+, asynchronous programming (async/await), event handling, DOM manipulation, and working with APIs. I am also familiar with TypeScript.",
    },
    {
      name: "ReactJS",
      des: "I have experience in developing ReactJS applications, utilizing hooks (useState, useEffect), managing state with Redux and Context API, and optimizing performance with memoization.",
    },
    {
      name: "NestJS",
      des: "I have experience in building APIs with NestJS, using TypeORM, securing applications with JWT, and applying a module-based architecture for efficient backend development.",
    },
    {
      name: "TypeScript",
      des: "I use TypeScript to write safer, more maintainable code in ReactJS and NestJS projects, improving stability and readability.",
    },
    {
      name: "Mongoose, SQL Server, PostgREST",
      des: "Experienced in working with database management systems such as MongoDB (Mongoose), SQL Server, and PostgREST to design and optimize database queries.",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="skills" ref={scrollTab} data-name="skills">
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I have knowledge and experience working with various technologies in web
        development, from front-end to back-end. Below are my key skills.
      </div>
      <div className="list-skills">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
