import { Link } from "react-router-dom";
import bgImg from "../../assets/img_b.png";

const links = [
  { name: "Media", href: "/media" },
  { name: "Training program", href: "/training" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Outsourcing", href: "#" },
];

function WorkWithUs() {
  return (
    <div className='relative isolate overflow-hidden  py-20 sm:py-28 lg:py-24'>
      <img
        alt='bunch of people'
        src={bgImg}
        className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
      />
      <div
        aria-hidden='true'
        className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#001f3f] to-[#003366] opacity-20'
        />
      </div>
      <div
        aria-hidden='true'
        className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#001f3f] to-[#003366] opacity-20'
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-[#0f172a] sm:text-6xl'>
            Work with us
          </h2>
          <p className='mt-6 text-lg leading-8 text-[#0f172a] '>
            Promoting every child's right to read.{" "}
            <strong className='text-white'> CODE Ethiopia</strong>.
          </p>
        </div>
        <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className='hover:text-[#4f1ae0] transition duration-300'
              >
                {link.name} <span aria-hidden='true'>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
        <div className='m-auto w-2/3 pt-10'>
          <button className=' lg:border-4 border-blue-500 bg-blue-500 base:px-4 py-3 lg:rounded-none text-white lg:px-6  transition duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:bg-blue-600 hover:border-blue-600'>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
