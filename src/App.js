import Header from './components/header/header'
import Router from './routes/router'
import { BrowserRouter } from "react-router-dom";
import './App.css';

// color schemes come from scheme 3 here: https://www.canva.com/learn/website-color-schemes/

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
