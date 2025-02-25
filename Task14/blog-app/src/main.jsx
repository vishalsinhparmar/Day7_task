import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './components/Home'
import Aboutpage from './components/Aboutpage'
import Contactpage from './components/Contactpage'
import Bloglist from './components/Blogpost/Bloglist'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Router>
              <Routes>
                   <Route path='/' element = {<Layout/>}>
                      <Route index element={<Homepage/>} /> 
                      <Route path='/home' element={<Homepage/>} /> 
                      <Route path='/about' element={<Aboutpage/>} /> 
                      <Route path='/blog' element={<Bloglist/>} /> 
                      <Route path='/contact' element={<Contactpage/>} />                      
                   </Route>
              </Routes> 
        </Router>
  </StrictMode>,
)
