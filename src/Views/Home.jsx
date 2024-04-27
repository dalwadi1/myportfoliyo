import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import ReactFontLoader from 'react-font-loader';
import { GrInstagram } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { MdOutlineContacts } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap' />
            <div className='h-screen w-full bg-black '>
                <div className='flex items-center justify-center h-screen'>
                    <div className='flex-col md:container justify-center mx-auto items-center text-white'>
                        {/* <img src="./images/Rutvik4.png" className='rounded-full container mx-auto w-52 h-52' alt="" /> */}
                        <h1 className='md:text-6xl xs:text-4xl text-center md:flex md:items-center md:justify-center -mt-1' style={{ fontFamily: 'Josefin Sans' }}>hey there! <span className='text-orange-500 hover:text-red-900 cursor-pointer'>I'm Dalwadi</span></h1>
                        <h1 className="mt-2 md:container mx-auto xs:w-screen xs:text-center xs:text-sm md:text-xl">Certainly! Here's a concise and effective summary tailored for a <span className='text-orange-500
                        '>fresh web developer</span> <br className='xs:hidden md:block' /> who is focused on building and managing websites and web applications:</h1>
                        <div className='flex mt-2 items-center justify-center xs:text-sm'>
                            <h1 className='mt-2 mr-2 flex justify-center items-center '>Follow me on <PiArrowFatLinesRightFill className='ml-2 mt-1 text-orange-500' /></h1>
                            <Link to='https://github.com/dalwadi1'><FaGithub className='mt-2 xs:text-2xl md:text-3xl cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' /></Link>
                            <Link to='https://www.linkedin.com/in/parmar-rutvik-70a347253/'><CiLinkedin className='mt-2 xs:text-2xl md:text-3xl mx-1 cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' /></Link>
                            <Link to='https://www.instagram.com/parmar__rutvik?utm_source=qr&igsh=cjllYXhqdDE1ODY3'><GrInstagram className='mt-2 xs:text-2xl md:text-3xl mx-1 cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' /></Link>

                        </div>
                        <Link to='/About' className='w-28 mt-5 mx-auto bg-orange-500 rounded-full xs:p-1 md:p-2 flex items-center justify-center hover:text-black hover:bg-white text-sm'>Aboute Me<BsArrowRightCircle className='ml-1 text-lg' /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
