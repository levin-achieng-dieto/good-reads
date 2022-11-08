import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Books(){
    return (
        <>
            <Card />
            <h1>Books</h1>
            <h1>are you an author or a publisher?</h1>
            <p>click here to get your books listed above</p>
            <Link to="/AddBooks" className="pr-20 pt-8"> <button className="bg-orange-500 h-16 w-40 rounded-2xl ">AddBooks</button> </Link>
        </>
    )
}
export default Books