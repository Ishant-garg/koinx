 
const BitcoinInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      {/* About Bitcoin Section */}
      <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>

      {/* What is Bitcoin Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Bitcoin?</h3>
        <p className="text-gray-700 text-sm">
          Bitcoin's price today is <strong>$16,951.82</strong>, with a 24-hour trading volume of <strong>$19.14 B</strong>. BTC is <strong>+0.36%</strong> in the
          last 24 hours. It is currently <strong>-7.70%</strong> from its 7-day all-time high of <strong>$18,366.66</strong>, and <strong>3.40%</strong> from its
          7-day all-time low of <strong>$16,394.75</strong>. BTC has a circulating supply of <strong>19.24 M BTC</strong> and a max supply of <strong>21 M BTC</strong>.
        </p>
      </div>

      {/* Detailed Description Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Vivamus diam
          suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi
          diam ut sed.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis
          pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
          risus.
        </p>
      </div>

      {/* Already Holding Bitcoin Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Calculate Your Profits */}
          <div className="p-4 bg-gradient-to-tr from-green-400 to-blue-800 rounded-lg flex items-center">
            <img
              src="https://i.ibb.co/YjKLD77/image.png" // Replace with actual image
              alt="Profits"
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <h4 className="text-white font-semibold text-lg">Calculate your Profits</h4>
              <button className="  bg-white font-medium px-2 py-1 rounded-lg  mt-2">Check Now →</button>
            </div>
          </div>

          {/* Calculate Your Tax Liability */}
          <div className="p-4 bg-gradient-to-tr from-orange-400 to-red-500 rounded-lg flex items-center">
            <img
              src="https://i.ibb.co/WfH0JWX/image.png" // Replace with actual image
              alt="Tax Liability"
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <h4 className="text-white font-semibold text-lg">Calculate your tax liability</h4>
              <button className="bg-white font-medium px-2 py-1 rounded-lg  mt-2">Check Now →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <p className="text-gray-700 text-sm leading-relaxed">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
        risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget.
      </p>
    </div>
  );
};

export default BitcoinInfo;
