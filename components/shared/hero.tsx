import React from 'react';
import Button from './button';
import Disnap from '../icons/disnep';
import Samsung from '../icons/samsung';
import Nike from '../icons/nike';
import Apple from '../icons/apple';
import Lg from '../icons/lg';
import Sony from '../icons/sony';

const Hero = () => {
    return (
    <section className="bg-white py-8 antialiased md:py-16">
    <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
      <div className="content-center justify-self-start md:col-span-7 md:text-start">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
        <p className="max-w-2xl text-gray-500  md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Don't Wait - Limited Stock at Unbeatable Prices!</p>
        <Button text='Shop Now'/>
      </div>
      <div className="hidden md:col-span-5 md:mt-0 md:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" />
      </div>
    </div>
    <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6 px-4">
      <span className="flex items-center md:justify-center">
        <Disnap className="h-10 hover:text-gray-900"/>
      </span>
      <span className="flex items-center md:justify-center">
        <Samsung className="h-8 hover:text-gray-900"/>
      </span>
      <span className="flex items-center md:justify-center">
        <Nike className="h-8 hover:text-gray-900"/>
      </span>
      <span className="flex items-center md:justify-center">
        <Apple className="h-8 hover:text-gray-900 "/>
      </span>
      <span className="flex items-center md:justify-center">
 <Lg className="h-8 hover:text-gray-900 "/>
      </span>
      <span className="flex items-center md:justify-center">
        <Sony className="h-8 hover:text-gray-900 "/>
      </span>
    </div>
  </section>
    );
};

export default Hero;