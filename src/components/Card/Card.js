import React, { useState } from 'react';
import './styles.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import { ClickAwayListener } from '@mui/material';

function Card({
    item,
    handleRemove,
    handleStatus,
    handleOnTextboxChange }) {

    let date = new Date().toDateString();
    const [textArea, setTextArea] = useState(item.text);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setTextArea(e.target.value);
        let newCard = { ...item, text: e.target.value };
        handleOnTextboxChange(newCard);
    }
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="card" onClick={() => setOpen(true)}>
                <div className="container">
                    <div className='card-header'>
                        <span className='date'>
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
                    {
                        open ?
                            <form className='form'>
                                <textarea placeholder='write your to do list here' value={textArea}
                                    onChange={(e) => handleChange(e)} />
                            </form>
                            :
                            <div>{textArea}</div>
                    }

                    <IconButton aria-label="delete" onClick={handleRemove} sx={{ padding: '0px !important', display: 'flex', marginLeft: 'auto' }}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default Card;