import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage : 'url(https://i0.wp.com/www.citybike.com/wp-content/uploads/2018/07/Honda-CB650F-ABS-CityBike-MK12.jpg?ssl=1)'
                    
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Un nuevo dia Un nuevo dia Un nuevo dia Un nuevo dia Un nuevo dia</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
