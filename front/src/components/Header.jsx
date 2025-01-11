import TradingViewChart from "./TradingViewChart";
const Header = () => {
  return (
    <div className="md:bg-white flex flex-col gap-4 hadow-md rounded-lg md:p-8 p-4 w-full">
      <div className="flex gap-4 items-center">
        <span className="flex gap-2 items-center">
          <img
            src="https://i.ibb.co/WHjZDVL/efc707b3d15db28e8fc47c0cec22ea3e.png"
            alt=""
            className="w-9 h-9"
          />
          <h1 className="text-2xl font-bold">Bitcoin </h1>
        </span>
        <p className="text-gray-600 text-sm">BTC</p>

        <p className="bg-gray-400 px-2 py-1 text-white text-sm rounded-md">
          Rank #1
        </p>
      </div>
      <TradingViewChart className="border-none " symbol="BTCUSDT" />
    </div>
  );
};

export default Header;
