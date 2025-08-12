import React from 'react'
import Image from '../Components/Image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function ImageContainer({ images }) {

  return (
    <>
    
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }} >
      <Masonry>

        {images.map((image) => (
          <Image image={image}/>
        ))}

      </Masonry>
    </ResponsiveMasonry>
    <button className='w-[95%] h-[50px]  border rounded-lg  my-4 text-center ml-[35px] text-3xl font-bold  font-mono'>Show more</button>
    </>
  )
}

export default ImageContainer
