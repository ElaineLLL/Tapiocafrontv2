import React, { useState } from 'react';
import './Dashboard.css';
import { DataGrid } from '@mui/x-data-grid';
import { getProduct } from './functions.js';
function Storage() {
    const [data, setData] = useState([]);
    // Sample data for recent orders and sales summary (you can replace this with actual data)
    const storages = [
        { id: 1, name: 'milk', amount: 20, price: 5.0 },
        { id: 2, name: 'apple', amount: 35, price: 6.0 },
        // Add more orders as needed
    ];

    //const product = Array.from(getProduct().products);
    getProduct()
        .then(products => {
            // Handle the products once the promise is resolved
            setData(products)
        })
        .catch(error => {
            // Handle errors if the promise is rejected
            console.error('Error:', error);
        });
    console.log(data)

    const columns = [
        { field: 'Name', headerName: 'gredient', width: 150 },
        { field: 'Category', headerName: 'category', width: 150 },
        { field: 'Quantity', headerName: 'remain amount', width: 150 },
    ];

    return (
        <div className="dashboard-container">
            <h2>Storage</h2>
            <div className="dashboard-section">
                <div style={{ width: '100%' }}>
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid rows={data} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Storage;