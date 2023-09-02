import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/SusilKu19439401">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/Susil209">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/susil-kumar-nayak-ab36001b5/">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
