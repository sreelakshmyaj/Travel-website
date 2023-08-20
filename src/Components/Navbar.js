import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';

const Navbar = () => {
    const menuItems = [
        {
            text: "Home",
            icon: <AiFillHome />
        },
        {
            text: "About",
            icon: <BsFillInfoCircleFill />
        },
        {
            text: "Packages",
            icon: <HiLocationMarker />
        }
    ]
  return (
    <nav>
        <a className='logo' href='#'>
            <h2 className='logo-text'>
                Explor<span>eo </span>
                <SiYourtraveldottv />
            </h2>
        </a>
        <div className='menu'>
            <ul>
                {menuItems.map((item) => {
                    return (
                        <li><a href='#'>{item.text}</a></li>
                    )
                })}
            </ul>
        </div>
        <div className='nav-btn'>
            <button className='primary-btn'>Sign Up</button>
        </div>
        
    </nav>
  )
}

export default Navbar

