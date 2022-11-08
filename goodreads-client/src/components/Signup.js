import React from 'react'
import { Link } from 'react-router-dom'

function Signup(){
    return (
        <>
            <h1>Signup</h1>
            <Link to="/Books" className="pr-20 pt-8"> <button className="bg-orange-500 h-16 w-40 rounded-2xl ">Books</button> </Link>
        </>
    )
}
export default Signup