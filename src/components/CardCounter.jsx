'use client'
import React from 'react';

const CardCounter = ({friends}) => {
    
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="bg-base-200 p-6 rounded-2xl">
                <h1 className="font-semibold text-3xl">{friends.length}</h1>
                <p className="">Total friends</p>
            </div>
            <div className="bg-base-200 p-6 rounded-2xl">
                <h1 className="font-semibold text-3xl">3</h1>
                <p className="">On Track</p>
            </div>
            <div className="bg-base-200 p-6 rounded-2xl">
                <h1 className="font-semibold text-3xl">6</h1>
                <p className="">Need Attention</p>
            </div>
            <div className="bg-base-200 p-6 rounded-2xl">
                <h1 className="font-semibold text-3xl">12</h1>
                <p className="">Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardCounter;