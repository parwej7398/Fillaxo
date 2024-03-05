import React from 'react';
import liquour from '../../assest/liqued.png'

const Liquor = () => {
    const products = [
        {
            id: 1,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Alcohol.jpg',
            title: 'Alcohol',
            contect: 'Filling in glass bottles to maintain taste and smell as natural as possible.'
        },
        {
            id: 2,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Beer.jpg',
            title: 'Beer',
            contect: 'Guaranteed for quality beer in glass and aluminum can packing to adopt in market.'
        },
        {
            id: 3,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Whisky.jpg',
            title: 'Whisky',
            contect: 'State-of-the-art technologies to pack in paper carton with long shelf life and handling flexibility.'
        },
        {
            id: 4,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Whisky.jpg',
            title: 'Wine',
            contect: 'Uniform fermentation, gentle treatment, maximum yield and perfect filling are accurate characteristic of perfect wine.'
        },
        {
            id: 5,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Sparkling+wine.jpg',
            title: 'Sparkling wine',
            contect: 'Innovative technologies and unique equipment that produce product for pleasant occasions of celebration.'
        },
        {
            id: 6,
            image: 'https://fillaxo.s3.ap-south-1.amazonaws.com/fillaxoimages/desktopfillaxo/Non+-+Alcoholic+beer.jpg',
            title: 'Non - alcoholic beer',
            contect: 'Offering a common plant to produce non - alcoholic beer and energy drink to meet customer cost optimization.'
        },
    ]
    return (
        <div>
            <div className='lg:flex lg:flex-reverse'>
                <div className='lg:w-[50%] flex flex-col gap-8 bg-red-600 text-white p-20'>
                    <p className='underline font-semibold text-lg'>Liquor</p>
                    <p className='text-3xl'>KING OF EVERY CELEBRATION</p>
                </div>
                <div className='lg:w-[50%]'>
                    <img src={liquour} alt="" className='h-[20rem] w-full' />
                </div>
            </div>
            <div className='flex flex-col lg:gap-5 gap-2 p-2 lg:p-10'>
                <p className='lg:text-xl'>The production of alcoholic product is based on accurate fermentation which is a natural process in which yeast convert starch and glucose into alcohol.</p>
                <p className='lg:text-3xl text-red-500 font-semibold text-xl'>Perfect alcoholic solutions</p>
                <p className='lg:text-xl'>A detailed knowledge of liquor product process and filling allow us to offer complete turnkey plant which includes packing in form of glass, pet, aluminum can and carton filling.</p>
                <p className='lg:text-xl'>Our correct and conceptual approach always helps our customers from greenfield stage to final product, on time. Our engineers work with each customer to customize and optimize their plants to satisfy actual requirement for product and meet internationally excepted hygiene & quality standards.</p>
            </div>
            <div>

                <div className="lg:p-6 sm:py-12 bg-gray-100 text-gray-800">
                    <div className=" grid lg:grid-col-3 lg:pl-14 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((event) => (
                            <div key={''} className="flex flex-col mt-5 w-[25rem] bg-gray-50">
                                <img alt="" className=" bg-gray-500 lg:w-[25rem]" src={event.image} />
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

export default Liquor;
