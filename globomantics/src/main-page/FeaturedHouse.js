import House from "../house";

const FeaturedHouse = ({house}) => {
    if(house)
    {
        return ( 
            <div className="row featured">
                <div className="heading">
                    <h2>Featured house</h2>
                </div>
                <House house={house}/>
            </div>
        );
    }
}
 
export default FeaturedHouse;