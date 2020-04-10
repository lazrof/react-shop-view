import React from 'react';

const MiniCartItem = (props) => {


    return(
        <div className="row py-3">
            <div className="col-3">
                <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="{name}" />
            </div>
            <div className="col-4">
                <div className="item-col">
                    <p>Product Title</p>
                </div>
            </div>
            <div className="col-3">
                <div className="item-col">
                    <input type="number" min="1" placeholder="1" />
                </div>
            </div>
            <div className="col-2">
                <div className="item-col">
                    <span className="delete-item">&times;</span>
                </div>
            </div>
        </div>
    )

}

export default MiniCartItem;