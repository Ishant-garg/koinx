import BitcoinInfo from './BitcoinInfo'
import Footer from './Footer'
import Header from './Header'
import Performance from './Performance'
import SentimentDashboard from './SentimentDashboard'
 
import Teamsection from './Teamsection'
 
 
 
import Tokenomics from './Tokenomics'
import TopBar from './TopBar'


const Main = () => {
  return (
    <div>

        <div className='pb-3'>
        <span className='text-sm text-gray-600'> Cryptocurrencies  {">>"}</span> <span className='text-customText'>Bitcoin</span>
        </div>
        <div className='  flex flex-col gap-3'>
            <Header/>
            <TopBar/>
            <Performance/>
            <SentimentDashboard/>
            <BitcoinInfo/>
            <Tokenomics/>
            <Teamsection/>
            
            
        </div>

        

    </div>
  )
}

export default Main