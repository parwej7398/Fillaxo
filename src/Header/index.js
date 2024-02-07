import React from 'react'
import falloxo from '../assest/fillaxo-grey.png'
import search from '../assest/Search.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';


const Header = () => {
    return (
        <>
            <div className='flex gap-3 font-bold items-center list-none justify-end cursor-pointer'>
                <li>Career</li>
                <li>Blog</li>
                <li>News & Events</li>
                <li>Contact</li>
                <IconButton><FacebookIcon /></IconButton>
                <IconButton><TwitterIcon /></IconButton>
                <IconButton><LinkedInIcon /></IconButton>
                <IconButton><InstagramIcon /></IconButton>
            </div>
            <div className='flex justify-between pl-10 pr-20 items-center text-center '>
                <div>
                    <img src={falloxo} alt="" className='h-32' />
                </div>
                <div className='flex items-center gap-5 list-none text-red-600 text-xl'>
                    <li>ABOUT US</li>
                    <li>SOLUTIONS</li>
                    <li>PRODUCTS</li>
                    <li>SERVICES</li>
                    <div className='flex items-center border p-1'>
                        <input type="search" placeholder='Search' />
                        <img src={search} alt="" className='h-5 cursor-pointer' />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header