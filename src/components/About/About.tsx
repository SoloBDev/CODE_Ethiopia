import { Link } from "react-router-dom";
import graceBrochure from "/assets/codeethiopia_image3.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900 p-6 md:p-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Who We Are
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6 text-justify">
          GraceERP Consultancy PLC is a registered Private Limited Company
          headquartered in Addis Ababa, Ethiopia. We pride ourselves on being a
          trusted local Odoo implementer to optimize their operations through
          the implementation of robust ERP systems. Our team consists of highly
          skilled professionals with extensive experience in ERP system
          customization, implementation, integration with third party
          software's, and training.
        </p>
        <Link
          to="/about-us"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore More
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          src={graceBrochure}
          alt="GraceERP Brochure"
        />
      </div>
    </div>
  );
};

export default About;
