// import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
// import { IoIosPeople } from "react-icons/io";
// import { BiSupport } from "react-icons/bi";
import logo from "/assets/logo1.jpg";
// import cover from "/assets/hero_image.jpg";

function Content() {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                Company Description
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Code Ethiopia
              </h1>
              <p className='mt-6 leading-7 text-gray-700 text-justify'>
                CODE Ethiopia is a registered tax exempt non-profit,
                non-governmental organization founded on 1994 and registered to
                work in Ethiopia by the Ministry of Justice on 2002. It
                re-registered again by the Federal Charities and Societies
                Agency on 2009 under registration Number 0659 with a goal to
                increase the capacity of children and youth to read and write.
                In the past 20 years, CODE-Ethiopia has established 97 Community
                libraries across the country. It provided supplementary reading
                materials in local languages and English by developing its own
                in collaboration with Regional education bureaus, purchasing
                from the local market and by receiving donation of books from
                International Book Bank (IBB) and Book Aid International (BAI).
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            alt='Company Logo '
            src={logo}
            className='w-full h-full object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10' />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p className='text-justify'>
                The organization has also delivered training for Library
                attendants, library management committee members, Book
                developers and performed reading promotion activities. The 97
                Community libraries established in Rural Ethiopian Communities
                by the financial support of the former Canadian International
                Development Agency (CIDA) - the current Department of Foreign
                Affairs, Trade and Development (DFATD) and Canadian Organization
                for Development through Education (CODE) enabled the
                beneficiaries especially the unprivileged students to access
                libraries at their nearest area to enjoy reading and writing for
                knowledge, information and pleasure.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
