import ContactForm from "../components/Contact/ContactForm";

const ContacUsPage = () => {
  return (
    <>
      <div className="bg-[url('/assets/contact.jpg')] bg-no-repeat bg-cover flex w-fill h-60  text-[#0f172a] mb-4 justify-center items-center">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          Contact Us
        </h1>
      </div>
      <ContactForm />
    </>
  );
};

export default ContacUsPage;
