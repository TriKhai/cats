// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './component/Home/Header/Header';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Footer from './component/Home/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/services' component={Services}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
