import React from "react";
import { Navbar } from "../Navbar";
import './pagesCSS/DisplayCategoryPage.css'

export const DisplayCategoryPage = ({ categoryData, filterCategory }) => {


    return (


        <>
            <div>
                <Navbar />
                <br />

                <div className="title">
                    Display Items By Category
                </div>
                <form className="select-container">
                    <div className="select">
                        <label for="formGroupExampleInput" class="form-label" id="select-label">Category</label>
                        <select name="category" class="form-select" aria-label="Default select example" onChange={e => filterCategory(e.target.value)}>

                            <option selected>Choose Category</option>
                            <option>Electronics</option>
                            <option>Clothing</option>
                            <option>Appliances</option>
                        </select>
                    </div>
                </form>
                {categoryData && categoryData.length ? (
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
                                    categoryData.map((invdata, index) => (
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
        </>
    )


}