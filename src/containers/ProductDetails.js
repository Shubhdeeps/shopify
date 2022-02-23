import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";
import Header from "./Header";

export function ProductDetails(){
    const [timer, setTimer] = useState(false);
    const product = useSelector((state) => state.product)
    const {title, image, price, category, description} = product
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            console.log('error ', err)
        })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if(productId && productId !== ""){
            fetchProductDetails();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])

    const handleClick = () =>  {
        setTimer(true)
       setTimeout(alertFun, 6000)
    }

    const alertFun = () => {
        setTimer(false)
    }
    return<>
            {Object.keys(product).length === 0 ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: 
            <div className="container details_section flex-center"> 
            <div className="details_container flex-center">
            <div className="details_image flex-center mt-header"> <img src={image} alt={title} /> </div>
            <div className="details">
                <div className="container_details">
                     <div className="card_title">{title}</div>
                     <br />
                    <div className="details_price">${price}</div>
                    <br />
                    <div className="card_xs category"> {category}</div>
                    <div className="description"> {description}</div>
                        <br />
                        <div className={timer ? "alert_item" : "hiden"}>
                        <p>{title} <strong> added to the cart. </strong></p> 
                        </div>  
                    <button className="bn54" onClick={() => handleClick()}>
                        <span className="bn54span">Add to cart</span>
                    </button>
                </div>
            </div>
            </div>
            </div>}
          </>
}