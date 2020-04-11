import React, { useState } from 'react';

const Item = (props) =>  {
    //console.log(props.itemData);
    const [itemAdded, setItemAdded] = useState(props.itemData.in_cart);
    const { name, price, type } = props.itemData;

    const AddToCartButton = (props) => {
        if (props.inCart) {
            return <p className="add-to-cart" onClick={openCart}><i className="fas fa-shopping-cart"></i></p>
        } else {
            return <p className="add-to-cart" onClick={addToCart}>Add to Cart</p>
        }
    }

    const openCart = (e) => {
        e.preventDefault();
        props.toggleMiniCartCallback(true);
    }

    // Dentro de addToCart podemos pasarle la info al componente padre y que el administre la guardada al carrito
    const addToCart = () => {
        setItemAdded('added');
        // sending the children componente data to the parent component
        props.cartItemActionsCallback(props.itemData, 'add');
    }

    const removeOfCart = () => {
        setItemAdded(false);
        props.cartItemActionsCallback(props.itemData, 'remove');
    }

    // De forma similar a componentDidMount y componentDidUpdate

    //sendData();
    return(
        <div className="col-md-4">
            <div className="item py-3">
                <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="{name}" />
                <div>
                    <div className="item-info">
                        <p className="info">{name} <span className="price"> ${price}</span></p>
                        <AddToCartButton inCart={itemAdded} />
                    </div>
                    <div>
                        <p className="item-cat">{type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;