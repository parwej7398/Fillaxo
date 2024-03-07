import { Button, TextField } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KnowMore = () => {
    const [page, setPage] = useState('ContactUs')
    return (
        <div>
            <div className='flex flex-col lg:gap-5 w-full lg:h-96 lg:p-20 p-10 items-center lg:items-start bg-red-500 text-white'>
                <p className='underline lg:text-2xl text-sm font-semibold'>CONTACT US</p>
                <p className='lg:text-4xl text-xl'>Fill your requirement, or locate <br />
                    our location or what's app us.</p>
            </div>
            <div>
                <p className='p-2 text-2xl lg:p-10 lg:pl-20'>For instant connect with What's app please <Link to='https://api.whatsapp.com/send?phone=971585948108&text=Can%20I%20have%20more%20information%20about%20Fillaxo'><span className='text-blue-600'>click here</span></Link></p>
            </div>
            <div className=' mb-3 p-2 rounded-md lg:pb-10 lg:h-fit lg:pl-20 lg:pr-20'>
                <div className='border-2 border-red-600 rounded'>
                    <div className='grid grid-cols-2 lg:border lg:h-14'>
                        <button type='button' className={classNames('text-white text-2xl', page === "ContactUs" ? "!bg-red-500" : "!bg-slate-400")} onClick={() => setPage('ContactUs')}>CONTACT US</button>
                        <button type='button' className={classNames('!text-white text-2xl', page === "LocateUs" ? "!bg-red-500" : "!bg-slate-400")} onClick={() => setPage('LocateUs')}>LOCATE US</button>
                    </div>
                    {page === "ContactUs" && <div>
                        <div className='lg:flex lg:flex-col gap-5 lg:p-10 p-2'>
                            <p className='text-red-700 font-semibold text-xl'>How can we help you?</p>
                            <TextField multiline rows={3} type='text' placeholder='please describe your message in as much detail as possible...' className='!w-full' />
                        </div>
                        <div className='flex flex-col gap-5 lg:pl-10 p-2 lg:pr-10 lg:pb-5'>
                            <p className='text-red-700 font-semibold text-xl'>How can we get in touch with you?</p>
                            <div className='grid grid-cols-2 lg:gap-5 gap-2'>
                                <TextField type='text' placeholder='First Name' />
                                <TextField type='text' placeholder='Last Name' />
                                <TextField type='email' placeholder='Email' />
                                <TextField type='number' placeholder='Phone / Whatsapp no' />
                                <TextField type='text' placeholder='Company' />
                                <TextField type='text' placeholder='Select Country' />
                            </div>
                        </div>
                        <div className='text-end lg:pr-10 lg:pb-5 p-2'>
                            <Button type='button' color='error' className='!bg-red-600 !text-white'>SEND</Button>
                        </div>
                    </div>}

                    {page === "LocateUs" && <div>
                        <div className='lg:flex lg:flex-col gap-5 lg:p-10 p-2'>

                            <div>
                                <select name="" id="" className='w-full p-4 border-2'>
                                    <option value="">Head Office</option>
                                    <option value="" className='text-red-600'>India</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex justify-between px-10 p-5'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <p className='text-3xl text-red-700'>Head Office</p>
                                    <p className='text-xl'>One Central 8th and 9th Floor Dubai - United Arab Emirates</p>
                                </div>
                                <div>
                                    <p className='text-xl'>TEL: +971 585948108</p>
                                    <p className='text-xl'>E-MAIL: info@fillaxo.com</p>
                                </div>

                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5086984307004!2d55.28340311448474!3d25.21978583697375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432d6a37d4bf%3A0x315c77c169e5a12d!2sWeWork%20-%20Office%20Space%20%26%20Coworking!5e0!3m2!1sen!2sin!4v1668157312307!5m2!1sen!2sin" frameborder="0" className='size-96'></iframe>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default KnowMore;
