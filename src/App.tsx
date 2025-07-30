import  Navbar  from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  TemperatureConverter  from './pages/Temperatura';
import ConvertWeight from './pages/Peso';
import ConvertDistance from './pages/Distancia';  
import  Home  from './pages/Home';
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
           <Route path="*" element={<Home />} />
          <Route path="/Distancia" element={<ConvertDistance />} />
          <Route path="/Temperatura" element={<TemperatureConverter />} />
          <Route path="/Peso" element={<ConvertWeight />} />
      </Routes>
    </Container>
   
  
   
    </BrowserRouter>
    </>
  )
}

export default App
