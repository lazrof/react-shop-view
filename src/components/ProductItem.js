import React, { useState, useEffect } from 'react';

const ProductItem = (props) =>  {
    //console.log(props.itemData);
    const [productAdded, setproductAdded] = useState(false);
    const { name, price, type } = props.itemData;

    const AddToCartButton = (props) => {
        if (props.added == 'added') {
            return <p className="add-to-cart" onClick={removeOfCart}>Añadido</p>
        } else {
            return <p className="add-to-cart" onClick={addToCart}>Add to Cart</p>
        }
    }

    // Dentro de addToCart podemos pasarle la info al componente padre y que el administre la guardada al carrito
    const addToCart = () => {
        
        setproductAdded('added');
        // sending the children componente data to the parent component
        props.parentCallback(props.itemData);
        console.log(productAdded);
    }

    const removeOfCart = () => {
        setproductAdded(false);
        console.log(productAdded);
        props.parentCallback(props.itemData);
    }

    // De forma similar a componentDidMount y componentDidUpdate

    //sendData();
    return(
        <div className="col-md-4">
            <div className="item py-3">
                <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="{name}" />
                <div>
                    <div className="product-info">
                        <p className="info">{name} <span className="price"> ${price}</span></p>
                        <AddToCartButton added={productAdded} />
                    </div>
                    <div>
                        <p className="product-cat">{type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;