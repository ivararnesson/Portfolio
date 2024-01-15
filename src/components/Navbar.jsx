import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Logo from '../assets/ivar-arnesson-high-resolution-logo-transparent.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width: '110px'}}/>
        </div>

        {/* Meny */}

        <ul className='hidden flex md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>Om mig</Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>Erfarenheter</Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>Kontakta mig</Link>
            </li>
        </ul>


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobil meny */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>Om mig</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Erfarenheter</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Kontakta mig</Link>
                </li>
            </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/ivar-arnesson-a19a47250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgS0q9kT6SG6EmirP1F5lhw%3D%3D'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/ivararnesson?tab=repositories'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-r-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=ASKXGp0k6qC6OZU0RrFU-9zMd1fxV248rqIpiUGAaWcXDlWq2zBMJvo5nIDsUpKMG3hB2GeHDM06TQ&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-lg'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
