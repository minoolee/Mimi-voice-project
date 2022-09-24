
import Cart from "./components/Cart"
import useAlan from "./hooks/useAlan"
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import StartPage from "./components/StartPage"
import Categories from "./components/Categories"
import MalesStore from "./components/MalesStore"
import FemalesStore from "./components/FemalesStore"
function App() {
  useAlan()

  return (
    <>
     <Router>
    <Routes>
    <Route path="/" element={<StartPage/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/males" element={<MalesStore/>}/>
    <Route path="/females" element={<FemalesStore/>}/>
    </Routes>
      </Router>
      <Cart />
    </>
  )
}

export default App
