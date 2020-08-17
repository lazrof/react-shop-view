import React from 'react';
import SideBar from './SideBar/SideBar';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import OrdersGrid from './OrdersGrid/OrdersGrid';
/* import { connect } from 'react-redux'; */

const MyStore = (props) =>  {

    return (
        <>
        <div className="container-fluid px-4 py-4">
            <div className="row">
                <div className="col-5 col-md-3">
                    <SideBar />
                </div>
                <div className="col-7 col-md-9">
                    {/* <ProductsContainer /> */}
                    <OrdersGrid />
                </div>
            </div>
        </div>
        </>
    )
}


export default MyStore;