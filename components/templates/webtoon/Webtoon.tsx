
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'
import WebtoonPlayer from './WebtoonPlayer';



const Webtoon = () => {
    

  return (
    <div className="justify-center px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        SKY GODZ: Stargazer Webtoons
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
        Use your NFT Alien Character in a top-down single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
        </p>
      </div>
<div className='my-8'>
      <WebtoonPlayer/>
      </div>
      <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza flex items-center justify-center">
        STARSEED: Episode 1
        </p>
      <div className='bg-white h-40 flex items-center justify-center m-auto py-1 w-7/12'></div>

<div className='h-32 flex items-center justify-center m-auto py-2'>

<p className='text-yellow-200 font-semibold text-center text-xl'>Continue watching and play with more episodes</p></div>

<div className="grid grid-cols-3 gap-8 w-8/12 m-auto">

<div className=' bg-blue-900 p-5 rounded-2xl'>
<Image
              className="rounded-xl"
              src="/assets/we_02.jpg"
              alt="episode 2"
              width={640}
              height={480}
            />
  
<h1 className="text-md text-center font-semibold text-yellow-200 pt-4 pb-2">STARSEED EP 2</h1>
<p className="text-sm text-center font-normal text-white mb-4">Enki, Enlil and Nin arrive at the Maputo base and Sargon is not happy about the visitors.</p>
<div className="flex items-center justify-center m-auto">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded mt-1">
            Coming soon</button></div>
</div>


<div className=' bg-blue-900 p-5 rounded-2xl'>
<Image
              className="rounded-xl"
              src="/assets/we_03.jpg"
              alt="episode 3"
              width={640}
              height={480}
            />

<h1 className="text-md text-center font-semibold text-yellow-200 pt-4 pb-2">STARSEED EP 3</h1>
<p className="text-sm text-center font-normal text-white mb-4">The siblings get a tour of the Maputo base and a first impression of the human hyybrid program.</p>
<div className="flex items-center justify-center m-auto">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded mt-1">
            Coming soon</button></div>

</div>

<div className=' bg-blue-900 p-5 rounded-2xl'>

<Image
              className="rounded-xl"
              src="/assets/we_04.jpg"
              alt="episode 4"
              width={640}
              height={480}
            />

<h1 className="text-md text-center font-semibold text-yellow-200 pt-4 pb-2">STARSEED EP 4</h1>
<p className="text-sm text-center font-normal text-white mb-4">At dinner with the staff a first fight about the direction of the hybrid program erupts and Samana plots revenge.</p>
<div className="flex items-center justify-center m-auto">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded mt-1">
            Coming soon</button></div>
</div>
</div>
      </div>








  );
};


export default Webtoon;