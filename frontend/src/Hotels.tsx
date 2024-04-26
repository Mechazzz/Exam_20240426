import { selectedHotels } from "./App";

interface Props {
  hotels: selectedHotels[];
  searchedHotels: boolean;
  setSearchedHotels: (searchedHotels: boolean) => void;
}

const Hotels = ({ hotels, setSearchedHotels }: Props) => {
  const back = () => {
    setSearchedHotels(false);
  };
  return (
    <>
      <div>Hotels:</div>;
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <p>{hotel.name}</p>
          <p>{hotel.pricePerNightInUSD}</p>

          <button onClick={back}>Back</button>
        </div>
      ))}
    </>
  );
};

export default Hotels;
