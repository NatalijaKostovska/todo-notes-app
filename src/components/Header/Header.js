import React, { useEffect, useState } from 'react';
import Weather from '../Weather/Weather';
import './styles.css';

function Header() {

    const [time, setTime] = useState();
    const getTime = () => {
        let today = new Date();
        setTime(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())
    }

    useEffect(() => {
        setInterval(() => getTime(), 1000);
    }, [time])
    let hours = new Date().getHours();
    return (
        <div className="header">
            <div>
                <div>
                    {hours >= 6 && hours <= 12 && 'Good Morning'}
                    {hours >= 12 && hours <= 17 && 'Good Afternoon'}
                    {hours >= 17 && hours <= 22 && 'Good Evening'}
                    {hours >= 22 || hours <= 6 && 'Good Night'}
                </div>
                {time}
            </div>
            <div className='header-clock'>
                <div>
                    {new Date().toDateString()}
                </div>
                <div className='clock-box'>
                    <Weather />
                </div>
            </div>
        </div>
    )
}

export default Header