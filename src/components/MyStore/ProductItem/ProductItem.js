import React from 'react';
import './product-item.scss';

const ProductItem = (props) =>  {

    return (
        <>  
            <div className="col-3">
                <div class="product-card">
                    <small>Despensa</small>
                    <p className="product-title">Harina Pan 1kg</p>
                    <img className="img-fluid" src={require('../../../img/harina-pan.png')} alt="Harina Pan"/>
                    <div className="card-bottom">
                        <div className="price">200.000 Bs.S</div>
                        <button className="btn buy">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductItem;