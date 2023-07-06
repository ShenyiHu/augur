import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.distributorName}</h1>
                <h2>Quantity: {this.props.quantity}</h2>
                <h2>Forcast: {this.props.quantityForecastThisMonth}</h2>
                <h2>Year-to-date: {this.props.quantityYearToDate}</h2>
            </div>
        );
    }
}

export default Banner;