import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I'm Ramani Krishnan R<br/><br/>
          I am passionate web developer and designer,spends most of the time in mastering the MERN stack !<br/>I craft user interfaces and experience using front-end technologies.
        </p>

        <br />

        <p className="text-xl">
          I like to build cutting-edge,pixel perfect beautiful interface and friendly user experience.
         A Developer seeking for the opportunity to work and deliver my skills in an organisation and interested to work on complex projects.
        </p>
      </div>
    </div>
  );
};

export default About;
