import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './scss/modal.scss';


const Modal = ({ errors, touched, status }) => {
const [trucks, setTrucks] = useState([]);
useEffect(() => {
status && setTrucks(newTrucks => [...newTrucks, status]);
}, [status]);

return (
  <div className="modal">
<Popup trigger={<button className="btn-style"> Create Truck </button>} modal>
<div className='content-styles'>
    <h4>Truck Information</h4>
    <Form>
    <Field className="box-styles" type='text' name='cuisine' placeholder='Enter Cuisine Type' />
    {touched.cuisine && errors.cuisine && (
        <p>{errors.cuisine}</p>
    )}

    <Field className="box-styles"  type='text' name='location' placeholder='Enter Current Location' />
    {touched.location && errors.location && <p className="error">{errors.location}</p>}

    <Field
        className="box-styles" 
        component='textarea'
        type='text'
        name='description'
        placeholder='Please enter truck description here...'
    />
    {touched.description && errors.description && (
        <p>{errors.description}</p>
    )}
    
    <button className='modal-btn'type='submit'>Add</button>
    <button className='modal-btn'>Upload Image</button>
 
    
    </Form>
   
<label>
    {trucks.map(truck => (
    <div key={truck.id}>
        <p>Added the following:</p>
        <p>Cuisine: {truck.cuisine}</p>
        <p>Location: {truck.location}</p>
        <p>Description: {truck.description}</p>
        <img src={truck.picture} alt='food truck'/>
    </div>
    ))}
    </label>
</div>
</Popup>
</div>
);
};

const FormikModal = withFormik({
 
  mapPropsToValues({ cuisine, location, description }) {
    return {
      
        cuisine: cuisine || '',
        location: location || '',
        description: description || '',
    };
  },

  validationSchema: Yup.object().shape({
    cuisine: Yup.string().required(),
    location: Yup.string().required(),
    description: Yup.string()
  }),

  
  handleSubmit(values, { props , resetForm}) {
    /*What we want to pass to edit fields */
    debugger
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        resetForm();
      })
      .catch(err =>(err.response));
  }
})(Modal); 

export default FormikModal;