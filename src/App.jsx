import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Login from './pages/Login';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Personelwork from './pages/Personelwork';
import Management from './pages/Management';
import WelfareBenefit from './pages/WelfareBenefit';
import Reservation from './pages/Reservation';

export default function App() {

  const [spinners,setSpinners] = useState(true);
  useEffect(()=>{
      setTimeout(()=>{
          setSpinners(false);
      },2000)
  })
  return (
    <>
    {
      spinners ? (
        <div style={{
          backgroundColor: '#000000', 
          color: '#ffffff', 
          fontFamily: 'Arial, sans-serif', 
          display: 'flex',
          flexDirection: 'column', // Ensure items stack vertically on smaller screens
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh', // Ensure the container takes at least the full height of the viewport
          margin: 0, 
      }}>
          <img src='/assets/img/erdi.png' style={{ maxWidth: '100%', height: 'auto' }} /> {/* Ensure the image is responsive */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          </div>
      </div>
      )
      :
      (
      <BrowserRouter basename='/eos'>
      
              <Routes>
              <Route path="/" element={<Dashboard/>}/> 
              <Route path="/sign-in" element={<Login/>}/> 
              <Route path="/info" element={<Info/>}/> 
              <Route path="/personelwork" element={<Personelwork/>}/> 
              <Route path="/management" element={<Management/>}/> 
              <Route path="/welfarebenefit" element={<WelfareBenefit/>}/> 
              <Route path="/reservation" element={<Reservation/>}/> 
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        
      </BrowserRouter>
      )
    }
    </>
  )
}



