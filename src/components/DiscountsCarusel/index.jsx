import React, { useEffect, useState } from 'react'
import Container from '../../layout/Container'
import ProductCard from '../ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from '../CategoriesBlock/CategoriesBlock.module.scss'
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';



const DiscountsCarusel = () => {
    const [data, setData] = useState()

    const { like, cart: cartItems} = useSelector((state) => state)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:4000/discounts')
            const discounts = await res.json()
            setData(discounts)
        }

        fetchData()
    }, [])
    return (
        <Container className={classes['discounts']}>
            <h2 className={classes['discounts__title']}>Discounts</h2>
            {data &&
                <Swiper
                    navigation={true}
                    modules={[Navigation]} className="mySwiper"
                    slidesPerView={4}

                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((item) => (
                        <SwiperSlide>
                            <ProductCard
                                key={item.id}
                                data={item}
                                liked={item.id in like}
                                selected={item.id in cartItems}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }


        </Container>
    )
}

export default DiscountsCarusel