import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
     
  }

  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Content tieude="For those about to rock" vitri1="order-lg-2" vitri2="order-lg-1" anh="img/01.jpg"/>
        <Content tieude="We salute you!" vitri1="order-lg-1" vitri2="order-lg-2" anh="img/02.jpg"/>
        <Content tieude="Let there be rock!" vitri1="order-lg-2" vitri2="order-lg-1" anh="img/03.jpg"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
