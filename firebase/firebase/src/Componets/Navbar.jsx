import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'

const Navbar = () => {
    const handlelogout = () => {
        signOut(auth)
            .then((res) => {
                alert("logout succesfully...")
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-between" }}>
                <li><Link to={"/"} style={{ textDecoration: "none" }}>Home</Link></li>
                <li><Link to={"/login"} style={{ textDecoration: "none" }}>Login</Link></li>
                <li><Link to={"/products"} style={{ textDecoration: "none" }}>Product Page</Link></li>
                <li><Link to={"/addproducts"} style={{ textDecoration: "none" }}>Add Product</Link></li>
                <button onClick={handlelogout}>LogOut</button>
            </ul>
        </>
    )
}

export default Navbar