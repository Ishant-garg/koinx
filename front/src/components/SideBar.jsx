 
 import TrendingCoins from "./TrendingCoins";

function SideBar() {
  
 

  return (
    <div className="w-full p-6  rounded-lg  ">
      {/* KoinX Section */}
      <div className="bg-[#0052FE] text-white text-center p-12 rounded-xl flex flex-col items-center gap-3 justify-center  mb-6">
        <h2 className="text-2xl font-bold mb-2">Get Started with KoinX for FREE</h2>
        <p className="text-sm mb-4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src="https://i.ibb.co/j5sJsG3/image.png" width={178.66} height={166.22} alt="" />
        <button className="bg-white text-customText font-medium px-4 py-2 rounded-lg hover:bg-gray-100">
          Get Started for FREE →
        </button>
      </div>

      {/* Trending Coins Section */}
      <TrendingCoins/>
 
    </div>
  );
}

export default SideBar;
