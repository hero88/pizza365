import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// components
import HeaderComponent from './components/header/HeaderComponent';
import ContentComponent from './components/content/ContentComponent';
import FooterComponent from './components/footer/FooterComponent';

import {Routes, Route} from 'react-router-dom';
import OrderList from './components/OrderList/OrderList';

function App() {
  return (
    <div>
      { /* Header */  }
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<ContentComponent/>}/>
        <Route path='orderlist' element={<OrderList/>}/>
      </Routes>
      
      { /* Footer */  }
      <FooterComponent/>
    </div>
  );
}

export default App;
