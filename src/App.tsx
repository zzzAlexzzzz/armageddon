import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";

import "./Libs/App.scss";

function App() {
  return (
    <div className="wraper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
