import React, { useState, useEffect } from 'react';
import { Product } from "../component/Product";
import axios from 'axios';
import { NavBar } from '../component/nav';


// const productdetails = [
//     {
//         image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
//         name:"Product1",
//         price: "$100",
//         description: "This is a product1"
//     },
//     {
//         image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
//         name:"Product2",
//         price: "$100",
//         description: "This is a product2"
//     },
//     {
//         image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
//         name:"Product3",
//         price: "$100",
//         description: "This is a product3"
//     }
// ]

export const Home = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/product/get-products");
                setProductDetails(res.data.Products);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 
    return (
        <>
            <NavBar />
            <div className="p-4 flex justify-center items-center">
                <h1 className="text-4xl font-bold text-indigo-900">Welcome to our Store</h1>
            </div>
            <div className="w-full min-h-screen p-4 flex justify-center items-center mt-20">
                {loading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p className="text-red-500">Error: {error}</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {productDetails.map((product, index) => (
                            <Product key={index} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
