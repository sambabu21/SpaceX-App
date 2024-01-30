import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './Layout/MainLayout.jsx'
import Rocket from './Components/Rocket/index.jsx'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/rockets' element={<Rocket />} />
      </Route> 
    </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
