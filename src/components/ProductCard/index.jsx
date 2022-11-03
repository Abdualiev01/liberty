import classNames from 'classnames'
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import classes from './ProductCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleLike } from '../../redux/favorite';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart';




const ProductCard = ({ className, data, liked, selected }) => {
    const dispatch = useDispatch();
    const selectItem = () => {
        dispatch(selected ? removeFromCart(data.id) : addToCart(data))
    }


    const handleLikeButtonClick = () => dispatch(handleLike(data));

    return (

        <div className={classNames(classes['card'], className)}>
            <img src={data.image[0]} alt={data.name} className={classes['card__image']} />
            <h3 className={classes['card__title']}>{data.name}</h3>
            <p className={classes['card__price']}>
                {data.price}TJS.
                {data.discount && <span className={classes['card__discount']}>{data.discount}TJS.</span>}
            </p>
            <button onClick={selectItem}
                className={classNames(
                    classes['card__button'],
                    selected && classes['card__button__selected']
                )}>
                {selected ? 'Added' : 'Add To Card'}
            </button>
            <button className={classes['card__like']} onClick={handleLikeButtonClick}>
                <FontAwesomeIcon
                    icon={liked ? faHeartSolid : faHeartRegular}
                />
            </button>

        </div>

    )
}

export default ProductCard