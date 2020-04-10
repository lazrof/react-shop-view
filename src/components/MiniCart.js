import React, { useState } from 'react';
import MiniCartItem from './MiniCartItem';

const MiniCart = (props) => {

    const [show, setShow] = useState(props.showCart)
    const [miniCartItems, setMiniCartItems] = useState(props.items)
    
    /* console.log('show');
    console.log(show); */
    let showClassNames  = show ? 'modal show' : 'modal';

    const closeMiniCartFromOutside = (event) => {
        
        if (event.target.id === 'cart') {
            setShow(false);
            props.closeCallback(false);
            //console.log('closing mini cart');
        } 
        
    }

    // Bind the event listener
    //document.addEventListener("mousedown", handleClickOutside);
    
        // Unbind the event listener on clean up
    /* document.addEventListener("mousedown", function (event) {
        console.log(event);
    }); */
    

    return (
        <div id="cart" className={showClassNames} onClick={closeMiniCartFromOutside}>
            <div className="modal-content col-md-6" >
                <div className="cart-header">
                    <h3>Cart</h3>
                    <span className="close">&times;</span>
                </div>
                <div className="cart-body">
                    {miniCartItems.map(item => <MiniCartItem />)}
                </div>
            </div>
        </div>
    )
}

export default MiniCart;