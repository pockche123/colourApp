import React, { useEffect } from 'react'
import { data } from '../../assets/data'
import './style.css'
import { useNavigate } from 'react-router-dom'


const Colours = () => {
    const navigate = useNavigate()

    useEffect(() => {
        console.log(data)
    })
    return (
        <div>
            <h1>Colours</h1>
            <div onClick={() => navigate('/colours/new')}>
                <button>Add a new colour</button>

            </div>
            <div>
                <h3>All the colours</h3>
            </div>

            <div className="colours">
                {data?.map((c, idx) => (
                    <div key={idx} className="colour-name" onClick={() => navigate(`/colours/${c.name}`, { state: { c } })}>
                        <li key={idx}>{c?.name.toUpperCase()}</li>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Colours