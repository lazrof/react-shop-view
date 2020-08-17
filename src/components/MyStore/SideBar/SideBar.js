import React from 'react';
import { connect } from 'react-redux';
import { setDashboardView } from '../../../redux/actions/my-store/my-store';
import './sidebar.scss';


const SideBar = (props) =>  {

    const setView = (event) => {
        console.log('click setView');
        console.log(event.target.id)
        props.setDashboardView(event.target.id);
    }

    return (
        <>
        <div className="side-bar">
            <div className="top-items">
                <div className="box mb-5 py-3">
                    <div className="store-logo">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <h4>Abasto Rio Verde</h4>
                </div>
                <button id="productsView" className="box hover clickable" onClick={setView}>
                    <p>Productos</p>
                </button>
                <button id="ordersView" className="box hover clickable" onClick={setView}>
                    <p>Pedidos</p>
                </button>
                <button id="ordersView" className="box hover clickable" onClick={setView}>
                    <p>Ajustes</p>
                </button>
            </div>
            <div className="bottom-items">
                <div className="box clickable inverted">
                    <p>Administrar Tiendas</p>
                </div>
            </div>
        </div>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//       serverResponse: state.userReducer.response,
//       isAuthenticated: state.userReducer.authenticated,
//       registerSuccess: state.userReducer.registerSuccess
//     };
// }
  
const mapDispatchToProps = {
    setDashboardView
}
  
export default connect(null, mapDispatchToProps)(SideBar);