import {useEffect, useState, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    <Router>
      <div className="container">
        <Header title="Providing houses all over the world" />
      </div>
      <switch>
        <Route path="/">
          <div className='featuredHome'>
            Featured Home
          </div>
        </Route>
      </switch>
    </Router>
  );
}

export default App;
