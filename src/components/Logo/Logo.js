import React from 'react';

import burderLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burderLogo} alt="MyBurger" />
    </div>
);

export default logo;