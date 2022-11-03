import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Container from '../../layout/Container';
import classes from "./Header.module.scss";
import logo from '../../images/logo.png'
import { categories } from '../../routs/categories';
import { useSelector } from 'react-redux';
import { getItemsCount } from './../../redux/cart/index';




const Header = () => {
  const location = useLocation();
  const cartItemsCount = useSelector(getItemsCount)
  console.log(useSelector(getItemsCount));

  return (
    <div>
      <header className={classes['header']}>
        <Container className={classes['header__container']}>
          <Link to='/' className={classes['header__logo']}>
            <img src={logo}
              alt="Liberty" />
          </Link>
          <Link to='/favorite'>
            <FontAwesomeIcon
              icon={faHeart}
              className={classes['header__heart']}
            />
          </Link>

          <Link to='/cart' className={classes['header__bag__wrapper']}>
            <FontAwesomeIcon
              icon={faBagShopping}
              className={classes['header__bag']}
            />
            {Boolean(getItemsCount) &&<p className={classes['header__bag__count']}>{cartItemsCount}</p>}

          </Link>
        </Container>
        <Container>
          <div className={classes['header__c']}>
            <ul className={classes['header__list']}>
              {categories.map((link) => (
                <li key={link.category}>
                  <Link to={link.category} className={classNames(classes['header__link'], {
                    [classes['header__link__active']]:
                      location.pathname === link,
                  })}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </Container>
      </header>
    </div>
  )
}

export default Header