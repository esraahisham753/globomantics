import {useEffect, useState, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';
import FeaturedHouse from './FeaturedHouse';

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    console.log("in hook");
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const respHouses = await resp.json();
      setHouses(respHouses);
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
        <Switch>
          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
