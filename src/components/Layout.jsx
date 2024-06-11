import React from 'react'
import Aside from './Aside'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import Toggle from './Toggle'

export default function Layout() {
  return (
    <div className="min-height-300 position-absolute w-100" style={{ background: 'linear-gradient(90deg, rgba(126,139,238,1) 0%, rgba(134,187,139,1) 100%)' }}>
        <Aside/>
        <main className="main-content position-relative border-radius-lg ">
        <Navbar/>
        <Content/>
        <Footer/>
        </main>
        <Toggle/>
    </div>

  )
}
