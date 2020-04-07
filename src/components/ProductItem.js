import React from 'react';

const ProductItem = (props) =>  {
    console.log(props.itemData);
    const { name, price, type } = props.itemData;
    return(
        <div className="col-md-4">
            <div className="item py-3">
                {/* <img className="img-fluid" src={require('../img/daft-punk.jpg')} alt="" /> */}
                
                <img className="img-fluid" src= "https://i0.wp.com/marvin.com.mx/wp-content/uploads/2019/08/Black-Album-1.jpg?resize=759%2C500&ssl=1" alt="" />
                <div>
                    <div className="product-info">
                        <p class="info">{name} <span className="price"> ${price}</span></p>
                        <p className="add-to-cart">Add to Cart</p>
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