import CompanyOverview from "../components/About/CompanyOverview";
import Content from "../components/About/Content";

const AboutUsPage = () => {
  return (
    <>
      <div
        className="bg-[url('/assets/codeethiopia_image7.png')]  bg-no-repeat bg-cover flex w-fill h-80  text-gray-50 mb-4 justify-center items-center
         
         "
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          About Us
        </h1>
      </div>
      <Content />
      <section id='leader'>{/* <FounderStatement /> */}</section>
      <section id='values'>
        <CompanyOverview />
      </section>
    </>
  );
};

export default AboutUsPage;
