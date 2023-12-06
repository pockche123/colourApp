import React, { useState } from 'react'
import { data } from '../../assets/data'
import { useNavigate } from 'react-router-dom'
import './style.css'


const AddNew = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleSubmit = () => {

        if (!name || !value) {
            alert('Some of the info is missing')
        } else {
            data.unshift({ "name": name, "value": value })
            navigate('/colours')
        }

    }

  return (
      <div>
        <h3>Add a new colour</h3>
          <form onSubmit={handleSubmit} id="addForm">
              <div className="addForm-input">
              <label htmlFor="name">Name: </label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="addForm-input">
                <label htmlFor="value">HEX Value: </label>
                <input type="text" id="name" value={value} onChange={(e) => setValue(e.target.value)} />
              </div>
              <input type="submit" value="Add"/>
          </form>
    </div>
  )
}

export default AddNew