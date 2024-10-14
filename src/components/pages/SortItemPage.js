import React, { useRef, useState } from "react";
import { Navbar } from "../Navbar";



export const SortItemPage = ({ invData, setSortOrderState, setSortState}) => {
    
    const inputSortBy = useRef('');
    const inputSortOrder = useRef('');

    const getSortBy = (event) => {
        setSortState(event.target.value)

    }

    const getSortOrder = (event) => {
        setSortOrderState(event.target.value);

    }

    return (

        <div>
            <Navbar />

     
            <div className="title">
                    Sort items
                </div>
                <form className="select-container" >
                    <div className="select">
                        <label for="formGroupExampleInput" class="form-label" id="select-label">Sort By</label>
                        <select ref={inputSortBy} name="category" class="form-select" aria-label="Default select example" onChange={(e) => getSortBy(e)}>

                            <option selected>Choose Sort</option>
                            <option>Quantity</option>
                            <option>Price</option>
                        </select>
                    </div>
                    <div className="select">
                        <label for="formGroupExampleInput" class="form-label" id="select-label">Order</label>
                        <select ref={inputSortOrder} name="category" class="form-select" aria-label="Default select example" onChange={(e) => getSortOrder(e)} >

                            <option selected>Choose Order</option>
                            <option >Ascending</option>
                            <option >Descending</option>
                        </select>
                    </div>
                </form>
                {invData && invData.length ? (
                    <div className="table-wrapper">


                        <table className="table">
                            <thead className="tbl-head">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    invData.map((invdata, index) => (
                                        <tr className="items">
                                            <td>{invdata.id}</td>
                                            <td>{invdata.name}</td>
                                            <td>{invdata.quantity}</td>
                                            <td>{invdata.price}</td>
                                            <td>{invdata.category}</td>
                                        </tr>


                                    ))



                                }

                            </tbody>
                        </table>







                    </div>
                ) : (<h2>No items...</h2>)}
        </div>
    )


}