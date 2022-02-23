import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { setProducts } from '../redux/actions/productAction'
import Header from "./Header";

export function ProductListing(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state)

    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('err ', err)
        });
        dispatch(setProducts(response.data))

    }

    useEffect(() => {
        fetchProducts();
    }, []);


    return<>
            {Object.keys(products.allProducts.products).length === 0 && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
              <ProductComponent />
          </>
}