import React from 'react'
import classes from "./Container.module.scss";

const Container = ({className, children}) => {
    
  return ( 
    <div className={`${classes['container']} ${className}`}>{children}</div>
  )
}

export default Container 