import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import ImageContainer from '../pages/ImageContainer'

function Home() {
  const ACCESS_KEY = '4jGBkQfqWCOXCBO9Mar0kUW20syWQtr-ZM2uAeV7vV8'
  const [images, setImages] = useState([])
  useEffect(() => 
    {fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setImages(data)
        
      })
  })
  return (
    <div className='mx-4 my-5'>
          {data && <ImageContainer images={images}/> }
    </div>
  )
}

export default Home
