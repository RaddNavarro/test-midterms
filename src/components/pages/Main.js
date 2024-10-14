import React from "react";
import { Navbar } from "../Navbar.js";
import './pagesCSS/Main.css'

export const Main = ({ invData }) => {
    return (
        <>
            <Navbar />

            <div className="title">
                Products
            </div>
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

        </>
    )


}