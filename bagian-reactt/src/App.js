import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Add from "./Add";
import Update from "./Update";
import Protected from "./Protected";
import  ProductList  from "./ProductList";
import  Search  from "./SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login />}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/add" element={<Protected Cmp={Add}/> /*<Add/>*/ }/>
          <Route path="/update" element={<Protected Cmp={Update}/> /*<Update/>*/}/>
          <Route path="/" element={<Protected Cmp={ProductList}/> /*<Update/>*/}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
