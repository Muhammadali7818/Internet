import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import ImageContainer from '../pages/ImageContainer'
import Loader from './Loader'

function Home1() {
  const ACCESS_KEY = 'v2vGe3sa_qONynY5TFPhcv-pmk5KbT_W1kIRLobap9Q'
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setImages(data)

      })
  })
  return (
    <div className='mx-4 my-5 mt-[70px]'>
      {images && images.length > 0 ? (<ImageContainer images={images} />) : (<Loader />)}
    </div>
  )
}

export default Home1
