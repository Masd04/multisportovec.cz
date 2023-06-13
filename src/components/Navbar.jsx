import React from "react";
import {Link, useLocation} from 'react-router-dom';
import { mNadpis, mNapis, oPohar, menu, close } from "../static";
import { useState, useEffect, useRef } from 'react';
import styles from "../style";
import 'tailwindcss/tailwind.css';




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const { pathname } = location;

  const getNavLinkClass = (path, index) => {
    const baseClass = "text-white text-2xl font-poppins font-bold cursor-pointer text-[16px] scale-100 hover:scale-110 mr-10";
    //const colorClass = index % 2 === 0 ? "hover:text-green-500" : "hover:text-yellow-400";
    //const activeClass = pathname === path ? colorClass.replace('hover:', '') : "";
    return `${baseClass}`;
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current.contains(event.target)) {
        if (!toggle) return;
        setToggle(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [toggle]);

  const handleClick = (e) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
  }

  const handleNavLinkClick = () => {
    setToggle(false);
  }

  const navLinks = [
    {path: "/", text: "Home"},
    {path: "/deti", text: "Kroužek"},
    {path: "/dospeli", text: "Eventy"},
    {path: "/tym", text: "Náš tým"},
    {path: "/", text: "Galerie"},
    {path: "/", text: "Kontakt"},
  ];


  return (
                                                                              //  Atribut rounded odebrat.. ??
    <section className="">
    <nav ref={navRef} className="w-full flex py-4 items-center xs:py-2 navbar top-0 rounded-l bg-black shadow-2xl select-none z-200">
      <a href="/" className="hidden sm:flex md:flex lg:flex xl:flex w-1/6 xs:ml-5 ss:ml-5 sm:ml-5 md:ml-10 object-contain cursor-pointer scale-100 hover:scale-110"><img src={mNapis} alt="Logo"/></a>
      <a href="/" className="ml-3 w-60 object-contain cursor-pointer sm:hidden"><img src={mNapis} alt="Logo"/></a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((link, index) => (
                <li className={getNavLinkClass(link.path, index)} key={index}><Link to={link.path}>{link.text}</Link></li>
            ))}
        </ul> 

        <div className="sm:hidden flex flex-1 items-center justify-end">  
            <img src={toggle ? close : menu} alt="MenuButton" className="w-[45px] h-[45px] object-contain mr-5"
            onClick={handleClick} />

            <div className={`${toggle ? 'flex' : 'hidden'}
              pl-8 pb-5 pt-2 bg-black absolute top-[49px] right-[-15px] xs:top-[34px] xs:right-[-15px] mx-4 my-7 min-w[140px] rounded-l`}>

            <ul className="list-none flex flex-col text-center flex-1">
                {navLinks.map((link, index) => (
                    <li className={getNavLinkClass(link.path, index)} key={index}><Link to={link.path} onClick={handleNavLinkClick}>{link.text}</Link></li>
                ))}
            </ul>
          </div>
        </div>
    </nav>
    </section>    
    
    
    
    
    
    
    
  )
}



export default Navbar