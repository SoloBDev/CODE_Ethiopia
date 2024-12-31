const CompanyOverview = () => {
  return (
    <div className='bg-white'>
      {/* Company Overview Header */}
      <div className='bg-orange-500 py-10'>
        <div className='container mx-auto px-6'>
          <h1 className='text-white text-4xl font-bold'>COMPANY OVERVIEW</h1>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 py-10 px-6'>
        <div className='bg-white shadow-lg rounded-lg p-6 sm:w-1/2 hover:scale-105 transition-transform duration-500 '>
          <h2 className='text-xl font-bold'>MISSION:</h2>
          <p className='mt-2 text-gray-700'>
            We aim to foster a culture of reading in Ethiopia by establishing
            libraries that provide resources for learning. Our partnerships will
            promote awareness and encourage self-reliance, especially for
            underprivileged children and teenagers. Additionally, we will ensure
            access to warm lunches and sanitary facilities to support these
            libraries.
          </p>
        </div>
        <div
          className='bg-white shadow-lg rounded-lg p-6 sm:w-1/2
        hover:scale-105 transition-transform duration-500
        '
        >
          <h2 className='text-xl font-bold'>VISION:</h2>
          <p className='mt-2 text-gray-700'>
            We are committed to fostering a sustainable literacy environment in
            Ethiopia, ensuring that all children have the opportunity to develop
            physically, mentally, and emotionally. Through reading, we aim to
            instill a strong sense of self and self-esteem, empowering them to
            reach their full potential.
          </p>
        </div>
        <div
          className='bg-white shadow-lg rounded-lg p-6 sm:w-1/2
        hover:scale-105 transition-transform duration-500
        '
        >
          <h2 className='text-xl font-bold'>OUR VALUES:</h2>
          <ul className='mt-2 text-gray-700'>
            <li>Transparency and Accountability</li>
            <li>Cultivating Generation</li>
            <li> Free trial period</li>
            <li>Role Model and Work Ethics</li>
            <li>Team work and participation</li>
            <li> Fight rent-seeking attitude and practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
