import React from 'react'
import Badge from '../../components/Badge';
import CategoriesBlock from '../../components/CategoriesBlock';
import DiscountsCarusel from '../../components/DiscountsCarusel';
import Header from '../../components/Header';
import OrderForm from '../../components/OrderForm';

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Badge />
      <CategoriesBlock />
      <DiscountsCarusel />
      <OrderForm />
    </>
  )
}

export default Home