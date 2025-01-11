 import PropTypes from "prop-types";

const CoinCard = ({ coin }) => {
  const priceChange = coin.item.data.price_change_percentage_24h.usd.toFixed(2);

  return (
    <div className="bg-white rounded-xl border-[1px] border-gray-200 px-6 py-4 shadow-sm w-[250px] sm:w-[300px] flex-shrink-0">
      <div className="flex items-center pr-5 gap-1 mb-1">
        <img
          src={coin.item.small}
          alt={coin.item.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-base">{coin.item.symbol.toUpperCase()}</span>
        <p
          className={`text-[10px] rounded-sm px-1 py-1 font-bold ${
            priceChange > 0
              ? "text-green-500 bg-green-50"
              : "text-red-500 bg-red-50"
          }`}
        >
          {priceChange > 0 ? `▲` : `▼`} {priceChange}%
        </p>
      </div>

      <div className="mt-1">
        <span className="text-base">${parseFloat(coin.item.data.price).toFixed(4)}</span>
      </div>

      <div className="mt-2">
        <img
          src={coin.item.data.sparkline}
          alt="Price Graph"
          className="w-full h-[80px] object-contain"
        />
      </div>
    </div>
  );
};

// Adding Prop Validation
CoinCard.propTypes = {
  coin: PropTypes.shape({
    item: PropTypes.shape({
      small: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      data: PropTypes.shape({
        price_change_percentage_24h: PropTypes.shape({
          usd: PropTypes.number.isRequired,
        }).isRequired,
        price: PropTypes.number.isRequired,
        sparkline: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CoinCard;
