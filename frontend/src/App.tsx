import { useState } from "react";
import "./App.css";
import { search } from "./lib/api";
import Hotels from "./Hotels";

export type selectedHotels = {
  id: number;
  name: string;
  pricePerNightInUSD: number;
};

function App() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(0);
  const [searchedHotels, setSearchedHotels] = useState(false);
  const [hotels, setHotels] = useState<selectedHotels[]>([]);

  const handleSearch = async () => {
    const hotelsX = await search(minimum, maximum);
    console.log(hotels);
    setSearchedHotels(true);
    setHotels((hotelsX as unknown as { data: selectedHotels[] }).data);
    console.log(hotels);
  };

  return (
    <>
      {!searchedHotels && (
        <main className="flex flex-col items-center py-16">
          <section className="card card-body w-[300px] bg-primary text-primary-content mb-8">
            <h2>Please enter the minimum and maximum price of the hotels</h2>
            <label>Minimum price</label>
            <input
              value={minimum}
              onChange={(e) => setMinimum(+e.target.value)}
              className="input input-bordered"
              type="number"
              placeholder="Minimum"
            />
            <label>Maximum price</label>
            <input
              value={maximum}
              onChange={(e) => setMaximum(+e.target.value)}
              className="input input-bordered"
              type="number"
              placeholder="Maximum"
            />
            <button onClick={handleSearch} className="btn btn-success">
              SEARCH
            </button>
          </section>
        </main>
      )}
      {searchedHotels && (
        <Hotels
          hotels={hotels}
          searchedHotels={searchedHotels}
          setSearchedHotels={setSearchedHotels}
        />
      )}
    </>
  );
}

export default App;
