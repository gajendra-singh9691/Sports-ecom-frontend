import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import axios from "axios";
const api_uri = import.meta.env.VITE_API_URL


const sortItems = (items, sortType) => {
    if (sortType === "lowToHigh") {
        return [...items].sort((a, b) => a.salePrice - b.salePrice);
    }
    if (sortType === "highToLow") {
        return [...items].sort((a, b) => b.salePrice - a.salePrice);
    }
    if (sortType === "latest") {
        return [...items].reverse(); // no date, so just return as is or implement differently
    }
    return items;
};

const Shop = ({ onAddToCart }) => {
    const [sortType, setSortType] = useState("latest");

    const [PRODUCTS, setPRODUCTS] = useState([]);
    const sortedProducts = sortItems(PRODUCTS, sortType);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${api_uri}/user/allData`);
            // console.log(response.data);
            let data = response.data
            setPRODUCTS(response.data.data)
        }
        fetch()
    }, [])
    // console.log(PRODUCTS);


    return (
        <div className="p-1 sm:p-4">
            <div className="flex items-center mb-4">
                <label htmlFor="sort-select" className="mr-2 font-medium outline-none active:outline-none">
                    Sort by:
                </label>
                <select
                    id="sort-select"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                    <option value="latest">Latest</option>
                </select>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-6 justify-center">
                {sortedProducts.map((product) => (
                    <ProductCard key={product._id || product.id} product={product} onAddToCart={onAddToCart} />
                ))}

            </div>
        </div>
    );
};

export default Shop;
