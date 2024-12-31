import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/assets/logo1.jpg";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/home", hasDropdown: false },
  {
    name: "Media",
    href: "#",
    hasDropdown: true,
    dropDownItems: [
      { name: "Libraries", href: "/libraries" },
      { name: "Training Programs", href: "/training" },
      { name: "Picture Gallery", href: "/picture-gallery" },
    ],
  },
  { name: "Services", href: "/our-works", hasDropdown: false },
  { name: "About Us", href: "/about-us", hasDropdown: false },
  { name: "Contact Us", href: "/contact-us", hasDropdown: false },
  { name: "Donate", href: "/donate", hasDropdown: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleNavItemClick = () => {
    setOpenDropdown(null);
  };
  return (
    <Disclosure as='nav' className='bg-white sticky top-0 z-50'>
      {({ open }: { open: boolean }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              {/* Mobile menu button */}
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <DisclosureButton className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo */}
              <div className='flex flex-shrink-0 items-center justify-center w-full md:w-auto md:justify-start'>
                <Link to='/home'>
                  <img
                    className='h-16 w-auto'
                    src={logo}
                    alt='code ethiopia Company'
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className='hidden md:flex md:items-center md:justify-center flex-grow'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <div key={item.name} className='relative group'>
                      <Link
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-indigo-600 text-white"
                            : "text-gray-800 hover:bg-indigo-600 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-semibold flex  items-center transition duration-300",
                          item.name == "Donate"
                            ? " lg:ml-12 lg:border-4 border-blue-600 bg-blue-600 lg:rounded-none text-white lg:px-6 px-2"
                            : "border-none"
                        )}
                        onClick={() => handleNavItemClick()}
                      >
                        {item.name}

                        {item.hasDropdown && (
                          <span className='ml-1 inline-block'>
                            <FaChevronDown className='h-4 w-4 text-gray-300 group-hover:text-white transition duration-300' />
                          </span>
                        )}
                      </Link>
                      {item.hasDropdown && (
                        <div className='absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                          <div
                            className='py-1'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='options-menu'
                          >
                            {item.dropDownItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition duration-200'
                                role='menuitem'
                                onClick={() => handleNavItemClick()}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className='w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                      onClick={() => handleDropdownClick(item.name)}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <FaChevronUp className='h-5 w-5' />
                      ) : (
                        <FaChevronDown className='h-5 w-5' />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className='pl-4 space-y-1'>
                        {item.dropDownItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className='block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                            onClick={() => handleNavItemClick()}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-indigo-600 text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium transition duration-300"
                    )}
                    onClick={() => handleNavItemClick()}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
