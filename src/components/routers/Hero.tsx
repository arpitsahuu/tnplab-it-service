import React from 'react'
import GetStartedButton from '../ui/MainButton';
import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline/next';

const Hero = () => {
  const SplineComponet = dynamic(
    () => import('@/components/ui/Spline'), {
      ssr: false, 
    loading: () => <h3 className='text-gray-400 '>Loading Logo ...</h3>,
  });

  return (
    <div className='w-full flex lg:h-[85vh] md:h-[130vh] sm:h-[120vh]  bg-black flex-col lg:flex-row  '>
      <div className='lg:w-[45%] lg:h-full sm:h-[36%] h-[350px]    lg:ps-14 lg:pt-24 flex items-center lg:pb-72  '>
        <div className="flex flex-col items-center justify-between lg:flex-row  h-full w-full lg:mt-16 px-3">
          <div className="mb-10 max-w-2xl text-center lg:mb-0 lg:text-left">
            <div className="sm:mb-10 lg:mt-28 mt-14 mb-24 max-w-2xl text-center lg:mb-0 lg:text-left">
              <h1 className="mb-6 sm:text-5xl text-4xl font-bold leading-tight tracking-tighter md:text-6xl text-white">
                Launch Your Ideas <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Into Digital Reality
                </span>
              </h1>
              <p className="mb-8 sm:text-xl text-base text-gray-400">
                Empower your vision with cutting-edge technology. Experience unparalleled performance, ironclad security, and stellar support.
              </p>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 m-auto">
                <GetStartedButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[55%] w-full lg:h-full md:h-[500px] h-[320px]   flex justify-center items-center ">
        <div className="relative w-[500px] h-[550px] sm: flex items-center justify-center overflow-hidden  md:overflow-visible " >
        
          <SplineComponet />
          <main className='relative '>
            {/* <Spline
              scene="https://prod.spline.design/AytvQmZ1V7RFdW2j/scene.splinecode"
              className='w-[750px] h-[700px] lg:scale-[0.80] xl:scale-[0.95] md:scale-[0.70] sm:scale-[0.35] scale-[0.30]  '
            /> */}
            {/* <Spline className='w-[750px] h-[700px] lg:scale-[0.80] xl:scale-[0.95] md:scale-[0.70] sm:scale-[0.35] scale-[0.30]  '
              scene="https://prod.spline.design/AytvQmZ1V7RFdW2j/scene.splinecode"
            /> */}
            <div className=' xl:h-14 lg:h-10 xl:w-[200px] lg:w-[140px] lg:right-14 lg:bottom-[-200px] md:bottom-[-185px] md:right-20 bg-black absolute xl:bottom-[-360px] xl:right-[-70px] z-10   bottom-[-160px] right-20 h-10 w-[100px]'></div>
            {/* <div className=' lg:w-0 lg:h-0 z-10 bg-green-500 absolute w-full h-full top-0 left-0'></div> */}
          </main>
            <div className=' bg-transparent absolute top-28 bottom-0 h-[90%] w-full sm:h-1 sm:w-1 '></div>



        </div>
      </div>
      {/* <Spline
        scene="https://prod.spline.design/KOmf1b45kWJiWFez/scene.splinecode" 
      /> */}
      {/* <Spline
        scene="https://prod.spline.design/KOmf1b45kWJiWFez/scene.splinecode" 
        width={2520}
        height={1080}
      /> */}
      {/* <div className='relative w-full  '>
          <div className='absolute top-0 left-0 w-[98vw] h-screen'>
            <Spline
              scene="https://prod.spline.design/s-axs7hRflig4Q3G/scene.splinecode"
            />
            <Spline
              scene="https://prod.spline.design/s-axs7hRflig4Q3G/scene.splinecode"
            />

            
            

          </div>
          <div className=' relative left-0 top-[65vh]  w-full h-full  flex  '>

            <div className='w-[50%] '>
              <h1 className=' text-5xl text-white'>Mastering Innovation, Elevating Businesses</h1>
              <h3 className=' text-xl text-white'>Unlock the Power of Innovation with TNP Labs</h3>
            </div>
            <div className='w-1/2 h-full'>

            </div>
          </div>

        </div> */}
    </div>
  )
}

export default Hero