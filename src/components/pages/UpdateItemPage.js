import React, { useRef, useEffect } from "react";
import { Navbar } from "../Navbar";



export const UpdateItemPage = ({ setType, updateHandle, setUpdateData, updateMsg, setUpdateMsg, updateID, setUpdateID }) => {

    useEffect(() => {
        setUpdateMsg('');
        setType('');
        setUpdateData('');
        setUpdateID('');
       }, [])


    const inputUpdateID = useRef('');
    const inputChoice = useRef('');
    const newUpdateInput = useRef('');
    let name = inputChoice;


    const getChoice = () => {
        setType(inputChoice.current.value);
    }

    const getUpdateID = () => {

        setUpdateID(inputUpdateID.current.value);

    }

    const updateItem = () => {
        updateHandle(updateID);
    }


    const getNewUpdate = () => {

        setUpdateData(newUpdateInput.current.value);

    }

    return (

        <div>
            <Navbar />
            <div className="title">
                    Update Item
                </div>

            <form id="search-container">
            <label for="search" class="form-label" id="search-label">Enter Item ID to Update</label>
                <div class="input-group mb-3">
                    
                    <input ref={inputUpdateID} type="text" class="form-control" placeholder="Enter Item ID" aria-label="Enter Item ID" aria-describedby="button-addon2" onChange={getUpdateID}></input>
                    

                </div>

                <div className="select">
                        <label for="formGroupExampleInput" class="form-label" id="select-label">Choose What to Update</label>
                        <select ref={inputChoice} name="category" class="form-select" aria-label="Default select example" onChange={getChoice}>

                            <option selected>Choose</option>
                            <option >Quantity</option>
                            <option >Price</option>
                        </select>
                    </div>
                    <label for="search" class="form-label" id="search-label">Enter New Value</label>
                    <div class="input-group mb-3">
                    
                    <input ref={newUpdateInput} type="number" class="form-control" placeholder="Enter new value" aria-label="Enter New Value" aria-describedby="button-addon2" onChange={getNewUpdate}></input>
                    

                </div>
                <button type="button" className="btn btn-primary" onClick={updateItem}>Submit</button>
                {updateMsg && <p className="message">{updateMsg}</p>}
            </form>
        </div>
    )


}