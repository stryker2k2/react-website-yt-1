import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Minecraft from "./components/pages/Minecraft";
import Cyber from "./components/pages/Cyber";
import UnderConstruction from './components/pages/UnderConstruction';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            {/* Routes */}
            <Route path='/' exact component = {Home}/>
            <Route path='/services' component = {Services}/>
            <Route path='/products' component = {Products}/>
            <Route path='/about' component = {About}/>
            <Route path='/minecraft' component = {Minecraft}/>
            <Route path='/cyber' component = {Cyber}/>
            <Route path='/underconstruction' component = {UnderConstruction}/>

            {/* Social Media */}
            <Route path='/youtube' component={() => { 
              window.location.href = 'https://www.youtube.com/channel/UCo8vV94aQsuvPrkymFcl1Yg'; 
              return null;}}/>
            <Route path='/twitter' component={() => { 
              window.location.href = 'https://twitter.com/stryker2k2'; 
              return null;}}/>
            <Route path='/linkedin' component={() => { 
              window.location.href = 'https://www.linkedin.com/in/jward02'; 
              return null;}}/>
            <Route path='/paypal' component={() => { 
              window.location.href = 'https://paypal.me/stryker2k2'; 
              return null;}}/>
          </Switch>
      </Router>      
    </>
  );
}

export default App;
