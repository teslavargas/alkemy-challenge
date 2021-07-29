import React from 'react';
import styles from '../login/LoginScreen.module.css';

const ErrorMsg = ({text}) => {
    return (
        <div className={styles.error}>
            <p>{text}</p>
        </div>
    )
}

export default ErrorMsg; 