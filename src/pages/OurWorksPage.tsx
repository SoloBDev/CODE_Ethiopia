import Feature from "../components/Services/Feature";

const OurWorksPage = () => {
  return (
    <>
      <div className='bg-gray-50 min-h-screen'>

        <Feature />

        <section className='flex justify-center items-center p-8 flex-col mb-20'>
          <h2 className='base:text-2xl md:text-3xl font-semibold mb-4'>Future Plans</h2>
          <ul className='list-disc list-inside'>
            <li>Establishment of more community libraries</li>
            <li>Development of E-Books</li>
            <li>Provision of Tablets and warm lunches</li>
          </ul>
        </section>
      </div>
    </>
  );
};
export default OurWorksPage;
