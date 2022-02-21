import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function ProductComponent(){
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map(product => {
        const {id, title, image, price, category} = product;
        return(
               <Link to={`/product/${id}`} key={id}>
                <div className="card_body" >
                    <div className="card_image"> <img src={image} alt={title} /> </div>
                    <div className="card_title">{title}</div>
                    <div className="card_sub">$ {price}</div>
                    <div className="card_xs"> {category}</div>
                </div>
               </Link> 
        );
    })

    return<div className="container flex-wrap">
              {renderList}
          </div>
}