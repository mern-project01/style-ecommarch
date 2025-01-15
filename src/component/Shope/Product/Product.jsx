import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = ({handleBuy}) => {
    const products = useLoaderData()
    return (
      
   
          <div className=" bg-slate-500 md:grid grid-cols-2 gap-2 px-3 py-4">
            {products.map((product, index) => (
              <div key={product?.id || index}>
                <div className="card bg-base-100  shadow-xl">
                  <figure>
                    <img
                      src={product?.img || "/download.png"}
                      alt={product?.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.id}</h2>
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className="card-title">{product.quantity}</h2>

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
          
          
      
    );
};

export default Product;