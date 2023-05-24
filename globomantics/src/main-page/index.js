import {useEffect, useState, useMemo, useCallback} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';
import FeaturedHouse from './FeaturedHouse';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/house-from-query';

function App() {
  const [houses, setHouses] = useState([]);

  const fetchHouses = useCallback(
    async () => {
      const resp = await fetch("/houses.json");
      const respHouses = await resp.json();
      setHouses(respHouses);
    }
  , []);

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  const featuredHouse = useMemo(() => {
      if(houses.length) {
        const randomIndex = Math.floor(Math.random() * houses.length);
        return houses[randomIndex];
      }
  }, [houses]);
  
  const header = <Header title="Providing houses all over the world" />;
  return (
    <Router>
      <div className="container">
        {header}
        <HouseFilter allHouses={houses} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={houses} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={houses} />
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
