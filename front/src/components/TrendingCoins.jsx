import   { useEffect, useState } from "react";
import axios from "axios";

function TrendingCoins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        // Extract the top 3 coins
        const topCoins = response.data.coins.slice(0, 3).map((coin) => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol,
          priceChange: (Math.random() * 10).toFixed(2), // Mock price change %
          thumb: coin.item.thumb, // Thumbnail URL
        }));
        setCoins(topCoins);
      } catch (err) {
        setError("Failed to fetch trending coins" , err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4  rounded-lg bg-white">
        <h3 className="text-lg font-bold mb-4">Trending Coins (24h)</h3>
        <ul>
          {coins.map((coin) => (
            <li
              key={coin.id}
              className="flex justify-between items-center bg-white p-2 rounded-lg   mb-2"
            >
              <div className="flex items-center space-x-3">
                <img src={coin.thumb} alt={coin.name} className="w-8 h-8" />
                <div>
                  <p className="font-medium">{coin.name} ({coin.symbol.toUpperCase()})</p>
                </div>
              </div>
              <p
                className={`text-sm rounded-sm px-1 py-1 font-bold ${
                  coin.priceChange > 0 ? "text-green-500 bg-green-50  " : "text-red-500 bg-red-50 "
                }`}
              >
                {coin.priceChange > 0 ? `▲` : `▼`} {coin.priceChange}%
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default TrendingCoins;
