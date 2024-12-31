import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Sample images for the slider
const sliderImages = [
  { src: "training_media/mainimage_warehouse_man.jpg", alt: "warehouse" },
  {
    src: "training_media/mainimage_carryingbooks.jpg",
    alt: "Distributing Books",
  },
];

const SliderLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="pt-8">
      <section className='grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-10 p-4'>
        {/* Left side: Text Content */}
        <div className='overflow-y-auto'>
          <h1 className='text-2xl font-semibold mb-4'>Library Program</h1>
          <ul className='list-disc list-inside space-y-4'>
            <li>
              Established 97 community libraries across Ethiopia, providing
              resources for students and teachers.
            </li>
            <li>
              Equipped libraries with furniture, books, educational materials,
              and offered training in literacy and library science.
            </li>
            <li>
              Established two community libraries in Addis Ababa, offering
              regular reading services to local children and teenagers.
            </li>
            <li>
              Expanded library services to rural areas with trained reading
              facilitators, reaching communities lacking library access.
            </li>
          </ul>
        </div>

        {/* Right side: Fixed Image Slider */}
        <div className='flex items-center justify-center'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='w-[400px] h-[300px] rounded-md shadow-lg bg-cover bg-center'
            style={{
              backgroundImage: `url(${sliderImages[currentIndex].src})`,
            }}
          >
            <div className='text-white bg-black bg-opacity-50 p-2 rounded'>
              {sliderImages[currentIndex].alt}
            </div>
          </motion.div>
        </div>
      </section>
      <section className='flex justify-center items-center py-16'>
        <img src='./assets/Libraries_map_Large_476x252.jpg' alt='Libraries map' className="w-2/3 "/>
      </section>
      <section className='flex flex-col-reverse lg:grid lg:grid-cols-[450px,1fr] gap-10 p-4 mt-16'>
        {/* Left side: Text Content */}
        <div className='flex items-center justify-center'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='w-[400px] h-[300px] rounded-md shadow-lg bg-cover bg-center'
            style={{
              backgroundImage: `url(${sliderImages[currentIndex].src})`,
            }}
          >
            <div className='text-white bg-black bg-opacity-50 p-2 rounded'>
              {sliderImages[currentIndex].alt}
            </div>
          </motion.div>
        </div>

        {/* Right side: Fixed Image Slider */}
        <div className='overflow-y-auto'>
          <h1 className='text-2xl font-semibold mb-4'>
            Book Distribution Program
          </h1>
          <ul className='list-disc list-inside space-y-4'>
            <li>
              Distributed over 2,376,800 foreign and local language books to
              more than 1,000 schools and children’s libraries.
            </li>
            <li>
              Partnered with Open Hearts Big Dreams (OHBD) in Canada to publish
              Ready-Set-Go books in Ethiopian mother tongues.
            </li>
            <li>
              Developed e-books and a Family Literacy Project through a
              collaboration with EIFL-PLIP, piloted at three community library
              sites.
            </li>
          </ul>
        </div>
      </section>
      </div>
    </>
  );
};

export default SliderLayout;
