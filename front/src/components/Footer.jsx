 
import Carousel from './Carousel'

const Footer = () => {
  return (
    <div className=" w-[1080px] max-w-[100%]  bg-white shadow-md rounded-lg md:p-12 p-6 w-full ">
      {/* "You May Also Like" Section */}
      <Carousel title="You May Also Like" />

      {/* "Trending Coins (24h)" Section */}
      <Carousel title="Trending Coins (24h)" />
    </div>
  )
}

export default Footer