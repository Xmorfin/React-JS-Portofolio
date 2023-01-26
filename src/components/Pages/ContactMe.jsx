import React from "react";

import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";

const ContactMe = (props) => {
  return (
    <div className="bg-blue-600 text-white py-24">
      <div className="">
        <div className="">
          <h2 className="text-center ">
            Contact me for collaboration and speaking engagement opportunities!
          </h2>
        </div>
        <div className="grid grid-cols-2 my-20 mx-72 justify-items-center">
          <div className="place-self-center w-24 flex space-x-4">
            <a href={twitter.com}>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="{}">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="{}">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
          <div>
            <form className="relative" action="">
              <input
                className="bg-gray-600 block mb-1 w-80 py-1"
                type="text"
                placeholder="name"
              />
              <input
                className="bg-gray-600 block mb-1 w-80 py-1"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-gray-600 block mb-1 w-80 py-1"
                type="text"
                placeholder="Phone"
              />
              <input
                className="bg-gray-600 block mb-1 w-80 pb-24"
                type="text"
                placeholder="Type your message here..."
              />
              <input
                className="bg-white text-blue-600 block absolute right-0 px-6 py-1"
                type="button"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
