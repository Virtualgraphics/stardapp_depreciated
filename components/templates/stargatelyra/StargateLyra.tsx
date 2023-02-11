import Link from 'next/link'
import Image from 'next/image'

const StargateLyra = () => {
 
    return (
        <div className="justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        
            <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-3">
            SKY GODZ: Stargate Lyra
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
            Use your NFT Alien Character in a top-down single player RPG directly in your browser and collect tokens while powering up your Stargate in the DeFi Game.
            </p>
            </div>



<div className='container bg-blue-700 p-6 rounded-3xl mb-8'>
  <div className='grid grid-cols-3 gap-4 m-auto '>
<div className=' bg-blue-500 rounded-2xl'>1</div>
<div className=' bg-blue-500 rounded-2xl'>2</div>
<div className=' bg-blue-500 rounded-2xl'>3</div>
 </div>

 <div className='grid grid-row-2 gap-4 my-4 '>
<div className=' bg-blue-500 rounded-2xl justify-center'>
  <p className="text-center font-Josefin text-lg font-semibold">
  Your Available Energy Sources</p>
  </div>
<div className=' bg-blue-500 rounded-2xl'>2</div>
</div>
<div>
  <h1 className="text-center font-Josefin text-lg font-semibold">Cosmic Energy Power Startion</h1>
</div>

<div className='grid grid-cols-5 gap-4 m-auto '>
<div className=' bg-blue-500 rounded-2xl'>1</div>
<div className=' bg-blue-500 rounded-2xl'>2</div>
<div className=' bg-blue-500 rounded-2xl'>3</div>
<div className=' bg-blue-500 rounded-2xl'>4</div>
<div className=' bg-blue-500 rounded-2xl'>5</div>
 </div>


</div>




<div className="flex justify-center">
<p className='text-white text-lg'>Technical details, white paper and tokenomics are coming soon and will be published on our website.</p>
</div>
 </div>

      );
    };

  
  
  export default StargateLyra;