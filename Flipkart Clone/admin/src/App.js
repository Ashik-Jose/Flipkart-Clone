import "./App.css";
import Layout from "./components/Layouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/index.js";
import SignIn from "./containers/SignIn/index.js";
import SignUp from "./containers/SignUp/index.js";
import PrivateRoutes from "./HOC/privateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/auth.action";
import Product from "./containers/Products";
import Order from "./containers/Orders";
import Category from "./containers/Category";

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) dispatch(isUserLoggedIn());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/category" exact element={<Category />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order />} />
          </Route>
          <Route path="/signIn" exact element={<SignIn />} />

          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
