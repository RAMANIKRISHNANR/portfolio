import React from "react";
import BlogApp from "../assets/portfolio/Blog.jpeg";
import PizzaDelivery from "../assets/portfolio/Pizza.jpeg";
import Amazon from "../assets/portfolio/Amazon.png";
import zoom from "../assets/portfolio/zoom.jpg";


const projects= () => {
  const projects = [
    {
      id: 1,
      src:BlogApp ,
      live:"https://guileless-brigadeiros-d83e8a.netlify.app",
      code:"https://github.com/RAMANIKRISHNANR/blog",
      stackused:["React","MongoDB","Node.js","Express.js"],
      About:"Blog application",
    },
    {
      id: 2,
      src:PizzaDelivery,
      About: "Pizza Delivery Application",
      live:"https://moonlit-valkyrie-394dd9.netlify.app",
      code:"https://github.com/RAMANIKRISHNANR/pizza",
      stackused:["React","MongoDB","Node.js","Express.js"],
    },
    {
      id: 3,
      src:Amazon,
      About: "Online product selling",
      live:"https://scintillating-praline-e1b15e.netlify.app",
      code:"https://github.com/RAMANIKRISHNANR/amazon-frontend",
      stackused:["React","MongoDb","Node.js","Express.js"],
    },
    {
      id: 4,
      src:zoom ,
      About: "video confernece application",
      live:"https://incandescent-brigadeiros-fbf694.netlify.app",
      code:"https://github.com/RAMANIKRISHNANR/frontend-capstone",
      stackused:["React","MongoDB","Node.js","Express.js"],
    },

  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screem"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src ,live, About, code ,stackused}) => (
            <div key={id}
            style={{
              backgroundImage:`url(${src})`,
            }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div ">

              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold  tracking tracking-wider">{About}</span>
                <div className="pt-8 text-center">
                  <a target="_blank" href={`${live}`} >
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg text-white bg-black">Live</button>
                  </a>

                  <a target="_blank" rel="noreferrer" href={`${code}`} >
                  <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg text-white bg-black">Code</button>
                  </a>
                </div>
                <div className="sm:flex-hidden">
                  {stackused.map ((stackused, i) => (
                    <div
                    key={i}
                    className="text-center flex-rounded-lg p-2 mr-2 text-lg bg-black"
                    >
                      {stackused}
                      </div>
                  ))}
                </div>
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;