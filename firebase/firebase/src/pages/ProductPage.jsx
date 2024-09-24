import React, { useEffect, useState } from 'react';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../services/firebase';


const ProductPage = () => {
    const [data, setData] = useState([]);

    // Function to fetch data from Firestore
    const getData = async () => {
        try {
            // Reference to the Firestore collection
            const querySnapshot = await getDocs(collection(db, "users")); // Replace "products" with your collection name
            const productData = [];
            querySnapshot.forEach((doc) => {
                productData.push({ id: doc.id, ...doc.data() });
            });
            setData(productData); // Set the fetched data to state
        } catch (error) {
            console.error("Error fetching data from Firestore: ", error);
        }
    };

    useEffect(() => {
        getData(); // Call the function to fetch data on component mount
    }, []);

    return (
        <>
            <h1>Product Page</h1>
            <div style={{ justifyContent: "space-between", display: "flex", flexWrap: "wrap" }}>
                {data.map((el) => (
                    <div style={{ width: "300px" }} key={el.id}>
                        <p>{el.title}</p>
                        <img src={el.image} width={200} alt={el.title} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductPage;
