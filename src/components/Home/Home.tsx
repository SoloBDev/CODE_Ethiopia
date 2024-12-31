import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "/assets/logo1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  // Function to handle scroll to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down exactly one viewport height to reveal the next section
      behavior: "smooth", // Smooth scrolling effect
    });
    setShowScrollIcon(false); // Hide the scroll icon when clicked
  };

  // Event listener to track scroll position and show/hide the scroll icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollIcon(true); // Show the icon when the user is at the top of the page
      } else {
        setShowScrollIcon(false); // Hide the icon when scrolled down
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[url('/assets/code_hero.jpg')] bg-cover flex flex-col lg:flex-row items-center justify-center py-12 px-6 min-h-screen relative gap-60">
        {/* Left Section */}
        <div className='lg:w-[40%] text-center lg:text-left mb-8 lg:mb-0 ml-2'>
          <h2 className='text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-100 leading-tight lg:leading-snug'>
            CODE Ethiopia: Empowering Future Through Literacy.
          </h2>

          <p className='mt-4 text-lg text-gray-300'>
            Providing customized literacy solutions to empower communities and
            strengthen a culture of reading
          </p>

          <Link to='/contact-us'>
            <div className='mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
              <button className='bg-orange-600 hover:scale-105 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out'>
                Contact Us
              </button>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className='lg:w-2/5 flex items-center justify-center h-30'>
          <img
            src={logo}
            alt='CODE Ethiopia Logo'
            className='w-72 sm:w-80 lg:w-96 xl:w-[32rem] 2xl:w-[40rem] mt-6 lg:mt-0 transition-transform duration-300 ease-in-out hover:scale-105'
          />
        </div>
      </div>

      {/* Conditionally Render Scroll Down Icon */}
      {showScrollIcon && (
        <div
          className='fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50'
          onClick={scrollToNextSection}
        >
          <FaChevronDown className='text-gray-300 hover:text-gray-700 text-4xl transition-colors duration-300 ease-in-out animate-bounce' />
        </div>
      )}
    </>
  );
};

export default Home;
