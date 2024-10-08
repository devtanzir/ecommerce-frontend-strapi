import React from 'react';
import Button from './button';
import Link from 'next/link';

const Hero = () => {
    return (
    <section className="bg-white py-8 antialiased md:py-16">
    <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
      <div className="content-center justify-self-start md:col-span-7 md:text-start">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
        <p className="max-w-2xl text-gray-500  md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Don't Wait - Limited Stock at Unbeatable Prices!</p>
        <Link href={"/products"}>
        <Button text='Shop Now'/>
        </Link>
      </div>
      <div className="hidden md:col-span-5 md:mt-0 md:flex">
        <img src="https://static.vecteezy.com/system/resources/previews/005/638/077/large_2x/illustration-isometric-concept-shopping-note-in-e-commerce-store-free-vector.jpg" alt="shopping illustration" />
      </div>
    </div>
  </section>
    );
};

export default Hero;