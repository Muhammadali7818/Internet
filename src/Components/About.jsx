
import img1 from '/public/12.png'
import img2 from '/public/image2.png'
import img3 from '/public/image3.png'
import img4 from '/public/image4.png'
import img5 from '/public/image5.png'
import img6 from '/public/image6.png'
import img7 from '/public/image7.png'
import img8 from '/public/image8.png'
import img9 from '/public/image9.png'
import img10 from '/public/image10.png'
import img11 from '/public/image11.png'
import img12 from '/public/image12.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './About.css'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import './About.css'
import Footer from './Footer'
function About() {
  return (
    <div className=''>
      <div className=' flex h-[579px]'>
        <div className=' w-1/2 h-full text-center'>
          <h1 className='text-4xl font-extrabold font-mono text-center pt-[20%]'> Hello <br /> I'm Muhammadali <br /> G'anibekov</h1>
          <p className=' text-xl w-1/2  text-center m-auto pt-4 pb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint labore dicta aliquam recusandae deleniti rerum omnis ab maxime quos. Magnam repudiandae iusto quidem at sunt corporis nostrum sapiente amet odio!
          </p>
          <button className='btn btn-primary mb-32 '>
            <a href="https://t.me/Dasturchi_person" target='_blank'>
              Contact me
            </a>
          </button>

        </div>
        <div className=' w-1/2 h-full '>
          <img src={img1} alt="" className='h-[700px]' />
        </div>
      </div>
      <div className='flex flex-col h-[1600px]' >
        <div className=' flex flex-col justify-center items-center h-screen   '>
          <div className=' w-[70%] h-[300px] flex items-center justify-around'>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img2} alt="" className=' w-[150px] h-[150px] mx-auto' /> Html</div>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img3} alt="" className=' w-[150px] h-[150px] mx-auto' /> Css</div>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img4} alt="" className=' w-[150px] h-[150px] mx-auto' />Js</div>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img5} alt="" className=' w-[150px] h-[150px] mx-auto' />React</div>
          </div>
          <div className='w-[70%] h-[300px]  flex items-center justify-around'>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img6} alt="" className=' w-[150px] h-[150px] mx-auto' /> Vite</div>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img7} alt="" className=' w-[150px] h-[150px] mx-auto' /> Django</div>
            <div className=' w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4'>
              <img src={img8} alt="" className=' w-[150px] h-[150px] mx-auto' /> Python</div>
          </div>
        </div>
        <div className='main   '>
          <img src={img9} width={1100} className='  -z-0 absolute left-[200px] right-0' alt="" />
          <div className='w-[950px] h-[630px] mx-auto     flex'>
            <div className=' h-full w-[300px] pl-[20px] z-10 flex flex-col  items-center justify-center gap-[200px] pt-[25px]'>
              <img src={img10} className='w-[200px] img mb-[100px] ml-[70px]' alt="" />
              <img src={img11} className='w-[200px] img ml-[70px]' alt="" />
            </div>
            <div className='p w-[500px] flex flex-col z-10 items-center '>
            <h1 className='hee '>ABOUT ME</h1>
              <p className='hello w-[300px] '>Hello again everyone! y.o., athlete-football player, I love creativity since childhood, I  I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                By trusting me, you will get the maximum return for your project, save your nerves and time.
                If you arvvide all my contacts below.</p>
            </div>
            <div className=' w-[300px ] flex justify-center items-center'>
              <img src={img12} className='z-10 img w-[200px] h-[300px]' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen  flex items-center justify-center'>
        <div className='w-[850px] h-[600px]  flex flex-col  items-center justify-between'>
          <h1 className='heee'>PORTFOLIO</h1>

          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide className=' b1 '>
              <div className="title " data-swiper-parallax="-300">
                Lover Food
              </div>

              <a href="https://t.me/Dasturchi_person" target='_blank' className="subtitle" data-swiper-parallax="-200">  <br /><br /><br /><br /><br /><br /> Subscribe</a>
              <div className="text" data-swiper-parallax="-100">
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide >
            <SwiperSlide className=' b2'>
              <h1 className="title  " data-swiper-parallax="-300">
                NFT Marketplase
              </h1>

              <a href="https://t.me/Dasturchi_person" target='_blank' className="subtitle" data-swiper-parallax="-200">Subscribe</a>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' b3'>
              <div className="title text-black relative bottom-5" data-swiper-parallax="-300">
                <br />  Rolling
              </div>
              <a href="https://t.me/Dasturchi_person" target='_blank' className=" relative left-[298px] subtitle text-black" data-swiper-parallax="-200">Subscribe</a>
              <div className=" relative left-[298px]  text" data-swiper-parallax="-100">
                <p className='text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default About
