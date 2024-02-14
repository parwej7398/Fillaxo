import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const KnowMore = () => {
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
                    <div className='grid grid-cols-2 lg:border lg:h-12'>
                        <Button type='button' className='!bg-red-600 !text-white !font-serif !lg:text-sm'>CONTACT US</Button>
                        <Button type='button' className='!bg-slate-400 !text-white !font-serif !lg:text-xl'>LOCATE US</Button>
                    </div>
                    <div>
                        <div className='lg:flex lg:flex-col gap-5 lg:p-10 p-2'>
                            <p>How can we help you?</p>
                            <TextField type='text' placeholder='please describe your message in as much detail as possible...' className='!w-full' />
                        </div>
                        <div className='flex flex-col gap-5 lg:pl-10 p-2 lg:pr-10 lg:pb-5'>
                            <p>How can we get in touch with you?</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowMore;
