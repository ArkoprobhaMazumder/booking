
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotels/Hotel";

const App = () => {
  return (
  <BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/lists" element={<List/>}/>
<Route path="/hotels" element={<Hotel/>}/>
</Routes>

  </BrowserRouter>
  )
}

export default App
