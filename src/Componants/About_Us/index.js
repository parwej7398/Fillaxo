import React from 'react';
import fillaxo from '../../assest/NewProjec.png'
import mission from '../../assest/mission.png'
import vision from '../../assest/vision.png'
import values from '../../assest/values.png'
import map from '../../assest/Map.png'

const AboutUs = () => {
    return (
        <div className='pl-20'>
            <div className='flex justify-center p-5'>
                <div className='w-[45%] flex flex-col gap-10'>
                    <p className='text-4xl text-red-600'>About Fillaxo</p>
                    <p className='text-xl'>Fillaxo is a leading reliable trunkey global supplier of aseptic carton packaging and filling equipment for beverage, dairy, food and liquor industry. We are using recyclable, renewable, and sustainably raw materials to provide innovative and unique solutions to our consumers. We shape healthy life driving to smart future by means of accurate and revolutionary technologies and original carton, pet filling and processing technologies.</p>
                    <p className='font-bold text-xl'>Fillaxo is committed to generate low carbon footprint and making life better through our innovative and unique solutions.</p>
                </div>
                <div className='w-[42%]'>
                    <img src={fillaxo} alt="" className='w-full h-96' />
                </div>
            </div>
            <div className='flex flex-col gap-5 pl-28 pt-10 pr-10'>
                <p className='text-3xl text-red-600'>Our story</p>
                <p className='text-xl'>Fillaxo was founded 15 year back in Dubai and operating throughout the world. Today Fillaxo working to provide perfect package to help our customers to create innovative products, building smarter plants and through that providing the shape of healthy life.</p>
                <div className='flex justify-center gap-5 p-5'>
                    <div>
                        <img src={mission} alt="" className='h-96' />
                        <p className='text-lg font-serif'>Low carbon footprint generation and empower our consumers</p>
                    </div>
                    <div>
                        <img src={vision} alt="" className='h-96' />
                        <p className='text-lg font-serif'>End-to-end solutions that add real value to our consumers products</p>
                    </div>
                    <div>
                        <img src={values} alt="" className='h-96' />
                        <p className='text-lg font-serif'>Right process, Right packaging, Bright future</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='pl-28 pr-10'>
                    <p className='text-2xl text-red-600'>Our locations</p>
                    <p className='text-2xl'>FILLAXO has a sophisticated supply network, with company owned facilities in 2 countries, helping to serve customers all over the world.</p>
                </div>
                <img src={map} alt="" />
            </div>
        </div>

    );
}

export default AboutUs;
