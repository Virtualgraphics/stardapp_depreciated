
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
        SKY GODZ: Starseed Webtoons
        </h2>
        <hr className="w-full  border-yellow-200" />
        <p className="text-base text-white lg:text-xl md:text-lg sm:px-4 py-5 font-Proza">
        Read a graphic novel style webtoon and participate by delegating tokens to the SKY GODZ DAO.
        </p>
      </div>
<div className='my-8'>
      <WebtoonPlayer/>
      </div>
      <p className="text-base text-white lg:text-lg md:text-lg sm:px-4 py-5 font-Proza flex items-center justify-center">
        Read STARSEED: Episode 1 now and cast your vote:
        </p>

        <div className='bg-indigo-500/20  m-auto p-6 w-8/12 rounded-3xl'>

<div className='bg-blue-200  justify-center p-3 rounded-2xl font-semibold text-center'>

<p>After the shard of Lyra has been shattered, are the Dracos gonna take over the universe?</p>

</div>

<div>

  <p className='text-white text-sm text-center p-4'>Delegate your tokens and cast your vote below:</p>
</div>


<div className='grid grid-cols-3 gap-12 m-auto w-8/12 '>

<div><button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Agree</button></div>
<div><button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Disagree</button></div>
<div><button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Abstain</button></div>

            </div>

        </div>



<div className=' flex items-center justify-center m-auto py-12'>

<p className='text-yellow-200 font-semibold text-center text-xl'>Read more episodes, cast your vote and get rewards:</p></div>

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
<p className="text-sm text-center  text-white mb-4 font-semibold">After the Lyra shard has been shattered, millions of new races have been created all across the universe.</p>
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
<p className="text-sm text-center font-semibold text-white mb-4">The Ciakar dragons from Alpha Draconis are quickly spreading fear and destruction across the galaxies.</p>
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
<p className="text-sm text-center font-semibold text-white mb-4">The Arcturians are creating a very high-density lightship fleet to combat the expanding might of the Orion Empire.</p>
<div className="flex items-center justify-center m-auto">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold px-4 rounded mt-1">
            Coming soon</button></div>
</div>
</div>
      </div>








  );
};


export default Webtoon;