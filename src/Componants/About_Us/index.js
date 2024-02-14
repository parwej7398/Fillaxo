import React from 'react';
import fillaxo from '../../assest/NewProjec.png'
import mission from '../../assest/mission.png'
import vision from '../../assest/vision.png'
import values from '../../assest/values.png'
import map from '../../assest/Map.png'

const AboutUs = () => {
    return (
        <div className='lg:pl-20'>
            <div className='lg:flex-row-reverse flex flex-col-reverse gap-3 lg:justify-center p-3  lg:p-5'>
                <div className='lg:w-[45%] flex flex-col gap-3 lg:flex lg:flex-col lg:gap-10'>
                    <p className='lg:text-4xl hidden text-red-600'>About Fillaxo</p>
                    <p className='lg:text-xl'>Fillaxo is a leading reliable trunkey global supplier of aseptic carton packaging and filling equipment for beverage, dairy, food and liquor industry. We are using recyclable, renewable, and sustainably raw materials to provide innovative and unique solutions to our consumers. We shape healthy life driving to smart future by means of accurate and revolutionary technologies and original carton, pet filling and processing technologies.</p>
                    <p className='lg:font-bold lg:text-xl font-semibold'>Fillaxo is committed to generate low carbon footprint and making life better through our innovative and unique solutions.</p>
                </div>
                <div className='lg:w-[42%]'>
                    <img src={fillaxo} alt="" className='w-full h-44 lg:h-96' />
                </div>
            </div>
            <div className='lg:flex lg:flex-col gap-5 lg:pl-28 lg:pt-10 lg:pr-10 p-3'>
                <p className='lg:text-3xl text-xl font-semibold text-center text-red-600'>Our story</p>
                <p className='lg:text-xl'>Fillaxo was founded 15 year back in Dubai and operating throughout the world. Today Fillaxo working to provide perfect package to help our customers to create innovative products, building smarter plants and through that providing the shape of healthy life.</p>
                <div className='flex justify-center items-center gap-5 p-5'>
                    <div>
                        <img src={mission} alt="" className='lg:h-96' />
                        <p className='lg:text-lg lg:font-serif hidden'>Low carbon footprint generation and empower our consumers</p>
                    </div>
                    <div>
                        <img src={vision} alt="" className='lg:h-96' />
                        <p className='lg:text-lg lg:font-serif hidden'>End-to-end solutions that add real value to our consumers products</p>
                    </div>
                    <div>
                        <img src={values} alt="" className='lg:h-96' />
                        <p className='lg:text-lg lg:font-serif hidden'>Right process, Right packaging, Bright future</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:flex-col lg:gap-5'>
                <div className='lg:pl-28 lg:pr-10 p-3'>
                    <p className='lg:text-2xl text-lg font-semibold text-red-600'>Our locations</p>
                    <p className='lg:text-2xl'>FILLAXO has a sophisticated supply network, with company owned facilities in 2 countries, helping to serve customers all over the world.</p>
                </div>
                <img src={map} alt="" />
            </div>
        </div>

    );
}

export default AboutUs;
