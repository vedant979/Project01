import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AllRoutes } from './Routing/AllRoutes';
// import {Navbar} from "./components/Navbar/Navbar"
function App() {

  return (
    <>
      {/* <div> */}
        <Router>
          <AllRoutes/>
        </Router>

      {/* </div> */}
    </>
  )
}

export default App
