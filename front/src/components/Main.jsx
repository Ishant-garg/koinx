import BitcoinInfo from './BitcoinInfo'
 
import Performance from './Performance'
import SentimentDashboard from './SentimentDashboard'
import TopBar from './TopBar'
import TradingViewChart from './TradingViewChart'

const Main = () => {
  return (
    <div>

        Cryptocurrencies {">>"} Bitcoin
        <div className='  flex flex-col gap-3'>
            <TradingViewChart className="bg-white px-4 py-2 rounded-sm " symbol='BTCUSDT' />
            <TopBar/>
            <Performance/>
            <SentimentDashboard/>
            <BitcoinInfo/>
        </div>

        

    </div>
  )
}

export default Main