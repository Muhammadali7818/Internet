import img1 from "/public/12.png";
import img2 from "/public/image2.png";
import img3 from "/public/image3.png";
import img4 from "/public/image4.png";
import img5 from "/public/image5.png";
import img6 from "/public/image6.png";
import img7 from "/public/image7.png";
import img8 from "/public/image8.png";
import img9 from "/public/image9.png";
import img10 from "/public/image10.png";
import img11 from "/public/image11.png";
import img12 from "/public/image12.png";
import "./Navbar";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/About.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import Footer from "./Footer";
import { useTranslation } from 'react-i18next'
function About() {
  const [lang, setlang] = useState("uz");
  const [t, i18n] = useTranslation();

  const handleChange = (e) => {
    console.log(e.target.value);
    setlang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem(e.target.value);
  };
  return (
    <div className="h-full ota mt-[50px]">
      <div className=" flex h-[579px]  git">
        <div className=" w-1/2  text-center git1">
          <h1 className="text-4xl w-[500px]  font-extrabold font-mono text-center pt-[20%] ml-[120px] git2">
            {t("hello")}
          </h1>
          <p className=" text-xl w-1/2  text-center m-auto pt-4 pb-8 git3 ">
            {t("lorem")}
          </p>
          <button className="btn btn-primary mb-32 git4">
            <a href="https://t.me/Dasturchi_person" target="_blank">
              {t("men_bilan")}
            </a>
          </button>
        </div>
        <div className=" w-1/2 h-full git5 ">
          <img src={img1} alt="" className="h-[700px]" />
        </div>
      </div>
      <div className="flex flex-col h-[1600px] pit ">
        <div className="text-3xl flex flex-col  items-center h-screen  w-full pit1">
          <div className=" w-[80%]  h-[300px] flex items-center justify-around gap-3 pit2">
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4 ">
              <img src={img2} alt="" className="w-[150px] h-[150px] mx-auto" />{" "}
              Html
            </div>
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img3} alt="" className="w-[150px] h-[150px] mx-auto" />{" "}
              Css
            </div>
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img4} alt="" className="w-[150px] h-[150px] mx-auto" />
              Js
            </div>
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img5} alt="" className="w-[150px] h-[150px] mx-auto" />
              React
            </div>
          </div>
          <div className="w-[60%] h-[300px]  flex items-center justify-around gap-3 pit3">
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img6} alt="" className="w-[150px] h-[150px] mx-auto" />{" "}
              Vite
            </div>
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img7} alt="" className="w-[150px] h-[150px] mx-auto" />{" "}
              Django
            </div>
            <div className=" pit4 w-[250px] h-[250px] border rounded-[25px] font-mono font-extrabold text-center flex flex-col items-center justify-center gap-4">
              <img src={img8} alt="" className="w-[150px] h-[150px] mx-auto" />{" "}
              Python
            </div>
          </div>
        </div>
        <div className="main text-white   hidden lg:flex">
          <img
            src={img9}
            width={1100}
            className="img9 -z-50  hidden lg:flex absolute "
            alt=""
          />
          <div className="div w-[950px] h-[630px] mx-auto  main1   flex">
            <div className=" h-full w-[300px] pl-[20px] flex flex-col main2 items-center justify-center gap-[200px] pt-[25px]">
              <img
                src={img10}
                className="w-[200px] img mb-[100px]
               ml-[70px]"
                alt=""
              />
              <img src={img11} className="w-[200px] img ml-[70px]" alt="" />
            </div>
            <div className="p w-[500px] main3 flex flex-col  items-center ">
              <h1 className="hee ">{t("About")}</h1>
              <p className="hello w-[300px] ">
                {t("again")}
              </p>
            </div>
            <div className=" w-[300px ] main4 flex justify-center items-center">
              <img
                src={img12}
                className="z-10 img w-[200px] h-[300px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen hidden lg:flex flex items-center justify-center ">
        <div className="w-[850px] h-[600px]  flex flex-col  items-center justify-between">
          <h1 className="heee">{t("port")}</h1>

          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
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
            <SwiperSlide className=" b1 ">
              <div className="title " data-swiper-parallax="-300">
                {t("Lover")}
              </div>

              <a
                href="https://t.me/Dasturchi_person"
                target="_blank"
                className="subtitle  hover:underline hover:text-blue-600"
                data-swiper-parallax="-200"
              >
                {" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> {t("Sub")}
              </a>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" b2">
              <h1 className="title  " data-swiper-parallax="-300">
                {t("NFT")}
              </h1>

              <a
                href="https://t.me/Dasturchi_person"
                target="_blank"
                className="subtitle"
                data-swiper-parallax="-200"
              >
                {t("Sub")}
              </a>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" b3">
              <div
                className="title text-black relative bottom-5"
                data-swiper-parallax="-300"
              >
                <br /> Rolling
              </div>
              <a
                href="https://t.me/Dasturchi_person"
                target="_blank"
                className=" relative left-[298px] subtitle text-black"
                data-swiper-parallax="-200"
              >
                {t("Sub")}
              </a>
              <div
                className=" relative left-[298px]  text"
                data-swiper-parallax="-100"
              >
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default About;
