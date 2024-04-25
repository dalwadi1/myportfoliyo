import React from 'react'
import GoogleFontLoader from 'react-font-loader';
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

const About = () => {
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Josefin Sans',
                        weights: [400, 700],
                    },
                ]}
            />
            <div className='h-full w-full bg-black'>
                <div className='container mx-auto text-white md:sticky top-5'>
                    <h1 className='text-center text-3xl cursor-pointer' style={{ fontFamily: 'Josefin Sans' }}>About <span className='text-orange-500'>Me!</span></h1>
                </div>
                <div className='text-white md:flex items-center justify-around h-screen md:-mt-10 container mx-auto xs:mt-2'>
                    <div className='md:w-1/2 flex-col items-center'>
                        <hr className='md:hidden' />
                        <h1 className='lg:text-3xl md:text-xl xs:mt-10 flex items-center justify-center' style={{ fontFamily: 'Josefin Sans' }} >Education <span className='text-orange-500 ml-2'>Details</span><FaGripfire /></h1>
                        <div className=' text-center'>
                            <h1 className='mt-2 lg:text-sm text-xs flex justify-center'><FaLongArrowAltRight fontSize={26} />I have done my Bachelor degree of BCA from Maharaja Krishnakumarsinhji Bhavnagar University.</h1>
                            <h1 className='mt-2 lg:text-sm text-xs flex justify-center'><FaLongArrowAltRight fontSize={20} />Currently i am pursuing master degree of MCA from VNSGU University.</h1>
                        </div>
                        <h1 className='lg:text-3xl md:text-xl mt-4 flex items-center justify-center' style={{ fontFamily: 'Josefin Sans' }} >Contact <span className='text-orange-500 ml-2'>Info</span><FaGripfire /></h1>
                        <div className=''>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><IoMail fontSize={15} className='mr-1 text-red-600' /> parmarrutvik1807@gmail.com</h1>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><IoCall fontSize={15} className='mr-1 text-green-500' />+91 8141971488</h1>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start'><FaWhatsappSquare fontSize={15} className='mr-1 text-green-500' />8141971488</h1>
                        </div>

                    </div>
                    <div className='md:w-1/2 xs:mt-5 '>
                        <h1 className='md:text-xl lg:text-3xl text-center flex items-center justify-center'>My Skill<span className='text-orange-500'>s</span><FaGripfire /></h1>
                        {/* <hr className='md:hidden' /> */}
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
