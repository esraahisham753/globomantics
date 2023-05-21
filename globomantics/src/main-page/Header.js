
import logo from './GloboLogo.png';

const Header = ({title}) => {
    return (
        <header>
            <div className="row">
                <div className="col-md-5 logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col-md-7 title">
                    <h1>{title}</h1>
                </div>
            </div> 
        </header>
    )
}

export default Header;