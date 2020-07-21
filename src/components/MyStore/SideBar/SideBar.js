import React from 'react';
import './sidebar.scss';
/* import { connect } from 'react-redux'; */

const SideBar = (props) =>  {

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
                <div className="box hover clickable">
                    <p>Productos</p>
                </div>
                <div className="box hover clickable">
                    <p>Pedidos</p>
                </div>
                <div className="box hover clickable">
                    <p>Ajustes</p>
                </div>
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


export default SideBar;