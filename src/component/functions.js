import React, { useState } from 'react';

const getCustomer = async () => {
    try {
        const response = await fetch('http://ec2-3-138-189-162.us-east-2.compute.amazonaws.com:8000/customer_async', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getOrder = async () => {
    try {
        const response = await fetch('http://ec2-3-138-189-162.us-east-2.compute.amazonaws.com:8000/order_async', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://ec2-3-138-189-162.us-east-2.compute.amazonaws.com:8000/product_sync', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log(data);
            resolve(Array.from(data.products));
        } catch (error) {
            console.error('Error fetching data:', error);
            reject(error);
        }
    });
};

export { getCustomer, getOrder, getProduct };