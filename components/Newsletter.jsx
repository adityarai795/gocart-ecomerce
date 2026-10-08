import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <div className='mx-6 my-28'>
            <div className='max-w-7xl mx-auto rounded-2xl bg-slate-100 px-6 py-12 sm:px-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8'>
                <div>
                    <p className='text-xs font-semibold uppercase tracking-[.2em] text-green-700'>Stay in the loop</p>
                    <h2 className='text-3xl font-semibold text-slate-900 mt-3'>Better tech, delivered.</h2>
                    <p className='text-sm text-slate-500 mt-2 max-w-md'>New arrivals, useful guides, and members-only offers. No noise, just the good stuff.</p>
                </div>
                <div className='flex bg-white text-sm p-1 rounded-lg w-full lg:max-w-md border border-slate-200'>
                    <input className='flex-1 min-w-0 px-4 outline-none' type="email" placeholder='Your work email' aria-label='Your work email' />
                    <button className='font-medium bg-slate-900 text-white px-5 py-3 rounded-md hover:bg-green-700 active:scale-95 transition'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter