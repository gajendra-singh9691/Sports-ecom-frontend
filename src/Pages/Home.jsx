import React, { useEffect, useState } from 'react'
import ImageSlider from '../Component/ImageSlider'
import ProductCard from '../Component/ProductCard'
import JerseyCollection from '../Component/JerseyCollection';
import MarqueeSlider from '../Component/MarqueeSlider';
import FeatureSection from '../Component/FeatureSection';
import axios from 'axios';
const api_uri = import.meta.env.VITE_API_URL

const Home = ({onAddToCart}) => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetch = async ()=> {
            const response = await axios.get(`${api_uri}/user/allData/tranding`);
            let data = response.data
            setProducts(data.data)
        }
        fetch()
    },[])

    console.log(products);
    

    return (
        <div>
            <div className='flex justify-center py-0 relative'>
                <ImageSlider />
                <div className='absolute z-50  w-20 h-20 top-5 right-5'>
                <img src="../Logo.png" alt="" className='mix-blend-lighten w-full h-full' />
            </div>
            </div>

            <div className='flex flex-wrap gap-4 px-1 sm:px-4 py-2 sm:gap-6 justify-center w-full'>
                <h2 className='w-full text-left text-xl md:text-2xl font-bold'>Trending Products</h2>
                <div className="flex flex-wrap gap-2 items-center justify-center w-full">
                    {products.map((product,index) => (
                        <ProductCard key={index} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </div>
            <JerseyCollection />
            <div className='py-4'>
                <MarqueeSlider />
            </div>
            <FeatureSection />
        </div>
    )
}

export default Home
