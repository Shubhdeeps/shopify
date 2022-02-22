import { Link } from "react-router-dom";
import shopify from '../assets/Shopify.png'
const Header = ({ children }) => {

    return<>
    <div className="header_appbar box-shadow-1">
            <div className="container">
                <Link to={`/`} >
                    <img width={100} src={shopify} alt='tag' />
                </Link>
            </div>
          </div>
            { children }
            </>
}

export default Header;