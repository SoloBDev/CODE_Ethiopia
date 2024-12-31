import logo from "/assets/android-chrome-512x512.png";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray-50 text-gray-700 py-12 mt-12'>
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-28 lg:mr-8'>
          {/* Logo and Social Icons */}
          <div className='flex flex-col items-center lg:items-start'>
            <div className='p-4 bg-gray-200 rounded-full shadow-lg mb-4'>
              <img className='w-12 h-12' src={logo} alt='Company logo' />
            </div>
            <p className=' text-orange-600 text-lg  font-bold text-center lg:text-left mb-4'>
              Empowering Futures Through Reading for Every Child in Ethiopia
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://t.me/codeethiopia'
                target='_blank'
                className='hover:bg-gray-100 p-2 rounded-lg'
              >
                <FaTelegram className='text-gray-500 hover:text-gray-900 text-2xl' />
              </a>
              <a
                href='https://www.linkedin.com/company/code-ethiopia/'
                target='_blank'
                className='hover:bg-gray-100 p-2 rounded-lg'
              >
                <BiLogoLinkedinSquare className='text-gray-500 hover:text-gray-900 text-2xl' />
              </a>
              <a
                href='mailto:codeethiopia@gmail.com'
                className='hover:bg-gray-100 p-2 rounded-lg'
              >
                <MdEmail className='text-gray-500 hover:text-gray-900 text-2xl' />
              </a>
              <a
                href='http://www.youtube.com/@codeEthiopia'
                target='_blank'
                className='hover:bg-gray-100 p-2 rounded-lg'
              >
                <FaYoutube className='text-gray-500 hover:text-gray-900 text-2xl' />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className='text-gray-700 font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/our-works'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  to='/training'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  to='/picture-gallery'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  Picture Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Code Ethiopia Section */}
          <div>
            <h3 className='text-gray-700 font-semibold mb-4'>
              Code Ethiopia Org.
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/about-us'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/contact-us'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to='/donate'
                  className='hover:bg-gray-100 p-2 rounded-lg hover:text-gray-900 block'
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className='text-gray-700 font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-2'>
              <li>
                <p>
                  Address: Arat | 4 kilo Square, Ministry of Education
                  <br />
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </li>
              <li>Phone: +251- 11 - 126-65-63 / +251- 11 - 157-04-34</li>
              <li>Email: contact@code-ethiopia.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 border-t border-gray-300 pt-6 text-center'>
          <p>
            © {year}{" "}
            <Link className='text-blue-600 hover:text-blue-800' to='/'>
              Code Ethiopia
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
