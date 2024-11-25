import { Minus, Add, Trash } from "iconsax-react"

import "./CartResume.css"

const CartResume = () => {
    return (
        <div className="cart__resume">
            <table className="cart__table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732313890/avatar_fkbgpm.jpg" alt="" />
                        </td>
                        <td>Nombre del Producto</td>
                        <td>
                            <button><Minus /></button>
                            5
                            <button><Add /></button>
                        </td>
                        <td>
                            <button className="delete__item">
                                <Trash />
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>Total a pagar: S/. 50.00</h3>

        </div>
    )
}

export default CartResume
