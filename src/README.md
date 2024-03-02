import React, { useState } from "react";

function App() {
const [selectedHouse, setSelectedHouse] = useState(null);
const [selectedMaterial, setSelectedMaterial] = useState(null);
const [selectedColor, setSelectedColor] = useState(null);
const [selectedDuration, setSelectedDuration] = useState(null);

const houses = ["House 1", "House 2", "House 3"];

const handleHouseSelection = (houseName) => {
setSelectedHouse(houseName);
setSelectedMaterial(null);
setSelectedColor(null);
setSelectedDuration(null);
};

const handleBookStay = () => {
if (
!selectedHouse ||
!selectedMaterial ||
!selectedColor ||
!selectedDuration
) {
alert(
"Please select house, material, color, and duration before booking."
);
return;
}

    const confirmation = window.confirm(
      `You have selected:\nHouse: ${selectedHouse}\nMaterial: ${selectedMaterial}\nColor: ${selectedColor}\nDuration: ${selectedDuration}\n\nDo you want to proceed with booking?`
    );
    if (confirmation) {
      alert("Booking successful!");
    }

};

return (

<div className="App">
<h1>Welcome to our Booking App</h1>
<div className="houses">
{houses.map((house, index) => (
<button key={index} onClick={() => handleHouseSelection(house)}>
{house}
</button>
))}
</div>
{selectedHouse && (
<div className="details">
<h2>You have selected {selectedHouse}</h2>
<h3>Choose your material:</h3>
<select onChange={(e) => setSelectedMaterial(e.target.value)}>
<option value="">Select Material</option>
<option value="silk">Silk</option>
<option value="satin">Satin</option>
<option value="royal linen">Royal Linen</option>
</select>

          <h3>Choose your color:</h3>
          <select onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Select Color</option>
            <option value="white of innocence">White of Innocence</option>
            <option value="golden rush">Golden Rush</option>
            <option value="purple royale">Purple Royale</option>
          </select>

          <h3>Choose duration of stay:</h3>
          <select onChange={(e) => setSelectedDuration(e.target.value)}>
            <option value="">Select Duration</option>
            <option value="one day">One Day</option>
            <option value="three days">Three Days</option>
            <option value="one week">One Week</option>
            <option value="one month">One Month</option>
            <option value="three months">Three Months</option>
          </select>

          <br />
          <button onClick={handleBookStay}>Book My Stay</button>
        </div>
      )}
    </div>

);
}
