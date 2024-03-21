import React from 'react'

const Leftsidebar = () => {
    return (
        <div>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">My Social Media</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Messages</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light">Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Leftsidebar
