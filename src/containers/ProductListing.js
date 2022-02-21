import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { setProducts } from '../redux/actions/productAction'

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

    return<div>
              <ProductComponent />
          </div>
}