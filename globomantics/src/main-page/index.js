
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';
import FeaturedHouse from './FeaturedHouse';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/house-from-query';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HomeContext from '../context/HomeContext';

function App() {
  const houses = useHouses();

  const featuredHouse = useFeaturedHouse(houses);
  
  const header = <Header title="Providing houses all over the world" />;
  return (
    <Router>
      <HomeContext.Provider value={houses}>
        <div className="container">
          {header}
          <HouseFilter/>
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults/>
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery/>
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HomeContext.Provider>
    </Router>
  );
}

export default App;
