
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'
import React from 'react'

import ReactPlayer from 'react-player/youtube'


const Anime = () => {
    

  return (
    <div className="justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
      

        <div className="m-auto w-96 py-2">
        <Image
        className="m-auto w-96 py-2"
        src="/assets/star_divider.svg"
        alt="Star Divider"
        width={1260}
        height={750}
      />
        </div>
    
        <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
        SKY GODZ: Stargazer Games
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
        Use your NFT Alien Character in a top-down single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
        </p>
       
      </div>
      
    <div className="flex items-center justify-center  max-w-3xl">
      <div className='player-wrapper'>

<ReactPlayer className='react-player '
          url='https://youtu.be/xzZVB0qB38I'/>

<p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
        STAR VISITORS: Episode 1
        </p>

        <div className='bg-white h-10'></div>
        <p className='text-white font-semibold text-sm'>Continue watching and play with more episodes</p>

      <div className="grid grid-cols-3 gap-4 h-10">
<div className=' bg-yellow-200 p-4 rounded-lg'>
<h1>STAR VISITORS EP 2</h1>
<p>Enki, Enlil and Nin arrive at the Maputo base and Sargon is not happy about the visitors.</p>

</div>
<div className=' bg-yellow-200 p-4 rounded-lg'>

<h1>STAR VISITORS EP 3</h1>
<p>The siblings get a tour of the Maputo base and a first impression of the human hyybrid program.</p>
</div>

<div className=' bg-yellow-200 p-4 rounded-lg'>

<h1>STAR VISITORS EP 4</h1>
<p>At dinner with the staff a first fight about the direction of the hybrid program erupts and Samana plots the departure of the siblings.</p>

</div>

      </div>

    </div>
   
    </div>




</div>






  );
};


export default Anime;