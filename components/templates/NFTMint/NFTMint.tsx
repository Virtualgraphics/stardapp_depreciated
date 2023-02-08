
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'


const NFTMint = () => {
    

  return (
    <div className="justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
      

        <div className="m-auto w-96 py-0">
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
        <p className="text-base text-white lg:text-xl md:text-lg mb-6 sm:px-4 py-5 font-Proza">
        Use your NFT Alien Character in a top-down single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
        </p>
      </div>

<div className='grid grid-rows-2 grid-flow-col gap-12  '>

  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>


  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/vega.jpg"
              alt="Lotus"
              width={750}
              height={750}
            />
          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">LOTUS Token</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Claim LOTUS Tokens</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>
  
  </div>

  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/teka.jpg"
              alt="Feline"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">LOTUS Token</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Claim LOTUS Tokens</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>
  
  

  </div>


  <div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/1.png"
              alt="Teka"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">LOTUS Token</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Claim LOTUS Tokens</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>

  </div>

<div className='bg-indigo-900/20 drop-shadow-lg w-96 rounded-2xl border-blue-100 p-8'>

  <Image
              className=" rounded-2xl shadow-3xl border-white mb-6"
              src="/assets/mu.jpg"
              alt="Mu"
              width={750}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-xl flex items-center justify-center">LOTUS Token</h1>
          <h2 className="text-white text-md pt-2 pb-4 flex items-center justify-center">Claim LOTUS Tokens</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded m-auto flex items-center justify-center">
            Coming soon</button>


  </div>
  



</div>



</div>

  );
};


export default NFTMint;