import React, { useState } from 'react'
import './styles.css';
import Button from '@mui/material/Button';

function Card({ item }) {

    let date = new Date().toDateString()
    return (
        <div className="card">
            <div className="container">
                {date}
                <h4><b>To Do :</b></h4>
                <form className='form'>
                    <textarea placeholder='write your to do list here' defaultValue={item.text} />
                </form>
                <Button>Delete</Button>
            </div>
        </div>
    )
}

export default Card;