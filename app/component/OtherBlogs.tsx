import React from 'react'
import demo from '@/public/imae.png'
import demo1 from '@/public/image.jpg'
import demo2 from '@/public/image2.png'
import BlogCard from './BlogCard'

export default function OtherBlogs() {

    const datas = [ { title: 'First Blog', category:'Sports',date:'22/01/2024',img:demo },
    { title: 'Second Blog', category:'Entertainment',date:'22/01/2024',img:demo1 },
    { title: 'Third Blog', category:'News',date:'22/01/2024',img:demo2 },
    { title: 'Fourth Blog', category:'Education',date:'22/01/2024',img:demo }
    ]


  return (
    <div className='w-full md:w-1/2 h-full  flex flex-wrap gap-3 justify-around py-2 '>
        {datas.map((data)=>{
            return(

                <BlogCard key={data.category} title={data.title} category={data.category} image={data.img} date={data.date} />
                )
            })}
    </div>
  )
}
