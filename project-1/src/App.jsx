import React from 'react'
import Header from './Component/header'
import Sidebar from './Component/sidebar'
import Dashboard from './Component/dashboard'
import './index.css'
import './App.css'
const App = () => {
  return (
    <div>
      <Header/>
      <div className="main-layout">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App