 

const Performance = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      {/* Performance Section */}
      <h2 className="text-xl font-bold text-gray-700 mb-4">Performance</h2>
      
      <div className="flex items-center justify-between">
        {/* Left Column */}
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">Today's Low</p>
          <p className="text-red-500 font-bold">46,930.22</p>
        </div>
     
        {/* Performance Bar */}
        <div className="flex-grow mx-4">
          <div className="relative h-2 bg-gray-200 rounded">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-red-500 to-lime-400 rounded" style={{ width: '100%' }}></div>
            {/* Pointer */}
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
          </div>
          <p className="text-center text-sm mt-1 text-gray-600 font-medium">$48,637.83</p>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col items-end">
          <p className="text-gray-500 text-sm">Today's High</p>
          <p className="text-green-500 font-bold">49,343.83</p>
        </div>
      </div>

      {/* 52-Week Low & High */}
      <div className="flex justify-between mt-6">
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm">52W Low</p>
          <p className="text-red-500 font-bold">16,930.22</p>
        </div>
        <div className="flex-grow mx-4">
          <div className="relative h-2 bg-gray-200 rounded">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-red-500 to-lime-400 rounded" style={{ width: '100%' }}></div>
          
          </div>
           
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-500 text-sm">52W High</p>
          <p className="text-green-500 font-bold">49,743.83</p>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Fundamentals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex justify-between border-b-2 border-[#D3E0E6]">
            <p className="text-[#768396] text-sm">Bitcoin Price</p>
            <p className="text-customText ">$16,815.46</p>
          </div>
          <div className="flex  justify-between border-b-2 border-[#D3E0E6] pb-3 ">
            <p className="text-[#768396] text-sm">24h Low / 24h High</p>
            <p className="text-customText ">$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex justify-between border-b-2 border-[#D3E0E6] pb-3">
            <p className="text-[#768396] text-sm">7d Low / 7d High</p>
            <p className="text-customText ">$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex justify-between border-b-2 border-[#D3E0E6] pb-3">
            <p className="text-[#768396] text-sm">Trading Volume</p>
            <p className="text-customText ">$23,249,202,782</p>
          </div>

          {/* Right Column */}
          <div className="flex justify-between border-b-2 border-[#D3E0E6 pb-3">
            <p className="text-[#768396] text-sm">Market Cap</p>
            <p className="text-customText text-sm ">$323,507,290,047</p>
          </div>
          <div className="flex justify-between border-b-2 border-[#D3E0E6] pb-3">
            <p className="text-[#768396] text-sm">Market Cap Dominance</p>
            <p className="text-customText ">38.34%</p>
          </div>
          <div className="flex justify-between border-b-2 border-[#D3E0E6] pb-3">
            <p className="text-[#768396] text-sm">All-Time High</p>
            <p className="text-customText ">$69,044.77 (-75.6%)</p>
          </div>
          <div className="flex justify-between border-b-2 border-[#D3E0E6] pb-3">
            <p className="text-[#768396] text-sm">All-Time Low</p>
            <p className="text-customText">$67.81 (+24,729.1%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
