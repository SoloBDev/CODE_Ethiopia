import DonateForm from "../components/Donate/DonateForm";


const DonatePage = () => {
  return (
    <>
      <div className="bg-[url('/assets/donate_banner.jpg')]  bg-no-repeat bg-cover flex w-fill h-80  text-[#0f172a] mb-4 justify-center items-center"></div>
      <h1 className='text-blue-400 text-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl py-6 px-12'>
        Donate
      </h1>
      <h3 className='text-wrap px-12 md:px-16 lg:px-20 tracking-wide'>
        Learning begins at birth and continues throughout the life of an
        individual. A well balanced primary education at early age help children
        to acquire essential learning abilities and relevant life skills.
        Therefore, much effort is needed to change the lives of many children in
        Ethiopia. <br />
        <br /> In ordeer to proceed encouragng education as a means of
        development,CODE-Ethiopia needs support from others.
      </h3>
      <DonateForm />
    </>
  );
};

export default DonatePage;
