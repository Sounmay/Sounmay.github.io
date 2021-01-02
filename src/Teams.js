import React from 'react'
import NavigationBar from './NavigationBar';
import "./Teams.css"


const Teams = () => {
    return (
        <div>
            <NavigationBar /><hr/>
            <br/>
            <div className="selectionTeams">
                    <button>Members</button>
                    <button>Teams</button>
                    <button>Sports</button>
                    <button>Cultural</button>
            </div>
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


export default Teams
