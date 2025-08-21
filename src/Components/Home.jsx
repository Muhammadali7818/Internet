// import React, { useEffect, useState } from 'react'
// import { data } from 'react-router-dom'
// import ImageContainer from '../pages/ImageContainer'
// import Loader from './Loader'

// function Home() {
//   const ACCESS_KEY = '4jGBkQfqWCOXCBO9Mar0kUW20syWQtr-ZM2uAeV7vV8'
//   const [images, setImages] = useState([])
//   useEffect(() => {
//     fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
//       .then(res => {
//         return res.json()
//       })
//       .then(data => {
//         setImages(data)

//       })
//   })
//   return (
//     <div className='mx-4 my-5 '>
//       {images && images.length > 0 ? (<ImageContainer images={images} />) : (<Loader />)}
//     </div>
    
//   )
// }

// export default Home
import { useEffect, useState } from 'react'
import ImageContainer from '../pages/ImageContainer'
import Loader from './Loader'

function Home() {
  const ACCESS_KEY = 'NTcDy0HNP32k2DdsWvYT-eBjTkvxiWAF06Px15jG-xg'
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchImages = async (pageNumber) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=9`
      )
      const data = await res.json()
      // eski rasmlarni saqlab, yangilarini qo‘shib qo‘yamiz
      setImages(prev => [...prev, ...data])
    } catch (error) {
      console.error("Xatolik:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages(page)
  }, [page])

  const handleShowMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className='my-5 mx-5'>
      {images && images.length > 0 ? (
        <ImageContainer images={images} />
      ) : (
        <Loader />
      )}

      {loading && <Loader />}

      <button
        onClick={handleShowMore}
        className='w-[95%] h-[50px]  border rounded-lg  my-4 text-center ml-[35px] text-3xl font-bold  font-mono'
      >
        Show more
      </button>
    </div>
  )
}

export default Home
