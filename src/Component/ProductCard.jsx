import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const bufferData = product.image.data;
        const base64String = btoa(
          new Uint8Array(bufferData).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        setImageSrc(`data:image/png;base64,${base64String}`);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);
  
    return (
        <div className="border flex flex-col gap-2 border-[#ddd] rounded-lg w-5/12  sm:w-[250px] p-1 sm:p-4 bg-white shadow-[0_2px_6px_#eee] mx-2 justify-center items-center">
            <div className="w-28 h-28 sm:w-48 sm:h-48 flex justify-center">
                <img className="w-full h-full object-contain" src={imageSrc} alt={product.name} style={{ width: "100%" }} />
            </div>
            <div>
                <h4 className="h-7 overflow-hidden">{product.name}</h4>
            <p className="h-7 hidden sm:block">{product.description}</p>
            <div className="flex gap-2 flex-col">
                <div className="flex justify-between">
                    <span>Size: </span>
                    <div className="flex gap-2 ">
                        {product.Sizes.map((size) => (
                            <button
                                key={size}
                                // className={}
                                className="text-black border-gray-500 border-[1px] rounded-full p-1 w-4 sm:h-6 h-4 sm:w-6 flex justify-center items-center text-[10px] cursor-pointer"

                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                {selectedSize === "" ? <span></span> : <span>Selected Size : {selectedSize}</span>}
            </div>
            <div>
                <span>Qty: </span>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{ width: "50px" }}
                />
            </div>
            <div>
                <span>
                    <del>₹{product.originalPrice}</del> <strong>₹{product.salePrice}</strong>
                </span>
            </div>
            <button
                onClick={() =>
                    onAddToCart({
                        // ...product,
                        name : product.name,
                        imageSrc : imageSrc,
                        id : product.tshirtNumber,
                        originalPrice : product.originalPrice,
                        salePrice : product.salePrice,
                        Price : product.salePrice * quantity,
                        size: selectedSize,
                        quantity,
                    })
                }
                className="px-3 py-1 border text-sm sm:text-lg border-[#ccc] bg-[#eee] cursor-pointer rounded w-full"
            >
                Add to Cart
            </button>
            </div>
        </div>
    );
};

export default ProductCard;
