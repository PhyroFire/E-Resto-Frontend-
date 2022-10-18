import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../config'
import {  getDeliveryByID } from '../../redux/actions'
import { buttonclass } from '../../Style/Clases/Clases'
import OrderDelivery from '../OrderDelivery/OrderDelivery'
import './DeliveryProfile.css'

export default function DeliveryProfile () {


    const dispatch = useAppDispatch()
    const token = JSON.parse(localStorage.getItem("delivery")!);


    useEffect(() => {
        dispatch(getDeliveryByID(token))
    }, [])


    let delivery = useAppSelector(state => state.deliveryProfile)
    const handleLogout = () => {
        localStorage.setItem("delivery", JSON.stringify([]))
        window.location.reload()
    }

    return (
        <div className="delivery-conteiner">
            {
                delivery ?
                <div className='delivery-profile-conteiner'>
                    <aside className='aside-delivery-conteiner'>
                        <div>
                            <img width={400} alt='asd' src={delivery.img}></img>
                            <span>{delivery.name} {delivery.lastName}</span>
                            <br></br>
                            <button className={buttonclass}> Pedido Actual </button>
                            <br></br>
                            <button className={buttonclass}> Historial de Pedidos </button>
                            <br></br>
                            <button onClick={handleLogout} className={buttonclass}> Cerrar Sesion </button>
                        </div>
                    </aside>
                    <div className='order-delivery-conteiner'>
                        {
                            delivery.orders ?
                            <OrderDelivery delivery={delivery._id} detalles={delivery.orders}></OrderDelivery>
                            :
                            <h1>Cargando..</h1>
                        }
                    </div>
                </div>
                :
                <h1>CARGANDO..</h1>
            }
        </div>
    )
}