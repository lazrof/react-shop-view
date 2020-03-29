import React from 'react';

const ProductItem = () =>  {
    return(
        <div className="col-md-4">
            <div className="item py-3">
                <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="" />
            </div>
        </div>
    )
}

export default ProductItem;