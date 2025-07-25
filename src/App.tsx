import  Navbar  from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  TemperatureConverter  from './pages/Temperatura';
import DistanceConverter from './pages/Peso';
import WeightConverter  from './pages/Distancia';
import  Home  from './pages/Home';
import { Container } from "react-bootstrap";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
           <Route path="*" element={<Home />} />
          <Route path="/Distancia" element={<DistanceConverter />} />
          <Route path="/Temperatura" element={<TemperatureConverter />} />
          <Route path="/Peso" element={<WeightConverter />} />
      </Routes>
    </Container>
   
  
   
    </BrowserRouter>
    </>
  )
}

export default App
