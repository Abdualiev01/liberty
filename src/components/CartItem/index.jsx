import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useSelector, useDispatch } from 'react-redux';


import classes from './Cart.module.scss'
import { addOne, removeFromCart, removeOne } from '../../redux/cart';

const CartItem = ({ img, name, id, quantity, price }) => {
    const dispatch = useDispatch()
    const totalPrice = price * quantity

    const handleRemove = () => dispatch(removeFromCart(id))
    const handlePlus = () => dispatch(addOne(id))
    const handleMinus = () => dispatch(removeOne(id))

    return (
        <div className={classes['cart_item']}>
            <img src={img} alt={name} className={classes['cart_item__image']} />
            <p className={classes['cart_item__name']}>{name}</p>
            <FontAwesomeIcon onClick={handleRemove} icon={faTrashCan} className={classes['cart_item__trash']} />
            <div className={classes['cart_item__controller']}>
                <button onClick={handleMinus}>-</button>
                {quantity}
                <button onClick={handlePlus}>+</button>
            </div>
            <p className={classes['cart_item__total']}>{totalPrice}TJS</p>
        </div>
    )
}

export default CartItem