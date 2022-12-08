import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import mongodb from '../assets/mongodb.png'
import VB from '../assets/VB.png'
import insomnia from '../assets/insomnia.png'
import regex from '../assets/regex.jpg'
import sql from '../assets/sql.png'
import express from '../assets/express.png'
import server from '../assets/server.jpg'

export default function Skills() {

 const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
         {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
          {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
           {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
            {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
             {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white"
        },
         {
            id: 7,
            src: node,
            title: "Node",
            style: "shadow-green-200"
        },
         {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
         {
            id: 9,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400"
        },
         {
            id: 10,
            src: VB,
            title: "Visual Basic",
            style: "shadow-blue-400"
        },
         {
            id: 11,
            src: insomnia,
            title: "Insomnia",
            style: "shadow-purple-100"
        },
         {
            id: 12,
            src: regex,
            title: "Regex",
            style: "shadow-orange-700"
        },
         {
            id: 13,
            src: sql,
            title: "SQL",
            style: "shadow-gray-400"
        },
         {
            id: 14,
            src: express,
            title: "Express JS",
            style: "shadow-yellow-400"
        },
         {
            id: 15,
            src: server,
            title: "Server API",
            style: "shadow-blue-400"
        },

    ]

  return (
  <div >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
              <div>
                
                  <p className="flex justify-center">These are the programming technical skills that I posses</p>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                  {
                      techs.map(({ id, src, title, style }) => (
                          <div
                              key={id}
                              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                      <img src={src} alt="" className="w-20 mx-auto"/>
                              <p className="mt-4">{title}</p>
                  </div>
                         
                     ))}
              </div>

          </div>
          
    </div>
  )
}