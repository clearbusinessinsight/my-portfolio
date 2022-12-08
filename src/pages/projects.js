// src/components/Projects.js
import React from 'react'
import codingquiz from '../assets/codingQuiz.png'
import Password from '../assets/password.png'
import jate from '../assets/jate.png'
import teamprofile from '../assets/teamprofile.png'
import weather from '../assets/weather.png'
import planner from '../assets/planner.png'

export default function projects() {

 const portfolios = [
        {
            id: 1,
            src: codingquiz,
            href: "https://clearbusinessinsight.github.io/coding-quiz/"
        },
         {
            id: 2,
            src: Password,
            href: " https://clearbusinessinsight.github.io/Passwords/"
        },
          {
            id: 3,
            src: jate,
            href:  "https://my-jate-editor.herokuapp.com/"
        },
           {
            id: 4,
            src: teamprofile,
            href:  "https://github.com/clearbusinessinsight/team-profile-generator"
        },
            {
            id: 5,
            src: weather,
            href: " https://clearbusinessinsight.github.io/weatherApp/"
        },
             {
            id: 6,
            src: planner,
            href: " https://clearbusinessinsight.github.io/Daily-Planner/"
        },
       
    ]

  return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>                  
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <a  href={href}
                                target="_blank"
                            >
                            <img src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-x-105" />
                            </a>

                           
                        </div>   
                    ))}
                </div>
            </div>
                    </div>
    )
   
}