import React from 'react'
import gril from '../assest/gril.png'
import download from '../assest/download.jpeg'
import imagess from '../assest/images.jpeg'
import man from '../assest/man.jpg'
import green from '../assest/green.png'
import medicine from '../assest/medicn.png'
import ken from '../assest/kan.png'
import milk from '../assest/milk.png'
import whatsapp from '..//assest/WhatsApp.svg.png'

const FrontPage = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='absolute -z-0 min-w-[104%] -ml-16'>
                    <video autoPlay muted loop id='bg-video' className='min-w-[104%] max-h-screen object-cover -ml-16'>
                        <source src="https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Small-size.mp4" />
                    </video>
                </div>
                <div className='relative flex flex-col gap-5 pt-60 pl-60 text-white'>
                    <p className='text-5xl font-serif font-bold'>WE'RE FILLAXO</p>
                    <div>
                        <p className='text-3xl font-semibold'>Turnkey solution provider for</p>
                        <p className='text-3xl font-semibold'>aseptic and non - aseptic filling and</p>
                        <p className='text-3xl font-semibold'>processing</p>
                    </div>
                    <button className='border p-2 text-red-600 border-red-600 w-32 bg-white rounded-full '>KNOW MORE</button>
                </div>
            </div>

            <div className='flex justify-center p-5 pt-20'>
                <div className=' w-[40%]'>
                    <img src={gril} alt="" />
                </div>
                <div className='w-[40%] mt-3 border-collapse h-[360px] bg-slate-100 flex flex-col gap-5 justify-center'>
                    <p className='text-4xl text-blue-800 font-bold'>INNOVATIVE <br /> UNDERSTANDING</p>
                    <p>Our innovative & unique technologies enable us to provide complete range including aseptic carton packing filling machines & process turnkey solutions
                        to beverage, dairy, food & liquor industries.</p>
                    <button className='text-left text-red-700 font-bold'>KNOW MORE</button>
                </div>
            </div>
            <div className='flex gap-10 justify-center p-5'>

                <div className='w-[30%]'>
                    <div className='absolute'>
                        <img src={download} alt="" className='w-[28rem] h-[20rem]' />
                    </div>
                    <div className=' relative ml-6 flex flex-col gap-5 mt-[16rem] bg-slate-200 border-collapse h-fit p-5 '>
                        <p className='text-2xl font-bold text-center'>BEVERAGE TECHNOLOGIES AND INNOVATION?</p>
                        <p>Globally thirst for commercial beverages continuous to grow and we have unique and affordable solution to meet individual beverage producer.</p>
                        <button className='text-left text-red-700 font-bold'>KNOW MORE</button>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <div className='absolute'>
                        <img src={man} alt="" className='w-[28rem] h-[20rem]' />
                    </div>
                    <div className=' relative ml-6 flex flex-col gap-5 mt-[16rem] bg-slate-200 border-collapse h-[16.5rem] p-5 '>
                        <p className='text-2xl font-bold text-center'>PERFECT PACKAGE FOR DAIRY?</p>
                        <p>Challenge for dairy industry is long shelf life of products without compromising the nutrients but solution should be sustainable and affordable to become comitative in market.</p>
                        <button className='text-left text-red-700 font-bold'>KNOW MORE</button>
                    </div>
                </div>

                <div className='w-[30%]'>
                    <div className='absolute'>
                        <img src={imagess} alt="" className='w-[28rem] h-[20rem]' />
                    </div>
                    <div className=' relative ml-6 flex flex-col gap-5 mt-[16rem] bg-slate-200 border-collapse h-[16.5rem] p-5 '>
                        <p className='text-2xl font-bold text-center'>NEW ERA OF FOOD
                            HABITS?</p>
                        <p>Ready to partner with customers for affordable aluminum canning opportunities for performing better and growing faster in an ever-changing liquor market throughout the world.</p>
                        <button className='text-left text-red-700 font-bold'>KNOW MORE</button>
                    </div>
                </div>

            </div>

            <div className='flex justify-center p-10'>
                <div className='w-[40%] p-5 mt-3 border-collapse h-[360px] bg-slate-100 flex flex-col gap-5 justify-center'>
                    <p className='text-4xl text-blue-800 font-bold'>CREATING ENVIROMENTAL SUSTANIBILTY</p>
                    <p>Committed to monitoring and reducing the environmental impacts of its production as well as developing products that are energy efficient, use
                        fewer raw materials, are more economic and easier to use to our clients.</p>
                    <button className='text-left text-red-700 font-bold'>JOIN US</button>
                </div>
                <div className='w-[40%]'>
                    <img src={green} alt="" className='h-96' />
                </div>
            </div>

            <div className='flex justify-center gap-5'>
                <div className='border h-[25rem] bg-slate-100 w-[30%]'>
                    <div className='flex flex-col gap-5'>
                        <img src={medicine} alt="" />
                        <p className='text-lg text-blue-800 font-bold p-5'>TOP REASONS TO GO FOR ASEPTIC CARTON
                        </p>
                        <p className='text-left text-red-700 font-bold underline p-5'>DISCOVER MORE!</p>
                    </div>
                </div>
                <div className='border h-[25rem] bg-slate-100 w-[30%]'>
                    <div className='flex flex-col gap-5'>
                        <img src={ken} alt="" />
                        <p className='text-lg text-blue-800 font-bold p-5'>HOW CONSUMERS PREFERENCE FOR <br />ALUMINIUM CANS
                        </p>
                        <p className='text-left text-red-700 font-bold underline p-5'>DISCOVER MORE!</p>
                    </div>
                </div>
                <div className='border h-[25rem] bg-slate-100 w-[30%]'>
                    <div className='flex flex-col gap-5'>
                        <img src={milk} alt="" />
                        <p className='text-lg text-blue-800 font-bold p-5'>ADVANTAGES OF UHT TREATED
                            MILK
                        </p>
                        <p className='text-left text-red-700 font-bold underline p-5'>DISCOVER MORE!</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center p-20 gap-5'>
                <p className='text-lg'>Do you want know more?</p>
                <button className='border h-11 w-40 bg-red-700 text-white rounded-md font-bold'>→ CONTACT US!
                </button>
            </div>
            <div className='fixed right-5 bottom-5'>
                <img src={whatsapp} alt="" className='h-20' />
            </div>
        </>

    )
}

export default FrontPage
