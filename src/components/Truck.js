import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../state/actionCreators';
import Typography from '@material-ui/core/Typography';
import SimpleRating from './Rating';
import './scss/Truck.scss';

import ft1 from '../img/ft1.jpg';


const Truck = (props) => {
    const {truck, buttonText} = props;

    return (
        <div className='truck'>
        
            <div className='truck-image'>
                <img src={ft1} alt='food truck'/>
            </div>
            <div className='truck-info'>
        
                <p><strong>Cuisine Type:</strong> </p>
                <p><strong>Average Customer Rating:</strong> </p>
                <p><strong>Current Location:</strong> </p>
                <p><strong>Current Location Depart Time:</strong></p>
                <p><strong>Next Location:</strong> </p>
                <p><strong>Next Location Arrival Time:</strong> </p>
            </div>
            <div className='truck-info'>
        
                <p>{truck.cuisineType}</p>
                <p>{truck.customerRatingAvg}</p>
                <p>{truck.currentLocation.location}</p>
                <p>{truck.currentLocation.departureTime}</p>
                <p>{truck.nextLocation.location}</p>
                <p>{truck.nextLocation.arrivalTime}</p>
            </div>
            <div className='truck-button'>
                <button><Link to={`/trucks/${truck.id}/menu`}>Menu</Link></button>
                <button>{buttonText}</button>
                <div className="rating">       
                    <Typography component="legend"></Typography>
                    <SimpleRating/>         
                </div>
            </div>
         
        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);
