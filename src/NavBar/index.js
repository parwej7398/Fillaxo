import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

const NavBar = () => {
    return (
        <div className='bg-black  text-white'>
            <div className='flex list-none lg:gap-[35%] p-10'>
                <div className='flex flex-col gap-20'>
                    <div className='flex gap-5 cursor-pointer'>
                        <li>ABOUT US</li>
                        <li>SOLUTIONS</li>
                        <li>PRODUCTS</li>
                        <li>SERVICE</li>
                    </div>
                    <div>
                        <p>© Fillaxo 2024 </p>
                    </div>
                </div>
                <div className='flex gap-40'>
                    <div className='flex flex-col gap-2 cursor-pointer'>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Nexe & Evenys</li>
                        <li>Contact</li>
                    </div>
                    <div className='flex flex-col gap-4 font-bold'>
                        <p className='text-xl'>Follow us</p>
                        <div className='flex gap-2'>
                            <IconButton className='!bg-white'><FacebookIcon /></IconButton>
                            <IconButton className='!bg-white'><TwitterIcon /></IconButton>
                            <IconButton className='!bg-white'><LinkedInIcon /></IconButton>
                            <IconButton className='!bg-white'><InstagramIcon /></IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar