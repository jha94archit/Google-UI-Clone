import React from 'react'
import "./Body.css"
import { BiSearch } from "react-icons/bi";
import Button from '../Button/Button';

function Body() {
    return (
        <div className="body-container">
            <div className="body-img">
                <img src=" https://gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google Logo" />
            </div>
            <div className="input-container">
                <div className="input-icon">
                    <BiSearch />
                </div>
                <div className="input-area">
                    <input type="text" />
                </div>
            </div>
            <div className="button-container">
                <div className="button">
                    <Button text={"Google Search"} />
                </div>
                <div className="button">
                    <Button text={"I'm Feeling Lucky"} />
                </div>
                
            </div>
            <div className="lang-opts">
                <p>Google offered in: English</p>
            </div>
        </div>
    )
}

export default Body
