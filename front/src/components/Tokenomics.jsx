const Tokenomics = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
        <h3 className="  font-semibold mb-4">Initial Distribution</h3>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-1/3">
            <img
              src="https://i.ibb.co/FVhGnx9/image.png"  
              alt="Initial Distribution Chart"
              className="w-28 h-28"
            />
          </div>
          <div>
            <p className="font-medium"> 🔵 Crowdsale investors: 80%</p>
            <p className="font-medium"> 🟠 Foundation: 20%</p>
          </div>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc
          dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci
          augue fusce eleifend lectus eu fusce adipiscing.
        </p>
      </div>
    );
  };

export default Tokenomics