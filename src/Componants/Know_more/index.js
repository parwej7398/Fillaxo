import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const KnowMore = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 w-full h-96 p-20 bg-red-500 text-white'>
                <p className='underline text-2xl font-semibold'>CONTACT US</p>
                <p className='text-4xl'>Fill your requirement, or locate <br />
                    our location or what's app us.</p>
            </div>
            <div>
                <p className='text-2xl p-10 pl-20'>For instant connect with What's app please <Link to='https://api.whatsapp.com/send?phone=971585948108&text=Can%20I%20have%20more%20information%20about%20Fillaxo'><span className='text-blue-600'>click here</span></Link></p>
            </div>
            <div className='border-collapse rounded-md pb-10 h-fit pl-20 pr-20'>
                <div className='border'>
                    <div className='grid grid-cols-2 border h-12'>
                        <Button type='button' className='!bg-red-600 !text-white !font-serif !text-xl'>CONTACT US</Button>
                        <Button type='button' className='!bg-slate-400 !text-white !font-serif !text-xl'>LOCATE US</Button>
                    </div>
                    <div>
                        <div className='flex flex-col gap-5 p-10'>
                            <p>How can we help you?</p>
                            <TextField type='text' placeholder='please describe your message in as much detail as possible...' className='!w-full' />
                        </div>
                        <div className='flex flex-col gap-5 pl-10 pr-10 pb-5'>
                            <p>How can we get in touch with you?</p>
                            <div className='grid grid-cols-2 gap-5'>
                                <TextField type='text' placeholder='First Name' />
                                <TextField type='text' placeholder='Last Name' />
                                <TextField type='email' placeholder='Email' />
                                <TextField type='number' placeholder='Phone / Whatsapp no' />
                                <TextField type='text' placeholder='Company' />
                                <TextField type='text' placeholder='Select Country' />
                            </div>
                        </div>
                        <div className='text-end pr-10 pb-5'>
                            <Button type='button' color='error' className='!bg-red-600 !text-white'>SEND</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowMore;
