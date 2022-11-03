import React from 'react'
import Header from './../../components/Header/index';
import { useSelector } from 'react-redux';
import Container from './../../layout/Container/index';
import ProductCard from './../../components/ProductCard/index';
import Title from './../../components/Title/index';

import classes from './Cart.module.scss'
import DiscountsCarusel from './../../components/DiscountsCarusel/index';
import CartItem from './../../components/CartItem/index';

const Cart = () => {
    const { cart } = useSelector((state) => state)
    const items = Object.values(cart);
    const cartEmpty = items.length === 0

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <>
            <Header />
            <Container className={classes['cards']}>
                {cartEmpty ? (<Title>Cart is Empty😥</Title>) : <Title className={classes['title']}>Cart</Title>}
                {!cartEmpty &&
                    items.map((card) => <CartItem key={card.id} {...card} />)}
                {!cartEmpty && (<>
                        <div className={classes['total']}>
                            <p className={classes['total__description']}>Total:</p>
                            <p className={classes['total__amount']}>{total}$</p>
                        </div>
                        <button className={classes['order-button']}>
                            Order
                        </button>
                    </>
                )}
            </Container>
            <DiscountsCarusel />
        </>

    )
}

export default Cart