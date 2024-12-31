const services = [
  {
    title: "Supporting Schools",
    description:
      "Equip classrooms with essential supplies to enhance student learning.",
  },
  {
    title: "School Desks: Enabling a Better Learning Environment",
    description:
      "Address the shortage of resources in rural schools, particularly seating.",
  },
  {
    title: "Book Distribution: Spreading the Gift of Knowledge",
    description:
      "Provide access to books for education and personal development.",
  },
  {
    title: "Building Schools, Library & Computer Lab",
    description:
      "We establish schools, libraries, and computer labs in underserved areas to empower children through quality education and technology.",
  },
];

const Services = () => {
  return (
    <div className='bg-[#0069ba] text-white py-16'>
      <div className='container base:mx-4 base:px-1 lg:px-6 md:mx-auto'>
        <h2 className='text-3xl font-bold mb-10'>Service</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-32 md:mx-8 lg:mx-20 base:w-[280px] xss:w-[340px] xs:w-[420px] sm:w-auto'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white text-gray-900 p-6 shadow-lg
              hover:scale-105 transition-transform duration-500
              '
            >
              <div className='flex items-center mb-4'>
                <h3 className='text-xl font-bold'>{service.title}</h3>
              </div>
              <p className='text-gray-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
