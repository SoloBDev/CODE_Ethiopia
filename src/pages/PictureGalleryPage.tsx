import ImageGallery from "../components/Media/ImageGallery";

const PictureGalleryPage = () => {
  return (
    <>
      <div
        className="bg-[url('/assets/codeethiopia_image3.png')]  bg-no-repeat bg-cover flex w-fill h-72  text-gray-50 mb-12 justify-center items-center
         
         "
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bold'>
          Media
        </h1>
      </div>
      <ImageGallery />
    </>
  );
};

export default PictureGalleryPage;
