import React from 'react';
import flexibal from '../../assest/flexibal.png'
import fillaxoss from '../../assest/download (1).png'
import { Button } from '@mui/material';
import sparepart from '../../assest/sparepart.png'
import maintenance from '../../assest/maintenance.png'
import modification from '../../assest/modification.png'
import training from '../../assest/training.png'
import productformulla from '../../assest/productformula.png'
import productsuport from '../../assest/productionsupport.png'

const Service = () => {
    return (
        <div>
            <div className='lg:flex-row-reverse flex flex-col-reverse'>
                <div className='lg:w-[50%] flex flex-col p-10 gap-2 lg:gap-8 bg-red-600 text-white lg:p-28'>
                    <p className='underline'>Service</p>
                    <p className='lg:text-5xl text-2xl'>ON TIME SERVICE TO MAXIMISE
                        PRODUCTIVITY</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={flexibal} alt="" className=' lg:h-[35rem] h-40 w-full' />
                </div>
            </div>
            <div className='lg:p-20 p-2 font-sans text-lg'>
                <p>Fillaxo offers the best-in-class service which cover 360-degree aspects of dairy, beverage and liquor production. We closely work with customers to better understanding their needs and offer them tailor - made trunkey solutions as well as 24 x 7 on time support. Our highly skilled team of engineers always available to increase productivity and operation cost reduction. Explore our company portfolio to get best plant & machinery as per your product need.</p>
            </div>
            <div>
                <img src={fillaxoss} alt="" className=' w-full lg:h-96' />
            </div>
            <div className='lg:flex-row-reverse flex p-2 flex-col-reverse lg:justify-center lg:pl-10 lg:pt-10'>
                <div className='flex p-5 flex-col lg:p-10 lg:gap-8 gap-3 lg:w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Spare - part</p>
                    <p className='text-lg'>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p className='text-lg'>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p className='text-lg'>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='lg:w-[50%]'><img src={sparepart} alt="" /></div>
            </div>
            <div className='lg:flex-row-reverse flex flex-col gap-3 pt-4 lg:justify-center lg:pt-10 p-2'>
                <div className='lg:w-[50%] '><img src={maintenance} alt="" /></div>
                <div className='lg:flex flex flex-col gap-2 lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]'>
                    <p className='font-sans text-red-600 lg:text-2xl text-2xl font-semibold'>Maintenance service or AMC</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='lg:flex-row-reverse flex p-2 flex-col-reverse gap-2  lg:justify-center lg:pl-10 lg:pt-10'>
                <div className='lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Modification</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='lg:w-[50%]'><img src={modification} alt="" /></div>
            </div>
            <div className='lg:flex-row-reverse flex flex-col gap-3 p-2 lg:justify-center lg:pt-10'>
                <div className='lg:w-[50%]'><img src={training} alt="" /></div>
                <div className='lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Training</p>
                    <p className='text-lg'>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p className='text-lg'>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p className='text-lg'>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='lg:flex-row-reverse flex flex-col-reverse lg:justify-center lg:pt-10'>
                <div className='lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Product formulation</p>
                    <p className='text-lg'>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p className='text-lg'>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p className='text-lg'>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='lg:w-[50%]'><img src={productformulla} alt="" /></div>
            </div>
            <div className='lg:flex lg:justify-center lg:pt-10'>
                <div className='lg:w-[50%]'><img src={productsuport} alt="" /></div>
                <div className='lg:flex lg:flex-col lg:p-10 lg:gap-8 lg:w-[50%] flex flex-col gap-3'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Production support</p>
                    <p className='text-lg'>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p className='text-lg'>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p className='text-lg'>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='lg:flex-row-reverse items-center p-20 gap-5'>
                <p className='text-lg'>Do you want know more?</p>
                <button className='border h-11 w-40 bg-red-700 text-white rounded-md font-bold'>→ CONTACT US!
                </button>
            </div>
        </div>
    );
}

export default Service;
