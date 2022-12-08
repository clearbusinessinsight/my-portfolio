import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {

    return (
        <nav className="nav">
            {/* <img src='/logo192.png'></img> */}
            <Link to="/" className="site-title">Chris Holtz Portfolio</Link>
            <ul>
                <CustomLink to="/projects">Portfolio</CustomLink>
                <CustomLink to="/skills">Skills</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/about">About Me</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
  
    )
}
    