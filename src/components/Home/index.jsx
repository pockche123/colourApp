import React, { useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate  = useNavigate()

    return (
        <>
            <button onClick={() =>  navigate("/colours")}>
                <h1>Colours</h1>
            </button>
        </>
    )
 
}

export default Home