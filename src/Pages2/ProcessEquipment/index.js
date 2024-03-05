import React from 'react'
import bear from '../../assest/bear.png'
import machine from '../../assest/aseptic-filler-machine.png'
import Carbonation from '../../assest/CARBONATION.webp'
import glass from '../../assest/GLASS FILLER.png'
import pet from '../../assest/PET FILLER.png'
import can from '../../assest/CAN FILLER.png'
import { Link } from 'react-router-dom'

const ProcessEquipment = () => {
    return (
        <div>
            <div className='lg:flex '>
                <div className='lg:w-[50%] flex flex-col lg:gap-8 bg-red-600 text-white lg:p-20 p-16'>
                    <p className='underline text-xl'>Rotary Fillers</p>
                    <p className='lg:text-5xl text-2xl'>FOR PET, GLASS AND CAN FILLING</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={bear} alt="" className='lg:h-[20rem] w-full' />
                </div>
            </div>
            <div className='flex flex-col p-4 justify-center items-center gap-5 lg:pl-32'>
                <div className=' flex flex-col gap-8  p-2'>
                    <p className='lg:text-3xl lg:pt-2 text-3xl font-semibold text-red-600'>Fillaxo Rotary Fillers</p>
                    <p className='text-lg font-semibold'>We are offering filler for glass, pet & can filling versions and designed to fill carbonated, still beverage, milk and milk by - products, edible oil, beer & wine.</p>
                    <p className='text-lg font-semibold'>Our fillers are based on proven technology and innovation that guaranteeing reliability, high performance, product quality and easy sanitization. These machine, comes with electropneumatic control of filling valves, offers high-speed precision filling, caping and sealing and, minimal oxygen in the bottle & can that helps in increment in shelf life.</p>
                </div>
                <div className=''>
                    <img src={machine} alt="" className='lg:h-[40rem] lg:w-[80rem]' />
                </div>

            </div>
            <div className='flex flex-col gap-2 *:text-lg *:font-semibold p-5 lg:pl-32'>
                <p>The strong points of the Fillaxo Rotary fillers:</p>
                <p>Hygiene design</p>
                <p>High performance</p>
                <p>Easy machine access</p>
                <p>User-friendly operation</p>
                <p>Easy riser and sanitization</p>
                <p>Reliability due to simplicity</p>
                <p>Filler type: Glass, PET bottles & Cans</p>
            </div>
            <div className='lg:flex lg:gap-10 lg:p-10 lg:justify-center lg:pl-32 p-5'>
                <div className='lg:w-[50%]  flex flex-col gap-6'>
                    <p className='text-red-600 text-2xl font-bold'>CARBONATION AND MIXING OF BEVERAGES</p>
                    <p className=' lg:text-xl font-bold'>Carbonation of soft drinks, energy drinks, juices, water, and beer occurs extremely gently with our carbonation modules. Carbonization and mixing in one skid-mounted module for beer & energy drink production. CO2 gas is dosed finely inline to the product flow.</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={Carbonation} alt="" className='lg:h-[40rem] lg:w-[30rem]' />
                </div>
            </div>
            <div className='lg:flex justify-center gap-8 '>
                <div className='lg:flex lg:flex-col lg:gap-5 p-4 lg:w-[26%]'>
                    <div>
                        <img src={glass} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-red-600 text-3xl font-bold'>GLASS FILLER</p>
                        <p className='text-xl'>Over low glass breakage filler during filling with the starting capacity of 40 BPM. Automation level PLC.</p>
                    </div>
                </div>
                <div className='lg:flex lg:flex-col lg:gap-5 p-4 lg:w-[26%]'>
                    <div>
                        <img src={pet} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-red-600 text-3xl font-bold'>PET FILLER</p>
                        <p className='text-xl'>Comes with variety of options in cap size, starting capacity is 60 BPM. Automation level PLC.</p>
                    </div>
                </div>
                <div className='lg:flex lg:flex-col lg:gap-5 p-4 lg:w-[26%]'>
                    <div>
                        <img src={can} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-red-600 text-3xl font-bold'>CAN FILLER</p>
                        <p className='text-xl'>Suitable for carbonated and non-carbonated products with Proven can seamer, starting capacity 60 CPM.</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center p-20 gap-5 lg:pl-32'>
                <p className='text-lg'>Do you want know more?</p>
                <Link to='/contactus'>
                    <button className='border h-11 w-40 bg-red-700 text-white rounded-md font-bold'>→ CONTACT US!
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default ProcessEquipment