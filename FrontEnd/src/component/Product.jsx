import React,{useEffect,useState} from 'react';
import "../component/product.css"
import PropTypes from 'prop-types';

export const Product  = ({image,name,price,description})=>{

    useEffect(()=>{
        document.body.style.backgroundColor='azure'
      })
    
      
    const [imgIndex,setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => {
                console.log(prev + 1);
                return (prev + 1)%(product.image.length-1) ;
            });
        }, 2000);
    
        return () => clearInterval(interval); 
    }, [imgIndex]);

    return(
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image} alt="product" className="w-80 h-100 object-cover"/>
            <h1 className="text-lg font-bold text-neutral-900">{name}</h1>
            <p className="text-neutral-500">{price}</p>
            <p className="text-neutral-700">{description}</p>
        </div>
    )
}