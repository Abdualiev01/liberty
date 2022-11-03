import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import DiscountsCarusel from '../../components/DiscountsCarusel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const {pathname} = useLocation();
  const [data, setData] = useState(null)
  const { like, cart: cartItems } = useSelector((state) => state)



  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/products?category=${type}`)
      const cards = await res.json()
      setData(cards)
    }
    fetchData()
  }, [type])

  return (
    <>
      <Header />
      
      <Container className={classes['card']}>
        {data &&
          data.map((card) => (
            <ProductCard
              key={card.id}
              data={card}
              className={classes['card-item']}
              liked={card.id in like} 
              selected={card.id in cartItems}
              />
          ))}
      </Container>
      <DiscountsCarusel />
    </>
  )
}

export default Category