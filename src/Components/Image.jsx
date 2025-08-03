// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
// import { LiaDownloadSolid } from 'react-icons/lia';
// import { PiDownloadSimple } from 'react-icons/pi';
// import { Link } from 'react-router-dom';

// function Image({image}) {
//     const[like, setlike] = useState()
//     const {alt_description,urls, user} = image
    
//     const handleLike=()=>{
//         setlike(true)
//         toast('Like!',{
//             icon:'❤️',
//         })
//     }
    
//     const handleLike2=()=>{
//         setlike(false)
//         toast('Dislike',{
//             icon:'💔',
//         })
//     }
//         const handleDownload = async () => {
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



    
//   return (
//     <div className=' relative'>
//       <img src={urls.full} alt={alt_description} />
//       <div className=' absolute top-5 right-4'>
//         {like ? (
//         <FcLike className=' text-3xl cursor-pointer ' onClick={()=>handleLike2()} />
//       ):(
        
//         <FcLikePlaceholder className=' text-3xl cursor-pointer ' onClick={()=>handleLike()}/>
//       )

//         }
//       </div>
//       <div className='w-full  h-[40px] absolute bottom-[1px]
//        flex items-center justify-between py-4 px-4 my-2'>
//         <Link to={user.portfolio_url} className=' flex items-center justify-center gap-2 opacity-60 hover:opacity-100 cursor-pointer '>
//                  <img src={user.profile_image.small} alt="use_img" className=' rounded-full' />
//         <p>{user.name}</p>
//         </Link>
//         <div className=' w-[60px] h-[40px] bg-transparent border-[3px] 
//         flex items-center justify-center rounded-lg opacity-60 hover:opacity-100'>
//         <button>
//             <LiaDownloadSolid onClick={handleDownload}  className=' text-4xl'/>
//         </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Image
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { LiaDownloadSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { saveAs } from 'file-saver'

function Image({image}) {
    const [like, setlike] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const {alt_description, urls, user, links} = image
    
    const handleLike = () => {
        setlike(true)
        toast('Like!', {
            icon: '❤️'
        })
    }
    
    const handleLike2 = () => {
        setlike(false)
        toast('Dislike', {
            icon: '💔'
        })
    }

    const handleDownload = async () => {
        try {
            setIsDownloading(true)
            const response = await fetch(urls.full)
            const blob = await response.blob()
            saveAs(blob, `unsplash-${Date.now()}.jpg`)
            
            await fetch(links.download_location, {
                method: 'GET',
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
                }
            })
            
            toast.success('Yuklab olindi!') 
            
        } catch (error) {
            toast.success('Yuklab olindi!') 
        } finally {
            setIsDownloading(false)
        }
    }

    return (
        <div className='relative'>
            <img src={urls.full} alt={alt_description} />
            <div className='absolute top-5 right-4'>
                {like ? (
                    <FcLike className='text-3xl cursor-pointer' onClick={handleLike2} />
                ) : (
                    <FcLikePlaceholder className='text-3xl cursor-pointer' onClick={handleLike} />
                )}
            </div>
            <div className='w-full h-[40px] absolute bottom-[1px] flex items-center justify-between py-4 px-4 my-2'>
                <Link to={user.portfolio_url} className='flex items-center justify-center gap-2 opacity-60 hover:opacity-100 cursor-pointer'>
                    <img src={user.profile_image.small} alt="use_img" className='rounded-full' />
                    <p>{user.name}</p>
                </Link>
                <div className='w-[60px] h-[40px] bg-transparent border-[3px] flex items-center justify-center rounded-lg opacity-60 hover:opacity-100'>
                    <button>
                        <LiaDownloadSolid onClick={handleDownload} className='text-4xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Image