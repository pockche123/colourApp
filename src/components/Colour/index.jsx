import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './style.css'

const Colour = () => {
    const { colour } = useParams()
    const location = useLocation()
    const value = location.state && location.state.c.value

    const [color, setcolor] = useState('gray')

    useEffect(() => {
        fixColour()

    }, [])

    const fixColour = () => {
        if (colour.toLowerCase().includes('gray') || colour.toLowerCase() === 'black') {
            setcolor('white');
        } else {
            setcolor('gray')
        }
    }


    return (
        <div className="colour" style={{ backgroundColor: value, color: color  }}>
            <h3>{colour.toUpperCase()}/{value}</h3>
        </div>
    )
}

export default Colour