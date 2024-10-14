import React, { useRef } from "react";
import { Navbar } from "../Navbar";
import './pagesCSS/SearchBar.css'



export const SearchItemPage = ({ invData, query, searchHandler }) => {

    const inputSearch = useRef('');

    const getSearch = () => {
        searchHandler(inputSearch.current.value)
    }

    return (

        <div>
            <Navbar />
            <br />

                <div className="title">
                    Search Item
                </div>

            <form id="search-container">
            <label for="search" class="form-label" id="search-label">Search Item</label>
                <div class="input-group mb-3">
                    
                    <input ref={inputSearch} type="text" class="form-control" placeholder="Enter Item ID" aria-label="Enter Item ID" aria-describedby="button-addon2" value={query.query}></input>
                    <button class="btn btn-primary" type="button" onClick={getSearch}>Submit</button>
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
            ) : (<h2>No items found...</h2>)}
        </div>
    )


}