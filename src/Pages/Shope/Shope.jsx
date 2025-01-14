import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Shope = () => {
  const [addProduct, setAddProduct] = [];
  const products = useLoaderData();
  const handleBuy = (pro) => {
    // console.log(pro?.id);
    
  };
  // console.log(products)
  return (
    <div className="flex justify-between mx-2">
      {/* it's for product */}
      <div className="w-[70%] bg-slate-500 md:grid grid-cols-2 gap-2 px-3 py-4">
        {products.map((product, index) => (
          <div>
            <div className="card bg-base-100  shadow-xl">
              <figure>
                <img
                  src={product?.img || "/public/download.png"}
                  alt={product?.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.id}</h2>
                <h2 className="card-title">{product.name}</h2>
                <p>
                  Seller:{product.seller} price:{product.price} Stoke:
                  {product.stock}{" "}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleBuy(product)}
                    className="btn btn-primary w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* it' s for card section */}
      <div className="w-[29%] h-72 bg-black fixed right-1 ">
        <Card></Card>
      </div>
    </div>
  );
};

export default Shope;
