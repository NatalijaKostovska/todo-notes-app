import React, { useEffect, useState } from 'react';
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

    return (
        <div className="header">
            Dashboard
            <div className='header-clock'>
                Clock
                <div className='clock-box'>
                    <div className='clock-day-month'><span>day</span> <span>Month</span></div>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Header