import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { blogscard } from '@/app/categoryread/[read]/page';
    
type categoryPageProps = {
  params:{categories:string}
}

// ! getting categories

function DynamicData({ params }: categoryPageProps) {
  const { categories } = params;
  
  // ! filter blogs acc to their ctegories

  const filteredBlogs = blogscard.filter((blog) => blog.category === categories);


  return (
    <div className="container mx-auto mt-3 md:mt-8 p-4">
      <h1 className='font-bold text-2xl md:mt-0 -mt-1 md:text-3xl text-center text-cyan-950'>Explore Latest { categories} Blogs</h1>
            <div className="grid grid-cols-2 h-auto gap-4 mt-[40px] md:mt-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {filteredBlogs.map((blog) => {
                  return (
                    <div key={blog.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                      <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-32 object-cover"
                      />
                     
              <div className="p-2">
                      <h2 className="text-sm font-semibold focus:outline-none ">{blog.title}</h2>
              <Link href={blog.slug?`/categoryread/${blog.slug} `: '#' }>
              <button className=' mt-2 bg-cyan-950 text-white hover:bg-[#FFD700] hover:duration-500 hover:ease-in-out hover:text-black md:text-sm text-xs md:px-2 md:py-1 px-2 py-1 rounded-lg'>Read More</button>
              </Link>
              
                        <br /><br />
                      </div>
                      </div>
                  )
              })}
                      
      </div>
      
        </div>
  )
}



export default DynamicData
