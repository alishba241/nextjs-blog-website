'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Blog, blogs } from '../mainread/[readmore]/page';

interface blogcardProps {
  blog:Blog[]
}

//! getting blogs from Blog component

const Blogcard:React.FC<blogcardProps> = ({ blog }) => {
  console.log(blog)
   
  return (
    <div className="container mx-auto mt-3 md:mt-8 p-4">
      <div className="grid grid-cols-2 h-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {blogs.map((bloging) => (
          <div
            key={bloging.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src={bloging.image}
              alt={bloging.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold mb-2">{bloging.title}</h2>
              <Link href={bloging.slug?`/mainread/${bloging.slug}`:"#"}>
              <button className=' mt-2 bg-cyan-950 text-white hover:bg-[#FFD700] hover:duration-500 hover:ease-in-out hover:text-black md:text-sm text-xs md:px-2 md:py-1 px-2 py-1 rounded-lg'>Read More</button>
              </Link><br /><br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogcard;
