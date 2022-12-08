// src/components/Contact.js

import React from "react";

export default function About() {
  return (
      <div>    
          <div className="contact">            
              <form action="https://getform.io/f/
                    36d6cf31-1199-4d0b-9e26-fc0e49b5a7f7" method="POST" className="">
                  <input
                      type="text"
                      name="name"
                      placeholder='Enter Your Name'
                      className="name">
                  </input>
                  <div>                    
                  </div>
                  <input
                      type="text"
                      name="email"
                      placeholder='Enter Your Email'
                      className="email">
                  </input>                 
                  <div>                     
                  </div>
                  <textarea
                      name="message"
                      color="gray"
                      placeholder="Enter your message"
                      rows="10"
                      className="message">                     
                  </textarea>
                  <div>                          
                  </div>
                  <button className="contactme">  
                      Contact Me!
                  </button>                             
              </form>                
        </div>
    </div>
                            
           
  );
}