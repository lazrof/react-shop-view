import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductContainer = (props) =>  {

    return (
        <>
            <div className="row">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    )
}


export default ProductContainer;