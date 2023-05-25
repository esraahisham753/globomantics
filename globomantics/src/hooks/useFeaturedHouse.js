import { useMemo } from "react";

const useFeaturedHouse = (houses) => {
    const featuredHouse = useMemo(() => {
        if(houses.length) {
          const randomIndex = Math.floor(Math.random() * houses.length);
          return houses[randomIndex];
        }
    }, [houses]);

    return featuredHouse;
};

export default useFeaturedHouse;