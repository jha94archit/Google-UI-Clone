import React from 'react'
import './Header.css'
import { IoIosKeypad } from "react-icons/io";
import Avatar from 'react-avatar'

function Header() {
    return (
        <div className="header">
            <div className="header-link">
                <a href="https://www.gmail.com/">Gmail</a>
            </div>
            <div className="header-link">
                <a href="https://www.google.com/imghp?hl=en">Images</a>
            </div>
            <div className="header-icons">
                <IoIosKeypad />
            </div>
            <div className="header-icons">
                <div className="avatar">
                    <Avatar name="John Doe" round={true} size="32" />
                </div>
            </div>
        </div>
    )
}

export default Header
