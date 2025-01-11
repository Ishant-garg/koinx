 
const SentimentDashboard = () => {
  return (
    <div className="border border-gray-200 flex md:p-12 flex-col gap-4 brounded-lg p-6 bg-white rounded-md">
      <h3 className="text-lg font-semibold mb-4">Sentiment</h3>

      {/* Key Events Section */}
      <div className="flex md:flex-row flex-col gap-4 mb-6">
        {/* Event Card 1 */}
        <div className="flex-1  bg-blue-100 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 p-3 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
            📄
          </div>
          <div>
            <h4 className="text-sm font-semibold   mb-2">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="flex-1 bg-green-100 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 p-3 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
            📈
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <h4 className="text-sm font-semibold mb-4">Analyst Estimates</h4>
        <div className="flex items-center gap-6">
          {/* Circle with Percentage */}
          <div className="relative w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
            <span className="text-xl font-bold text-green-600">76%</span>
          </div>

          {/* Bar Chart */}
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-sm font-semibold mr-2">Buy</span>
              <div className="flex-1 bg-green-200 h-2 rounded">
                <div className="bg-green-600 h-2 rounded" style={{ width: '76%' }}></div>
              </div>
              <span className="ml-2 text-sm font-semibold">76%</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-sm font-semibold mr-2">Hold</span>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                <div className="bg-gray-500 h-2 rounded" style={{ width: '8%' }}></div>
              </div>
              <span className="ml-2 text-sm font-semibold">8%</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-semibold mr-2">Sell</span>
              <div className="flex-1 bg-red-200 h-2 rounded">
                <div className="bg-red-600 h-2 rounded" style={{ width: '16%' }}></div>
              </div>
              <span className="ml-2 text-sm font-semibold">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentDashboard;
