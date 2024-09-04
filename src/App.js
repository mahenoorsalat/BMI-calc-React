import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();

    if ((weight === 0 || height === 0  )||( weight === '' || height === '')) {
      alert('Enter valid value');
    }

    else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage('You are underweight!');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are in a healthy range!');
      } else {
        setMessage('You are overweight!');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div className="input-group">
          <label>Weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter Weight Value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Height (in)</label>
          <input
            type="text"
            placeholder="Enter Height Value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" type="button" onClick={reload}>
            Reload
          </button>
        </div>

        <div className="result">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
