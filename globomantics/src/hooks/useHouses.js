import { useEffect, useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
    const fetchHouses = async () => {
        const resp = await fetch("/houses.json");
        const respHouses = await resp.json();
        setHouses(respHouses);
    };

    fetchHouses();
    }, []);

    return houses;
};



export default useHouses;