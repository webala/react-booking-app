import { useState } from "react";
import "./App.css";
const App = () => {

  const [counterValue, setCounterValue] = useState(0)

  const availableHouses = [
    "Malubu",
    "Purple royal",
    "Golden Rush",
    "White innocence",
  ];
  const [bookedHouses, setHookedHouses] = useState([]);
  return (
    <div className="main">
      <div>
        <h1>Simple counter</h1>
        <div className="counter-actions">
          <button>Add</button>
          <p>{counterValue}</p>
          <button>Subtract</button>
        </div>
      </div>
      <div>
        <h1>Available houses</h1>
        {availableHouses.map((house) => (
          <div key={crypto.randomUUID()} className="house">
            <p>{house}</p> <button>Add to booked houses</button>
          </div>
        ))}
      </div>
      <div>
        <h1>Booked houses</h1>
        {bookedHouses.map((house) => (
          <div key={crypto.randomUUID()} className="house">
            <p>{house}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
