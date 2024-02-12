import React from 'react';
import dairy from '../../assest/Dairy.png'

const Dairy = () => {
    const products = [
        {
            id: 1,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Plain+milk.jpg',
            title: 'Liquid milk',
            contect: 'Cutting – edge technologies which cover short and long shelf life milk processing and filling.'
        },
        {
            id: 2,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/feremented-rpoduct.png',
            title: 'Fermented pro',
            contect: 'Finest techno solution to set-up curd, yoghurt, greek yoghurt, lassi plant around the globe'
        },
        {
            id: 3,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/cheese.png',
            title: 'Cheese',
            contect: 'High level of standards to ensure highly skilled sector of milk standard.'
        },
        {
            id: 4,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/flavoured-milk.png',
            title: 'Flavoured milk',
            contect: 'Complete manufacturing plant for flavored milk. At present flavored milk is most demandable on the go product.'
        },
        {
            id: 5,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/butter.png',
            title: 'Butter / Ghee',
            contect: 'Unique batch and continuous butter / ghee processing solution, crafted to meet customer demand.'
        },
        {
            id: 6,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/ice-cream.png',
            title: 'Ice – cream',
            contect: 'Hassle – free complete manufacturing set-up solutions for new age of leading desert around the world.'
        },
    ]
    return (
        <div>
            <div className='flex'>
                <div className='w-[50%] flex flex-col gap-8 bg-red-600 text-white p-20'>
                    <p className='underline font-semibold text-lg'>Dairy</p>
                    <p className='text-3xl'>SCADA - BASED DAIRY PLANT SET-UP</p>
                </div>
                <div className='w-[50%]'>
                    <img src={dairy} alt="" className='h-[20rem] w-full' />
                </div>
            </div>
            <div className='flex flex-col gap-5 p-10'>
                <p className='text-xl'>Milk and milk by products are world most versatile foods. World population growing rapidly accordingly dairy products demand rising through the globe to meet increased demand companies need to adopt innovative and unique solutions in processing and filling to be sustain in continuously growing market.</p>
                <p className='text-3xl text-red-500 font-semibold'>Expertise on global scale</p>
                <p className='text-xl'>We conceptualize, design, supply, install and commission SCADA based centralize controlled fully automatic plants which also include most of dairy products. Fillaxo dairy processing, filling and packaging technological solution is designed to meet food safety standards, proper hygiene, sustainable and energy efficient.</p>
            </div>
            <div>

                <div className="p-6 sm:py-12 bg-gray-100 text-gray-800">
                    <div className=" grid grid-col-3 pl-14 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((event) => (
                            <div key={''} className="flex flex-col mt-5 w-[25rem] bg-gray-50">
                                <img alt="" className=" bg-gray-500 w-[25rem]" src={event.image} />
                                <div className="flex flex-col gap-1 p-5">
                                    <p className="text-xl text-red-500 font-bold">{event.title}</p>
                                    <p>{event.contect}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className='h-80 flex justify-center items-center text-center' style={{ backgroundImage: `url('https://www.workinsync.io/wp-content/uploads/2023/02/Hybrid-Workplace-Is-The-Future-Here-Today_.jpg')` }}>
                <button className='border p-4 text-white font-semibold rounded-md bg-red-500'>Book a meeting Now!</button>
            </div>

        </div>
    );
}

export default Dairy;
