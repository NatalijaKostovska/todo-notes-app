import React, { useEffect, useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './styles.css';

function Weather({ }) {
    const [currentWeather, setCurrentWeather] = useState({
    });

    // open weather key
    const apiKey = '910223db7244fe5348d517710ba36961';
    let [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=Skopje,MK&appid=${apiKey}&units=metric`);

    useEffect(() => {
        const getWeather = async () => {
            let res = await fetch(url);
            res = await res.json();
            let { description, icon } = res.weather[0];
            let { temp, feels_like } = res.main;
            setCurrentWeather({
                temp,
                feels_like,
                description,
                icon,
                name: `${res.name}, ${res.sys.country}`,
                lat: res.coord.lat,
                lon: res.coord.lon
            });

        };
        getWeather();
    }, [url])

    return (
        <div>
            <div>{currentWeather.temp} &deg; {' '}
                <span>
                    {currentWeather.temp > 13 ?
                        <WbSunnyIcon style={{ color: 'yellow' }} /> :
                        currentWeather <= 10 ?
                            <AcUnitIcon /> : <FilterDramaIcon />
                    }
                </span>
            </div>

            <div className='feels-like-weather'><span>Feels like: </span>{currentWeather.feels_like}</div>

        </div>
    )
}

export default Weather