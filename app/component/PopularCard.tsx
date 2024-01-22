import React from 'react';
import Image from 'next/image';

export default function PopularCard({ title, image }: { title: string; image: any }) {
  return (
    <div className='relative md:w-1/6 md:h-1/2 cursor-pointer w-2/5 h-full max-[320px]:w-11/12'>
      
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50'></div>
      
      
      <Image src={image} alt={title} className='w-full h-full object-cover' />

      
      <h2 className='absolute bottom-0 text-white px-4 py-2'>{title}</h2>
    </div>
  );
}
