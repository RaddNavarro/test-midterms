import React from "react";
import { Navbar } from "../Navbar";


export const DisplayLowPage = ({ invData }) => {

    const lowItems = invData.filter(item => item.quantity <= 5);

    return (

        <div>
            <Navbar />

            <div className="title">
                Products
            </div>
            {lowItems && lowItems.length ? (
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
                                lowItems.map((invdata, index) => (
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