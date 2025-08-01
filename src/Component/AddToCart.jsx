import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const AddToCart = ({ addtocart, fun, data }) => {
    const cart = useRef();
    const [width, setwidth] = useState('0rem')
    let [total, settotal] = useState(0)
    useEffect(() => {
        if (addtocart) {
            setwidth('100%');
            cart.current.style.display = 'block';
            // settotal(0)
        }
        else {
            setwidth('0%')
            cart.current.style.display = 'none';
        }
    }, [addtocart])

    useEffect(() => {
        total = 0;
        data.map((item) => {

            settotal(total += item.Price)
        })
    }, [addtocart])

    const cartopenclose = (e) => {
        if (e.target === e.currentTarget) {
            fun(!addtocart)
        }
    }

    const whatsapp = () => {
        const phoneNumber = '0000000000'
        let message = ''
        // console.log(data);
        
        data.forEach(data => {
            message = `${message} id : ${data.id} name : ${data.name} size : ${data.size} price : ${data.salePrice} ` 
        });

        message = `${message} total amount : ${total}`
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank'); // Opens in new tab

    }

    return (
        <div className='fixed z-[70] right-0 top-0 min-h-screen bg-[#3b3b3b8d] duration-200' style={{ width: width }} onClick={cartopenclose} >
            <div ref={cart} className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 absolute top-0 right-0 bg-white h-full z-50'>
                <div className='flex items-center justify-between p-4 border-b-2 border-gray-300 '>
                    <span className='font-bold text-xl'>SHOPPING CART</span>
                    <div className='cursor-pointer p-1 relative z-[70]' onClick={cartopenclose}>
                        <FontAwesomeIcon icon={faXmark} onClick={cartopenclose} />
                    </div>
                </div>
                <div className='overflow-y-scroll p-2'>
                    {
                        (data.length == 0) ? <div className='flex justify-center py-10'>
                            <h1 className='font-semibold text-xl'>Your cart is empty</h1>
                        </div> : <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                {
                                    data.map((data, index) => {
                                        return <div key={index} className='w-full border-1 border-gray-500 rounded-2xl flex justify-between px-2 py-4 gap-8 '>
                                            <div className='w-25 h-25'>
                                                <img src={data.imageSrc} className='w-full h-full object-contain' alt="" />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='h-6 overflow-hidden'>Item : {data.name}</span>
                                                <span>Price : {data.salePrice}</span>
                                                <span>Total Price : {data.Price}</span>
                                                <span>Quantity : {data.quantity}</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <span>Total Amount : </span>
                                    <span>{total}</span>
                                </div>
                                <button onClick={whatsapp} className='bg-[#000000] text-white font-bold py-2 px-4 rounded  transition-all relative hover:top-[-2px] duration-75 cursor-pointer w-full'>WhatsApp</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddToCart
