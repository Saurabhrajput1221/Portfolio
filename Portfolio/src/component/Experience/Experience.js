import React from "react";
import "./experience.css";
// import hero from "../pic/about.png";
import CV from "../pic/saurabh.pdf";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall, FiDownload } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Experience = () => {
  return (
    <section className="about_container top">
      <div className="image_container">
        <div className="about_me">
          <div className="about_me_image">
            {/* <img src={hero} alt="suraj" /> */}
          </div>
        </div>
      </div>
      <div className="about_content">
        <div className="d_flex btn-margin">
          <div className="btn_shadow">
            <FiPhoneCall />
            <h5>Contact</h5>
            <small>
              +91 7887957791 <br />
              +91 9579031277
            </small>
          </div>
          <div className="btn_shadow">
            <AiOutlineMail />
            <h5>Gmail</h5>
            <small> saurabhkgf2609@gmail.com</small>
          </div>
          <div className="btn_shadow">
            <FaMapMarkerAlt />
            <h5>Address</h5>
            <small>
              At post Hendrun, <br />
              Dhule (MH)
            </small>
          </div>
        </div>
        <div>
          <p>
            Enthusiastic aspiring Full-Stack Web Developer specialized in
            Backend Developer having fascination towards computer and
            technology. Keen to create new and innovative websites by showcasing
            my skills. Apart from that a great team player, with the ability to
            work with different kinds of people with different thinking. In my
            spare time, I like to gain skills by which I can create something
            pro. I believe learning never stops and I aim to only grow and
            upskill myself in the future.
          </p>
          <div>
            <a className="btn_shadow" href={CV} download>
              Download CV <FiDownload />
            </a>
            <a className="btn_shadow" href="/contact">
              Let's Contact
            </a>
            <a
              className="btn_shadow hidden"
              href="https://www.linkedin.com/in/saurabh-rajput-573a78219/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn_shadow hidden"
              href="https://github.com/saurbhrajpu2122"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
