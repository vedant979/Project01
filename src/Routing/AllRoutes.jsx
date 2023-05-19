import {Routes, Route} from "react-router-dom";
import { HomePage } from '../pages/HomePage/HomePage';
import { PageSecond } from "../pages/SecondPage/PageSecond";
export const AllRoutes = () => {
  return (
    <> 
        <Routes>
          <Route path="/"  Component={HomePage}/>
          <Route path="/Details"  Component={PageSecond}/>
        </Routes>
    </>
  )
}
