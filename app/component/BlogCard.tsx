import React from 'react'
import Image from 'next/image'

export default function BlogCard({title,image,category,date}:{title:string,image:any,category:string,date:string}) {
  return (
    <div className='w-2/5 flex flex-col h-1/2 gap-1'>
        <Image src={image} alt={title} className='w-full h-2/3 object-cover'/>
        <p className='font-normal '><span className='text-white bg-orange-500 mr-2 p-0.5 rounded-sm '>{category} </span> {date} </p>
        <h2 className='font-semibold'> {title} </h2>

    </div>
  )
}
