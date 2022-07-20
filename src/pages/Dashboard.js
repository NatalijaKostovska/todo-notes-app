import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card';
import './styles.css';
import Header from '../components/Header/Header';
import { Button, TextareaAutosize } from '@mui/material';
import SimpleDialog from '../components/SimpleDialog/SimpleDialog';
import empty from './../images/empty.png';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState('');
    let randomId = uuidv4();

    let cards = [
        {
            id: uuidv4(),
            text: 'Shopping',
            status: 'Undone'
        },
        {
            id: uuidv4(),
            text: 'Fitness',
            status: 'Undone'
        },
        {
            id: uuidv4(),
            text: 'Visit my grandmother',
            status: 'Done'
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
        setArrayOfCards(cards => [...cards, { id: randomId, text: value, status: 'Undone' }])
    };

    const handleStatus = (item) => {
        //find item with the id and set status Undone
        if (item.status === 'Done') {
            setArrayOfCards(current => current.map(i => {
                if (i.id === item.id) {
                    return { ...i, status: 'Undone' }
                }
                return i;
            }))
        }
        //find item with the id and set status Done
        else {
            setArrayOfCards(current => current.map(i => {
                if (i.id === item.id) {
                    return { ...i, status: 'Done' }
                }

                return i;
            }))
        }
    }

    const handleOnTextboxChange = (newCard) => {
        let arrOfCards = arrayOfCards.filter(card => card.id !== newCard.id)
        arrOfCards.push(newCard);
        setArrayOfCards(arrOfCards);
    }
    const handleRemove = (item) => {
        setArrayOfCards(arrayOfCards => arrayOfCards.filter(card => { return card.id !== item.id }));
    }
    return (
        <div className='dashboard'>
            <Header />
            IN PROGRESS
            <div className='cards'>
                {
                    arrayOfCards?.length === 0 ?
                        <img src={empty} /> :
                        arrayOfCards.filter(item => {
                            return item.status === 'Undone'
                        })
                            .map((item) =>
                                <div key={item.id}>
                                    <Card
                                        item={item}
                                        handleRemove={() => handleRemove(item)}
                                        handleStatus={() => handleStatus(item)}
                                        handleOnTextboxChange={handleOnTextboxChange}
                                    />
                                </div>
                            )
                }
            </div>
            <div className='button'>
                <Button
                    onClick={handleClickOpen}
                    variant="contained" >
                    Add Note </Button>
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                title={'Today\'s to-do list'}
            >
                <div className="card">
                    <div className="container">
                        <form className='form'>
                            <TextareaAutosize
                                minRows={5}
                                maxRows={5}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </form>
                    </div>
                    <Button
                        onClick={() => handleSave()}>
                        Save
                    </Button>
                </div>
            </SimpleDialog>
            DONE
            < div className='cards' >
                {
                    arrayOfCards.filter(item => {
                        return item.status === 'Done'
                    })
                        .map((item) =>
                            <div key={item.id}>
                                {console.log(item, arrayOfCards)}
                                <Card
                                    item={item}
                                    handleRemove={() => handleRemove(item)}
                                    handleStatus={() => handleStatus(item)}
                                    handleOnTextboxChange={handleOnTextboxChange}
                                />
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Dashboard;
