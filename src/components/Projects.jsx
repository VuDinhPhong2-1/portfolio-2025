import {
  faEarthAmericas,
  faPersonCircleQuestion,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import CustomHook from "./CustomHook";
function Projects() {
  const [listProjects] = useState([
    {
      name: "Personal project Clone of the XGear e-commerce website",
      des: "This project is a fully functional clone of the XGear e-commerce website, designed to provide a seamless shopping experience with secure authentication, real-time order tracking, and multiple payment options. The frontend is built using ReactJS with a modern UI, while the backend leverages NestJS for a robust and scalable API. Key features include role-based access control, payment integration with Stripe and Momo, image optimization, and efficient state management with Redux.",
      mission: "Back-end Developer, system analysis and design",
      language:
        "ReactJS, MUI, Redux, NestJS, SQL Server, TypeORM, Redis, Stripe, Momo, Cloudinary",
      images: "https://res.cloudinary.com/dk0lhapty/image/upload/v1741073590/Capture_hez89p.png",
      linkGit: [
        "https://github.com/VuDinhPhong2-1/FE-WebBanDoDienTu",
        "https://github.com/VuDinhPhong2-1/WebBanDoDienTu",
      ],
      linkYtb: "https://github.com/VuDinhPhong2-1/WebBanDoDienTu",
    },
    {
      name: "Cookbook - Recipe Management App",
      des: "Cookbook is an application that helps users store, manage, and share recipes. It supports Google login, data storage on Firebase, and runs on the Android platform.",
      mission:
        "Developing Front-end (Android Studio) and Back-end (Firebase), system analysis and design",
      language: "Java, Firebase, Android Studio",
      images: "https://res.cloudinary.com/dk0lhapty/image/upload/v1741073607/894f445a-81b2-454e-b256-b5edcca0d11f_nvdvxj.jpg",
      linkGit: ["https://github.com/VuDinhPhong2-1/android_studio_cookBooks"],
      linkYtb: "",
    },
  ]);
  const scrollTab = useRef();
  const divs = useRef([]);
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div
        className="title"
        ref={(el) => {
          el && divs.current.push(el);
        }}
      >
        This is my project
      </div>
      <div
        className="des"
        ref={(el) => {
          el && divs.current.push(el);
        }}
      >
        Here are some personal projects I have worked on, where I applied my
        knowledge of web development and system design. Each project has helped
        me gain valuable experience in building scalable and user-friendly
        applications.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            ref={(el) => {
              el && divs.current.push(el);
            }}
          >
            <div
              className="images"
              ref={(el) => {
                el && divs.current.push(el);
              }}
            >
              <img src={value.images} alt="images project" />
            </div>
            <div
              className="content"
              ref={(el) => {
                el && divs.current.push(el);
              }}
            >
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div>
                  <h4>Link Git</h4>
                  <div className="des-link">
                    {value.linkGit.map((link, index) => (
                      <a
                        href={link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {value.linkYtb && (
                <div className="mission">
                  <div>
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                  <div>
                    <h4>Link Ytb</h4>
                    <div className="des-link">
                      <a
                        href={value.linkYtb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {value.linkYtb}
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
