import React from 'react'
import image from '@/public/imae.png'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestBlog() {
  return (
    <div className='w-full md:w-1/2 h-full  rounded-md   flex gap-2 flex-col  overflow-clip'>
        <div className='h-full w-full  p-2 '>
            <Image src={image} alt='Image' className='object-cover w-full h-full' />
        
        </div>
        <div className='flex flex-col flex-1  p-2  '>
            <Link href={`/test`}>
                
        <h2 className='text-lg font-semibold '> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium delectus ducimus laborum cum quo  </h2>
            </Link>
        <p className='text-xs'>Byrone Kingsly </p>

        <p className='max-[767px]:hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore reprehenderit quis vel odit qui odio ratione perferendis, voluptates placeat consequuntur accusamus molestias quae vero blanditiis</p>
        </div>

    </div>
    
  )
}
