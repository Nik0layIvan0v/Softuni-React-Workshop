import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("/home");

  const routes = {
    "/home": <WelcomeWorld />,
    "/all-games": <Catalog />,
    "/create-game": <Create />,
    "/login": <Login />,
    "/register": <Register />,
    "/edit-game": <Edit />,
    "/game-details": <Details />,
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">{routes[page] || <h1>No Page Found!</h1>}</main>
      {/* <Catalog />
      <Create />
      <Details />
      <Edit />
      <Login />
      <Register /> */}
    </div>
  );
}

export default App;
