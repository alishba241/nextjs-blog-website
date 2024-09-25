import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
      <div className="mt-[40px] md:mt-[50px] mb-10">
      <h2 className=' font-bold text-4xl text-center text-cyan-900'>Lets Contact us</h2>
      <p className='text-center pt-6 font-semibold'>We would love to hear from you! Feel free to drop us a message.</p>
          <div className="flex mt-[10px] justify-center ">

              <section className="relative py-12 bg-transparent">

  <div className="container mx-auto text-center px-4">

    <div className="relative w-[350px] md:w-[500px] mx-auto bg-cyan-900  backdrop-filter backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg space-y-6">
              <form className="space-y-4 md:space-y-6">
                
                {/* inputs */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 md:p-4 text-black rounded-lg placeholder:text-gray-500 border-2 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 md:p-4 text-black rounded-lg border-2  placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 md:p-4 text-black rounded-lg border-2  placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 md:p-4 text-black rounded-lg border-2  placeholder:text-gray-500 border-transparent focus:border-cyan-400 outline-none transition duration-300 bg-white bg-opacity-93 h-32 md:h-40 resize-none"
            required
          ></textarea>
        </div>
                <button
                 
          type="submit"
          className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-yellow-400 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
      </form>
{/* links */}
      <div className="mt-8">
        <p className="text-md md:text-lg text-gray-300">Or connect with us on social media:</p>
        <div className="flex justify-center space-x-6 md:space-x-8 mt-4 md:mt-6">
          <Link
            href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/"
            target="_blank"
            className="text-cyan-700 hover:text-cyan-800 transition duration-300 text-xl md:text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link
            href="https://github.com/alishba241?tab=repositories"
            target="_blank"
            className="text-cyan-400 hover:text-cyan-500 transition duration-300 text-xl md:text-2xl"
          >
            <i className="fab fa-github"></i>
          </Link>
                  </div>
                   <div className="mt-4">
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-yellow-300 text-black rounded-lg font-bold hover:bg-yellow-400 transition duration-300">
                LinkedIn
              </button>
            </Link>
            <Link href="https://github.com/alishba241?tab=repositories" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-yellow-300 text-black rounded-lg font-bold hover:bg-yellow-400 transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      </div>
{/* direct contact mail */}
      <div className="mt-6 md:mt-8">
        <p className="text-md md:text-lg text-gray-300">
          Prefer direct email? Reach us at{" "}
          <Link href="mailto:alishbasheikh723@gmail.com" className="text-cyan-400 hover:text-cyan-500 transition duration-300">
            Blog.in@gmail.com
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>

        </div>
        </div>
  )
}

export default Contact
