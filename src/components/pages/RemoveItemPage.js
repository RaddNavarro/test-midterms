import React, { useRef, useEffect } from "react";
import { Navbar } from "../Navbar";

export const RemoveItemPage = ({ deleteHandler, removeMsg, setRemoveMsg, setRemoveItem, removeItem }) => {

    useEffect(() => {
        setRemoveMsg('');
       }, [])
    
    const inputRemove = useRef('');
    
    const getInput= () => {
        
        setRemoveItem(inputRemove.current.value)
    }

    const getInputRemove = () => {
        
        deleteHandler(removeItem)
    }

    return (

        <div>
            <Navbar />


            <br />

                <div className="title">
                    Remove Item
                </div>

            <form id="search-container">
            <label for="search" class="form-label" id="search-label">Enter Item ID to Remove</label>
                <div class="input-group mb-3">
                    
                    <input ref={inputRemove} type="text" class="form-control" placeholder="Enter Item ID" aria-label="Enter Item ID" aria-describedby="button-addon2" onChange={getInput}></input>
                    <button class="btn btn-primary" type="button" onClick={getInputRemove}>Delete</button>
                    <br />
                    
                </div>
                {removeMsg &&  <p className="message">{removeMsg}</p>}
            </form>
            
        </div>
    )


}