import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <div>
            <h1>404: Page Not Found</h1>
            <div>
                <Link to="/"> <h4>Go Back To Main &larr;</h4></Link>
            </div>
        </div>
    )
}

export default NotFound