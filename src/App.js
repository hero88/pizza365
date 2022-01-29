import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// components
import HeaderComponent from './components/header/HeaderComponent';
import ContentComponent from './components/content/ContentComponent';



function App() {
  return (
    <div>
      { /* Header */  }
      <HeaderComponent/>
      { /* Content */ }
      <ContentComponent/>
      { /* Footer */  }
    </div>
  );
}

export default App;
