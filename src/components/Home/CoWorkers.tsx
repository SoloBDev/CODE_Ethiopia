import ethioReads from "/assets/ethiopia-reads-logo-color-opt.webp";
import Hawe from "/assets/for-Desktopnew-new.png";
import ETKKS from "/assets/new-Logo-7.png"
import FLN from "/assets/familya.webp"
const CoWorkers = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-8">
      {/* Top Enterprises Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Partners</h2>
        <p className="text-2xl font-semibold">Top Enterprises</p>
        <p className="text-gray-600 mt-2 mb-6">
          Building A Great Future For Every Child
        </p>
      </div>

      {/* Logo Grid */}
      <div className="w-full bg-gray-50 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={ethioReads}
              alt="ethiopian reads company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={Hawe}
              alt="Hawe company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={ETKKS}
              alt="ETKKS company logo"
            />
          </div>
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 rounded-lg flex items-center justify-center bg-white shadow-lg">
            <img
              className="max-w-full h-auto"
              src={FLN}
              alt="family's company logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoWorkers;
