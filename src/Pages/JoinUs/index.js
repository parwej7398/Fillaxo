import React from 'react'
import joinus from '../../assest/joinus.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const JoinUs = () => {
    return (
        <div>
            <div>
                <div className='lg:flex'>
                    <div className='lg:w-[50%] lg:flex lg:flex-col lg:gap-8 bg-red-600 text-white p-20'>
                        <p className='underline lg:text-2xl'>Career</p>
                        <p className='text-5xl'>CREATE DIFFERENCE
                            WITH FILLAXO</p>
                    </div>
                    <div className='lg:w-[50%]'>
                        <img src={joinus} alt="" className='h-[20rem] w-full' />
                    </div>
                </div>
                <div className='lg:pl-44 lg:pr-44'>
                    <div className='lg:flex  lg:flex-col  lg:gap-4'>
                        <p className='lg:text-2xl text-red-600 p-2 text-lg font-semibold'> Positions</p>
                        <p className='lg:text-xl p-2 text-red-700 text-lg font-semibold'>Search for current vacancies and apply here.</p>
                    </div>

                    <div className='flex flex-col border-2 lg:h-full lg:w-[52rem] rounded border-red-600 gap-5 p-4 '>
                        <div className='flex justify-between shadow-lg shadow-red-100 lg:h-40 lg:w-[50rem] items-center border-2 rounded-md'>
                            <div className='flex flex-col gap-2 lg:p-10 p-2'>
                                <p className='text-red-600 text-lg font-medium'>Post: Inside Sales Representative</p>
                                <p>Experience: 1-2 Year</p>
                                <p>Gender: Male / Female</p>
                                <p>Location: New Delhi</p>
                            </div>
                            <div className='border rounded-md bg-red-600 lg:mr-5'>
                                <Button className='!text-white'>Apply Now</Button>
                            </div>
                        </div>
                        <div className='flex justify-between shadow-xl shadow-red-100 items-center lg:h-40 lg:w-[50rem] border-2'>
                            <div className='flex flex-col gap-2 lg:p-10 p-2'>
                                <p className='text-red-600 text-lg font-medium'>Post: Digital Marketing Manager</p>
                                <p>Experience: 1-2 Year</p>
                                <p>Gender: Male / Female</p>
                                <p>Location: New Delhi</p>
                            </div>
                            <div className='border rounded-md bg-red-600 lg:mr-5'>
                                <Button className='!text-white'>Apply Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border lg:gap-5 gap-2 lg:pl-44 lg:pr-44'>
                    <p className='la:text-3xl lg:pt-2 text-red-500 text-xl font-semibold p-2'>General Form</p>
                    <input type="text" placeholder='Name' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <input type="text" placeholder='Surname' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <input type="number" placeholder='Contect no' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <input type="email" placeholder='Email' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <input type="text" placeholder='Country' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <input type="text" placeholder='Role' className='border lg:w-[52rem] lg:h-10 p-2' />
                    <div>
                        <p className=' lg:w-[52rem] lg:h-10 p-2'><span className='text-red-500'>Upload files:</span> PDF, DOC</p>
                        <input type="file" name="filename" id="myFile" className='border lg:w-[52rem] lg:h-12 p-2' />
                    </div>
                    <button type='submit' className='border h-9 bg-red-600 text-white lg:w-32 rounded-lg left-2'>Submit</button>
                </div>
                <div className='lg:flex lg:gap-2'>
                    <div className='flex flex-col gap-4 lg:pl-44 p-5'>
                        <p className='text-2xl text-red-600'> About Fillaxo</p>
                        <p className='text-lg text-red-600'>Read more about us, our goals and responsibilities</p>
                        <Link to='/aboutus'>
                            <p className=' text-red-600'>⇨</p>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 p-5'>
                        <p className='text-2xl text-red-600'>Latest news</p>
                        <p className='text-lg text-red-600'>Take a look at what we have been up to lately</p>
                        <Link to='/aboutus'>
                            <p className=' text-red-600'>⇨</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JoinUs