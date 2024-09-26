import React from 'react'
import Blogcard from './component/blogcard'
import Blogs from './blogs/page'
import { blogs } from './mainread/[readmore]/page';

function Home() {
  return (
    <div>
      <Blogcard blog={blogs} />

      </div>
  )
}

export default Home
