import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";

function App() {
  const routes = {
    "/home": WelcomeWorld,
    "/all-games": Catalog,
    "/create-game": Create,
    "/login": Login,
    "/register": Register,
  };

  const navigationChangeHandler = (path) => {
    console.log(`navigationChangeHandler: ${path}`);
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content"></main>
      <Catalog />
      <Create />
      <Details />
      <Edit />
      <Login />
      <Register />
    </div>
  );
}

export default App;
