import React from 'react';
import './orders-grid.scss';

const OrdersGrid = (props) =>  {

    return (
        <>
        <div className="row no-gutters">
            <div className="col-12">
                <div className="form-group">
                    <input type="email" placeholder="Buscar en Pedidos" className="form-control" aria-describedby="Buscar Pedidos"></input>
                    <small id="emailHelp" className="form-text text-muted">Puedes buscar por ID, fecha o nombre del producto.</small>
                </div>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Nombre del Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>05/05/2020</td>
                        <td>Harina Pan</td>
                        <td>2</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>05/05/2020</td>
                        <td>Harina Pan</td>
                        <td>2</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>05/05/2020</td>
                        <td>Harina Pan</td>
                        <td>2</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>05/05/2020</td>
                        <td>Harina Pan</td>
                        <td>2</td>
                        <td>$10</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}


export default OrdersGrid;