import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";

export function ProductDetails(){
    const product = useSelector((state) => state.product)
    console.log(product)
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
    return<>
            {Object.keys(product).length === 0 ? <div>Loading...</div> : 
            <div className="container details_section flex-center"> 
            <div className="details_container flex-center">
            <div className="details_image flex-center"> <img src={image} alt={title} /> </div>
            <div className="details">
                <div className="container_details">
                     <div className="card_title">{title}</div>
                     <br />
                    <div className="details_price">${price}</div>
                    <br />
                    <div className="card_xs category"> {category}</div>
                    <div className="description"> {description}</div>

                </div>
            </div>
            </div>
            </div>}
          </>
}