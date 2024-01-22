import React from 'react'

export default function Copyright() {
    const year = new Date().getFullYear()

  return (
    <div className='w-full h-40 bg-gray-200 flex justify-around items-center rounded-sm '>
        <div className='w-3/5 flex flex-col'>
            <p>Moi Forces Academy -Mombasa &#169;{year}  </p>
            <p>The Journalism Club</p>
            <div className='flex gap-2'>
                
            <p>Insta</p>
            <p>Insta</p>
            <p>Insta</p>
            <p>Insta</p>
            </div>


        </div>
        <div className='flex w-1/5 flex-col'>
            <p>Developed by Byrone Kingsly</p>

            <div className='flex gap-2'>
                
                <p>Insta</p>
                <p>Insta</p>
                <p>Insta</p>
                <p>Insta</p>
                </div>

        </div>
   
    </div>
  )
}
