// src/components/Contact.js

import React from "react";

export default function About() {
  return (
      <div
            name="Contact"
          >
            <div className="flex flex-col p-8 justify-center max-w-screen-lg mx-auto h-full">
                <div className=" pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/36d6cf31-1199-4d0b-9e26-fc0e49b5a7f7" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Your Name'
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                        </input>
                         <input
                            type="text"
                            name="email"
                            placeholder='Enter Your Email'
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                        </input>
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                        </textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Contact Me!
                        </button>

                    </form>
                </div>
            </div>
        </div>
  );
}