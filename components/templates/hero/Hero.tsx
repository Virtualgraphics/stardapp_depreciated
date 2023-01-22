import Link from 'next/link'
import Image from 'next/image'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


const Hero = () => {
    return (
      <div className="bg-indigo-500/20 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full mt-none lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 rounded-3xl mt-10" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-yellow-100 font-Cinzel" >
              SKY GODZ STARDAPP
              <br className="hidden md:block" /> </h1>

              <h5 className="mb-4 text-2xl font-extrabold leading-none text-yellow-100 font-Cinzel" >
              The powerful Story of the Universe
              
            </h5>
            <p className="mb-6 text-white">
            SKY GODZ is an anime-style, science fiction transmedia property 
            with a decentralized NFT Metaverse game, as well as an anime and 
            graphic novel series deployed on the blockchain. The game is using
            cutting edge blockchain technology in combination with a story-driven, 
            multi-player RPG Metaverse, elements of DeFi and visual novels.
            </p>
            <hr className="mb-5 border-gray-300" />
          
<div className='grid gap-4 grid-cols-2 align-middle self-auto mt-10'>
         
<div className='w-40 '>
           <ConnectWallet/> 
</div>
<Link href="/games">
           <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Mint NFT</button>
            </Link>


           </div>

           </div>


          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-3xl sm:h-96"
              src="https://www.skygodz.com/wp-content/uploads/2023/01/app_frontIMAGE.jpg"
              alt=""
            />


          </div>
        </div>
      </div>
    );
  };

  export default Hero;