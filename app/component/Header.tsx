import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Search from './search'

export default function Header() {
    const today = new Date();
    const dayOfWeek = today.getDay();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[dayOfWeek];

const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };

const dateFormatter = new Intl.DateTimeFormat('en-US', options);

const formattedDate = dateFormatter.format(today);


  return (
    <div className='w-full h-16 flex flex-col items-center justify-center gap-2 md:mb-6'>
        <div className='w-full h-full flex items-center justify-center '>
            <div className='w-1/6  h-full flex items-center object-cover'>
                <Image src={logo} alt='logo' width='48' height='48' className='object-contain h-3/5 w-4/5'/>
            </div>
            <div className='flex flex-1 '>
                <p className='w-full flex justify-center max-[420px]:text-xs sm:text-lg md:text-2xl '>Moi Forces Academy-Mombasa</p>
            </div>
        </div>

        <div className='w-full  flex items-center bg-gray-200 p-1 max-[768px]:justify-between  '>
             <Bars3Icon className='h-full w-8 cursor-pointer  text-white bg-slate-800'/>
   
            <ul className='hidden lg:flex gap-3 w-1/3 h-full items-center font-normal '>
                <li className='px-2 hover:bg-white hover:text-orange-300 cursor-pointer h-full items-center flex'>News</li>
                <li className='px-2 hover:bg-white hover:text-orange-300 cursor-pointer h-full items-center flex'>Sports</li>
                <li className='px-2 hover:bg-white hover:text-orange-300 cursor-pointer h-full items-center flex'>Education</li>
                <li className='px-2 hover:bg-white hover:text-orange-300 cursor-pointer h-full items-center flex'>Entertainment</li>
            </ul>

            <Search placeholder='search ....'/>
            <div>
                <p className='max-[420px]:text-xs text-sm'> 
                    <span className='font-semibold mr-2'>{currentDay}</span>{formattedDate}
                    </p>
            </div>
        </div>

    </div>
  )
}
