import React from 'react'
import ReactFontLoader from 'react-font-loader';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaLongArrowAltRight, FaReact, FaWhatsappSquare } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';

const Projects = () => {
    const fproj = [{
        Image: './images/back1.png'
    }]

    return (
        <>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap' />

            <div className='h-full bg-black sticky top-5'>
                <header className="container mx-auto flex sticky top-5 items-center justify-between">
                    <h1 className='text-white md:text-3xl cursor-pointer xs:text-sm text-center' style={{ fontFamily: 'Josefin Sans' }}>My <span className='text-orange-500'>Projects!</span></h1>
                    <Link className='text-white md:text-3xl hover:text-orange-500 xs:text-lg' to='/'><IoMdHome /></Link>
                </header>
                <div className='text-white mt-10 h-full  container mx-auto'>
                    <Tabs
                        id="controlled-tab-example"
                        className="text-white text-xs justify-center active:accent-black"
                    >
                        <Tab eventKey="contact" title="Front-end" className=''>
                            <div className='flex justify-center mt-5'>
                                <div className="card mb-3 bg-transparent text-white md:w-3/4">
                                    <div className="md:flex  md:justify-between">
                                        <div className="flex items-center md:w-80 justify-center">
                                            <h1 className='flex justify-center items-center' style={{ fontFamily: 'Josefin Sans' }}><FaReact fontSize={50} className='mr-2 text-cyan-400' /></h1>

                                        </div>
                                        <div className="">
                                            <div className="xs:text-center md:text-left">
                                                <h5 className="card-title text-white">To Do App</h5>
                                                <p className="xs:text-sm md:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quos temporibus tempore. Dolores explicabo sapiente, necessitatibus repudiandae aperiam, architecto perferendis fuga dignissimos natus sint dolore laborum exercitationem reiciendis corporis ex?</p>
                                                <p className="card-text"><small className=" text-white">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="home" title="back-end" className='md:w-60 lg:w-96 lg:text-3xl md:text-xl mt-5 flex items-center justify-center' style={{ fontFamily: 'Josefin Sans' }}>
                            <div className='text-center'>
                                <h1 className='mt-2 lg:text-sm text-xs flex justify-start'><FaLongArrowAltRight fontSize={17} className='ml-2 text-md' />I have done my Bachelor degree of BCA from Maharaja Krishnakumarsinhji Bhavnagar University.</h1>
                                <h1 className='mt-2 lg:text-sm text-xs flex justify-start'><FaLongArrowAltRight fontSize={15} className='ml-2 text-md' />Currently i am pursuing master degree of MCA from VNSGU University.</h1>
                            </div>
                        </Tab>
                        <Tab eventKey="profile " title="Full-stack" className='md:w-60 mt-5 lg:w-96'>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start' style={{ fontFamily: 'Josefin Sans' }}><IoMail fontSize={15} className='mr-1 text-red-600' /> parmarrutvik1807@gmail.com</h1>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start' style={{ fontFamily: 'Josefin Sans' }}><IoCall fontSize={15} className='mr-1 text-green-500' />+91 8141971488</h1>
                            <h1 className='mt-2 items-center lg:text-sm text-xs flex justify-center text-start' style={{ fontFamily: 'Josefin Sans' }}><FaWhatsappSquare fontSize={15} className='mr-1 text-green-500' />+91 8141971488</h1>

                        </Tab>

                    </Tabs>
                </div>

            </div>
        </>
    )
}

export default Projects
