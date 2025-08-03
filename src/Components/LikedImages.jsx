import React, { useState } from 'react'
import NotFound from '../pages/NotFound'

function LikedImages() {
  const [likedImages, setLikedImages] = useState([])
    return (
    <div>
      {likedImages && likedImages.length > 0 ? <div></div> : <NotFound/>}
    </div>
  )
}

export default LikedImages
