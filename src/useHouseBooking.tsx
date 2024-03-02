import { useState } from "react";

const useHouseBooking = () => {
  const availableHouses = [
    "Malibu",
    "Purple royal",
    "Golden Rush",
    "White innocence",
  ];
  const [bookedHouses, setBookedHouses] = useState<string[]>([]);
  const addHouseToBookedHouses = (house: string) => {
    console.log(house);
    setBookedHouses((previousState) => {
      //Check if house already booked
      const newState = [...previousState, house];
      return newState;
    });
  };
  return {
    availableHouses,
    bookedHouses,
    addHouseToBookedHouses
  }
};

export default useHouseBooking;
