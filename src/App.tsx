import { useEffect, useState } from "react";
import "./App.css";
import useHouseBooking from "./useHouseBooking";
const App = () => {
  // const [counterValue, setCounterValue] = useState(0)
  const [counterValue, setCounterValue] = useState(0);
  // const Person = {
  //   male: "Daniel",
  //   female: "Wamata"
  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounterValue(7)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])
  //useCallback
  //useRef
  //useContext
  //useMemo
  const {availableHouses, bookedHouses, addHouseToBookedHouses} = useHouseBooking()
  const addOne = () => {
    const newCounterValue = counterValue + 1;
    setCounterValue(newCounterValue);
  }
  const removeOne = () => {
    
    // const newCounterValue = counterValue - 1;
    // Method 1
    // setCounterValue(newCounterValue)

    //method 2
    setCounterValue((previousState) => {
      const newCounterValue = previousState -1;
      if (newCounterValue < 0) {
        return previousState
      }
      else {
        return newCounterValue
      }
    })
  }
 
  return (
    <div className="main">
      <div>
        <h1>Simple counter</h1>
        <div className="counter-actions">
          <button onClick={addOne}>Add</button>
          <p>{counterValue}</p>
          <button onClick={removeOne}>Subtract</button>
        </div>
      </div>
      <div>
        <h1>Available houses</h1>
        {availableHouses.map((house) => (
          <div key={crypto.randomUUID()} className="house">
            <p>{house}</p>{" "}
            <button onClick={() => addHouseToBookedHouses(house)}>
              Add to booked houses
            </button>
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
