import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navbar.css'


export const Navbar = () => {
    return (
        <nav>
            <Link to="/main" className="title">Inventory Management SYSTEM</Link>
            <ul>
                
                <li><NavLink to="/addPage">Add Item</NavLink></li>
                <li><NavLink to="/updatePage">Update Item</NavLink></li>
                <li><NavLink to="/displayAllPage">Display All</NavLink></li>
                <li><NavLink to="/displayCategoryPage">Display by Category</NavLink></li>
                <li><NavLink to="/displayLowPage">Display Low Stock Items</NavLink></li>
                <li><NavLink to="/searchPage">Search Item</NavLink></li>
                <li><NavLink to="/sortPage">Sort Items</NavLink></li>
                <li><NavLink to="/removePage">Remove Item</NavLink></li>
            </ul>
        </nav>
    )


}