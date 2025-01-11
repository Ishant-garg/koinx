 
import Carousel from './Carousel'

const Footer = () => {
  return (
    <div className="    mx-auto    bg-white shadow-md rounded-lg md:p-12 p-6  w-[96%] ">
      {/* "You May Also Like" Section */}
      <Carousel title="You May Also Like" />

      {/* "Trending Coins (24h)" Section */}
      <Carousel title="Trending Coins (24h)" />
    </div>
  )
}

export default Footer