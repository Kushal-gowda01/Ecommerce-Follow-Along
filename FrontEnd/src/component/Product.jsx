import React,{useEffect,useState} from 'react';
import "../component/product.css"
import PropTypes from 'prop-types';

export const Product  = ({ _id, name, images, description, price })=>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!images || images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    const currentImage = images && images.length > 0 ? images[currentIndex] : null;

    const handleEdit = () => {
        navigate(`/create-product/${_id}`);
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/v2/product/delete-product/${_id}`
            );
            if (response.status === 200) {
                alert("Product deleted successfully!");
                // Reload the page or fetch products again
                window.location.reload();
            }
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("Failed to delete product.");
        }
    };

    return(
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image} alt="product" className="w-80 h-100 object-cover"/>
            <h1 className="text-lg font-bold text-neutral-900">{name}</h1>
            <p className="text-neutral-500">{price}</p>
            <p className="text-neutral-700">{description}</p>
        </div>
    )
}