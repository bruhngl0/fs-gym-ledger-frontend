import React from 'react'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"



import Create from './components/Create'

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element = {<Create />}/>
      </Routes>
    </Router>
  )
}

export default App

