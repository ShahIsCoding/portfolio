import React,{useState} from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    return (
        <>
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
        </>
    )
}