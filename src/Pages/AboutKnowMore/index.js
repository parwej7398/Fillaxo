import React from 'react'
import factory from '../../assest/factary.png'
import mashine from '../../assest/masine.png'
import { Link } from 'react-router-dom'

const AboutKnowMore = () => {
    return (
        <div>
            <div className='lg:flex'>
                <div className='lg:w-[50%] flex flex-col lg:gap-8 bg-red-600 text-white lg:p-24 p-16'>
                    <p className='underline text-xl'>Aseptic 200 ML Brick</p>
                    <p className='lg:text-5xl text-2xl'>MACHINE FOR NO PRESERVATIVE APPLICATION</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={factory} alt="" className='lg:h-[25rem] w-full' />
                </div>
            </div>
            <div className='lg:flex'>
                <div className='lg:w-[50%] flex flex-col gap-8 lg:p-20 p-2'>
                    <p className='lg:text-2xl text-xl font-semibold text-red-600'>Filling machine <br />
                        ambient 200 ML</p>
                    <p className='text-xl font-semibold'>Our 200 ML aseptic filling machine comes with plug and play design, easy installation, operation and after sales services.</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={mashine} alt="" className='lg:h-[30rem] w-full' />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-10 lg:pl-32 lg:pr-32'>
                <div className='flex flex-col gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> Application</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> High efficiency</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> Reliable</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col lg:gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> Automation</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col lg:gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> Hygiene</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
                <div className='flex flex-col lg:gap-5'>
                    <p className='lg:text-xl text-red-600 font-bold'> Spare - part</p>
                    <p className='lg:text-lg'>Suitable for high & low acid products in dairy and beverage industry. Also suitable for liquor industry.</p>
                </div>
            </div>




            <div className='lg:flex items-center p-20 gap-5'>
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