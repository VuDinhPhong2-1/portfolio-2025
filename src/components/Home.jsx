import React, { useRef } from "react";
import CustomHook from "./CustomHook";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);
  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          My name is <span>Phong</span>
        </div>
        <div className="des">
          Hello! I’m Vu Dinh Phong, a graduate in Software Engineering from Ho
          Chi Minh City University of Technology (HUTECH). I am passionate about
          programming, software development, and constantly seeking
          opportunities to apply my knowledge to real-world projects. During my
          studies from 2019 to 2024, I gained experience working with
          technologies such as ReactJS, NestJS, SQL Server, MongoDB, and
          PostgREST. I enjoy problem-solving, optimizing application
          performance, and building robust systems. Currently, I am living in
          District 12, Ho Chi Minh City, and I’m open to connecting and
          collaborating on exciting projects. If you're interested, feel free to
          reach out!
        </div>
        <a href="https://drive.google.com/file/d/1b4nmtGok6DYNBNe0sm9epu9GM9F80epM/view?usp=sharing">Download my cv</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img
            src="https://res.cloudinary.com/dk0lhapty/image/upload/v1741073555/z5994467109260_01a414be5deb1fc3b89ce98b89286cc5_qnprwh.jpg"
            alt=""
          />
          <div className="info">
            <div>Developer</div>
            <div>VietNamese</div>
            <div>26/12/2001</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
