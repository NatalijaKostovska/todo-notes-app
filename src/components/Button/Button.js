import React from 'react';
import './styles.css';

function Button({ name, handleClickOpen }) {
    return (
        <button onClick={handleClickOpen}>{name}</button>
    )
}

export default Button;
