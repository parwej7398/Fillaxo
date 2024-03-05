import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-black  text-white'>
            <div className='flex gap-5 lg:flex-row flex-col list-none lg:gap-[35%] p-10'>
                <div className='flex gap-3 lg:flex-col lg:gap-20'>
                    <div className='lg:flex lg:gap-5 cursor-pointer'>
                        <li onClick={() => navigate('/aboutus')}>ABOUT US</li>
                        <li onClick={() => navigate('/solution')}>SOLUTIONS</li>
                        <li onClick={() => navigate('/product')}>PRODUCTS</li>
                        <li onClick={() => navigate('/service')}>SERVICE</li>
                    </div>
                    <div>
                        <p>© Fillaxo 2024 </p>
                    </div>
                </div>
                <div className='flex lg:gap-40 gap-10'>
                    <div className='lg:flex lg:flex-col lg:gap-2 cursor-pointer'>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Nexe & Evenys</li>
                        <li>Contact</li>
                    </div>
                    <div className='lg:flex lg:flex-col gap-4 font-bold'>
                        <p className='lg:text-xl'>Follow us</p>
                        <div className='flex gap-2'>
                            <IconButton className='!bg-white' onClick={() => navigate('/https://www.facebook.com/fillaxo')}><FacebookIcon /></IconButton>
                            <IconButton className='!bg-white' onClick={() => navigate('/https://twitter.com/')}><TwitterIcon /></IconButton>
                            <IconButton className='!bg-white' onClick={() => navigate('/https://www.linkedin.com/company/fillaxo')}><LinkedInIcon /></IconButton>
                            <IconButton className='!bg-white' onClick={() => navigate('/https://www.instagram.com/fillaxo/')}><InstagramIcon /></IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar