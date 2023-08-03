import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ServiceList from './components/ServiceList'
import ServiceDetails from './components/ServiceDetails'
import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ServiceList/>}/>
        <Route path='/:id/details' element={<ServiceDetails/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
