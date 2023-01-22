import Link from 'next/link'

const Intro = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="text-yellow-100 mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
            New History
          </p>
          <p className="text-base text-yellow-100 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://www.skygodz.com/wp-content/uploads/2023/01/app_frontIMAGE_game.jpg"
              alt=""
            />
            <h5 className=" text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARGAZER GAME
            </h5>
            <p className="text-white">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Find out more
</button>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://www.skygodz.com/wp-content/uploads/2023/01/app_frontIMAGE_anime.jpg"
              alt=""
            />
            <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
             STAR VISITORS ANIME
            </h5>
            <p className="text-white">
              be sure to note that in my log. Smooth as an androids bottom,
              eh, Data? When has justice ever been as simple as a rule book?
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
 Coming soon
</button>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://www.skygodz.com/wp-content/uploads/2023/01/app_frontIMAGE_webtoon.jpg"
              alt=""
            />
            <h5 className="text-yellow-100 mb-2 text-xl font-bold leading-none sm:text-2xl">
              STARSEED WEBTOON
            </h5>
            <p className="text-white">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Coming soon
</button>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;