import {useEffect, useState, useMemo} from 'react';

import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const houses = await resp.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(houses.length) {
      const randomIndex = Math.floor(Math.random() * houses.length);
      return houses[randomIndex];
    }
  }, [houses]);

  return (
    <div className="container">
      <Header title="Providing houses all over the world" />
    </div>
  );
}

export default App;
