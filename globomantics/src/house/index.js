import './house.css';

const House = ({house}) => {
    return ( 
        <div className='row house'>   
            <h4 className="house-country">{house.country}</h4>
            <h2 className="address">{house.address}</h2>
            <div className='row'>
                <div className='col-6 image'>
                    <img alt="house" src={`/images/${house.photo}.jpeg`}/>
                </div>
                <div className="col-6 details">
                    <h4 className="price">${house.price}</h4>
                    <p className="disc">
                        {house.discription}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default House;