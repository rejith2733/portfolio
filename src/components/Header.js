import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {
  const [toggleMenu, setToggleMenu]=useState(false);
    return <header className="flex justify-between px-15  bg-primary h-[50px]"> 
        <a  className="font-bold text-black "href="#">REJITH P</a>
        <nav className="hidden md:block ">

          <ul className="flex flex-row text-white">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
            
            
          </ul>
        </nav>
         { toggleMenu && <nav className="block md:hidden ">

          <ul onclick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
            
            
          </ul>
        </nav>}

        <button onClick={() => setToggleMenu(!toggleMenu)}><Bars3Icon className="text-white h-7 block md:hidden"/></button>
    </header>
}