import React from 'react'
import classes from './Badge.module.scss'
import badgeImg from '../../images/ae.png'
import badgeImg1 from '../../images/ae1.png'


const Badge = () => {
    return (
        <div className={classes['badge']}>
            <div className={classes['badge__img']}>
            <img src={badgeImg1} alt="" />
            </div>
            <div className={classes['badge__context']}>
                <h1 className={classes['badge__title']}>NEW!</h1>
                <h1 className={classes['badge__title']}>MUST-HAVES</h1>
                <p className={classes['badge__text']}>On-trend, supremely soft essentials 
                    that work with everything.</p>
            </div>
            <div className={classes['badge__img']}>
                <img src={badgeImg} alt="" />
            </div>
        </div>
    )
}

export default Badge