import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/About/Testimonials.css";
import { Link } from "react-router-dom";

const TrainingPage = () => {
  const photos: string[] = [
    "/assets/codeethiopia_image1.png",
    "/assets/codeethiopia_image2.png",
    "/assets/codeethiopia_image3.png",
    "/assets/codeethiopia_image4.png",
    "/assets/codeethiopia_image5.png",
    "/assets/codeethiopia_image6.png",
    "/assets/codeethiopia_image7.png",
    "/assets/codeethiopia_image8.png",
    "/assets/codeethiopia_image9.png",
    "/assets/codeethiopia_image10.png",
    "/assets/codeethiopia_image11.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* hero container */}
      <div className="bg-[url('./assets/img_b.png')] bg-no-repeat bg-cover flex w-fill h-80  text-[#0f172a] mb-4 justify-center items-center">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          {" "}
          Our Training Program
        </h1>
      </div>
      <div className='bg-gray-50'>
        {/* Title Section */}
        <div className='flex items-center justify-center'>
          <h1 className='text-gray-600 text-5xl font-bold text-center '>
            CODE-Ethiopia Completes Third Year of Teacher and Librarian Training
            Program
          </h1>
        </div>

        {/* Intro Section */}
        <section className='max-w-6xl mx-auto py-12 px-6 text-center'>
          <h2 className='text-4xl font-semibold text-gray-800 mb-6'>
            Code Ehiopia’s Training Program
          </h2>
          <p className='text-lg text-gray-600 mb-6'>
            CODE-Ethiopia recently completed a targeted training program for
            teachers and librarians, designed to equip them with essential
            skills in library management, read-aloud techniques, and literacy
            advocacy, enhancing Ethiopia’s educational landscape.
          </p>
          <p className='text-lg text-gray-600 mb-6'>
            As a leader in literacy development, CODE-Ethiopia collaborates with
            schools and institutions to empower librarians in creating
            welcoming, functional libraries. Our programs are tailored to make a
            lasting impact by transforming libraries into dynamic learning
            spaces.
          </p>
          <p className='text-lg text-gray-600 mb-6'>
            For those passionate about fostering literacy and creating impactful
            library environments, join our next training sessions and be part of
            Ethiopia's literacy transformation.
          </p>
        </section>

        {/* Carousel Section */}
        <section className='max-w-7xl mx-auto py-8 base:px-6 md:px-12'>
          <h3 className='text-3xl font-semibold text-center text-gray-800 mb-10'>
            Our Training Highlights
          </h3>
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className='px-2'>
                <img
                  src={photo}
                  alt={`Training Highlight ${index + 1}`}
                  className='rounded-lg shadow-lg w-full h-60 object-cover'
                />
              </div>
            ))}
          </Slider>
        </section>

        {/* Call to Action Section */}
        <section className='bg-orange-600 py-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h3 className='text-white text-4xl font-semibold mb-4'>
            join our next training sessions
            </h3>
            <p className='text-white text-lg mb-8'>
            Take the next step in supporting literacy and join our impactful programs. Learn from our dedicated experts and empower communities through education with CODE-Ethiopia.
            </p>
            <Link
              to='/contact-us'
              target='_blank'
              className='bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-50 transition-colors'
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrainingPage;
