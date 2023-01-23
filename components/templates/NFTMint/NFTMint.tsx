
import { FC, useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'


const NFTMint = () => {
    

  return (
    <div className="justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        

          <div className="m-auto w-96 ">

          <Image
                className="w-full lg:h-96 sm:h-96"
                src="/assets/star_divider.svg"
                alt="Star Divider"
                width={10}
                height={10}
              />
          </div>
    
        <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
        SKY GODZ: Stargazer Games
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza">
        Use your NFT Alien Character in a top-down single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
        </p>
       
      </div>


</div>

  );
};


export default NFTMint;