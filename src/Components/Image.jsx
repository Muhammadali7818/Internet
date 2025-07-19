import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { LiaDownloadSolid } from 'react-icons/lia';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Image({image}) {
    const[like, setlike] = useState()
    const {alt_description,urls, user} = image
    
    const handleLike=()=>{
        setlike(true)
        toast('Like!',{
            icon:'❤️',
        })
    }
    
    const handleLike2=()=>{
        setlike(false)
        toast('Dislike',{
            icon:'💔',
        })
    }


    
  return (
    <div className=' relative'>
      <img src={urls.full} alt={alt_description} />
      <div className=' absolute top-5 right-4'>
        {like ? (
        <FcLike className=' text-3xl cursor-pointer ' onClick={()=>handleLike2()} />
      ):(
        
        <FcLikePlaceholder className=' text-3xl cursor-pointer ' onClick={()=>handleLike()}/>
      )

        }
      </div>
      <div className='w-full  h-[40px] absolute bottom-[1px]
       flex items-center justify-between py-4 px-4 my-2'>
        <Link to={user.portfolio_url} className=' flex items-center justify-center gap-2 opacity-60 hover:opacity-100 cursor-pointer '>
                 <img src={user.profile_image.small} alt="use_img" className=' rounded-full' />
        <p>{user.name}</p>
        </Link>
        <div className=' w-[60px] h-[40px] bg-transparent border-[3px] 
        flex items-center justify-center rounded-lg opacity-60 hover:opacity-100'>
        <button>
            <LiaDownloadSolid className=' text-4xl'/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Image

// import React, { useState } from 'react';
// import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
// import { PiDownloadSimple } from 'react-icons/pi';
// import { saveAs } from 'file-saver'; // Rasmni yuklab olish uchun kutubxona

// function Image({ image }) {
//     const [like, setLike] = useState(false);
//     const [isDownloading, setIsDownloading] = useState(false);
//     const { alt_description, urls, links } = image;
    
//     const handleLike = () => {
//         setLike(!like);
//     };

//     const handleDownload = async () => {
//         try {
//             setIsDownloading(true);
//             const response = await fetch(urls.full);
//             const blob = await response.blob();
//             saveAs(blob, `unsplash-${Date.now()}.jpg`);
//             await fetch(links.download_location, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
//                 }
//             });
            
//         } catch (error) {
//             console.error('Yuklab olishda xatolik:', error);
//         } finally {
//             setIsDownloading(false);
//         }
//     };

//     return (
//         <div className='relative group'>
//             <img 
//                 src={urls.regular} 
//                 alt={alt_description || 'Unsplash rasm'} 
//                 className='w-full h-full object-cover rounded-lg'
//                 loading='lazy'
//             />
            
//             <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end'>
//                 <div className='w-full p-4 flex justify-between items-center'>
//                     <div className='text-white text-sm'>
//                         {alt_description && alt_description.slice(0, 50)}...
//                     </div>
                    
//                     <div className='flex gap-3'>
//                         <button 
//                             onClick={handleLike}
//                             className='p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition'
//                             aria-label={like ? 'Unlike' : 'Like'}
//                         >
//                             {like ? (
//                                 <FcLike className='text-2xl' />
//                             ) : (
//                                 <FcLikePlaceholder className='text-2xl' />
//                             )}
//                         </button>
                        
//                         <button 
//                             onClick={handleDownload}
//                             disabled={isDownloading}
//                             className='p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition disabled:opacity-50'
//                             aria-label='Yuklab olish'
//                         >
//                             {isDownloading ? (
//                                 <span className='text-white text-sm'>Yuklanmoqda...</span>
//                             ) : (
//                                 <PiDownloadSimple className='text-2xl text-white' />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Image; 