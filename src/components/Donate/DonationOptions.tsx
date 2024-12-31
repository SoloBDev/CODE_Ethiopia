import { useState } from "react";

const DonationOptions = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  interface HandleAmountClick {
    (amount: number | string): void;
  }
  const handleAmountClick: HandleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom input when selecting preset amounts
  };

  const handleCustomAmount = (e: React.ChangeEvent) => {
    setCustomAmount((e.target as HTMLInputElement).value);
    setSelectedAmount("Other");
  };

  return (
    <div className='flex space-x-4 ml-12'>
      {[300, 250, 100, 30].map((amount) => (
        <button
          key={amount}
          className={`px-5 py-2  ${
            selectedAmount === amount
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleAmountClick(amount)}
        >
          ${amount}
        </button>
      ))}

      {selectedAmount === "Other" ? (
        <div className='flex  border w-1/12'>
          <p className='flex text-semibold text-gray-500 justify-center items-center px-3'>$</p>
          <input
            type='number'
            value={customAmount}
            onChange={handleCustomAmount}
            className='px-5 py-2  focus:outline-none w-2/3'
          />
        </div>
      ) : (
        <button
          className={`px-5 py-2 ${
            selectedAmount === "Other"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleAmountClick("Other")}
        >
          $Other
        </button>
      )}
    </div>
  );
};

export default DonationOptions;
