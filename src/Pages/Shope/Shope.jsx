import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shope = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
      <div className="flex justify-between mx-4">
        {/* it's for product */}
        <div className="w-[75%] bg-slate-500 grid grid-cols-2 gap-4 px-3 py-4">
          {products.map((product, index) => (
            <div>
              <div className="card bg-base-100  shadow-xl">
                <figure>
                  <img src={product.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.id}</h2>
                  <h2 className="card-title">{product.name}</h2>
                  <p>
                    Seller:{product.seller} price:{product.price} Stoke:
                    {product.stock}{" "}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* it' s for card section */}
        <div className="w-[22%] bg-black ">
          <h1>this is card</h1>
        </div>
      </div>
    );
};

export default Shope;