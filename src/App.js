import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'

const App = () => { 

  return (

    <div className="app">
        <div className="app__body">
            <Sidebar/>
            <Chat/>
            
            {/**/}
            {/**/}
        </div>
    </div>
  )
}

export default App