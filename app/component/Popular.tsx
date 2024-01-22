import React from 'react'
import demo from '@/public/imae.png'
import demo1 from '@/public/image.jpg'
import demo2 from '@/public/image2.png'
import PopularCard from './PopularCard'
import { ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/24/outline'


export default function Popular() {
    const datas = [ { title: 'First Blog', category:'Sports',date:'22/01/2024',img:demo },
    { title: 'Second Blog', category:'Entertainment',date:'22/01/2024',img:demo1 },
    { title: 'Third Blog', category:'News',date:'22/01/2024',img:demo2 },
    { title: 'Fourth Blog', category:'Education',date:'22/01/2024',img:demo },
    
    
    ]

  return (
    <div className='w-full h-full  flex flex-wrap gap-4  py-2 max-[767px]:mt-[450px]'>
        <div className='w-full flex flex-col  px-4'>
            <div className='w-full flex justify-between'>

                <div className='font-semibold'>Popular</div>
                <div className='flex'>
                    <ChevronLeftIcon className='h-3 w-3 '/>
                    <ChevronRightIcon className='h-3 w-3 '/>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-100 rounded-sm shadow-sm'>

            </div>
        </div>

        <div className='w-full h-full  flex flex-wrap gap-1 justify-around py-2 '>

        {datas.map((data)=>{
            return(
                
                <PopularCard key={data.category} title={data.title}  image={data.img}  />
                )
            })}
            </div>
    </div>
  )
}
