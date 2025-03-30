import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Recipe from "./components/Receipe";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/recipe-info/:recipeId" element={<Recipe />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
