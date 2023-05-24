import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = () => {

    };

    const onSubmit = () => {

    };

    return ( 
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="Type your name here"
                id="name"
                onChange={onChange}
                value={contactInfo.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                type="email"
                id="email"
                placeholder="Type your email here"
                className="form-control"
                />
            </div>
        </form>
     );
}
 
export default Inquiry;