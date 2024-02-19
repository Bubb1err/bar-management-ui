import './App.css';
import CommodityForm from './Commodity/CreateCommodityForm/CommodityForm';
import Header from './PageControls/Header/Header';
import ReceiptCard from './Receipt/GetReceipts/ReceiptCard';
import ReceiptCardsLayout from './Receipt/GetReceipts/ReceiptCardsLayout';

function App() {
  return (
<div>
  <Header />
  <div className='container'>
    <ReceiptCardsLayout />
  </div>
  
  {/* <ReceiptCard/> */}
  {/* <CommodityForm id='E8F97A0D-437F-4173-923D-FF1AADEF8FF6'/> */}
</div>
  );
}

export default App;
