import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) => {
        setContactInfo({...contactInfo, [e.target.id]: e.target.value,})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
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
                onChange={onChange}
                value={contactInfo.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                type="text"
                id="remarks"
                placeholder="Type remarks here"
                className="form-control"
                onChange={onChange}
                value={contactInfo.remarks}
                 />
            </div>
            <button
            className="btn btn-primary mt-2"
            disabled={!contactInfo.name || !contactInfo.email}
            onClick={onSubmit}
            >
                Submit
            </button>
        </form>
     );
}
 
export default Inquiry;