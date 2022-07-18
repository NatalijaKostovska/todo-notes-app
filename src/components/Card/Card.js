import React, { useEffect, useState } from 'react'
import './styles.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';

function Card({ item, handleRemove, handleStatus }) {

    let date = new Date().toDateString();
    return (
        <div className="card">
            <div className="container">
                <div className='card-header'>
                    <span>
                        {date}
                    </span>
                    <span onClick={() => handleStatus(item)}>
                        {item.status === 'Done' ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
                    </span>
                </div>
                <h4><b>To Do :</b></h4>
                <form className='form'>
                    <textarea placeholder='write your to do list here' defaultValue={item.text} />
                </form>
                <IconButton aria-label="delete" onClick={handleRemove} sx={{ padding: '0px !important', display: 'flex', marginLeft: 'auto' }}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    )
}

export default Card;