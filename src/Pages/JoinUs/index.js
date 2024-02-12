import React from 'react'
import joinus from '../../assest/joinus.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const JoinUs = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className='w-[50%] flex flex-col gap-8 bg-red-600 text-white p-20'>
                        <p className='underline text-2xl'>Career</p>
                        <p className='text-5xl'>CREATE DIFFERENCE
                            WITH FILLAXO</p>
                    </div>
                    <div className='w-[50%]'>
                        <img src={joinus} alt="" className='h-[20rem] w-full' />
                    </div>
                </div>
                <div className='pl-44 pr-44'>
                    <div className='flex flex-col  gap-4'>
                        <p className='text-2xl text-red-600 p-2'> Positions</p>
                        <p className='text-xl p-2 text-red-700'>Search for current vacancies and apply here.</p>

                    </div>

                    <div className='flex flex-col border-2 h-full w-[52rem] rounded border-red-600 gap-5 p-4 '>
                        <div className='flex justify-between shadow-lg shadow-red-100 h-40 w-[50rem] items-center border-2 rounded-md'>
                            <div className='flex flex-col gap-2 p-10'>
                                <p className='text-red-600 text-lg font-medium'>Post: Inside Sales Representative</p>
                                <p>Experience: 1-2 Year</p>
                                <p>Gender: Male / Female</p>
                                <p>Location: New Delhi</p>
                            </div>
                            <div className='border rounded-md bg-red-600 mr-5'>
                                <Button className='!text-white'>Apply Now</Button>
                            </div>
                        </div>
                        <div className='flex justify-between shadow-xl shadow-red-100 items-center h-40 w-[50rem] border-2'>
                            <div className='flex flex-col gap-2 p-10'>
                                <p className='text-red-600 text-lg font-medium'>Post: Digital Marketing Manager</p>
                                <p>Experience: 1-2 Year</p>
                                <p>Gender: Male / Female</p>
                                <p>Location: New Delhi</p>
                            </div>
                            <div className='border rounded-md bg-red-600 mr-5'>
                                <Button className='!text-white'>Apply Now</Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-5 pl-44 pr-44'>
                    <p className='text-3xl pt-2 text-red-500'>General Form</p>
                    <input type="text" placeholder='Name' className='border w-[52rem] h-10 p-2' />
                    <input type="text" placeholder='Surname' className='border w-[52rem] h-10 p-2' />
                    <input type="number" placeholder='Contect no' className='border w-[52rem] h-10 p-2' />
                    <input type="email" placeholder='Email' className='border w-[52rem] h-10 p-2' />
                    <input type="text" placeholder='Country' className='border w-[52rem] h-10 p-2' />
                    <input type="text" placeholder='Role' className='border w-[52rem] h-10 p-2' />
                    <div>
                        <p className=' w-[52rem] h-10 p-2'><span className='text-red-500'>Upload files:</span> PDF, DOC</p>
                        <input type="file" name="filename" id="myFile" className='border w-[52rem] h-12 p-2' />
                    </div>
                    <button type='submit' className='border h-9 bg-red-600 text-white w-32 rounded-lg left-2'>Submit</button>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-4 pl-44 p-5'>
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