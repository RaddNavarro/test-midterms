import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './pagesCSS/Welcome.css'


export const Welcome = () => {
    return (
        <>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="welcome-title"> 
            <h1 className="title">Inventory Management SYSTEM</h1>
        
        <br />
        
        </div>
        <div className="mb-2">
        <NavLink to="/main">
        <Button variant="primary" size="lg" className="start-btn">
          Get Started
        </Button>{' '}
        </NavLink>
        </div>
        </>
    )


}