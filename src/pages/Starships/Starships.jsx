import React from 'react';
import { Link } from "react-router-dom";
import styles from './Starships.module.css';

const Starships = (props) => {
    return (<div className={styles.Starships}>
        <div className={styles.ship}>
            <p><strong>NAME:</strong> {props.result.name}</p>
            <p><strong>MODEL:</strong> {props.result.model}</p>
            <Link to="/">Return</Link>
        </div>
    </div>);
}
export default Starships;