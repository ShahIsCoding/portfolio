import React, { useState } from "react";

import { About } from "../component/About";
import { Projects } from "../component/Projects";
import { Stacks } from "../component/Stacks";
import { Contact } from "../component/Contact";

const ProfilePage = () => {
  const [selected, SetSelected] = useState(1);
  return (
    <div className="container">
      {/* <div className="col-6 d-flex justify-content-center flex-column profile">
        <ul onClick={(e) => SetSelected(e.target.value)}>
          <li
            value={0}
            className={selected === 0 ? "text-green active" : "text-secondary"}
          >
            <span style={{ fontSize: "20px" }}>1</span>About Me
          </li>
          <li
            value={1}
            className={selected === 1 ? "text-green active" : "text-secondary"}
          >
            <span style={{ fontSize: "20px" }}>2</span>Stacks
          </li>
          <li
            value={2}
            className={selected === 2 ? "text-green active" : "text-secondary"}
          >
            <span style={{ fontSize: "20px" }}>3</span>Projects
          </li>
          <li
            value={3}
            className={selected === 3 ? "text-green active" : "text-secondary"}
          >
            <span style={{ fontSize: "20px" }}>4</span>Contact Me
          </li>
        </ul>
      </div> */}
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </div>
  );
};

export default ProfilePage;
