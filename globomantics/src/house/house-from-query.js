import {useParams} from 'react-router-dom';
import House from './';
import { useContext } from 'react';
import HomeContext from '../context/HomeContext';

const HouseFromQuery = () => {
    const allHouses = useContext(HomeContext);
    const {id} = useParams();
    const house = allHouses.find((h) => h.id === parseInt(id));

    if(!house) {
        return <div>House Not Found</div>
    }


    return ( <House house={house} /> );
}
 
export default HouseFromQuery;