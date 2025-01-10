import TradingViewChart from './TradingViewChart'

const Main = () => {
  return (
    <div>

        Cryptocurrencies {">>"} Bitcoin
        <div className='bg-white px-4 py-2 rounded-sm'>
            <TradingViewChart symbol='BTCUSDT' />
        </div>

    </div>
  )
}

export default Main