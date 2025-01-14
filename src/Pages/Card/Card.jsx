import React from 'react';

const Card = () => {
    return (
      <div className="text-white p-6 leading-6">
        <h1 className="text-3xl">Selected Items:5</h1>
        <h1 className="text-2xl">Shipping Charge:20</h1>
        <h1 className="text-xl">Price:$120</h1>
        <h1 className="text-xl">tax:$10</h1>
        <h1 className="text-3xl">Total Price:$142.23</h1>
        <div className="text-xl pt-2 flex gap-8">
          <button className='btn btn-secondary'>Clear Cart</button>
          <button className='btn btn-accent'>Process Order</button>
        </div>
      </div>
    );
};

export default Card;