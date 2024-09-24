import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../services/firebase';


const Addproduct = () => {
    const [formdata, setformdata] = useState({
        image: "",
        title: "",
        category: "",
        price: 0,
        description: ""
    })
    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), formdata);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    const { image, title, category, price, description } = formdata
    return (
        <>
            <h1>Product Add Here...</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="image" value={image} onChange={(e) => handleChange(e)} type="text" placeholder="Image" /><br />
                <input name="title" value={title} onChange={(e) => handleChange(e)} type="text" placeholder="Title" /><br />
                <select name='category' value={category} onChange={(e) => handleChange(e)}>
                    <option value="">Select Your Category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select><br />
                <input name="price" value={price} onChange={(e) => handleChange(e)} type="text" placeholder="Price" /><br />
                <input name="description" value={description} onChange={(e) => handleChange(e)} type="text" placeholder="Description" /><br />
                <input type="submit" />
            </form>

        </>
    )
}

export default Addproduct