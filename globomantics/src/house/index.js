import './house.css';
import EmailIcon from './Email.png';
import Inquiry from './inquiry';
import { useState } from 'react';
import PropTypes from 'prop-types';

const House = ({house}) => {
    const [inquiryShown, setInquiryShown] = useState(false);

    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    };

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
                        {house.description}
                    </p>
                    <img
                    src={EmailIcon}
                    height="50"
                    alt="inquiry"
                    onClick={inquiryClick}
                     />
                    {inquiryShown && <Inquiry house={house} />}
                </div>
            </div>
        </div>
     );
};

House.propTypes = {
    house: PropTypes.object.isRequired,
};
 
export default House;