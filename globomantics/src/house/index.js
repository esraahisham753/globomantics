import './house.css';

const House = ({house}) => {
    return ( 
        <div className='row house'>
            <div className='row house-country'>
                <h4>{house.country}</h4>
            </div>
            <div className='row address'>
                <h2>{house.address}</h2>
            </div>
            <div className='row'>
                <div className='col-6 image'>
                    <img />
                </div>
            </div>
        </div>
     );
}
 
export default House;