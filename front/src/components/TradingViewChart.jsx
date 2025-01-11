 
import PropTypes from 'prop-types';

const TradingViewChart = ({ symbol }) => {
  const iframeSrc = `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b76b5&symbol=${symbol}&interval=D&hidesidetoolbar=1&style=9`;

  return (
    <div className="tradingview-chart">
      <iframe
        src={iframeSrc}
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        title="TradingView Line Chart"
      ></iframe>
    </div>
  );
};

TradingViewChart.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default TradingViewChart;
