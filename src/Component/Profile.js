import React, { useState } from "react";
import { profile } from "./Constant/data";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [selected, SetSelected] = useState(0);
  return (
    <div className="row vh100 container mx-auto">
      <div className="col-6 d-flex justify-content-center flex-column profile">
        <ul onClick={(e) => SetSelected(e.target.value)}>
          <li
            value={0}
            className={selected === 0 ? "text-white" : "text-secondary"}
          >
            About Me
          </li>
          <li
            value={1}
            className={selected === 1 ? "text-white" : "text-secondary"}
          >
            Education
          </li>
          <li
            value={2}
            className={selected === 2 ? "text-white" : "text-secondary"}
          >
            Projects
          </li>
          <li
            value={3}
            className={selected === 3 ? "text-white" : "text-secondary"}
          >
            Contact Me
          </li>
        </ul>
      </div>
      {selected === 0 && (
        <div className="col-md-6 col-12 ubuntu px-4 f15 d-flex flex-column justify-content-center">
          <span className="ubuntu">Hi</span>
          <span className="h1 ubuntu">I'm {profile.fn + " " + profile.ln}</span>
          <span className="h4 ubuntu">{profile.job_description}</span>
          <span className="h6 text-secondary ubuntu">{profile.words50}</span>
        </div>
      )}
      {selected === 1 && (
        <div className="col-md-6 col-12 ubuntu px-4 f15 d-flex flex-column justify-content-center"></div>
      )}
      {selected === 3 && (
        <div className="col-md-6 col-12 ubuntu px-4 f15 d-flex flex-column justify-content-center">
          <div className="px-1 mb-2 w-100">
            <div className="border w-50 mx-auto px-5">
              <GitHubIcon />
              <EmailIcon />
              <LinkedInIcon />              
            </div>
          </div>
          <form className="border border-white py-1 px-1 ">
            <input
              value={name}
              name="name"
              className="w-100 bg-secondary ubuntu my-1"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
            />
            <input
              value={email}
              name="email"
              className="w-100 bg-secondary ubuntu my-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Id"
              type="email"
            />
            <input
              value={comments}
              name="comments"
              className="w-100 bg-secondary ubuntu my-1"
              onChange={(e) => setComments(e.target.value)}
              placeholder="Name"
              type="textarea"
            />
            <div className="w-100 text-center">
              <button type="submit" className="w-75 btn-outline-secondary">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
