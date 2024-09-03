import logo from "./logo.svg";
//link
import "./App.css";
import {Header} from "./components/Header"
import Content from "./components/Content";
import { Products } from "./components/products/Products";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./netflix/NetflixHome";
import { NetflixShows } from "./netflix/NetflixShows";
import { Navbar } from "./Navbar";
import { NetflixMovies } from "./netflix/NetflixMovies";
import { Error404 } from "./Error404";
import { PlayShow } from "./netflix/PlayShow";
import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { FormDemo4 } from "./forms/FormDemo4";
import { FormDemo5 } from "./forms/FormDemo5";
import { FormDemo6 } from "./forms/FormDemo6";
import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { UpdateUser } from "./api/UpdateUser";

function App() {
 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element ={<Content/>}></Route>
        <Route path="/netflix/home" element={<NetflixHome/>}></Route>
        <Route path = "/netflix/shows" element = {<NetflixShows/>}></Route>
        <Route path ="/netflix/movies" element = {<NetflixMovies/>}></Route>
        <Route path = "/netflix/playshow/:id" element = {<PlayShow/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo4/>}></Route>
        <Route path="/formdemo5" element = {<FormDemo6/>}></Route>
        <Route path ="/apidemo1" element = {<ApiDemo1/>}></Route>
        <Route path ="/apidemo2" element = {<ApiDemo2/>}></Route>
        <Route path = "/updateuser/:id"element = {<UpdateUser/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
      {/* <Header></Header> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <Products></Products> */}
      {/* <Content></Content> */}
    </div>
  );
}

export default App;
