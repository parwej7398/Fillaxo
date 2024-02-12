import React from 'react'
import factory from '../../assest/factary.png'
import mashine from '../../assest/masine.png'
import { Link } from 'react-router-dom'

const AboutKnowMore = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[50%] flex flex-col gap-8 bg-red-600 text-white p-24'>
                    <p className='underline'>Aseptic 200 ML Brick</p>
                    <p className='text-5xl'>MACHINE FOR NO PRESERVATIVE APPLICATION</p>
                </div>
                <div className='w-[50%]'>
                    <img src={factory} alt="" className='h-[25rem] w-full' />
                </div>
            </div>
            <div className='flex'>
                <div className='w-[50%] flex flex-col gap-8 p-20'>
                    <p className='text-2xl text-red-600'>Filling machine <br />
                        ambient 200 ML</p>
                    <p className='text-xl font-semibold'>Our 200 ML aseptic filling machine comes with plug and play design, easy installation, operation and after sales services.</p>
                </div>
                <div className='w-[50%]'>
                    <img src={mashine} alt="" className='h-[30rem] w-full' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-10 pl-32 pr-32'>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> Application</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> High efficiency</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> Reliable</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> Automation</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> Hygiene</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-red-600 font-bold'> Spare - part</p>
                    <p className='text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
            </div>




            <div className='flex items-center p-20 gap-5'>
                <p className='text-lg'>Do you want know more?</p>
                <Link to='/contactus'>
                    <button className='border h-11 w-40 bg-red-700 text-white rounded-md font-bold'>→ CONTACT US!
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default AboutKnowMore