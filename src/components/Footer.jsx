import React from "react";

const Footer = () => {
    return(
        <div className="justify-between flex item-center w-full h-20 text-white bg-black px-4">
            <h4 className=" justify-between items-center mx-auto ">
                <p className="justify-center pt-5 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200">Made with react by 
                <a className="px-1 text-yellow-500 " href="mailto:ramanikrishnan.r26@gmail.com"> krish </a> </p>
                  
            </h4>
        </div>
    );
};

export default Footer;