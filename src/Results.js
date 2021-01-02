import React, { useState } from 'react'
import AdminUpcoming from './AdminUpcoming';
import app from './base';
import NavigationBar from './NavigationBar'
import "./Results.css"

const Results = () => {
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let today = new Date().getTime();
    const [upcomingEvents, setUpcomingEvents] = useState([]);


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await app.firestore().collection('events').orderBy("date").get();
                data.docs.forEach((res) => {
                    if(today.valueOf() < res.data().date.toDate().valueOf()) {
                        setUpcomingEvents(oldEvents => [...oldEvents, res.data()]);
                    }
                });
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, []);

    

    return (
        <div> 
            <NavigationBar />
            <div className="resultSection">
                <div className="selectionTabs">
                    <button>Sports</button>
                    <button>Cultural</button>
                </div>
                <div className="searchEventBar">
                    <i className="fas fa-search" style={{marginRight: 10, marginLeft: 10}}/>
                    <span>Search and Select the Event</span>
                </div>
                <div className="eventDate">
                    {months[month]} {date}, {year} 
                </div>
            </div>
            {
                upcomingEvents.map((res) => {
                    return <AdminUpcoming slot={res.Slot} event={res.eventname} team1={res.Team1} team2={res.Team2}/>
                })
            }
            <div className="footer">
                    <div>
                        <h3>Coordinators:</h3>
                        <h5>Name 1</h5>
                    </div>
                    <div>
                        <h3>Contacts:</h3>
                        <h5>403920</h5>
                    </div>
            </div>
        </div>
    )
}

export default Results
