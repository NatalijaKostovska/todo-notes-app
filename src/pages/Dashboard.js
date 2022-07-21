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

    let cards = [
        {
            id: uuidv4(),
            text: 'Shopping',
            status: 'Undone',
            sortNumber: 1
        },
        {
            id: uuidv4(),
            text: 'Fitness',
            status: 'Undone',
            sortNumber: 2
        },
        {
            id: uuidv4(),
            text: 'Visit my grandmother',
            status: 'Done',
            sortNumber: 3
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
        setArrayOfCards(cards => [...cards, { id: uuidv4(), text: value, status: 'Undone', sortNumber: cards.length + 1 }]);
        setOpen(false);
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
        let arr = arrOfCards.sort((a, b) => a.sortNumber - b.sortNumber);
        setArrayOfCards(arr);
    }

    const handleRemove = (item) => {
        setArrayOfCards(arrayOfCards => arrayOfCards.filter(card => { return card.id !== item.id }));
    }

    let doneTasks = arrayOfCards.filter(item => {
        return item.status === 'Done'
    })


    let unDoneTasks = arrayOfCards.filter(item => {
        return item.status === 'Undone'
    })
    return (
        <div className='dashboard'>
            <Header />
            <span className='main-text'>IN PROGRESS {unDoneTasks.length === 0 ? 'You completed the tasks.' :
                unDoneTasks.length + '/' + arrayOfCards.length}</span>
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
                    variant="contained"
                    sx={{ borderRadius: '50px', backgroundColor: '#1abc9c' }}
                >
                    Add Note
                </Button>
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                title={'Today\'s to-do list'}
            >
                <div className="popup-card">
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
            <span className='main-text'>
                DONE {doneTasks.length + '/' + arrayOfCards.length} </span>
            < div className='cards' >
                {
                    arrayOfCards.filter(item => {
                        return item.status === 'Done'
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
        </div>
    )
}

export default Dashboard;
