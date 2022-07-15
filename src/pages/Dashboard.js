import React, { useState } from 'react'
import Card from '../components/Card/Card';
import './styles.css';
import Header from '../components/Header/Header';
import { Button, Input, TextareaAutosize } from '@mui/material';
import SimpleDialog from '../components/SimpleDialog/SimpleDialog';
import empty from './../images/empty.png'
function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState('');
    let randomId = Math.random().toString(36).substring(0, 5);

    let cards = [
        {
            id: '1',
            text: 'Shopping'
        },
        {
            id: '2',
            text: 'Fitness'
        },
        {
            id: '3',
            text: 'Visit my grandmother'
        }
    ];

    const [arrayOfCards, setArrayOfCards] = useState([...cards]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setArrayOfCards(cards => [...cards, { id: randomId, text: value }])
    };

    const handleRemove = (item) => {
        console.log('rtger', item)
        setArrayOfCards(cards => cards.filter(card => { return card.id !== item.id }))

    }
    return (
        <div className='dashboard'>
            <Header />
            <div className='cards'>
                {
                    arrayOfCards.length === 0 ?
                        <img src={empty} /> :
                        arrayOfCards?.map((item) =>
                            <div key={item.key}>
                                <Card item={item} handleRemove={() => handleRemove(item)} />
                            </div>
                        )
                }
            </div>
            <div className='button'>
                <Button onClick={handleClickOpen} variant="contained" > Add Note </Button>
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                title={'Today\'s to-do list'}
            >
                <div className="card">
                    <div className="container">
                        <form className='form'>
                            <TextareaAutosize minRows={5} maxRows={5} onChange={(e) => setValue(e.target.value)} />
                        </form>
                    </div>
                    <Button onClick={() => handleSave()}>Save</Button>
                </div>
            </SimpleDialog>
        </div >

    )
}

export default Dashboard;