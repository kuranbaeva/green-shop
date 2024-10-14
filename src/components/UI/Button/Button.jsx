import React from 'react'
import styles from '../../UI/Button/Button.module.scss'

export default function Button({ children, className = '', ...attrs }) {
    const { ...restAttrs } = attrs;

    return (
        <button
            {...restAttrs}
            className={`${styles.btn} ${className}`} 
        >
            {children}
        </button>
    );
}
