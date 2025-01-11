import   { useEffect, useState } from 'react';
import PriceCard from './PriceCard';

const BitcoinPrice = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.bitcoin);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Bitcoin Price Overview
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around gap-4">
        <PriceCard title="Price in USD" value={`$${data.usd.toLocaleString()}`} />
        <PriceCard title="Price in INR" value={`₹${data.inr.toLocaleString()}`} />
        <PriceCard
          title="24H Change (USD)"
          value={data.usd_24h_change}
          isChange={true}
        />
      </div>
    </div>
  );
};

export default BitcoinPrice;
