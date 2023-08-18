import React, { useState } from 'react';
import './Passengers.css';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', { newPassenger: value})
    changeValue('');
  }

  const { passengers } = state.context;

  return (
    <form onSubmit={submit} className='Passengers'>
      <p className='Passengers-title title'>Add the people who will be flying ✈️</p>
      {passengers.map((person, idx)=> <p className='text' key={`person-${idx}`}>{person}</p>)}
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Write the full name' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button 
          className='Passengers-add button-secondary'
          type="submit"
        >
          Add Passenger
        </button>
        <button
          className='Passenger-pay button'
          type="button"
          onClick={goToTicket}
        >
          View my ticket
        </button>
      </div>
    </form>
  );
};