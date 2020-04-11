import React, { useState } from 'react';

const MiniCartItem = (props) => {

    const [itemAdded, setItemAdded] = useState(props.itemData.in_cart);
    const { name, price, type } = props.itemData;

    const removeOfCart = () => {
        console.log('removeOfCart - MiniCartItem');
        setItemAdded(false);    
        props.cartItemActionsCallback(props.itemData, 'remove');
    }

    if (itemAdded){

        return(
            <div className="row py-3">
                <div className="col-3">
                    <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="{name}" />
                </div>
                <div className="col-4">
                    <div className="item-col">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="item-col">
                        <input type="number" min="1" placeholder="1" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="item-col">
                        <span className="delete-item" onClick={removeOfCart}>&times;</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return ''
    }

}

export default MiniCartItem;