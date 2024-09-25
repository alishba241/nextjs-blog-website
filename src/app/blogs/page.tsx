import Link from 'next/link'
import React from 'react'

function Blogs() {
  return (
      
    // ! Blogs categories

    <div>
    <div className='p-5 w-full mt-[80px] md:mt-[100px] h-[80px] flex justify-center items-center '>
      
      <div className='flex '>
        <Link href='/blogcategories/business' className='px-3 py-1 mr-2 md:mr-5 md:px-6 md:py-2 bg-cyan-900 text-white rounded-md text-center text-sm hover:opacity-75 hover:duration-500 hover:ease-in-out '>Business</Link>
        <Link href='/blogcategories/tech' className='px-3 py-1 mr-2 md:mr-5 md:px-6 md:py-2 bg-cyan-900 text-white rounded-md text-center text-sm hover:opacity-75 hover:duration-500 hover:ease-in-out'>Tech</Link>
        <Link href='/blogcategories/health' className='px-3 py-1 mr-2 md:mr-5 md:px-6 md:py-2 bg-cyan-900 text-white rounded-md text-center text-sm hover:opacity-75 hover:duration-500 hover:ease-in-out'>Health</Link>
          <Link href='/blogcategories/education' className='px-3 py-1 mr-2 md:mr-5 md:px-6 md:py-2 bg-cyan-900 text-white rounded-md text-center text-sm hover:opacity-75 hover:duration-500 hover:ease-in-out'>Education</Link>
          
        </div>
        
       

      </div>
       <div className='flex justify-center items-center flex-col md:mt-[50px] mt-[30px]  mb-[60px] md:mb-[50px]'>
        <h1 className='md:text-4xl text-3xl text-cyan-700 font-bold'>Explore Everyday Blogs</h1>
        <p className='md:text-base text-sm font-medium text-gray-600 md:pt-[15px] pt-[10px]'>A platform for insightful articles across various categories.</p>
        <div className='border-t-4 border-t-cyan-700  md:w-[170px] w-[130px] rounded-xl mt-[5px]'></div>
        </div>
      </div>
   
  )
}

export default Blogs
