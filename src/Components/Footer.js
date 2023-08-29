import React, {useState} from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {

    const [ulClass, setUlClass] = useState(null)
    const [isClosed, setIsClosed] = useState([true, true, true]);
    const handleDown = (index) => {
        if(isClosed[index]) {
            isClosed[index] = false;
            setIsClosed([...isClosed]);
        }
        else {
            isClosed[index] = true;
            setIsClosed([...isClosed]);
        }
    }

  return (
    <footer>
        <div className='f-section f-section1'>
            <a href='#'>
                <h2 className='logo-text'>
                    Explor<span>eo </span>
                    <SiYourtraveldottv />
                </h2>
            </a>
            <p>
                We always make our customer happy by providing as many choices as possible.
            </p>
            <div className='social-icons'>
                <a href='https://www.facebook.com/'><BsFacebook /></a>
                <a href='https://www.instagram.com/'><BsInstagram /></a>
                <a href='https://twitter.com/i/flow/login'><BsTwitter /></a>
            </div>
        </div>
        <div className='f-section f-section2'>
            <div>
                <h3>About<button className='down-arrow' onClick={() => handleDown(0)}><FaAngleDown /></button></h3>
                <ul className={isClosed[0]? '': 'open'}>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Menu</a></li>
                </ul>
            </div>
            
            <div>
                <h3>Company<button className='down-arrow' onClick={() => handleDown(1)}><FaAngleDown /></button></h3>
                <ul className={isClosed[1]? '': 'open'}>
                    <li><a href='#'>Why Exploreo?</a></li>
                    <li><a href='#'>Partner With Us</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div>
                <h3>Support<button className='down-arrow' onClick={() => handleDown(2)}><FaAngleDown /></button></h3>
                <ul className={isClosed[2]? '': 'open'}>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'>Support Center</a></li>
                    <li><a href='#'>Feedback</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className='f-section f-section3'>
            <h3>Get in Touch</h3>
            <p>Have a question or a feedback? We'd love to hear from you</p>
            <div className='input-container'>
                <input type='text' placeholder='Email Address'></input>
                <button className='send-icon'><AiOutlineSend /></button>
            </div>
        </div>
    </footer>
  )
}

export default Footer