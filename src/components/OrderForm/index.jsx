import React, { useState, useEffect } from 'react'
import Container from '../../layout/Container'

import img from '../../images/catigories/OrderForm.png'

import classes from './OrderForm.module.scss'
import { classNames } from 'classnames';
import { validateName, vPhoneNumber, validateText } from './helper';


const initialData = {
    name: '',
    tel: '',
    text: ''
}

const OrderForm = () => {
    const [fields, setFields] = useState(initialData)
    const [disabled, setDisabled] = useState(true)
  
    useEffect(() => {
      const isValid =
        validateName(fields.name) &&
        vPhoneNumber(fields.tel) &&
        validateText(fields.text)
      setDisabled(!isValid)
    }, [fields])

    const handleChange = (e) => {

        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFields(initialData)
    }
    return (
        <Container className={classes['order-form']}>
            <h2 className={classes['order-form__title']}>Order Cool Sneakers</h2>
            <form className={classes['order-form__form']}>
                <div className={classes['order-form__fields']}>
                    <input className={classes['order-form__input']}
                        type="text"
                        placeholder='Name*'
                        onChange={handleChange}
                        value={fields.name}
                        name="name"></input>
                    <input className={classes['order-form__input']}
                        type="tel"
                        placeholder='Phone Number*'
                        onChange={handleChange}
                        value={fields.tel}
                        name="tel"></input>
                    <textarea className={classes['order-form__textarea']} placeholder='Your Ideas*' onChange={handleChange} value={fields.text} name="text"></textarea>
                    
                    <button onClick={handleSubmit} className={classes['order-form__button']} disabled={disabled}>
                        Send
                    </button>

                </div>
                <img className={classes['order-form__image']} src={img} alt="Sneakers" />
            </form>
        </Container>
    )
}

export default OrderForm