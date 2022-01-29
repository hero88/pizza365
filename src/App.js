import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// components
import HeaderComponent from './components/header/HeaderComponent';
import ContentComponent from './components/content/ContentComponent';
import FooterComponent from './components/footer/FooterComponent';



function App() {
  return (
    <div>
      { /* Header */  }
      <HeaderComponent/>
      { /* Content */ }
      <ContentComponent/>
      { /* Footer */  }
      <FooterComponent/>
    </div>
  );
}

export default App;
