import React from 'react'
import './styles.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Card({ item, handleRemove }) {

    let date = new Date().toDateString()
    return (
        <div className="card">
            <div className="container">
                {date}
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