import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"

const socialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/clearbusinessinsight',
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:choltz@cacbydesign.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Countertop-Planner.docx',
            style: 'rounded-br-md',
            download: true,
        },
    ];

    return (
    <div>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id}>
                        <a href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            >
                                {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ); 
};
    

export default socialLinks;
