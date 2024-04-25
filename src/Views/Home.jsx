import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import GoogleFontLoader from 'react-google-font-loader';
import { GrInstagram } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
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
            <div className='h-screen w-full bg-black '>
                <div className='flex items-center justify-center h-screen'>
                    <div className='flex-col md:container mx-auto items-center text-white'>
                        <h1 className='md:text-6xl xs:text-4xl text-center md:flex md:items-center md:justify-center' style={{ fontFamily: 'Josefin Sans' }}>hey there! <h2 className='text-orange-500 hover:text-red-900 cursor-pointer'>I'm Dalwadi</h2></h1>
                        <h1 className='mt-2 md:container mx-auto md:w-96 xs:w-screen xs:text-center xs:text-sm md:text-xl'>Hello, my name is Rutvik Parmar currently i'm building a full stack web sites.</h1>
                        <div className='flex mt-2 items-center justify-center xs:text-sm'>
                            <h1 className='mt-2 mr-2'>Follow me:</h1>
                            <Link to='https://github.com/dalwadi1'><FaGithub fontSize={32} className='mt-2 cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' /></Link>
                            <Link to='https://www.linkedin.com/in/parmar-rutvik-70a347253/'><CiLinkedin fontSize={32} className='mt-2 mx-1 cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' /></Link>
                            <GrInstagram fontSize={32} className='mt-2 mx-1 cursor-pointer hover:bg-orange-500 rounded-lg p-1 hover:text-black' />
                        </div>
                        <Link to='/About' className='w-28 mt-5 mx-auto bg-orange-500 rounded-full p-2 flex items-center justify-center hover:text-black hover:bg-white text-sm'>Aboute Me<BsArrowRightCircle className='ml-2 text-lg' /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
