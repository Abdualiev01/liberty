import React from 'react'
import { useSelector } from 'react-redux'
import DiscountsCarusel from '../../components/DiscountsCarusel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import Container from '../../layout/Container'
import classes from './Favorite.module.scss'
const Favorite = () => {
    const { like, cart: cartItems } = useSelector(state => state)

    const items = Object.values(like)
    return (
        <>
            <Header />
            {items.length ? (
                <>
                    <Title>Favorite Products</Title>
                    <Container className={classes['card']}>
                        {items.map((card) => (
                            <ProductCard
                                key={card.id}
                                data={card}
                                className={classes['card-item']}
                                liked={card.id in like} 
                                selected = {card.id in cartItems}
                                />
                        ))}
                    </Container>

                </>
            ) : (
                <Title>You don't have 😥</Title>
            )}

            <DiscountsCarusel />
        </>
    )
}

export default Favorite