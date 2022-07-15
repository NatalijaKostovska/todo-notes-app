import React, { useState } from 'react'
import Card from '../components/Card/Card';
import './styles.css';
import Header from '../components/Header/Header';
import { Button, Input } from '@mui/material';
import SimpleDialog from '../components/SimpleDialog/SimpleDialog';

function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState('');
    let randomId = Math.random().toString(36).substring(0, 5);

    let cards = [
        {
            id: '1',
            text: 'test1'
        },
        {
            id: '2',
            text: 'test2'
        },
        {
            id: '3',
            text: 'test3'
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
                    arrayOfCards?.map((item) =>
                        <div key={item.key}>
                            <Card item={item} handleRemove={() => handleRemove(item)} />
                        </div>
                    )
                }
            </div>
            <Button onClick={handleClickOpen}> Add Note </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                title={'Add new note'}
            >
                <div className="card">
                    <div className="container">
                        <form className='form'>
                            <Input onChange={(e) => setValue(e.target.value)} />
                        </form>
                    </div>
                    <Button onClick={() => handleSave()}>Save</Button>
                </div>
            </SimpleDialog>
        </div>

    )
}

export default Dashboard;