import { useState } from "react";
import DonationOptions from "./DonationOptions";

const countries = [
  "Ethiopia",
  "Canada",
  "United States",
  "Brazil",
  "China",
  "India",
  "Russia",
  "Australia",
  "Japan",
  "Germany",
  "France",
  "South Africa",
  "Nigeria",
  "Egypt",
  "Kenya",
  "Ghana",
  "Argentina",
  "Mexico",
  "Colombia",
  "Chile",
  "United Kingdom",
  "Italy",
  "Spain",
  "Portugal",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Ireland",
  "Switzerland",
  "Austria",
  "Poland",
  "Turkey",
  "Greece",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "South Korea",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Indonesia",
  "Philippines",
  "New Zealand",
  "Vietnam",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "Ukraine",
  "Israel",
  "Jordan",
  "Morocco",
  "Tunisia",
];

const DonateForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <h1 className='text-gray-700 text-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl py-6 px-12'>
        Donation Information
      </h1>
      <DonationOptions />

      <h1 className='mt-6 text-gray-600 text-bold text-xl sm:text-xl md:text-2xl lg:text-3xl py-6 px-12 text-center'>
        Billing Information
      </h1>

      <form
        action=''
        method='post'
        className='flex flex-col justify-center gap-y-4 w-1/3 m-auto pt-4'
      >
        {/* First Name */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            First Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='First Name'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Last Name */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Last Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='Last Name'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Country <span className='text-red-500'>*</span>
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          >
            <option value=''>Please Select</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Address Lines */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Address Lines <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='Address Line 1'
            className='w-2/3 px-4 py-3 mb-2 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* City */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            City <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='City'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Province */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Province <span className='text-red-500'>*</span>
          </label>
          <select
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          >
            <option value=''>Please Select</option>
            <option value='ON'>Ontario</option>
            <option value='QC'>Quebec</option>
            <option value='BC'>British Columbia</option>
            {/* Add other provinces as needed */}
          </select>
        </div>

        {/* Postal Code */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Postal Code <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='Postal Code'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Phone */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Phone <span className='text-red-500'>*</span>
          </label>
          <input
            type='tel'
            placeholder='Phone Number'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Email */}
        <div className='flex items-center space-x-2'>
          <label className='w-1/3 text-gray-600'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            placeholder='Email Address'
            className='w-2/3 px-4 py-3 border border-gray-300 bg-gray-50 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Submit Button */}
        <div className='flex justify-center items-center'>
          <button
            type='submit'
            className='w-1/2 py-4 mt-6 font-semibold text-white bg-[#0979c4] rounded-md hover:bg-[#0a64b2] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
          >
            Donate Now
          </button>
        </div>
      </form>
    </>
  );
};

export default DonateForm;
