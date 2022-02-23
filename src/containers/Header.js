import { Link } from "react-router-dom";
import shopify from '../assets/Shopify.png'
const Header = () => {

    return<>
    <div className="header_appbar box-shadow-1">
            <div className="container">
                <a href={`/shopify`} >
                    <img width={100} src={shopify} alt='tag' />
                </a>
            </div>
          </div>
            </>
}

export default Header;