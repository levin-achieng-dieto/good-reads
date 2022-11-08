import React from 'react'
import { Link } from 'react-router-dom'


function NavBar(){
    return (
        <>
            <div className="flex justify-between text-white bg-black h-32 font-bold text-2xl pl-20">
            <h1 className="pt-12 pl-8">GoodReads</h1>
            <div className="flex">
            <Link to="/Login" className="pr-20 pt-8"> <button className="bg-orange-500 h-16 w-40 rounded-2xl ">LOGIN</button> </Link>
            <Link to="/Signup" className="pr-20 pt-8"> <button className="bg-orange-500 h-16 w-40 rounded-2xl ">SIGNUP</button> </Link>
            </div>
        </div>
        </>
    )
}
export default NavBar