import React, { useState } from 'react';
import './styles.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';

function Card({
    item,
    handleRemove,
    handleStatus,
    handleOnTextboxChange }) {

    let date = new Date().toDateString();
    const [textArea, setTextArea] = useState(item.text);

    const handleChange = (e) => {
        setTextArea(e.target.value);
        let newCard = { ...item };
        // newCard.text = e.target.value;
        handleOnTextboxChange(newCard)

    }

    return (
        <div className="card">
            <div className="container">
                <div className='card-header'>
                    <span>
                        {date}
                    </span>
                    <span onClick={() => handleStatus(item)}>
                        {item.status === 'Done' ?
                            <CheckCircleOutline />
                            :
                            <RadioButtonUnchecked />
                        }
                    </span>
                </div>
                <h4><b>To Do :</b></h4>
                <form className='form'>
                    <textarea placeholder='write your to do list here' value={textArea}
                        onChange={(e) => handleChange(e)} />
                </form>
                <IconButton aria-label="delete" onClick={handleRemove} sx={{ padding: '0px !important', display: 'flex', marginLeft: 'auto' }}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    )
}

export default Card;