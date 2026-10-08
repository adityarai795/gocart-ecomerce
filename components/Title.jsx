'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center text-center'>
            <h2 className='text-2xl font-semibold text-slate-800'>{title}</h2>
            <div className='flex items-center gap-5 text-sm text-slate-600 mt-2'>
                <p className='max-w-lg'>{description}</p>
                {visibleButton && <Link href={href} className='text-green-600 flex items-center gap-1 whitespace-nowrap hover:text-green-700'>View more <ArrowRight size={14} /></Link>}
            </div>
        </div>
    )
}

export default Title