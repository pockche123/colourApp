

import './App.css'
import { Routes, Route } from 'react-router-dom'
import * as Components from './components'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Components.Home />} />
        <Route path="/colours" element={<Components.Colours />} />
        <Route path="/colours/:colour" element={<Components.Colour />} />
        <Route path="/colours/new" element={<Components.AddNew />} />
        <Route path="*" element={<Components.NotFound/>}/>
      </Routes>
 
    </>
  )
}

export default App
