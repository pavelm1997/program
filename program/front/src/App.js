import React from 'react';
import c from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Main from "./Components/Main/main";
import Search from "./Components/Search/search";
import Schedule from "./Components/Schedule/schedule";

function App() {
  return (
      <BrowserRouter>
          <div className={c.app_wriper}>
              <Header/>
              <Navbar/>
              <div className={c.app_wriper_content}>
                  <div className={c.app_wriper_content}>
                      <Route path = '/main' component={Main}/>
                      <Route path = '/schedule' component={Search}/>
                      <Route path = '/search' component={Schedule}/>
                  </div>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
