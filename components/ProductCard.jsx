'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

    const currency = '₹'

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group w-full sm:max-w-[270px]'>
            <div className='relative bg-slate-100 h-48 sm:h-64 rounded-2xl flex items-center justify-center overflow-hidden'>
                <span className='absolute top-3 left-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-500'>{product.category}</span>
                <Image width={500} height={500} className='max-h-30 sm:max-h-40 w-auto group-hover:scale-115 transition duration-300' src={product.images[0]} alt="" />
            </div>
            <div className='flex justify-between gap-3 text-sm text-slate-800 pt-4'>
                <div>
                    <p className='font-medium group-hover:text-green-700 transition'>{product.name}</p>
                    <div className='flex mt-1'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={14} className='text-transparent mt-0.5' fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"} />
                        ))}
                    </div>
                </div>
                <p className='font-semibold'>{currency}{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard