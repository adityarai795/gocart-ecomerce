'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, CheckCircle2, ChevronRightIcon, ShieldCheck, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    return (
        <div className='mx-6'>
            <div className='relative overflow-hidden max-w-7xl mx-auto my-8 rounded-3xl bg-slate-950 text-white surface-grid'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,.25),transparent_30%)]' />
                <div className='relative flex max-lg:flex-col gap-8 min-h-[480px]'>
                    <div className='flex-1 p-7 sm:p-14 lg:pr-0'>
                        <div className='inline-flex items-center gap-3 text-green-300 pr-4 p-1 rounded-full text-xs sm:text-sm border border-green-400/30'>
                            <span className='bg-green-500 px-3 py-1 max-sm:ml-1 rounded-full text-slate-950 text-[10px] font-bold tracking-wider'>NEW</span> Built for work. Ready for play. <ChevronRightIcon size={16} />
                        </div>
                        <h2 className='text-4xl sm:text-6xl leading-[1.05] my-7 font-semibold tracking-tight max-w-xl'>
                            Technology that keeps you <span className='text-green-400'>ahead.</span>
                        </h2>
                        <p className='text-slate-300 max-w-lg leading-7'>Curated electronics, dependable accessories, and smart solutions for the way you work, create, and connect.</p>
                        <div className='flex flex-wrap gap-3 mt-8'>
                            <a href='/shop' className='inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition'>Shop the collection <ArrowRightIcon size={17} /></a>
                            <a href='/shop' className='inline-flex items-center gap-2 border border-white/20 hover:border-white/60 px-6 py-3 rounded-lg transition'>Business solutions</a>
                        </div>
                        <div className='flex flex-wrap gap-5 mt-10 text-xs text-slate-300'>
                            <span className='flex items-center gap-2'><ShieldCheck className='text-green-400' size={16} /> 2-year warranty</span>
                            <span className='flex items-center gap-2'><Truck className='text-green-400' size={16} /> Free delivery over ₹5,000</span>
                            <span className='flex items-center gap-2'><CheckCircle2 className='text-green-400' size={16} /> Quality checked</span>
                        </div>
                    </div>
                    <div className='relative flex-1 min-h-64 lg:min-h-0 flex items-end justify-center'>
                        <div className='absolute bottom-8 right-8 rounded-xl border border-white/15 bg-white/10 backdrop-blur px-5 py-4 text-sm'>
                            <p className='text-green-300 text-xs uppercase tracking-widest'>Featured setup</p>
                            <p className='font-medium mt-1'>Power your everyday</p>
                        </div>
                        <Image className='w-full max-w-md max-h-[400px] object-contain object-bottom' src={assets.hero_model_img} alt='Featured electronics collection' priority />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero