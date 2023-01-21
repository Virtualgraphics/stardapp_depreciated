import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-yellow-100" >
              Sky Godz Stardapp
              <br className="hidden md:block" />
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