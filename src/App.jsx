import Header from "./components/NavBar.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
      <Footer />
    </BrowserRouter>
  )
}

export default App