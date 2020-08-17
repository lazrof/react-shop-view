import React from 'react';
import { connect } from "react-redux";
import SideBar from './SideBar/SideBar';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import OrdersGrid from './OrdersGrid/OrdersGrid';
/* import { connect } from 'react-redux'; */

const MyStore = (props) =>  {

    const Views = () => {
        console.log(props.currentView)
        switch (props.currentView) {
            case 'productsView':
                return <ProductsContainer />
                break;

            case 'ordersView':
                return <OrdersGrid />
                break;
        
            default:
                return ''
                break;
        }
    }

    return (
        <>
        <div className="container-fluid px-4 py-4">
            <div className="row">
                <div className="col-5 col-md-3">
                    <SideBar />
                </div>
                <div className="col-7 col-md-9">
                    <Views />
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      currentView: state.myStoreReducer.currentView,
    };
}
  
export default connect(mapStateToProps, null)(MyStore);

//export default MyStore;