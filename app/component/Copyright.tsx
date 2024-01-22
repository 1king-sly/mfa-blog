import React from 'react'

export default function Copyright() {
    const year = new Date().getFullYear()

  return (
    <div className='w-full h-40 bg-gray-200 flex justify-around items-center rounded-sm max-[767px]:text-xs max-[420px]:flex-col'>
        <div className='min-[420px]:w-3/5 flex flex-col w-full max-[420px]:px-3 '>
            <p>Moi Forces Academy -Mombasa &#169;{year}  </p>
            <p>The Journalism Club</p>
            <div className='flex gap-2'>
                
            <p>Insta</p>
            <p>Insta</p>
            <p>Insta</p>
            </div>


        </div>
        <div className='flex min-[420px]:w-1/4 flex-col w-full max-[420px]:px-3 '>
            <p>Developed by Byrone Kingsly</p>

            <div className='flex gap-2'>
                
                <p>Insta</p>
                <p>Insta</p>
                <p>Insta</p>
                </div>

        </div>
   
    </div>
  )
}
