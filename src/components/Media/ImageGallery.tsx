import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "training_media/BAAL_2015_WINNER.jpg",
    title: "2014 - 2015 BAAL - E Winner Elshaday with Ambassador David Usher",
  },
  {
    src: "training_media/BAAL_2015_WINNERS.jpg",
    title: "2014 - 2015 BAAL - E Winners, with the former President of FDRE",
  },
  {
    src: "training_media/2013-2014 baal winnres.jpg",
    title: "Winners of 2013 - 2014 BAAL Ethiopia Award",
  },
  {
    src: "training_media/mr. jhon speaking.jpg",
    title: "Mr. Scott Walter Making a Remark, 2013 - 2014 BAAL Ceremony",
  },
  {
    src: "training_media/ato tesfaye speaking.jpg",
    title: "Ato Tesfaye Delivering a speech, 2013-2014 BAAL Ceremony",
  },
  {
    src: "training_media/new_all_award_2015.jpg",
    title: "Winners of 2014 - 2015 BAAL Ethiopia Award",
  },
];

const compImage = [
  { src: "assets/codeethiopia_image1.png", title: "A session with trainers" },
  {
    src: "assets/codeethiopia_image2.png",
    title: "An expo-tourism about our CODE",
  },
  { src: "assets/codeethiopia_image3.png", title: "attendants on the session" },
  {
    src: "assets/codeethiopia_image4.png",
    title: "Trains accepting the certificates by completing the program",
  },
  {
    src: "assets/codeethiopia_image5.png",
    title: "Childrens study on their shool",
  },
  {
    src: "training_media/P_Creativewriters.jpg",
    title: "Participants of Creative Writers Workshop, 2014",
  },
  {
    src: "training_media/supp_bookworkshop.jpg",
    title: "Workshop on Supplementary Book Development, 2014",
  },
  {
    src: "assets/codeethiopia_image5.png",
    title: "students learning on thier classroom that we built at",
  },
];

const ImageGallery = () => {
  const [awardVisible, setAwardVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const awardRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (awardRef.current && companyRef.current) {
        const awardTop = awardRef.current.getBoundingClientRect().top;
        const companyTop = companyRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (awardTop < windowHeight * 0.8) setAwardVisible(true);
        if (companyTop < windowHeight * 0.8) setCompanyVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className='award-section' ref={awardRef}>
        <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 pt-12 pb-4 font-semibold'>
          Award Stories
        </h1>
        <div className='grid base:gap-4 md:gap-8 p-4 md:grid-cols-2 lg:grid-cols-3'>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={awardVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5, duration: 0.9 }}
              className='rounded-lg overflow-hidden shadow-lg'
            >
              <img
                src={image.src}
                alt={image.title}
                className='w-full h-64 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-center'>{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='award-section' ref={companyRef}>
        <h1 className='text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 pt-12 pb-4 font-semibold'>
          Company Stories
        </h1>
        <div className='grid base:gap-4 md:gap-8 p-4 md:grid-cols-2 lg:grid-cols-3'>
          {compImage.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={companyVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5, duration: 0.9 }}
              className='rounded-lg overflow-hidden shadow-lg'
            >
              <img
                src={image.src}
                alt={image.title}
                className='w-full h-64 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-center'>{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
