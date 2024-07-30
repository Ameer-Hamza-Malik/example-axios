"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
  const [images, setimages] = useState([]);
const getImages = async ()=>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list")
  const data = response.data
  setimages(data)
  console.log(images)
  } catch (error) {
    console.error("error fetching images")
    
  }
}
  return (
    <div> 
       <button onClick={getImages} className='px-5 py-3 bg-green-500 text-white'>
        Get images
       </button>
       <div className='p-10'>
        {images.map((elem,i)=>{
         return <img key={i}
         src={elem.download_url}
         width={200}
         height={500}
         className='m-10 rounded inline-block'
         />
        })}       
       </div>
    </div>
  )
}

export default page