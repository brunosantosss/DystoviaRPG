// depencies
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// components
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/DystoviaRPG/" element={<Home/>}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
