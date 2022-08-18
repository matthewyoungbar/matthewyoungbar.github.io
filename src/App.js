import logo from './logo.svg';
import Header from './components/header/header'
import AboutMe from './components/aboutMe/aboutMe'
import './App.css';

// color schemes come from scheme 3 here: https://www.canva.com/learn/website-color-schemes/

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
