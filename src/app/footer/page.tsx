import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    // footer grid 1
    <div>
      <footer className="bg-cyan-950 text-white py-8 mt-12 ">
        <div className="container mx-auto grid md:grid-cols-3 gap-[150px]">
          <div className="pr-8 pl-8 md:p-0">
            <div className="text-2xl  font-bold text-white mt-5 md:mt-8 pb-5">
              <span>Blog.</span>
              <span className="text-[#FFD700] font-bold">in</span>
            </div>
            <p className="text-sm ">
              Blog.in is your go-to platform for insightful articles across
              various categories. Stay tuned for the latest updates and join our
              growing community of readers.
            </p>
          </div>

          {/* footer grid 2 */}
          <div className="pl-10 -mt-[100px] md:p-0 md:m-0 grid grid-cols-2 md:gap-40">
            <ul className="space-y-2 text-sm md:text-base">
              <h2 className="md:text-lg text-base font-bold mb-4 ">
                Categories
              </h2>
              <li>
                <Link
                  href="/blogcategories/business"
                  className="hover:underline"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link href="/blogcategories/tech" className="hover:underline">
                  Tech
                </Link>
              </li>
              <li>
                <Link href="/blogcategories/sports" className="hover:underline">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/blogcategories/health" className="hover:underline">
                  Health
                </Link>
              </li>
              <li>
                <Link
                  href="/blogcategories/education"
                  className="hover:underline"
                >
                  Education
                </Link>
              </li>
            </ul>

            {/* footer grid 3 */}
            <div>
              <h2 className="md:text-lg text-base font-bold mb-4">Follow Us</h2>
              <div className="">
                <Link
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  className="flex text-center space-x-2 mb-4"
                >
                  <FaFacebook className="text-xl text-white hover:text-yellow-400 hover:ease-in-out hover:duration-700" />
                  <span className="text-sm">Facebook</span>
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  className="flex text-center space-x-2 mb-4"
                >
                  <FaInstagram className="text-xl text-white hover:text-yellow-400 hover:ease-in-out hover:duration-700" />
                  <span className="text-sm ">Instagram</span>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/alishba-naveed-a9ab38251/"}
                  target="_blank"
                  className="flex text-center space-x-2 mb-4"
                >
                  <FaLinkedin className="text-xl text-white hover:text-yellow-400 hover:ease-in-out hover:duration-700" />
                  <span className="text-sm">Linkkedin</span>
                </Link>
                <Link
                  href={"https://www.twitter.com/"}
                  target="_blank"
                  className="flex text-center space-x-2 mb-4"
                >
                  <FaTwitter className="text-xl text-white hover:text-yellow-400 hover:ease-in-out hover:duration-700" />
                  <span className="text-sm">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 Blog.in. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
