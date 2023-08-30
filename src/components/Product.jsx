import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
const Product = ({ item }) => {
    const iconStyle = 'h-[40px] w-[40px] rounded-full flex items-center justify-center bg-white text-lg m-2 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100'
    const [hoverEffect, setHoverEffect] = useState('opacity-0')
    const handlHoverEnter = () => {
        setHoverEffect('opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handlHoverExit=()=>{
        setHoverEffect('opacity-0')
    }
    return (
        <div className='flex flex-1 items-center justify-center min-w-[300px] min-h-[250px] overflow-hidden rounded-md  m-2 relative' onMouseEnter={handlHoverEnter} onMouseLeave={handlHoverExit}>
            <img className='w-60  h-72' src={item.image} alt="product_image" />
            <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ` + hoverEffect}>
                {/* icons */}
                <div className={iconStyle}>
                    <AiOutlineShoppingCart />
                </div>
                <div className={iconStyle}>
                    <MdFavoriteBorder />
                </div>
                <div className={iconStyle}>
                    <GoSearch />
                </div>
            </div>
        </div>
    )
}

export default Product
