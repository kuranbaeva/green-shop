import React, { useEffect } from 'react';
import styles from '../../../components/UI/Loading/Loading.module.scss'


const LoadingBar = () => {
  

    return (
        <div className={styles.loading_bar}>
            <div className={styles.loading_bar__progress}></div>
        </div>
    );
};

export default LoadingBar;
