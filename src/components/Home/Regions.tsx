import { FaHandsHelping } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Regions = () => {
  return (
    <>
      <div className='flex justify-center items-center py-20'>
        <div className='flex base:flex-col-reverse lg:flex-row'>
          <div className='max-h-screen'>
            <div className='bg-blue-200 w-32 h-[148%] relative -mt-20 z-20 ml-96 base:hidden lg:block'></div>
            <div className='mx-auto h-80 w-96'>
              <div className="bg-[url('/assets/ethiopia-01.png')] bg-contain bg-no-repeat flex flex-col lg:flex-row items-center justify-center  px-6 relative base:h-48 sm:h-72 lg:h-96 mt-20 mx-10 lg:-top-[76vh] z-30"></div>
            </div>
          </div>
          <div className='py-1 base:px-8 px-20'>
            <h1 className='mt-6 text-gray-600 text-bold text-xl xs:text-xl sm:text-2xl lg:text-3xl py-10'>
              Regions that we work on
            </h1>
            <div className='flex flex-col gap-y-6'>
              <div className='flex flex-row gap-x-4'>
                <MdLocationPin size={36} color='#43a' />
                <h3 className='text-gray-800 text-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>
                  we are reachable across{" "}
                  <span className='text-[#1e5bbc] text-bold'>9</span> Regions of
                  Ethiopia
                </h3>
              </div>
              <div className='flex flex-row gap-x-4'>
                <MdLocationPin size={36} color='#43a' />
                <h3 className='text-gray-800 text-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>
                  on <span className='text-[#1e5bbc] text-bold'>2</span>{" "}
                  administrative cities.
                </h3>
              </div>
              <div className='flex flex-row base:gap-x-4 gap-x-4'>
                <FaHandsHelping
                  size={36}
                  color='#43a'
                  className='base:mt-6 mt-20'
                />
                <h3 className='text-gray-800 text-semibold text-md sm:text-lg md:text-xl lg:text-2xl base:mt-6 mt-20'>
                  Help Us to work and Cover all Ethiopian regions.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regions;
