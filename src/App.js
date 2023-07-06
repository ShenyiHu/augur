import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Banner distributorName="TLBC" quantity="123" quantityForecastThisMonth="200" quantityYearToDate="5223" />
            <Banner distributorName="Pepsi" quantity="155" quantityForecastThisMonth="380" quantityYearToDate="10053" />
            <Banner distributorName="Monster" quantity="2355" quantityForecastThisMonth="30380" quantityYearToDate="662053" />
        </div>
    );
  }
}

export default App;
