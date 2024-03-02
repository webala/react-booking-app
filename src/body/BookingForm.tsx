/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

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
    alert("Please select house, material, color, and duration before booking.");
    return;
  }

  const confirmation = window.confirm(
    `You have selected:\nHouse: ${selectedHouse}\nMaterial: ${selectedMaterial}\nColor: ${selectedColor}\nDuration: ${selectedDuration}\n\nDo you want to proceed with booking?`
  );
  if (confirmation) {
    alert("Booking successful!");
  }
};
