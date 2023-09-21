import React from "react";

const ProfilePage = () => {
  const blueText = (val) => <span className="ubuntu-blue">{val}</span>;
  const greenText = (val) => <span className="ubuntu-green">{val}</span>;
  const propsFunc = (propsName, propsValue, islast) => {
    return (
      <div className="f10 px-3 ubuntu-green">
        {blueText(`"`)}
        {greenText(propsName)}
        {blueText(`"`)}
        {blueText(":")}
        {blueText(`"`)}
        {greenText(propsValue)}
        {blueText(`"`)}
        {islast ? "" : blueText(",")}
        {!islast && <br />}
      </div>
    );
  };
  return (
    <div className="row blackbg">
      <div className="col-md-6 col-12 ubuntu px-4 f15">
        <span className="ubuntu-pink">let</span>
        <span> properties </span>
        <span className="ubuntu-pink">=</span>
        <span className="ubuntu-yellow">{` {`}</span>
        <br />
        <span>{propsFunc("firstName", "Abhishek", false)}</span>
        <span>{propsFunc("lastName", "Shah", false)}</span>
        <span>{propsFunc("profile", "Full Stack Developer", false)}</span>
        <span>{propsFunc("hobbies", "[photography, treking,scrolling Stackoverflow]", false)}</span>
        <span className="ubuntu-yellow"> {`}`}</span>
      </div>
      <div className="col-6"></div>
    </div>
  );
};

export default ProfilePage;
