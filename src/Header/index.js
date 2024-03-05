import React, { useState } from 'react'
import falloxo from '../assest/fillaxo-grey.png'
import search from '../assest/Search.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';
import Solution from '../Solution';



const Header = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div className='lg:flex hidden gap-3 items-center list-none justify-end cursor-pointer'>
                <li>Career</li>
                <li>Blog</li>
                <li>News & Events</li>
                <li>Contact</li>
                <Link to='https://www.facebook.com/fillaxo'>
                    <IconButton><FacebookIcon /></IconButton>
                </Link>
                <Link to='https://twitter.com/'>
                    <IconButton><TwitterIcon /></IconButton>
                </Link>
                <Link to='https://www.linkedin.com/company/fillaxo'>
                    <IconButton><LinkedInIcon /></IconButton>
                </Link>
                <Link to='https://www.instagram.com/fillaxo/'>
                    <IconButton><InstagramIcon /></IconButton>
                </Link>
            </div>
            <div className='flex justify-between lg:pl-10 pl-3 lg:pr-20 pr-3 items-center text-center'>

                <Link to='/'>
                    <img src={falloxo} alt="" className='lg:w-auto w-32' />
                </Link>

                <IconButton className='lg:!hidden' onClick={() => setOpen(true)}><Menu /></IconButton>

                <Drawer className='lg:!hidden' anchor='right' open={open} onClose={() => setOpen(false)}>
                    <List>
                        <ListItem className='!flex !justify-between gap-5'>
                            <TextField size='small' placeholder='Search Something...' /> <IconButton onClick={() => setOpen(false)}><Close /></IconButton>
                        </ListItem>
                        <Divider />
                        <Link to='/aboutus'>
                            <ListItemButton>About us</ListItemButton>
                            <Divider />
                        </Link>
                        <ListItemButton>Solutions</ListItemButton>
                        <Divider />
                        {/* <div>
                            <Solution />
                            <Divider />
                        </div> */}
                        <ListItemButton>Products</ListItemButton>
                        <Divider />

                        <Link to='/service'>
                            <ListItemButton>Services</ListItemButton>
                            <Divider />
                        </Link>
                        <Link>
                            <ListItemButton>Career</ListItemButton>
                            <Divider />
                        </Link>
                        <Link>
                            <ListItemButton>Blog</ListItemButton>
                            <Divider />
                        </Link>
                        <Link>
                            <ListItemButton>News & Events</ListItemButton>
                            <Divider />
                        </Link>
                        <Link>
                            <ListItemButton>Contact</ListItemButton>
                            <Divider />
                        </Link>

                    </List>
                </Drawer>
                <div className='lg:flex hidden items-center *:cursor-pointer gap-5 list-none text-red-600 text-xl'>
                    <Link to='/aboutus'>ABOUT US</Link>
                    <div className='flex flex-col relative py-5 group'>
                        <div className='cursor-pointer'>SOLUTIONS</div>
                        <ul className='absolute top-16 z-50 p-4 font-semibold *:p-2 !text-xl !text-black border shadow bg-white hidden group-hover:block'>
                            <button value="DAIRY" onClick={() => navigate('/dairy')}>DAIRY</button>
                            <hr />
                            <button value="BEVERAGE" onClick={() => navigate('/beverage')}>BEVERAGE</button>
                            <hr />
                            <button value="LIQUOR" onClick={() => navigate('/liquor')}>LIQUOR</button>
                        </ul>
                    </div>
                    <div className='flex flex-col relative py-5 group'>
                        <div className='cursor-pointer'>PRODUCTS</div>
                        <div className='absolute top-16 z-50 p-4 font-semibold !text-xl w-60 *:p-2 !text-black border shadow bg-white hidden group-hover:block'>
                            <button value="DAIRY">ASEPTIC FILLER</button>
                            <hr />
                            <button value="BEVERAGE" onClick={() => navigate('/aboutknowmore')}>200 ML BRICK</button>
                            <hr />
                            <button value="LIQUOR" onClick={() => navigate('/ml_brick')}>1000 ML BRICK</button>
                            <hr />
                            <button value="LIQUOR" onClick={() => navigate('/process_equipment')}>ROTARY FILLERS</button>
                            <hr />
                            <button value="LIQUOR" onClick={() => navigate('/rotary')}>PROCESS EQUIPMENT</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <Link to='/service'>SERVICES</Link>
                    </div>
                    <div className='flex items-center border rounded-md h-10'>
                        <input type="search" placeholder='Search.....' className='p-1' />
                        <img src={search} alt="" className='h-7 border-collapse  cursor-pointer' />
                    </div>
                </div>

            </div>

        </>

    )
}

export default Header