
import Brands from "@/components/Brands/Brands";
import Header from "@/components/Header/Header";
import SButtons from "@/components/SButtons/SButtons";
import FeaturesSection from "@/components/Sections/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import VideoCard from "@/components/VideoCard/VideoCard";
import TestinomialsSection from "@/components/Sections/TestinomialsSection/TestinomialsSection";
import Image from "next/image";
import ServiceSection from "@/components/Sections/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <div id="home-screen">
      <Header/>
      <HeroSection />
      <VideoCard />
      <Brands />
      <SButtons  />
      <FeaturesSection />
      <ServiceSection />
      <TestinomialsSection />
      <ContactSection />
      <AdTaskSection />
    </div>
  );
}

import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex w-full mt-16 md:mt-32 flex-col justify-center items-center relative px-4 md:px-8">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"></div>
      
      <div className="flex justify-center text-center z-10">
        <button className="relative flex border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-4 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-full">
          <div className="w-auto z-10 px-4 py-2 rounded-[inherit] dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
            <span>Contact us</span>
          </div>
          <div className="absolute inset-0 overflow-hidden z-0 rounded-[inherit]" style={{ filter: 'blur(2px)', background: 'radial-gradient(27.5% 55.0% at 74.3% 24.8%, rgb(128, 170, 255) 0%, rgba(50, 117, 248, 0) 100%)' }}></div>
          <div className="bg-black absolute z-1 inset-[2px] rounded-[100px]"></div>
        </button>
      </div>
      
      <div className="w-full md:w-[80%] mt-10 mb-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-evenly">
        <div className="flex flex-col text-center md:text-left">
          <p className="text-3xl md:text-4xl font-light">Ask whatever you have</p>
          <p className="text-3xl md:text-4xl bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight">In your Mind now</p>
          <p className="font-light text-sm mt-8">Whether you have questions or are ready to discuss your business, we're here to help. Reach out today!</p>
          
          <div className="mt-8 flex flex-row gap-3 items-center">
            📧 <p className="font-light text-sm">contact@adtask.ai</p>
          </div>
          <div className="mt-8 flex flex-row gap-3 items-center">
            📞 <p className="font-light text-sm">(969) 819 8061</p>
          </div>
          <div className="mt-8 flex flex-row gap-3 items-center">
            📍 <p className="font-light text-sm">San Francisco Bay Area</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex flex-col">
            <p className="font-light text-sm">Name</p>
            <input className="w-full text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-sm">Email</p>
            <input className="w-full text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]" />
          </div>
          <div className="flex flex-col">
            <p className="font-light text-sm">Message</p>
            <textarea className="w-full text-sm pl-3 bg-transparent border-[1px] mt-2 h-[100px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]" />
          </div>
          <button className="group relative w-[100px] border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[#5B698B] to-[#414040] px-2 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]">
            <span className="relative z-10">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const AdTaskSection = () => {
  return (
    <div className="flex w-full pt-16 md:pt-32 flex-col justify-center items-center relative px-4 md:px-8">
      <h1
        className="text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-30"
      >
        <span className="text-[#d0d2d8] font-light relative flex space-x-1">
          {['a', 'd', 'T', 'a', 's', 'k', '.', 'a', 'i'].map((char, index) => (
            <span
              key={index}
              className={`inline-block ${index >= 2 && index <= 5 ? 'font-semibold' : ''}`}
              style={{ textShadow: 'rgba(142, 146, 156, 0) 0px 0px 0px', color: 'white' }}
            >
              {char}
            </span>
          ))}
        </span>
      </h1>

      <div className="w-full md:w-[70%] flex flex-col mt-10 md:mt-16 items-center justify-center relative z-10">
        <p className="text-3xl md:text-5xl text-center">Are you ready to boost</p>
        <p className="text-3xl md:text-5xl mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent leading-tight text-center">
          your Digital Presence?
        </p>
      </div>

      <div className="flex mt-10 md:mt-14 flex-col gap-6 md:gap-8 items-center w-full justify-center">
        <button className="group relative font-light overflow-hidden border-2 border-[#5B698B] rounded-full bg-gradient-to-b from-black to-gray-700 h-[40px] md:h-[43px] w-[160px] md:w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(0,0,0,0.30)]">
          <span className="relative z-10">Start Free Trial</span>
        </button>
        <button className="group relative border-2 font-light border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[#5B698B] to-[#414040] h-[40px] md:h-[43px] w-[160px] md:w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]">
          <span className="relative z-10">Schedule a Call</span>
        </button>
      </div>

      <div className="border-t-[#333B4F] w-[90%] border-[1px] mt-8 md:mt-10"></div>

      <div className="w-full flex justify-center items-center py-8 md:py-10">
        <div className="flex flex-col md:flex-row w-[90%] justify-evenly gap-6 md:gap-0">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-[#C5CDE3] text-5xl md:text-7xl font-light text-center md:text-left">
              ad<span className="font-bold">Task</span>.ai
            </p>
            <div className="flex flex-row gap-3 items-center">
              📧 <p className="font-light text-[#C5CDE3] underline text-sm">contact@adtask.ai</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              📍 <p className="font-light text-[#C5CDE3] text-sm">San Francisco Bay Area</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[#C5CDE3] text-xl md:text-2xl font-bold">Utilities</p>
            <div className="flex flex-col text-gray-400 gap-1 items-center md:items-start">
              {['Home', 'Product', 'Tools', 'Contact Us'].map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[#C5CDE3] text-xl md:text-2xl font-bold">Socials</p>
            <div className="flex flex-col text-gray-400 gap-1 items-center md:items-start">
              {['X', 'LinkedIn', 'Instagram', 'Facebook'].map((social, index) => (
                <p key={index}>{social}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


