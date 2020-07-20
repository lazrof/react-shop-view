import React, { useState } from 'react';
import MiniCartItem from './MiniCartItem';

const MiniCart = (props) => {

    const [show, setShow] = useState(props.showCart)
    
    let showClassNames  = show ? 'modal show' : 'modal';

    const closeMiniCart = (event) => {
        
        // Minicart will close if, click if outside of Cart or in the close <span>
        if (event.target.id === 'cart' || event.target.id === 'close') {
            setShow(false);
            props.closeCallback(false);
        }
        
    }

    const itemActions = (itemData, action) => {
        props.cartItemActionsCallback(itemData, 'remove');
        
    }

    const MiniCartItemsHandler = () => {
        return (
            props.items.map(item => {

                if (item.in_cart){
                    return (<MiniCartItem
                        key={item.name}
                        cartItemActionsCallback={itemActions}
                        itemData={item}
                    />)
                }
            })
        )
    }

    return (
        <div id="cart" className={showClassNames} onClick={closeMiniCart}>
            <div className="modal-content col-md-6" >
                <div className="cart-header">
                    <h3>Cart</h3>
                    <span id="close" className="close">&times;</span>
                </div>
                <div className="cart-body">
                    <MiniCartItemsHandler />
                </div>
            </div>
        </div>
    )
}

export default MiniCart;