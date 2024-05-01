import React, { useState } from 'react'
import { FaGripfire } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoLogoJavascript } from "react-icons/io5";
import ReactFontLoader from 'react-font-loader';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoMdHome } from 'react-icons/io';

const About = () => {

    return (
        <>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap' />

            <div className='h-full w-full bg-black'>
                <div className="container mx-auto flex sticky top-5 items-center justify-between">
                    <h1 className='text-white md:text-3xl cursor-pointer xs:text-sm text-center' style={{ fontFamily: 'Josefin Sans' }}>About <span className='text-orange-500'>Me!</span></h1>
                    <Link className='text-white md:text-3xl hover:text-orange-500 xs:text-lg' to='/'><IoMdHome /></Link>
                </div>
                {/* <div className='container mx-auto text-white md:sticky top-5'>
                    <h1 className='text-center text-3xl cursor-pointer' style={{ fontFamily: 'Josefin Sans' }}>About <span className='text-orange-500'>Me!</span></h1>
                </div> */}
                <div className='text-white md:flex items-center justify-around h-screen container mx-auto xs:mt-2'>
                    <div className=' items-center xs:mt-20'>

                        <Tabs
                            id="controlled-tab-example"
                            className="text-white text-xs justify-center md:-mt-48 active:accent-black"
                        >
                            <Tab eventKey="contact" title="Home" className='md:text-xs md:w-60 text-red-900 lg:w-96'>
                                <h1 className='text-white xs:text-sm md:text-sm mt-5 lg:text-lg md:mt-10 text-center'>Here you will find more information about me, <br className='xs:hidden md:block' /> what I do, and my current skills mostly in terms of programming and technology.</h1>

                            </Tab>
                            <Tab eventKey="home" title="Education" className='md:w-60 lg:w-96 lg:text-3xl md:text-xl mt-5 flex items-center justify-center' style={{ fontFamily: 'Josefin Sans' }}>
                                <div className='text-center'>
                                    <h1 className='mt-2 lg:text-sm text-xs flex justify-start'><FaLongArrowAltRight fontSize={17} className='ml-2 text-md' />I have done my Bachelor degree of BCA from Maharaja Krishnakumarsinhji Bhavnagar University.</h1>
                                    <h1 className='mt-2 lg:text-sm text-xs flex justify-start'><FaLongArrowAltRight fontSize={15} className='ml-2 text-md' />Currently i am pursuing master degree of MCA from VNSGU University.</h1>
                                </div>
                            </Tab>
                            <Tab eventKey="profile " title="Contact" className='md:w-60 mt-5 lg:w-96'>
                                <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><IoMail fontSize={15} className='mr-1 text-red-600' /> parmarrutvik1807@gmail.com</h1>
                                <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><IoCall fontSize={15} className='mr-1 text-green-500' />+91 8141971488</h1>
                                <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><FaWhatsappSquare fontSize={15} className='mr-1 text-green-500' />+91 8141971488</h1>

                            </Tab>

                        </Tabs>

                        {/* 
                        
                        <h1 className='lg:text-3xl md:text-xl mt-4 flex items-center justify-center' style={{ fontFamily: 'Josefin Sans' }} >Contact <span className='text-orange-500 ml-2'>Info</span><FaGripfire /></h1>
                        <div className=''>
                            </div> */}

                    </div>
                    <div className='xs:mt-20 md:-mt-20 lg:-mt-20 text-center'>
                        <h1 className='flex m-2 justify-center'>Skill <span className='text-orange-500'>s</span><FaGripfire /></h1>
                        <div className=''>
                            <h1 className='mt-3 flex justify-center items-center'><IoLogoJavascript fontSize={20} className='mr-2 text-yellow-400' />JavaScript</h1>
                            <h1 className='mt-2 flex justify-center items-center'><FaReact fontSize={20} className='mr-2 text-cyan-400' />React Js</h1>
                            <h1 className='mt-2 flex justify-center items-center'><SiExpress fontSize={20} className='mr-2' />Express Js</h1>
                            <h1 className='mt-2 flex justify-center items-center'><FaNodeJs fontSize={20} className='mr-2 text-lime-700' />Node Js</h1>
                            <h1 className='mt-2 flex justify-center items-center'><SiMongodb fontSize={20} className='mr-2 text-green-500' />Mongo DB</h1>
                            <h1 className='mt-2 flex justify-center items-center'><FaLaravel fontSize={20} className='mr-2 text-red-500' />Laravel</h1>
                        </div>

                        <Link to='/Projects' className='w-28 mt-4 mx-auto bg-orange-500 rounded-full p-2 flex items-center justify-center hover:text-black hover:bg-white text-sm'>Projects<BsArrowRightCircle className='ml-2 text-lg' /></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
