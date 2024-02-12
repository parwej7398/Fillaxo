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
            <div className='flex'>
                <div className='w-[50%] flex flex-col gap-8 bg-red-600 text-white p-28'>
                    <p className='underline'>Service</p>
                    <p className='text-5xl'>ON TIME SERVICE TO MAXIMISE
                        PRODUCTIVITY</p>
                </div>
                <div className='w-[50%]'>
                    <img src={flexibal} alt="" className='h-[35rem] w-full' />
                </div>
            </div>
            <div className='p-20 font-sans text-lg'>
                <p>Fillaxo offers the best-in-class service which cover 360-degree aspects of dairy, beverage and liquor production. We closely work with customers to better understanding their needs and offer them tailor - made trunkey solutions as well as 24 x 7 on time support. Our highly skilled team of engineers always available to increase productivity and operation cost reduction. Explore our company portfolio to get best plant & machinery as per your product need.</p>
            </div>
            <div>
                <img src={fillaxoss} alt="" className='w-full h-96' />
            </div>
            <div className='flex justify-center pl-10 pt-10'>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Spare - part</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='w-[50%]'><img src={sparepart} alt="" /></div>
            </div>
            <div className='flex justify-center pt-10'>
                <div className='w-[50%]'><img src={maintenance} alt="" /></div>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Maintenance service or AMC</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='flex justify-center pl-10 pt-10'>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Modification</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='w-[50%]'><img src={modification} alt="" /></div>
            </div>
            <div className='flex justify-center pt-10'>
                <div className='w-[50%]'><img src={training} alt="" /></div>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Training</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='flex justify-center pl-10 pt-10'>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Product formulation</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
                <div className='w-[50%]'><img src={productformulla} alt="" /></div>
            </div>
            <div className='flex justify-center pt-10'>
                <div className='w-[50%]'><img src={productsuport} alt="" /></div>
                <div className='flex flex-col p-10 gap-8 w-[50%]'>
                    <p className='font-sans text-red-600 text-2xl font-semibold'>Production support</p>
                    <p>Fillaxo always considers high quality brought out items for its machinery. A wide range of original spare parts are always immediate ready to dispatch to our customer just on call or email.</p>
                    <p>Our specialization not just limited to any particular area we are serving throughout the world and providing wide range of spare parts and services at doorstep.</p>
                    <p>Write to us your requirement at:service@fillaxo.com</p>
                    <Button size='large' className='!bg-red-700 !text-white !w-fit !p-3'>Your Query</Button>
                </div>
            </div>
            <div className='flex items-center p-20 gap-5'>
                <p className='text-lg'>Do you want know more?</p>
                <button className='border h-11 w-40 bg-red-700 text-white rounded-md font-bold'>→ CONTACT US!
                </button>
            </div>
        </div>
    );
}

export default Service;
