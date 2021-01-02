import React, { useContext, useState } from 'react'
import { AuthContext } from './Auth';
import AdminUpcoming from './AdminUpcoming';
import app from './base'
import NavigationBar from './NavigationBar';
import "./Schedule.css"

const Schedule = () => {
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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
            <hr/>
            <br/>

            <div className="selectionTabs">
                    <button>Sports</button>
                    <button>Cultural</button>
            </div>
            <br/>

            <div className="resultSection">
                <div className="eventDate">
                    {months[month]} {date}, {year} 
                </div>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>
            <br/>

            <div className="resultSection">
                <div className="eventDate">
                    {months[month]} {date}, {year} 
                </div>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>
            
            <br/>
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

export default Schedule
