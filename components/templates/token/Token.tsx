import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";



const Token = () => {
  const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
  const [amountToClaim, setAmountToClaim] = useState("");

    

      return (
        <div className="justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            
    
              <div className="m-auto w-96 py-5">
              <img
            
              src="https://www.skygodz.com/wp-content/uploads/2022/12/star_divider.svg"
              alt="stars"
            />
              </div>
        
            <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
            SKY GODZ: Tokens
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-2xl md:text-lg sm:px-4 py-5 font-Proza">
           Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games. 
            </p>

<div className="grid grid-cols-2 gap-20 place-content-stretch w-full h-96">
<div className="bg-indigo-900  rounded-2xl  " >
<div className="m-auto w-64 rounded-full mt-5 ">
              <img
            
              src="https://www.skygodz.com/wp-content/uploads/2023/01/token_lotus750.jpg"
              alt="lotus"
            />

          <h1 className="text-white text-2xl">LOTUS Token</h1>
          <h2 className="text-white text-lg">Claim your LOTUS Tokens</h2>
              </div>
              

</div>
<div className="bg-indigo-900  rounded-2xl">
<div className="m-auto w-64 rounded-full mt-5">
              <img 
            
              src="https://www.skygodz.com/wp-content/uploads/2023/01/token_stardust750.jpg"
              alt="lotus"
            />

<h1 className="text-white text-2xl">STARDUST Token</h1>
<h2 className="text-white text-lg">Claim your STARDUST Tokens</h2>
              </div>

</div>

</div>
</div>

          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 mt-20 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
            <p className="text-sm text-gray-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-gray-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-gray-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        
      </div>


 </div>

      );
    };

 
  export default Token;