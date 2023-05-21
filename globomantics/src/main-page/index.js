import {useEffect} from 'react';

import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

function App() {
  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const houses = await resp.json();
    };
    fetchHouses();
  }, []);

  return (
    <div className="container">
      <Header title="Providing houses all over the world" />
    </div>
  );
}

export default App;
