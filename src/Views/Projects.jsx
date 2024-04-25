import React from 'react'
import GoogleFontLoader from 'react-font-loader';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";

const Projects = () => {
    const fproj = [{
        Image: './images/back1.png'
    }]

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
            <div className='h-screen w-full bg-black'>
                <div className="container mx-auto flex sticky top-5 items-center justify-between">
                    <h1 className='text-white md:text-3xl cursor-pointer xs:text-sm text-center' style={{ fontFamily: 'Josefin Sans' }}>My <span className='text-orange-500'>Projects!</span></h1>
                    <Link className='text-white md:text-3xl hover:text-orange-500 xs:text-lg' to='/'><IoMdHome /></Link>
                </div>
                <div className='-mt-10 container md:flex mx-auto items-center justify-around text-white h-screen xs:hidden '>
                    <div>
                        <h1>frontend projects</h1>
                    </div>
                    <div>
                        <h1>full stack projects</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
